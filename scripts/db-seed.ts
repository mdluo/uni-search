import pg from 'pg';

import universities from '../data/universities.json';

const { DB_HOST, DB_PORT, DB_NAME, DB_OWNER, DB_OWNER_PASSWORD } = process.env;
const connectionString = `postgres://${DB_OWNER}:${DB_OWNER_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

function escape(input: string) {
  return input.replaceAll(`'`, `''`);
}

(async () => {
  const pgPool = new pg.Pool({ connectionString });
  pgPool.on('error', (error) => console.log('pgPool error:', error.message));
  await pgPool.query('select true as "Connection test";');
  const client = await pgPool.connect();

  const totalLength = universities.length;
  console.log('Total:', totalLength);

  let insertedCount = 0;

  try {
    for (let i = 0; i < totalLength; i += 100) {
      const batch = universities.slice(i, i + 100);

      try {
        await client.query(
          `INSERT INTO app_public.universities (name, country_iso2, details) VALUES ` +
            batch
              .map(
                (u) =>
                  `('${escape(u.name)}', '${u.alpha_two_code}', '${escape(
                    JSON.stringify(u),
                  )}')`,
              )
              .join(',') +
            ';',
        );
        insertedCount += batch.length;
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        console.error(error.message);
      }
      process.stdout.write('.');
    }
  } finally {
    console.log('\nInserted:', insertedCount);

    await client.release();
  }
  await pgPool.end();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});

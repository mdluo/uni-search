create table app_public.universities (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  country_iso2 varchar(2) not null,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table app_public.universities enable row level security;

create index on app_public.universities(name);
create index on app_public.universities(country_iso2);
create index on app_public.universities(created_at);

create trigger _100_timestamps
  before insert or update on app_public.universities
  for each row
  execute procedure app_private.tg__timestamps();

create policy select_all on app_public.universities for select using (true);

grant select on app_public.universities to :DB_VISITOR;

-- TODO: Optomise the name searching by adding GiST index

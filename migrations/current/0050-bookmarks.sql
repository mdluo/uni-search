create table app_public.bookmarks (
  user_id uuid not null default app_public.current_user_id() references app_public.users on delete cascade,
  university_id uuid not null references app_public.universities on delete cascade,
  primary key (user_id, university_id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table app_public.bookmarks enable row level security;

create index on app_public.bookmarks(user_id);
create index on app_public.bookmarks(university_id);

create trigger _100_timestamps
  before insert or update on app_public.bookmarks
  for each row
  execute procedure app_private.tg__timestamps();

create policy select_own on app_public.bookmarks for select using (user_id = app_public.current_user_id());
create policy insert_own on app_public.bookmarks for insert with check (user_id = app_public.current_user_id());
create policy delete_own on app_public.bookmarks for delete using (user_id = app_public.current_user_id());

grant select on app_public.bookmarks to :DB_VISITOR;
grant insert (university_id) on app_public.bookmarks to :DB_VISITOR;
grant delete on app_public.bookmarks to :DB_VISITOR;

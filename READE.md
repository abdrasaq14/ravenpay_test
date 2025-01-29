npx express-generate --no-view
npx tsc init
knex migrate:make migration_name -x ts
npx knex migrate:make migration_name -x ts --knexfile=src/database/knexfile.ts
npx knex migrate:latest --knexfile=src/database/knexfile.ts --env development


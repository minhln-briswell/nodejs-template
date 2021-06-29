## migrate
- npm run migrate:create fileName
 example: npm run migrate:create UserMigration (Create new migration file UserMigration)
- npm run migrate:up (Run function up in file migration)
- npm run migrate:revert (Run function down in file migration)

## entities
- synchronize: false (Prevent auto-updating database)
## build
npm run build
## start
npm run start

## environment variables
env folder
  - local.env
  - development.env

    | Name                                | Required                  | Value (default) | Purpose                      |
    | ----------------------------------- | ------------------------- | --------------- | ---------------------------- |
    | `PORT`                              | false                     | 3000            | Run server at PORT           |
    | `NODE_ENV`                          | true                      | -               | Environment name             |
    | `TYPEORM_HOST`                      | true                      | -               | HOST database                |
    | `TYPEORM_PORT`                      | true                      | -               | PORT database                |
    | `TYPEORM_USERNAME`                  | true                      | -               | USERNAME login to database   |
    | `TYPEORM_PASSWORD`                  | true                      | -               | PASSWORD login to database   |
    | `TYPEORM_DATABASE`                  | true                      | -               | DATABASE name                |
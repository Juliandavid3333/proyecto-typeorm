const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class InitialMigration1715967695990 {
    name = 'InitialMigration1715967695990'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "age" integer NOT NULL, "state" varchar NOT NULL)`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}

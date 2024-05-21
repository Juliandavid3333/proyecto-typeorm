const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class Migration1716255199673 {
    name = 'Migration1716255199673'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user_detail" ("detail_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "address" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "age" integer NOT NULL, "state" varchar NOT NULL, "detail_id" integer, CONSTRAINT "REL_673613c95633d9058a44041794" UNIQUE ("detail_id"))`);
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "age" integer NOT NULL, "state" varchar NOT NULL, "detail_id" integer, CONSTRAINT "REL_673613c95633d9058a44041794" UNIQUE ("detail_id"), CONSTRAINT "FK_673613c95633d9058a44041794d" FOREIGN KEY ("detail_id") REFERENCES "user_detail" ("detail_id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "firstName", "lastName", "age", "state", "detail_id") SELECT "id", "firstName", "lastName", "age", "state", "detail_id" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "age" integer NOT NULL, "state" varchar NOT NULL, "detail_id" integer, CONSTRAINT "REL_673613c95633d9058a44041794" UNIQUE ("detail_id"))`);
        await queryRunner.query(`INSERT INTO "user"("id", "firstName", "lastName", "age", "state", "detail_id") SELECT "id", "firstName", "lastName", "age", "state", "detail_id" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "user_detail"`);
    }
}

import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRoletableuser1745659212077 implements MigrationInterface {
    name = 'UpdateRoletableuser1745659212077'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "role" character varying NOT NULL DEFAULT 'user'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
    }

}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class init21626210449717 implements MigrationInterface {
  name = 'init21626210449717';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "task" ADD "test1" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "test1"`);
  }
}

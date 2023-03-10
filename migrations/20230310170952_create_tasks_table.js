/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('tasks', (table) => {
		table.uuid('task_id').primary().notNullable();
		table.string('title').notNullable();
		table.text('description');
		table.string('priority').notNullable();
		table.string('status').notNullable();
		table.date('due_date');
		table.boolean('is_repeated').defaultTo(false);
		table.string('repeat_frequency').defaultTo('N/A')
		table.uuid('user_id').references('user_id').inTable('users').onDelete('CASCADE');
		table.uuid('category_id').references('category_id').inTable('categories');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable('tasks');
};
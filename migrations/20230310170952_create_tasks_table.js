/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('tasks', (table) => {
		table.uuid('task_id').primary().notNullable();
		table.string('title').notNullable();
		table.text('description');
		table.enu('priority', ['low', 'medium', 'high']).notNullable();
		table.enu('status', ['incomplete', 'complete']).notNullable();
		table.date('due_date');
		table.boolean('is_repeated').defaultTo(false);
		table.enu('repeat)frequency', ['daily','weekly','monthly'])
		table.uuid('user_id').references('user_id').inTable('users').onDelete('CASCADE');
		table.uuid('category_id').references('category_id').inTable('categories')
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable('tasks');
};
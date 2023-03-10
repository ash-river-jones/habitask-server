/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {
      category_id: '1',
      name: 'Work',
      color: '#F44336'
    },
    {
      category_id: '2',
      name: 'Personal',
      color: '#4CAF50'
    },
    {
      category_id: '3',
      name: 'Family',
      color: '#2196F3'
    }
  ]);
};

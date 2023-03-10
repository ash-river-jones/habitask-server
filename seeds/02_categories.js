/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('categories').del()
  await knex('categories').insert([
    {
      category_id: 'e665c756-19a8-496c-ba95-73beecffe9fd',
      name: 'Work',
      color: '#F44336'
    },
    {
      category_id: '53e4998c-9069-4dd4-ab3a-c8c38e498c8e',
      name: 'Personal',
      color: '#4CAF50'
    },
    {
      category_id: '47da5b5c-283c-40e4-8625-8e8db5d6a27f',
      name: 'Family',
      color: '#2196F3'
    }
  ]);
};

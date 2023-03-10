/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {
      task_id: '65f2103f-9f7f-4402-9dd0-2db03f02c862',
      title: 'Buy groceries',
      description: 'Buy milk, eggs, bread and fruits from store',
      priority: 'high',
      status: 'incomplete',
      due_date: new Date(),
      is_repeated: false,
      repeat_frequency: 'N/A',
      user_id: 'd3472566-c69b-43d5-b103-a16cf08bcee9',
      category_id: '47da5b5c-283c-40e4-8625-8e8db5d6a27f'
    },
    {
      task_id: '00c83134-fa21-4513-84fd-b4955e70af86',
      title: 'Go poop outside',
      description: 'Bark at mum and tell her i need to poop, then go outside to find a stick, play with stick, chase squirels, oohhh, right, i forgot, i have to poop',
      priority: 'high',
      status: 'incomplete',
      due_date: new Date(),
      is_repeated: true,
      repeat_frequency: 'daily',
      user_id: '737ed4d4-f5de-4bcf-b949-c28ca1ecfa02',
      category_id: '53e4998c-9069-4dd4-ab3a-c8c38e498c8e'
    },
    {
      task_id: '2299b9c0-2a1d-4e05-92c2-a746166d01f4',
      title: 'Study school',
      description: 'Study, study, study, study',
      priority: 'medium',
      status: 'incomplete',
      due_date: new Date(),
      is_repeated: true,
      repeat_frequency: 'weekly',
      user_id: '2767eecf-fe78-4d37-b4c2-c3d431e8ec7a',
      category_id: '53e4998c-9069-4dd4-ab3a-c8c38e498c8e'
    },
    {
      task_id: '1de9966d-02df-4359-a617-869c8fa66e2b',
      title: 'Transit home',
      description: 'Go home after work',
      priority: 'low',
      status: 'complete',
      due_date: new Date(),
      is_repeated: true,
      repeat_frequency: 'daily',
      user_id: 'd3472566-c69b-43d5-b103-a16cf08bcee9',
      category_id: '53e4998c-9069-4dd4-ab3a-c8c38e498c8e'
    },
    {
      task_id: '9d34add3-b171-426a-8c2a-8224e9af35f4',
      title: 'Clean the house',
      description: 'Vaccum the floor, clean the kitchen, do the dishes, make the bed',
      priority: 'low',
      status: 'incomplete',
      due_date: new Date(),
      is_repeated: true,
      repeat_frequency: 'weekly',
      user_id: '2767eecf-fe78-4d37-b4c2-c3d431e8ec7a',
      category_id: '53e4998c-9069-4dd4-ab3a-c8c38e498c8e'
    }
  ]);
};

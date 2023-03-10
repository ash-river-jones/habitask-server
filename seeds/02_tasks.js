/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {
      task_id: 1,
      title: 'Buy groceries',
      description: 'Buy milk, eggs, bread and fruits from store',
      priority: 'high',
      status: 'incomplete',
      due_date: new Date(),
      is_repeated: false,
      repeat_frequency: '',
      user_id: '1',
      category_id: '3'
    },
    {
      task_id: 2,
      title: 'Go poop outside',
      description: 'Bark at mum and tell her i need to poop, then go outside to find a stick, play with stick, chase squirels, oohhh, right, i forgot, i have to poop',
      priority: 'high',
      status: 'incomplete',
      due_date: new Date(),
      is_repeated: true,
      repeat_frequency: 'daily',
      user_id: '3',
      category_id: '2'
    },
    {
      task_id: 3,
      title: 'Study school',
      description: 'Study, study, study, study',
      priority: 'medium',
      status: 'incomplete',
      due_date: new Date(),
      is_repeated: true,
      repeat_frequency: 'weekly',
      user_id: '2',
      category_id: '2'
    },
    {
      task_id: 4,
      title: 'Transit home',
      description: 'Go home after work',
      priority: 'low',
      status: 'complete',
      due_date: new Date(),
      is_repeated: true,
      repeat_frequency: 'daily',
      user_id: '1',
      category_id: '2'
    },
    {
      task_id: 5,
      title: 'Clean the house',
      description: 'Vaccum the floor, clean the kitchen, do the dishes, make the bed',
      priority: 'low',
      status: 'incomplete',
      due_date: new Date(),
      is_repeated: true,
      repeat_frequency: 'weekly',
      user_id: '3',
      category_id: '2'
    }
  ]);
};

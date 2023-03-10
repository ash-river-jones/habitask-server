/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('table_name').del();
	await knex('table_name').insert([
		{ 
      user_id: 1, 
      user_name: 'Ash Jones',
      email: 'ash.river.jones@outlook.com',
      hashedpassword: 'hashedpassword1'
    },
		{ 
      user_id: 2, 
      user_name: 'Amanda Chelsea',
      email: 'achelseamiller@hotmail.com',
      hashedpassword: 'hashedpassword2'
    },
		{
      user_id: 3, 
      user_name: 'Cedar',
      email: 'cedar@woof.com',
      hashedpassword: 'hashedpassword3'    
    },
	]);
};

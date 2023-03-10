/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('users').del();
	await knex('users').insert([
		{ 
      user_id: 'd3472566-c69b-43d5-b103-a16cf08bcee9', 
      user_name: 'Ash Jones',
      email: 'ash.river.jones@outlook.com',
      hashedpassword: 'hashedpassword1'
    },
		{ 
      user_id: '2767eecf-fe78-4d37-b4c2-c3d431e8ec7a', 
      user_name: 'Amanda Chelsea',
      email: 'achelseamiller@hotmail.com',
      hashedpassword: 'hashedpassword2'
    },
		{
      user_id: '737ed4d4-f5de-4bcf-b949-c28ca1ecfa02', 
      user_name: 'Cedar',
      email: 'cedar@woof.com',
      hashedpassword: 'hashedpassword3'    
    },
	]);
};

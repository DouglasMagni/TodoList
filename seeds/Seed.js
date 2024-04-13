/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("toDo").del();
  await knex("toDo").insert([
    {
      id: 1,
      text: "Create feature",
      category: "Work",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Go to the Gym",
      category: "Personal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Code",
      category: "Study",
      isCompleted: false,
    },
  ]);
}

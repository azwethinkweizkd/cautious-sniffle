import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";
import { addTodo, removeTodo } from "$lib/server/database";

type Data = {
  success: boolean;
  errors: Record<string, string>;
};

export const POST: RequestHandler = async ({ request }) => {
  const formData = await request.formData();
  const todo = String(formData.get("todo"));

  const data: Data = {
    success: false,
    errors: {},
  };

  if (!todo) {
    data.errors.todo = "Please enter a todo";
    return json(data, { status: 400 });
  }

  addTodo(todo);
  data.success = true;
  return json(data);
};

export const DELETE: RequestHandler = async ({ request }) => {
  const formData = await request.formData();
  const todoId = Number(formData.get("id"));

  const data: Data = {
    success: false,
    errors: {},
  };

  if (!todoId) {
    data.errors.id = "Please enter an id";
    return json(data, { status: 400 });
  }

  removeTodo(todoId);
  return json({ success: true });
};

const HOST = process.env.APP_HOST || 'http://localhost:8080';

export const getAllTodo = async () => {
  try {
    const response = await fetch(`${HOST}/api/v1/todos`);
    if (!response.ok) {
      throw new Error('Sorry somethig goes wrong');
    }

    return await response.json();
  } catch (err) {
    console.error(err.message);
  }
};

export const addTodo = async (todo) => {
  const rowResponse = fetch(`${HOST}/api/v1/todos`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(todo)
  });

  return rowResponse;
};

export const removeTodo = async (id) => {
  const response = await fetch(`${HOST}/api/v1/todos/${id}`, {
    method: 'DELETE'
  });
  return response;
};

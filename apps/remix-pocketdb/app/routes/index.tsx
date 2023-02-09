import { json } from '@remix-run/node';
import { getTasks } from '~/models/task.server';
import { TaskResponse } from '~/models/pocketbase-types';
import { Link, useLoaderData } from '@remix-run/react';

export async function loader() {
  const tasks = await getTasks();
  return json(tasks);
}

export default function Index() {
  const { data, user, userModel } = useLoaderData<typeof loader>();

  // console.log('data: ', data);
  // console.log('userData: ', user);
  // console.log('userModel: ', userModel);

  const { items, totalItems } = data as { items: TaskResponse[]; totalItems: number };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>List of tasks</h1>
      <div>total tasks: {totalItems}</div>
      <ul>
        {items.map(({ title, status }, index) => (
          <li key={index}>
            {title} - {status}
          </li>
        ))}
      </ul>
    </div>
  );
}

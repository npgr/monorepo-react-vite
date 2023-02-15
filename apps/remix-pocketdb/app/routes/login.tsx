import { json } from '@remix-run/node';
import { login, logout, isLogin } from '~/models/user.server';
import { TaskResponse } from '~/models/pocketbase-types';
import { Form, Link, useActionData, useLoaderData } from '@remix-run/react';

export async function action() {
  const user = await login();
  console.log('user: ', user);
  return json(user);
  // logout();
  // return {};
}

export async function loader() {
  const isUserLogin = await isLogin();
  return json({ isLogin: isUserLogin });
}

export default function LoginPage() {
  const { isLogin } = useLoaderData<typeof loader>();
  const backup = () => 'x';

  return (
    <Form method="post">
      <div style={{ padding: '20px' }}>{isLogin ? 'User Log in' : 'User Log Out'}</div>
      <button type="submit">Login</button>
    </Form>
  );
}

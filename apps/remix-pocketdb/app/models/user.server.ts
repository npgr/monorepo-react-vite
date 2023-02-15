import PocketBase from 'pocketbase';

export const pb = new PocketBase(process.env.POCKETBASE_URL);
// pb.collection('users').authWithPassword(
//   process.env.POCKETBASE_USER as string,
//   process.env.POCKETBASE_PWD as string
// );

export async function login() {
  console.log('login');
  const userData = await pb
    .collection('users')
    .authWithPassword(process.env.POCKETBASE_USER as string, process.env.POCKETBASE_PWD as string);

  return { user: userData, userModel: pb.authStore.model };
}

export async function logout() {
  console.log('logout');
  pb.authStore.clear();
}

export async function isLogin() {
  const isLogin = pb.authStore.isValid;

  console.log('is login: ', isLogin);
  return isLogin;
}

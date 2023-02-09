import PocketBase from 'pocketbase';
import { TaskResponse } from './pocketbase-types';

const pb = new PocketBase(process.env.POCKETBASE_URL);

export async function getTasks() {
  // pb.authStore.isValid -> is logged in

  const userData = await pb
    .collection('users')
    .authWithPassword(process.env.POCKETBASE_USER as string, process.env.POCKETBASE_PWD as string);

  // const adminData = await pb.admins.authWithPassword('ngocalves@gmail.com', 'pocket1234');

  const resultList = await pb.collection('task').getList<TaskResponse>(1, 50);

  return { data: resultList, user: userData, userModel: pb.authStore.model };
}

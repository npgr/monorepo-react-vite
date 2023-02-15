import { pb } from './user.server';
import { TaskResponse } from './pocketbase-types';

export async function getTasks() {
  const userData = await pb
    .collection('users')
    .authWithPassword(process.env.POCKETBASE_USER as string, process.env.POCKETBASE_PWD as string);

  const resultList = await pb
    .collection('task')
    .getList<TaskResponse>(1, 50, {
      filter: 'status = "active" && created > "2022-08-01 10:00:00"',
    });
  // pb.collection(collectionIdOrName).getFullList(batch = 200, queryParams = {});

  return { data: resultList, userModel: pb.authStore.model };
}

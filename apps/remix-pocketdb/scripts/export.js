const PocketBase = require('pocketbase/cjs');
require('cross-fetch/polyfill');
require('dotenv').config();
const fs = require('fs').promises;

const pb = new PocketBase(process.env.POCKETBASE_URL);

async function main() {
  async function getTasks() {
    const userData = await pb
      .collection('users')
      .authWithPassword(process.env.POCKETBASE_USER, process.env.POCKETBASE_PWD);

    const tasks = await pb.collection('task').getList(1, 50);
    const users = await pb.collection('users').getList(1, 50);

    await fs.writeFile('./scripts/tasks.json', JSON.stringify(tasks.items, null, 2));
    await fs.writeFile('./scripts/users.json', JSON.stringify(users.items, null, 2));
    await fs.writeFile('./scripts/cwd.json', process.cwd()); // default .env location
  }

  await getTasks();
}

main();

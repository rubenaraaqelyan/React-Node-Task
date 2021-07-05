import * as Models from '../models';

async function main() {
  const models = [
    Models.Users,
    Models.Table,
  ];
  for (const i in models) {
    console.log('--->', i);
    await models[i].sync({ alter: true });
  }
  process.exit();
}

main();

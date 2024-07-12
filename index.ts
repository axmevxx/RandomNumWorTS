import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function start() {
  rl.question("Сколько элементов вы хотите выбрать? ", (num) => {
    const numItems = parseInt(num);

    rl.question("Введите элементы списка через запятую: ", (items) => {
      const itemList = items.split(",");
      const selectedItems = [];

      for (let i = 0; i < numItems; i++) {
        const randomIndex = Math.floor(Math.random() * itemList.length);
        selectedItems.push(itemList[randomIndex]);
        itemList.splice(randomIndex, 1);
      }

      console.log(`Выбранные элементы: ${selectedItems.join(", ")}`);

      rl.question("Хотите ли вы выбрать еще что-то? (да/нет) ", (answer) => {
        if (answer.toLowerCase() === "да") {
          start();
        } else {
          rl.close();
        }
      });
    });
  });
}

start();

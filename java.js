function gameLoop() {
  console.log("Игровой цикл выполняется");
}
function gameLoop() {
    console.log("Игровой цикл обновляется");
    requestAnimationFrame(gameLoop);
}

gameLoop(); // Запуск цикла игры

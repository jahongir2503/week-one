const choiceForPlay = ["Камень", "Ножницы", "Бумага"];


const playerSelection: string[] = [];
const computerSelection: string[] = [];


function validatePlayerChoice(choice: string): void {
    if (!choiceForPlay.includes(choice)) {
        console.log(`Ошибка: "${choice}" не является допустимым выбором. Выберите: Камень", "Ножницы" или "Бумага `);
        return;
    }
    playerSelection.push(choice);
    console.log(`Так ты выбрал: ${choice}`);
}


function generateComputerChoice(): void {
    const randomChoice = Math.floor(Math.random() * choiceForPlay.length);
    const choice = choiceForPlay[randomChoice];
    computerSelection.push(choice);
    console.log(`Выбор Машины упал на: ${choice}`);
}


function winner(): void {
    const playerChoice = playerSelection[0];
    const computerChoice = computerSelection[0];

    if (playerChoice === computerChoice) {
        console.log('Ничья!');
        return;
    }

    if (
        (playerChoice === "Камень" && computerChoice === "Ножницы") ||
        (playerChoice === "Ножницы" && computerChoice === "Бумага") ||
        (playerChoice === "Бумага" && computerChoice === "Камень")
    ) {
        console.log('Вы победили!');
    } else {
        console.log('Машины победили...');
    }
}


validatePlayerChoice("Нож");
generateComputerChoice();
winner();

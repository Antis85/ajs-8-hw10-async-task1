import GameSavingLoader from './gamesavingloader';

GameSavingLoader.load().then((saveData) => {
  console.log(saveData);// saving объект класса GameSaving
}, (error) => {
  console.error(error);
});

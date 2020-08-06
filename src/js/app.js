import read from './read';
import json from './json';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      const data = read();
      data
        .then((response) => {
          const value = json(response);
          return value;
        })
        .then((value) => {
          resolve(JSON.parse(value));
        });
    });
  }
}

import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';
import Character from '../character';

test('Создание персонажа Bowman', () => {
  const received = new Bowman('legolas');
  const expected = {
    name: 'legolas',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Создание персонажа Daemon', () => {
  const received = new Daemon('Lucifer');
  const expected = {
    name: 'Lucifer',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Создание персонажа Magician', () => {
  const received = new Magician('Merlin');
  const expected = {
    name: 'Merlin',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Создание персонажа Swordsman', () => {
  const received = new Swordsman('Sedrik');
  const expected = {
    name: 'Sedrik',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Создание персонажа Undead', () => {
  const received = new Undead('Drakula');
  const expected = {
    name: 'Drakula',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Создание персонажа Zombie', () => {
  const received = new Zombie('Frank');
  const expected = {
    name: 'Frank',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('проверка выдаваемой ошибки на некорректное имя персонажа', () => {
  expect(() => {
    new Character('а', 'Magician');
  }).toThrow();
});

test('проверка выдаваемой ошибки на некорректный тип персонажа', () => {
  expect(() => {
    new Character('Frank', 'Mag');
  }).toThrow();
});

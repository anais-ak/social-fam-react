import { faker } from "@faker-js/faker";

const getPerson = () => {
  return {
    id: faker.datatype.number(),
    name: faker.name.firstName(),
  };
};

const getFamily = (listSize: number) => {
  return Array.from({ length: listSize }, getPerson);
};

export function getAllPersons(listSize: number) {
  return getFamily(listSize);
}

export function getPersonById(id: number) {
  return getFamily(5).find((person) => person.id === id) || null;
}

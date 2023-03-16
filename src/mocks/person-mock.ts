import { faker } from "@faker-js/faker";
import { getAllPosts } from "@/mocks/post-mock";
import { IPerson } from "@/types/person";

const getPerson = (id?: number): IPerson => {
  return {
    id: id || faker.datatype.number(),
    name: faker.name.firstName(),
    posts: getAllPosts(5),
  };
};

const getFamily = (listSize: number): IPerson[] => {
  return Array.from({ length: listSize }, getPerson);
};

export function getAllPersons(listSize: number): IPerson[] {
  return getFamily(listSize);
}

export function getPersonById(id: number): IPerson {
  return getPerson(id);
}

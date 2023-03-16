import { faker } from "@faker-js/faker";
import { IPost } from "@/types/post";

const images: string[] = [
  "images/stephen.jpg",
  "images/feey.jpg",
  "images/dogs.jpg",
];

const getPost = (): IPost => {
  return {
    id: faker.datatype.number(),
    title: faker.lorem.sentence(5),
    description: faker.lorem.paragraph(),
    date: faker.date.past().toString(),
    image: faker.helpers.arrayElement(images),
    isFeatured: true, //faker.datatype.boolean(),
  };
};

const getPostList = (listSize: number): IPost[] => {
  return Array.from({ length: listSize }, getPost);
};

export function getFeaturedPosts(listSize: number): IPost[] {
  return getPostList(listSize).filter((post) => post.isFeatured);
}

export function getAllPosts(listSize: number): IPost[] {
  return getPostList(listSize);
}

// export function getFilteredPosts(dateFilter: string) {
//   const { year, month } = dateFilter;

//   let filteredPosts = getPostList(5).filter((post) => {
//     const postDate = new Date(post.date);
//     return postDate.getFullYear() === year && postDate.getMonth() === month - 1;
//   });

//   return filteredPosts;
// }

export function getPostById(id: number) {
  return getPostList(5).find((post) => post.id === id) || null;
}

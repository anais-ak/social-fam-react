import { faker } from "@faker-js/faker";
import { Post } from "@/types/post";

const images: string[] = [
  "images/stephen.jpg",
  "images/feey.jpg",
  "images/dogs.jpg",
];

const getPost = (): Post => {
  return {
    id: faker.datatype.number(),
    title: faker.lorem.sentence(5),
    description: faker.lorem.paragraph(),
    date: faker.date.past().toString(),
    image: faker.helpers.arrayElement(images),
    isFeatured: faker.datatype.boolean(),
  };
};

const getPostList = (listSize: number): Post[] => {
  return Array.from({ length: listSize }, getPost);
};

export function getFeaturedPosts(listSize: number): Post[] {
  return getPostList(listSize).filter((post) => post.isFeatured);
}

export function getAllPosts(listSize: number): Post[] {
  return getPostList(listSize);
}

// export function getFilteredPosts(dateFilter: string): Post[] {
//   const { year, month } = dateFilter;

//   let filteredPosts = getPostList(5).filter((post) => {
//     const postDate = new Date(post.date);
//     return postDate.getFullYear() === year && postDate.getMonth() === month - 1;
//   });

//   return filteredPosts;
// }

export function getPostById(id: number): Post | null {
  return getPostList(5).find((post) => post.id === id) || null;
}

import axios from 'axios';

axios.defaults.baseURL = 'https://6463f2bb043c103502afb752.mockapi.io';

export async function getUsers() {
  const response = await axios('users');
  return response.data;
}

export async function patchAddFollowers(user) {
  const response = await axios.put(`users/${user.id}`, {
    name: user.name,
    avatar: user.avatar,
    followers: user.followers + 1,
    tweets: user.tweets,
  });
  return response.data;
}

export async function patchRemoveFollowers(user) {
  const response = await axios.put(`users/${user.id}`, {
    name: user.name,
    avatar: user.avatar,
    followers: user.followers - 1,
    tweets: user.tweets,
  });
  return response.data;
}
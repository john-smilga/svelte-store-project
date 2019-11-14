import { writable } from "svelte/store";

const userStore = writable(getStorageUser());

function getStorageUser() {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username: null, jwt: null };
}

export function setStorageUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function setUser(user) {
  userStore.set(user);
}

export function logoutUser() {
  localStorage.clear();
  userStore.set({ user: null, jwt: null });
}

export default userStore;

const API_URL = "http://localhost:5000/api";

// common request function
const request = async (url: string, options?: RequestInit) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    ...options,
  });

  if (!res.ok) throw new Error("API Error");

  return res.json();
};

// AUTH
export const registerUser = (data: any) =>
  request("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const loginUser = (data: any) =>
  request("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });

// POSTS
export const getPosts = () => request("/posts");

export const createPost = (data: any) =>
  request("/posts", {
    method: "POST",
    body: JSON.stringify(data),
  });
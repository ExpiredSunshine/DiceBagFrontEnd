const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const checkResponse = response => {
  if (response.ok) {
    return response.json();
  }
  return response.json().then(err => {
    throw new Error(err.message || 'Something went wrong');
  });
};

export const signUp = userData => {
  return fetch(`${API_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  }).then(checkResponse);
};

export const signIn = credentials => {
  return fetch(`${API_BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then(checkResponse);
};

export const getCurrentUser = token => {
  return fetch(`${API_BASE_URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const updateUserProfile = (userData, token) => {
  return fetch(`${API_BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  }).then(checkResponse);
};

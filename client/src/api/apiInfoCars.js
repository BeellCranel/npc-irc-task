const BASE_URL = "http://localhost:5000/api";

export const getCarsInfo = async () => {
  let result = await fetch(`${BASE_URL}/info-cars`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await result.json();
};

export const postCarInfo = async (data) => {
  let result = await fetch(`${BASE_URL}/info-cars`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
    }),
  });
  return await result.json();
};

export const editCarInfo = async (id, data) => {
  let result = await fetch(`${BASE_URL}/info-cars/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
    }),
  });
  return await result.json();
};

export const deleteCarInfo = async (id) => {
  let result = await fetch(`${BASE_URL}/info-cars/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await result.json();
};

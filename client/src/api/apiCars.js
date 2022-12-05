const BASE_URL = "http://localhost:5000/api";

export const getCars = async () => {
  let result = await fetch(`${BASE_URL}/cars`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await result.json();
};

export const postCar = async (data) => {
  let result = await fetch(`${BASE_URL}/cars`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.postName,
      price: data.postPrice,
      type: data.postType,
      brand: data.postBrand,
      buildDate: data.postBuildDate,
    }),
  });
  return await result.json();
};

export const editCar = async (id, data) => {
  let result = await fetch(`${BASE_URL}/cars/${id}`, {
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

export const deleteCar = async (id) => {
  let result = await fetch(`${BASE_URL}/cars/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await result.json();
};

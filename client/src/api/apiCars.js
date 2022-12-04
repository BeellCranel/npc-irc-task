const BASE_URL = "http://localhost:5000/api/";

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
      name: data.name,
      price: data.price,
      type: data.type,
      brand: data.brand,
      buildDate: data.buildDate,
    }),
  });
  return await result.json();
};

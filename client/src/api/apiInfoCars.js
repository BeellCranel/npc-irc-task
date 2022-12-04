const BASE_URL = "http://localhost:5000/api/";

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
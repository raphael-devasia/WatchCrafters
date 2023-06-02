export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CAD",
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let uniqueData = data.map((item) => item[type]);
  

  if (type === "colors") {
    uniqueData = uniqueData.flat();
  }
  return ["all", ...new Set(uniqueData)];
};

const getRandomIt = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

export { getRandomIt as default };

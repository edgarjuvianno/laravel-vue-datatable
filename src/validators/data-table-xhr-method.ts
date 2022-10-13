export default (value) => {
  return ["GET", "POST"].indexOf(value) !== -1;
};

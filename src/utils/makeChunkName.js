function capitalizeFirstLetter(str) {
  try {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } catch {
    console.log(str);
  }
}
// names for chunks generator, just for readability
const generators = {
  experiment: (id, kind, type) => {
    if (typeof id !== "string") return;
    return type === "apex"
      ? id.split("-").slice(2).map(capitalizeFirstLetter).join("") +
          capitalizeFirstLetter(kind) +
          "ApexExperiment"
      : id.split("_").slice(1).map(capitalizeFirstLetter).join("") +
          capitalizeFirstLetter(kind) +
          "Experiment";
  },
};
export { generators, capitalizeFirstLetter };

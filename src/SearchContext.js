import React from "react";

const SearchContext = React.createContext({
  Location: "Seattle, WA",
  animal: "",
  breed: "",
  breeds: [],
  HandleAnimalChange() {},
  HandleBreedChange() {},
  HandleLocationChange() {},
  getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;

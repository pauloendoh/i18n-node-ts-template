import { Dictionary } from "../Dictionary";

export const english: Dictionary = {
  getHello: (name: string) => "Hello, " + name,
  errors: {
    notFound: "Not found",
  },
};

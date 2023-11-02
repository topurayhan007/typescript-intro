// Reference Type --> Object

const user: {
  // company: string;
  // company: "Programming Hero"; // type --> literal types
  readonly company: string; // access modified --> readonly
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  // company: "Unemployed",
  company: "Programming Hero",
  firstName: "Topu",
  middleName: "Rayhan Rabby",
  lastName: "Mamud",
  isMarried: false,
};

// user.company = "PH";
user.isMarried = true; // hypothesis

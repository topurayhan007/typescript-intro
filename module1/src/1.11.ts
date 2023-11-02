{
  //

  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 15;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log(isAdult);

  // nullish coalescing operator
  // null / undefined ---> decision making
  // const isAuthenticated = null;
  const isAuthenticated = undefined;

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentaddress: string;
      permanentaddress?: string;
    };
  };

  const user: User = {
    name: "Persian",
    address: {
      city: "ctg",
      road: "Awessome Road",
      presentaddress: "ctg town",
    },
  };

  const permanentaddress =
    user?.address?.permanentaddress ?? "No permanent address";
  console.log({ permanentaddress });

  //
}

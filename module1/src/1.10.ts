{
  //
  // union types

  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";

  type Developer = FrontendDeveloper | FullstackDeveloper;

  const newDeveloper: FrontendDeveloper = "fakibazDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "AB+";
  };

  const user1: User = {
    name: "persian",
    gender: "male",
    bloodGroup: "O+",
  };

  // intersection type

  type FrontendDeveloperr = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloperr = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloperr = FrontendDeveloperr & BackendDeveloperr;

  const fullstackDeveloper: FullstackDeveloperr = {
    skills: ["HTML", "CSS", "Express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //
}

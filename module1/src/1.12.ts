{
  // nullable types / unknown types

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching...");
    } else {
      console.log("There is nothing to search");
    }
  };

  searchName(null);

  // unknown typeof

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} m/s`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      console.log(result);
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} m/s`);
    } else {
      console.log("wrong input");
    }
  };

  getSpeedInMeterPerSecond(`1000 km/h`);

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("mushkil se error hogaya");

  //
}

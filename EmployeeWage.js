console.log("Welcome to EE Wage Computation Program");
const EE_WAGE_DETAILS = {
  WAGE_PER_HOUR: 20,
  FULL_TIME_HOURS: 8,
  PART_TIME_HOURS: 4,
};
Object.freeze = EE_WAGE_DETAILS;

let getRandom = Math.floor(Math.random() * 3);

let getWorkHours = () => {
    switch (getRandom) {
      case 1:
        return EE_WAGE_DETAILS.FULL_TIME_HOURS;
      case 2:
        return EE_WAGE_DETAILS.PART_TIME_HOURS;
      default:
        return 0;
    }
};
let computeEEWage = EE_WAGE_DETAILS.WAGE_PER_HOUR * getWorkHours();
console.log(computeEEWage);
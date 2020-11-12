console.log("Welcome to EE Wage Computation Program");
let getRandom = Math.floor(Math.random() * 2);
let isEEPresent = () => getRandom === 1;
        const EE_WAGE_DETAILS = {
        wagePerHour: 20,
        hoursPerDay: 8,
      };
      Object.freeze = EE_WAGE_DETAILS;
      
      let computeEEWage = () =>
        isEEPresent() ? EE_WAGE_DETAILS.wagePerHour * EE_WAGE_DETAILS.hoursPerDay : 0;
        //console.log("End Of EE Wage Computation Program");
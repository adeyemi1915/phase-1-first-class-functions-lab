// Code your solution in this file!
// returnFirstTwoDrivers()
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2); // Return the first two drivers
  }
  
  // returnLastTwoDrivers()
  const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2); // Return the last two drivers
  }
  
  // selectingDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier()
  const createFareMultiplier = (multiplier) => {
    return (fare) => {
      return fare * multiplier; // Multiply the fare by the multiplier
    }
  }
  
  // fareDoubler()
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler()
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers()
  const selectDifferentDrivers = (drivers, driverSelector) => {
    return driverSelector(drivers); // Call the driverSelector function with the drivers array
  }
  
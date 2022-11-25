const drivers = ['rose', 'peter', 'sam', 'jason']
const returnFirstTwoDrivers = (drivers) => {
  const newArray = drivers.slice(0, 2);
  return (newArray);
}
const returnLastTwoDrivers = (drivers) => {
  const last = drivers.slice(-2);
  return (last);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (ran) => 
{
  return () => ran * 5
}
const fareDoubler = (dis) => {
  return dis * 2;

}
const fareTripler = (far) => {
  return far * 3;
}
const selectDifferentDrivers = (drivers, ile) => {
  return ile(drivers);
}
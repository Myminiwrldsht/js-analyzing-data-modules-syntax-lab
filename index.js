require('datejs')
function combineUsers(...args) {
  const combinedObject = {
    users: []
  } 
const today = new Date();
 combinedObject.merge_date = today.toString('M/d/yyyy');

  for(const innerArray of args) {
    combinedObject.users.push(...innerArray);
  
  }
console.log(today.toString('M/d/yyyy'))
return combinedObject;

}
console.log(combineUsers(["Maya", "Leo"], ["Lakeisha","Mugambi"]))





module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

module.exports.getDate = getDate;

function getDate(){
  let today = new Date();


//we have our options object first
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);
  return day;
}

module.exports.getDay = getDay;

function getDay(){
  let today = new Date();


//we have our options object first
  let options = {
    
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);
  return day;
}

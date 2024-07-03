let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
  let InfoMap = new Map(Object.entries(myInfo));
console.log(InfoMap);
console.log(InfoMap.size);
console.log(InfoMap.has('Role'));
console.log("---------------------------------------");
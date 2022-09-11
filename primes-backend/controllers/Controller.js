// Controller.js

// get primes in range of given value
const findPrimes = (num = 10) => {
   const numArr = new Array(num + 1);
   numArr.fill(true);
   numArr[0] = numArr[1] = false;
   for (let i = 2; i <= Math.sqrt(num); i++) {
       for (let j = 2; i * j <= num; j++){
           numArr[i * j] = false;
      }
   }
   return numArr.reduce((acc, val, ind) => {
      if(val){
         return acc.concat(ind);
      }else{
         return acc;
      };
   },[]);
};

// Handle index actions
exports.index = function (req, res) {
   const primes = findPrimes(req.body.range);
   let medium = '';
   if (primes.length % 2 === 0) {
      medium = primes[primes.length / 2 - 1] + ', ' + primes[primes.length / 2];
   } else {
      medium = primes[Math.floor(primes.length / 2)];
   }
   let ret = primes[0];
   for (let i = 1; i < primes.length; i++) {
      ret += ', ' + primes[i];
   }
   res.json({
      status: "success",
      message: "Primes retrieved successfully",
      data: {primes: ret, medium: medium}
   });
};

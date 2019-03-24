module.exports = function getZerosCount(number, base) {
  let multipliers={};  
  let i=2;                        
  while(i<base ){
     while(base%i==0 && base!=i){
      base=base/i;
       if(!multipliers[i]){multipliers[i]=1;}
       else{multipliers[i]++;}
     }
  i++;
  }
 if(multipliers[base]){multipliers[base]++;}
 if(!multipliers[base]){multipliers[base]=1;}


  let numZeros=0;
  let minNumZeros=Number.MAX_VALUE;
      for(let key in multipliers){
      base=key;
      let rememberBase=base;

      while(base<number){
      numZeros+=Math.floor(number/base);
      base=base*rememberBase;
      }

      numZeros=Math.floor(numZeros/multipliers[key]);

      if(numZeros<minNumZeros){minNumZeros=numZeros;}
      numZeros=0;
  }

return minNumZeros;
}
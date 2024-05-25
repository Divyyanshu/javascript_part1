for(let i = 1; i < 10 ; i++){
  console.log(`outer loop i`)
  for(let j = 1; j < 10 ; j++){
    // console.log(`inner loop ${j} and outer loop ${i}`);
    // console.log(i + "*" + j + '='  + i*j)
    for(let k = 1; k < 10 ; k++){
        console.log(i + "*" + j + "*" + k +  '='  + i*j*k)
      }
  }
  
}
for(let i = 1; i < 10 ; i++){
    console.log(`outer loop i`)
    for(let j = 1; j < 10 ; j++){
      console.log(`inner loop ${j} and outer loop ${i}`);
      console.log(i + "*" + j + '='  + i*j)
    }
    
  }
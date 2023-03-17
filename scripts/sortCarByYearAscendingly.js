function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  const sortedData = [];

  while (cars.length > 0) {
    let minIndex = 0;
    for (let i = 1; i < cars.length; i++) {
      if (cars[i].year < cars[minIndex].year) {
        minIndex = i;
      }
    }

    sortedData.push(cars[minIndex]);
    cars.splice(minIndex, 1);
  }

  console.log(sortedData);
  // Rubah code ini dengan array hasil sorting secara ascending
  return sortedData;
}

function pow(num, deg) {
  if (deg == 1) {
    return num;
  } else {
    return num * pow(num, deg - 1);
  }
}

console.log(pow(3, 3));
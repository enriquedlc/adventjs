function findFirstRepeated(gifts) {
  const map = new Map();

  for (let i = 0; i < gifts.length; i++) {
    const num = gifts[i];
    if (map.has(num)) {
      return num;
    } else {
      map.set(num, i);
    }
  }

  return -1;
}

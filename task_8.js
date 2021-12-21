let map = new Map();
map.set("type", "diesel");
map.set('power', 1500);
map.set("torque", 2000);
map.set("emission", "euro6");  

map.forEach((value, key, map)  => {
console.log(`Ключ - ${key}, Значение - ${value}`);
});


// что означает  "=>" ? Без этого не работало. 
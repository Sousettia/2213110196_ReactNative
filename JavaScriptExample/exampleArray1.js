//สร้างและเข้าถึง Array
var numbers = [10, 20, 30, 40, 50];
console.log(numbers[2]);
//การใช้งาน Loop ร่วมกับ Array
var names = ["Alice", "Bob", "Charlie"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
//การเพิ่มและลบข้อมูลใน Array(push,pop)
var fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits);
fruits.pop();
console.log(fruits);

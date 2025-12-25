const pins = ["1111", "5678", "1234", "9999"];
const myPin = "1234"

for (const pin of pins) {
    if (pin === myPin){
        console.log("Пин-код найден!")
        console.log("Успешный вход")
        break
    } 
    if (pin !== myPin){
        console.log("Неверный пин...")
        continue
    }
    console.log("Успешный вход")
} 
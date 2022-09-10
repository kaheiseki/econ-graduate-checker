const element = document.querySelectorAll("tr.seiseki"); // 成績に関するすべての情報
var total_earned_credits = 0
for (let i = 6; i < element.length - 1; i++){

    const child = element[i].querySelectorAll("td") // 履修している科目
    const credit = Number(child[6].textContent) // 各科目の単位数
    const grade = child[7].textContent // 成績評価
    const class_type = child[8].textContent  // 科目区分
    const passed = child[12].textContent.trim() // 合否 合なら単位取得
    if (passed != "合") {
        continue
    }

    total_earned_credits = total_earned_credits + credit

    // console.log(credit)
    // console.log(typeof(credit))
    // console.log(grade)
    // console.log(class_type)
    // console.log(passed)
}

console.log(total_earned_credits)

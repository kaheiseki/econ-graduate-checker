export const checkEconomy = (gradeList) => {
    let major1 = 0
    let major2 = 0
    let other = 0
    let total = 0
    for (let item = 0; item < gradeList.length; item ++) {
        const grade = gradeList[item];
        if (grade[3] == "合") {
            if (grade[2] == "[専門科目１]") {
                major1 += grade[0] * 1;
                total += grade[0] * 1;
            }else if (grade[2] == "[専門2･4共通]" || grade[2] == "[専門2･3共通]" || grade[2] == "[専門2･3･4共通]") {
                major2 += grade[0] * 1;
                total += grade[0] * 1;
            }else if (grade[2] == "[選択科目]") {
                total += grade[0] * 1;
            }else if (grade[2] == "[他学部・他研究科科目]") {
                other += grade[0] * 1;
                total += grade[0] * 1;
            }
        }
    }
    if (other > 14){
        total = total - other + 14;
        other = 14;
    }
    return {
        "major1": major1,
        "major2": major2,
        "other": other,
        "total": total
    }

}

export const checkManagement = (gradeList) => {
    let major1 = 0
    let major3 = 0
    let other = 0
    let total = 0
    for (let item = 0; item < gradeList.length; item ++) {
        const grade = gradeList[item];
        if (grade[3] == "合") {
            if (grade[2] == "[専門科目１]") {
                major1 += grade[0] * 1;
                total += grade[0] * 1;
            }else if (grade[2] == "[専門3･4共通]" || grade[2] == "[専門2･3共通]" || grade[2] == "[専門2･3･4共通]") {
                major3 += grade[0] * 1;
                total += grade[0] * 1;
            }else if (grade[2] == "[選択科目]") {
                total += grade[0] * 1;
            }else if (grade[2] == "[他学部・他研究科科目]") {
                other += grade[0] * 1;
                total += grade[0] * 1;
            }
        }
    }
    if (other > 14){
        total = total - other + 14;
        other = 14;
    }
    return {
        "major1": major1,
        "major2": major2,
        "other": other,
        "total": total
    }

}

export const checkFinance = (gradeList) => {
    let major1 = 0
    let major4 = 0
    let other = 0
    let total = 0
    for (let item = 0; item < gradeList.length; item ++) {
        const grade = gradeList[item];
        if (grade[3] == "合") {
            if (grade[2] == "[専門科目１]") {
                major1 += grade[0] * 1;
                total += grade[0] * 1;
            }else if (grade[2] == "[専門3･4共通]" || grade[2] == "[専門2･4共通]" || grade[2] == "[専門2･3･4共通]") {
                major4 += grade[0] * 1;
                total += grade[0] * 1;
            }else if (grade[2] == "[選択科目]") {
                total += grade[0] * 1;
            }else if (grade[2] == "[他学部・他研究科科目]") {
                other += grade[0] * 1;
                total += grade[0] * 1;
            }
        }
    }
    if (other > 14){
        total = total - other + 14;
        other = 14;
    }
    return {
        "major1": major1,
        "major2": major2,
        "other": other,
        "total": total
    }

}

export const checkGraduate = (graduateObject) => {
    if (graduateObject.major1 < 20){
        return false
    }else if (graduateObject.major2 < 18 && graduateObject.major3 < 18 && graduateObject.major4 < 18){
        return false
    }else if (graduateObject.total < 80){
        return false
    }else {
        return true
    }
}
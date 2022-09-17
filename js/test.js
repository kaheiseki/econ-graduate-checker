import { checkEconomy, checkManagement, checkFinance, checkGraduate } from "./check"


export const judge = (userInfoList) => {
    belonging = userInfoList[0];
    gradeList = userInfoList[1];
    if (belonging == "経済学部経済学科"){
        userGradeObject = checkEconomy(gradeList);
    }else if (belonging == "経済学部経営学科"){
        userGradeObject = checkManagement(gradeList);    
    }else if (belonging == "経済学部金融学科"){
        userGradeObject = checkFinance(gradeList);
    }
    if (checkGraduate(userGradeObject)) {
        return [userGradeObject, true]
    }else {
        return [userGradeObject, false]
    }
}



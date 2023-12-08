
//https://opentdb.com/api.php?amount=10&category=9&difficulty=easy
class Settings{
  constructor(){
    this.SettingDom = document.querySelector(".settings");
    this.quizDom=document.querySelector(".quiz");
    this.categoryDom=document.querySelector("#category");
    this.nQuestion=document.querySelector("#nQuestions");
    this.startBtn = document.querySelector("#startBtn");
    this.difficulty = [
      document.querySelector("#easy"),
      document.querySelector("#medium"),
      document.querySelector("#hard"),
    ];

    this.startBtn.addEventListener("click" , this.startQuizApp);
  }

  startQuizApp (){
    const amount=10;
    const categoryID=9;
    const difficulty="hard";

    const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficulty}`

    fetch(url).then((response)=> console.log(response));
  }
  
}


export default Settings;
//https://opentdb.com/api.php?amount=10&category=9&difficulty=easy
class Settings {
  constructor() {
    this.SettingDom = document.querySelector(".settings");
    this.quizDom = document.querySelector(".quiz");
    this.categoryDom = document.querySelector("#category");
    this.nQuestionDom = document.querySelector("#nQuestions");
    this.startBtn = document.querySelector("#startBtn");
    this.difficulty = [
      document.querySelector("#easy"),
      document.querySelector("#medium"),
      document.querySelector("#hard")
    ];

    this.startBtn.addEventListener("click", this.startQuizApp);
  }

  startQuizApp = () => {
    const amount = this.getAmount();
    const categoryID = 9;
    const difficulty = this.getDifficulty();
    let result;

    const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficulty}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) =>{
        (result = data.result)
      });
  };

  getDifficulty=()=>{
    const difficulty = this.difficulty.filter((el)=>el.checked);
    if(difficulty.length === 1){
      return difficulty[0].id;
    }else{
      alert("Please Select Difficulty");
    }
  };

  getAmount = () => {
    const amount = this.nQuestionDom.value;
    if(amount>0 && amount<20){
      return amount;
    }else{
      alert("please Enter Question");
    }
  };
}

export default Settings;

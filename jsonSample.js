var json = {
    formID: "firstForm",
    questions: [
      {
        questionID: "Q00001",
        questionTag: "isMarried",
        order: 1,
        type: "american",
        questionLabel: "Are you married?",
        answers: [
          {
            key: 1,
            answerLabel: "Yes"
          },
          {
            key: 2,
            answerLabel: "No"
          },
          {
            key: 3,
            answerLabel: "Else",
            nextQuestion: 3
          }
        ]
      },
      {
        questionID: "Q00002",
        questionTag: "isMarried",
        order: 2,
        type: "american",
        questionLabel: "Are you married?",
        answers: [
          {
            key: 1,
            answerLabel: "Yes"
          },
          {
            key: 2,
            answerLabel: "No"
          }
        ]
      },
      {
        questionID: "Q00003",
        order: 3,
        type: "american",
        questionTag: "skippedQuestion",
        questionLabel: "Did you skip a question?",
        answers: [
          {
            key: 1,
            answerLabel: "Yes"
          },
          {
            key: 2,
            answerLabel: "No"
          }
        ]
      },
      {
        questionID: "Q00004",
        order: 4,
        type: "datePicker",
        questionLabel: "Please enter informations about the army",
        answers: [
          {
            key: 1,
            answerLabel: "Army started on",
            answerTag: "armyStartingDate"
          },
          {
            key: 2,
            answerLabel: "Army ended on",
            answerTag: "armyEndDate"
          }
        ]
      },
      {
        questionID: "Q00005",
        order: 5,
        type: "input",
        questionLabel: "Please enter following information",
        answers: [
          {
            key: 1,
            answerLabel: "First name",
            answerTag: "firstName"
          },
          {
            key: 3,
            answerLabel: "Last name",
            answerTag: "lastName"
          }
        ]
      }
    ]
  };

module.exports = json;
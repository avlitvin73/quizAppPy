const qa = [
    {
		question: `Python - это:`,
		correct: "язык программирования",
		incorrect: ["среда разработки", "набор инструментов редактирования", ]
	},
    {
		question: `Какое утверждение правильное`,
		correct: "CPython - одна из реализаций Python",
		incorrect: ["Python 1.7 - наиболее распрастраненная версия",
         "Код Python всегда компилируется", ]
	},
    {
		question: `Каким будет результат этой программы?
print((4 + 8) / 2)`,
		correct: "6.0",
		incorrect: ["8", "6", "0", "error"]
	},
    {
		question: `Каким будет результат этой программы?
print(7 % (5 // 2))`,
		correct: "1",
		incorrect: ["7", "0", "1.0", "error"]
	},
    {
		question: `В результате какой строки программа 
выдаст ошибку?`,
		correct: "'5' + 6",
		incorrect: ["3 + 4", "'7'+'eight'", "'one' + '2'",]
	},
    {
		question: `Каким будет результат этой программы?
print(int('3' + '4'))`,
		correct: "34",
		incorrect: ["7", "'7'", "'34'", "34.0"]
	},
    {
		question: `Каким будет результат этой программы?
spam = 'eggs'
print(spam * 3)`,
		correct: "eggseggseggs",
		incorrect: ["spamspamspam", "'spameggsspam'", "error"]
	},
    {
		question: `Как можно назвать переменную в Python`,
		correct: "A_VARIABLE_NAME",
		incorrect: ["a variable name", "123переменная'", "a-variable-name"]
	},
	{
		question: `Каким будет результат этой программы?
spam = '7'
spam = span + '0'
eggs = int(spam) + 3
print(float(eggs))`,
		correct: "73.0",
		incorrect: ["10.0", "703", "0"]
	},
	{
		question: `Какие вы знаете два логических
значения в Python`,
		correct: "True and False",
		incorrect: ["Truth and Falsity", "true and false", "норм and ненорм"]
	},
    {
		question: `Каким будет результат этой программы?
print(7 != 8)`,
		correct: "True",
		incorrect: ["False"]
	},
    {
		question: `Каким будет результат этой программы?
print(7 > 7.0)`,
		correct: "False",
		incorrect: ["True"]
	},
    {
		question: `Каким будет результат этой программы?
print(8.7 <= 8.70)`,
		correct: "True",
		incorrect: ["False", 'error']
	},
    {
		question: `Каким будет результат этой программы?
spam = 7
if spam > 5:
    print('five')
if spam > 8:
    print('eight)`,
		correct: "five",
		incorrect: ["eight", 'ничего']
	},
    {
		question: `Каким будет результат этой программы?
num = 7
if num > 3:
    print('3')
    if num > 5:
        print('5')
        if num == 7:
            print('7')`,
		correct: "3",
		incorrect: ["7",'0', '5', 'ничего']
	},
    {
		question: `Каким будет результат этой программы?
if 1 + 1 == 2:
    if 2 * 2 == 8:
        print('if')
    else:    
        print('else')`,
		correct: "else",
		incorrect: ["if",'8', '2', 'ничего']
	},
    {
		question: `Каким будет результат этой программы?
if (1 == 1) and (2 + 2 > 3):
    print('true')
else:    
    print('false')`,
		correct: "true",
		incorrect: ["true false",'false']
	},
    {
		question: `Каким будет результат этой программы?
if not True:
    print('1')
elif not (1 + 1 == 3):
    print('2')
else:    
    print('3')`,
		correct: "2",
		incorrect: ["0", "1",'3']
	},
    {
		question: `Каким будет результат этой программы?
if 1 + 1 * 3 == 6:
    print('yes')
else:    
    print('no')`,
		correct: "no",
		incorrect: ["yes"]
	},
    {
		question: `Каким будет результат этой программы?
x = 4
y = 2
if not 1 + 1 == y ot x == 4 and 7 == 8:
    print('yes')
elif x > y:    
    print('no')`,
		correct: "no",
		incorrect: ["yes"]
	},
    {
		question: `Сколько числел выведет эта программа?
i = 3
while i >= 0:
    print(i)
    i = i - 1`,
		correct: "4",
		incorrect: ["0", '3', '7', '99']
	},
    {
		question: `Сколько числел выведет эта программа?
i = 5
while True:
    print(i)
    i = i - 1
    if i <= 2:
        break`,
		correct: "3",
		incorrect: ["0", '3', '5', '2']
	},
    {
		question: `Каким будет результат этой программы?
nums = [5,4,3,2,1]
print(nums[1])`,
		correct: "4",
		incorrect: ["5", '0', '3', '1']
	},
    {
		question: `Каким будет результат этой программы?
nums = [1,2,3,4,5]
nums[3] = nums[1]
print(nums[3])`,
		correct: "2",
		incorrect: ["5", '0', '3', '1']
	},
    {
		question: `Каким будет результат этой программы?
nums = [10, 9, 8, 7, 6, 5]
nums[0] = nums[1] - 5
if 4 in nums:
    print(nums[3])
else:
    print(nums[4])`,
		correct: "7",
		incorrect: ["10", '8', '5', '4']
	},
    {
		question: `Каким будет результат этой программы?
words = ['hello']
words.append('world')
print(words[1])`,
		correct: "world",
		incorrect: ["hello", 'error']
	},
    {
		question: `Каким будет результат этой программы?
letters = ['a', 'b', 'c']
letters.append('d')
print(len(letters))`,
		correct: "4",
		incorrect: ["0", 'a', 'd']
	},
    {
		question: `Каким будет результат этой программы?
nums = [9, 8, 7, 6, 5]
nums.append(4)
nums.insert(2, 11)
print(len(nums))`,
		correct: "7",
		incorrect: ["9", '5', '11']
	},
    {
		question: `Каким будет результат этой программы?
nums = list(range(5))
print(nums[4])`,
		correct: "4",
		incorrect: ["0", '5', '1']
	},
    {
		question: `Каким будет результат этой программы?
nums = list(range(5, 8))
print(len(nums))`,
		correct: "3",
		incorrect: ["0", '5', '1']
	},
    {
		question: `Каким будет результат этой программы?
nums = list(range(3, 15, 3))
print(nums[2])`,
		correct: "9",
		incorrect: ["0", '12', '3']
	},
    {
		question: `Каким будет результат этой программы?
list = [1, 1, 2, 3, 5, 8, 13]
print(list[list[4]])`,
		correct: "8",
		incorrect: ["0", '5', '3', '13']
	},
    {
		question: `Каким будет результат этой программы?
letters = ['x', 'y', 'z']
letters.insert(1, 'w')
print(letters[2])`,
		correct: "y",
		incorrect: ["x", 'z']
	},
    
    {
		question: `Сколько аргументов у функции?
range(0, 100, 5)`,
		correct: "3",
		incorrect: ["0", '2', '1']
	},
    {
		question: `Каким будет результат этой программы?
def print_double(x):
    print(2 * x)
    
print_double(3)`,
		correct: "6",
		incorrect: ["3", '2']
	},
    {
		question: `Каким будет результат этой программы?
def print_numbers():
    print(2)
    return
    print(4)
    print(5)
    
print_numbers()`,
		correct: "2",
		incorrect: ["4", '6']
	},
    {
		question: `Каким будет результат этой программы?
def shout(word):
    return word + '!'

speak = shout
output = speak('shout')
print(output)`,
		correct: "shout!",
		incorrect: ["speak!", 'word!', 'output!']
	},
];
const answerContainer = document.querySelector(".a");
const questionCon = document.querySelector(".q");
const question = document.querySelector(".q-item");
const bar = document.querySelector(".bar");
const barContainer = document.querySelector(".progressBar");
const progressBar = document.querySelector(".bar-w");
const next = document.querySelector(".next");
const startBtn = document.querySelector(".start-game");
const questions = [];
const player = { score: 0, answers: [] };
let cur = 0;
const holder = [];
(() => {
	loadQuestions(); // load questions immediately
})();

function loadQuestions() {
	qa.forEach((e) => {
		// loop through "qa"
		let temp = [];
		e.incorrect.forEach((ans) => {
			// loop through 'qa.incorrect' => place false on incorrect items
			let obj = {
				response: ans,
				correct: false
			};
			temp.push(obj);
		});

		let obj = {
			// place true on correct items
			response: e.correct,
			correct: true
		};
		temp.push(obj);
		let mainTemp = {
			question: e.question,
			options: temp, // both correct and incorrect options are stored here
			correct: e.correct // correct answer
		};
		questions.push(mainTemp); // push into global
	});
}
function newQuestion() {
	if (cur >= questions.length) {
		next.innerHTML = "Смотреть итог";
		results();
	} else {
		next.innerHTML = "Следующий вопрос";
	}
	answerContainer.innerHTML = "";
	const el = questions[cur];
	progess();
	// console.log(el);
	el.options.sort(() => {
		return 0.5 - Math.random();
	});

	const capQuestion = el.question.charAt(0).toUpperCase() + el.question.slice(1);
	question.textContent = `${capQuestion}`;
	answerContainer.innerHTML = "";

	el.options.forEach((option) => {
		const divOption = document.createElement("div");
		holder.push(divOption);
		divOption.correctAnswer = el.correct;
		divOption.que = capQuestion;
		divOption.isITcorrect = option.correct;
		divOption.classList.add("a-item");
		divOption.textContent = option.response;
		answerContainer.append(divOption);

		divOption.addEventListener("click", optSelect);
	});
}

// if selected option is T || F
function optSelect(e) {
	endTurn();
	if (e.target.isITcorrect) {
		player.score++;
		let obj = {
			que: e.target.que,
			res: e.target.textContent,
			correct: true,
			qNum: cur
		};
		player.answers.unshift(obj);
		e.target.style.color = "#008205";
		e.target.style.backgroundColor = "#dbfff3";
	} else {
		let obj = {
			que: e.target.que,
			res: e.target.textContent,
			correct: false,
			qNum: cur
		};
		player.answers.unshift(obj);
		e.target.style.color = "#e91e63";
		e.target.style.backgroundColor = "#ffd3e2";
	}
	e.target.style.cursor = "pointer";
	// player.answers.push(temp);
}

// OPTIONS not selected have a unique style

function endTurn() {
	holder.forEach((el) => {
		el.removeEventListener("click", optSelect);
		el.style.backgroundColor = "#ffffff05";
		el.style.color = "#565656";
		el.style.cursor = "default";
	});
	cur++;
	if (cur >= questions.length) {
		next.innerHTML = "Смотреть итог";
	} else {
		next.innerHTML = "Следующий вопрос";
	}
}

function progess() {
	bar.style.width = "60%";
	next.classList.add("progressActive");
	question.style.display = "block";

	const currentQ = cur + 1;
	const progressIs = (currentQ / questions.length) * 100;

	if (progressIs === 100) {
		next.innerHTML = "View Score";
		progressBar.style.maxWidth = "100%";
	}
	progressBar.style.width = `${progressIs}%`;
}
startBtn.addEventListener("click", newQuestion);
next.addEventListener("click", () => {
	if (cur >= questions.length) {
		results();
	} else {
		newQuestion();
	}
});

// update score while answering each Q

function results() {
	console.log(player.score);
	question.style.display = "block";
	answerContainer.innerHTML = "";
	question.textContent = `Итог`;
	player.answers.forEach((ans, i) => {
		const resultsMockup = `
		<div class="result">
		<div class="result-q"><span>${ans.qNum}</span> ${ans.que}</div>
		<div>${ans.res}</div>
		<div>${ans.correct}</div>
		</div>`;
		answerContainer.insertAdjacentHTML("afterbegin", resultsMockup);
	});
	const progressIs = (player.score / questions.length) * 100;
	next.innerHTML = `${player.score} / ${questions.length} points`;

	if (progressIs <= 30) {
		bar.style.backgroundColor = `#ff8585`;
		progressBar.style.backgroundColor = `red`;
	} else if (progressIs <= 45) {
		bar.style.backgroundColor = `#ffc582`;
		progressBar.style.backgroundColor = `#ff8900`;
	} else {
		progressBar.style.backgroundColor = `#00d15e`;
		bar.style.backgroundColor = `#bcffda`;
	}

	progressBar.style.width = `${progressIs}%`;

	loadQuestions();
}
function restartGame() {
	newQuestion();
}

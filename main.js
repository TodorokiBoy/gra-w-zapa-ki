const startGameBtn = document.querySelector('.startGame-btn');
const matches = document.querySelector('.matches');
const currentNumber = document.querySelector('.currentNumber p');
const takeMatchesBtn = document.querySelectorAll('.take-btn');
const countSelect = document.querySelector('.matches-count');
const takeMatches = document.querySelector('.max-matches');
const buttonsPanel = document.querySelector('.take-matches-btn');
const firstMoveSelect = document.querySelector('.first-move');
const hardLevelSelect = document.querySelector('.hard-level');
const gameOptions = document.querySelector('.gameOptions');
const gamePanel = document.querySelector('.gamePanel');
const historyPanel = document.querySelector('.historyPanel');
const historyName = document.querySelector('.history-name');
const historyCount = document.querySelector('.history-count');
let numberMatches = 10;
let matchesToTake = 3;
let playerStarting = true;
let hardLevel = 1;


function StartGame()
{
    buttonsPanel.classList.add('active');
    gamePanel.classList.add('active');

    historyCount.textContent ='';
    historyName.textContent ='';

    //USUWANIE ZAPAŁEK
    while (matches.firstChild)
    {
        matches.removeChild(matches.firstChild);
    }

    //DODAWANIE ZAPAŁEK
    currentNumber.innerHTML = numberMatches;
    for(let i = 0; i < numberMatches; i++)
    {
        const img = document.createElement("img");
        img.src = "zapałka.png";
        img.alt = "zapałka" + (i+1);
        matches.appendChild(img);
    }

    //USUWANIE PRZYCISKÓW
    for(let i = 0; i < 7; i++)
    {
        buttonsPanel.children[i].classList.remove('active');
    }

    //DODAWANIE PRZYCISKÓW
    for(let i = 0; i < matchesToTake; i++)
    {
        buttonsPanel.children[i].classList.add('active');
    }

    gameOptions.classList.remove('active');
    historyPanel.classList.add('active');

    if (playerStarting == false)
    {
        buttonsPanel.classList.remove('active');
        setTimeout(function()
        {
            ComputerTurn();
        }, 1500);
    }
}


function ComputerTurn()
{
    let number = 0;
    if (hardLevel == 3)
    {
        if (Number(currentNumber.innerHTML) <= matchesToTake)
        {
            for(let i = 0; i < Number(currentNumber.innerHTML); i++)
            {
                matches.removeChild(matches.firstChild);
                number++;
            }
            currentNumber.innerHTML = 0;
        }else
        {
            for (let i = Number(matchesToTake); i <= Number(currentNumber.innerHTML); i += Number(matchesToTake))
            {
                i++;
                if (Number(currentNumber.innerHTML) == i)
                {
                    let randomMatches = Math.floor(Math.random() * matchesToTake) + 1;
                    for (let k = 0; k < randomMatches; k++)
                    {
                       matches.removeChild(matches.firstChild);
                    }
                    currentNumber.innerHTML -= randomMatches;
                    number = randomMatches;
                    break;
                }else
                {
                    for (let j = 1; j <= matchesToTake; j++)
                    {
                        if (Number(currentNumber.innerHTML) - j == i)
                        {
                            for (let k = 0; k < j; k++)
                            {
                                matches.removeChild(matches.firstChild);
                            }
                            currentNumber.innerHTML -= j;
                            number = j;
                        }
                    }
                }
            }
        }
    }else if (hardLevel == 2)
    {
        let random = Math.random();
        if (random <= 0.65)
        {
            if (Number(currentNumber.innerHTML) <= matchesToTake)
            {
                for(let i = 0; i < Number(currentNumber.innerHTML); i++)
                {
                    matches.removeChild(matches.firstChild);
                    number++;
                }
                currentNumber.innerHTML = 0;
            }else
            {
                for (let i = Number(matchesToTake); i <= Number(currentNumber.innerHTML); i += Number(matchesToTake))
                {
                    i++;
                    if (Number(currentNumber.innerHTML) == i)
                    {
                        matches.removeChild(matches.firstChild);
                        currentNumber.innerHTML-=1;
                        number=1;
                        break;
                    }else
                    {
                        for (let j = 1; j <= matchesToTake; j++)
                        {
                            if (Number(currentNumber.innerHTML) - j == i)
                            {
                                for (let k = 0; k < j; k++)
                                {
                                    matches.removeChild(matches.firstChild);
                                }
                                currentNumber.innerHTML -= j;
                                number = j;
                            }
                        }
                    }
                }
            }
        }else
        {
            let randomMatches = Math.floor(Math.random() * matchesToTake) + 1;
            for (let k = 0; k < randomMatches; k++)
            {
               matches.removeChild(matches.firstChild);
            }
           currentNumber.innerHTML -= randomMatches;
           number = randomMatches;
        }
    }else
    {
        let random = Math.random();
        if (random <= 0.3)
        {
            if (Number(currentNumber.innerHTML) <= matchesToTake)
            {
                for(let i = 0; i < Number(currentNumber.innerHTML); i++)
                {
                    matches.removeChild(matches.firstChild);
                    number++;
                }
                currentNumber.innerHTML = 0;
            }else
            {
                for (let i = Number(matchesToTake); i <= Number(currentNumber.innerHTML); i += Number(matchesToTake))
                {
                    i++;
                    if (Number(currentNumber.innerHTML) == i)
                    {
                        matches.removeChild(matches.firstChild);
                        currentNumber.innerHTML-=1;
                        number=1;
                        break;
                    }else
                    {
                        for (let j = 1; j <= matchesToTake; j++)
                        {
                            if (Number(currentNumber.innerHTML) - j == i)
                            {
                                for (let k = 0; k < j; k++)
                                {
                                    matches.removeChild(matches.firstChild);
                                }
                                currentNumber.innerHTML -= j;
                                number = j;
                            }
                        }
                    }
                }
            }
        }else
        {
            let randomMatches = Math.floor(Math.random() * matchesToTake) + 1;
            for (let k = 0; k < randomMatches; k++)
            {
               matches.removeChild(matches.firstChild);
            }
           currentNumber.innerHTML -= randomMatches;
           number = randomMatches;
        }
    }

    const newHistoryItemName = document.createElement('li');
    newHistoryItemName.innerHTML = `komputer:`;
    newHistoryItemName.classList.add('history-item');
    historyName.appendChild(newHistoryItemName);

    const newHistoryItemCount = document.createElement('li');
    newHistoryItemCount.innerHTML = `-${number}`;
    newHistoryItemCount.classList.add('history-item');
    historyCount.appendChild(newHistoryItemCount);

    if (currentNumber.innerHTML == 0)
    {
        const Score = document.createElement("div");
        Score.classList.add('score');
        matches.appendChild(Score);

        const ScoreText = document.createElement("p");
        ScoreText.classList.add('score-text');
        Score.appendChild(ScoreText);
        ScoreText.innerHTML = 'PRZEGRAŁEŚ';

        Score.classList.add('active');
        setTimeout(function()
        {
            gameOptions.classList.add('active');
            historyPanel.classList.remove('active');
            Score.classList.remove('active');
            gamePanel.classList.remove('active');
        }, 2500);
    }else
    {
        buttonsPanel.classList.add('active');
        UpdateButtons();
    }
}


function TakeMatches()
{
    let number = this.value;
    for(let i = 0; i < number; i++)
    {
        matches.removeChild(matches.firstChild);
    }
    currentNumber.innerHTML -= number;

    buttonsPanel.classList.remove('active');

    const newHistoryItemName = document.createElement('li');
    newHistoryItemName.innerHTML = `gracz:`;
    newHistoryItemName.classList.add('history-item');
    historyName.appendChild(newHistoryItemName);

    const newHistoryItemCount = document.createElement('li');
    newHistoryItemCount.innerHTML = `-${number}`;
    newHistoryItemCount.classList.add('history-item');
    historyCount.appendChild(newHistoryItemCount);

    if (currentNumber.innerHTML == 0)
    {
        const Score = document.createElement("div");
        Score.classList.add('score');
        matches.appendChild(Score);

        const ScoreText = document.createElement("p");
        ScoreText.classList.add('score-text');
        Score.appendChild(ScoreText);
        ScoreText.innerHTML = 'WYGRAŁEŚ';

        Score.classList.add('active');
        setTimeout(function()
        {
            gameOptions.classList.add('active');
            historyPanel.classList.remove('active');
            Score.classList.remove('active');
            gamePanel.classList.remove('active');
        }, 2500);
    }else
    {
        setTimeout(function()
        {
            ComputerTurn();
        }, 1500);
    }
}



function UpdateButtons()
{
    for(let i = 0; i < 7; i++)
    {
        if (buttonsPanel.children[i].value > Number(currentNumber.innerHTML))
            buttonsPanel.children[i].classList.remove('active');
    }
}

function SelectChange(event)
{
    numberMatches = event.target.value;
}
function SelectChange2(event)
{
    matchesToTake = event.target.value;
}
function SelectChange3(event)
{
    if (event.target.value == 2)
    {
        playerStarting = false;
    }else
    {
        playerStarting = true;
    }

}
function SelectChange4(event)
{
    hardLevel = event.target.value;
}

startGameBtn.addEventListener('click', StartGame);
countSelect.addEventListener("change", SelectChange);
takeMatches.addEventListener("change", SelectChange2);
firstMoveSelect.addEventListener("change", SelectChange3);
hardLevelSelect.addEventListener("change", SelectChange4);
takeMatchesBtn.forEach((button) => {
    button.addEventListener('click', TakeMatches)
})

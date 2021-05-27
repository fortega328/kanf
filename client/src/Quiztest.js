
var Musicq = document.getElementById("Musicq");
var Televisionq = document.getElementById("Televisionq");
var Sportsq = document.getElementById("Sportsq");
var Animeq = document.getElementById("Animeq");
var Animalsq = document.getElementById("Animalsq");
var testColumn = document.getElementById("testColumn");
var submit = document.getElementById("testSubmit");

Musicq.addEventListener("click", generateMusic);
Televisionq.addEventListener("click", generateTelevision);
Sportsq.addEventListener("click", generateSports);
Animeq.addEventListener("click", generateAnime);
Animalsq.addEventListener("click", generateAnimals);

function shuffle(answerArray) {
    return answerArray.sort(() => Math.random() - 0.5);
};

function generateMusic(response) {
    console.log("working")
    $.ajax({
        url: "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        results = response.results
        for (i = 0; i < response.results.length; i++) {
            var result = response.results[i];
            var testCard = document.createElement("card");
            var testHeader = document.createElement("div");
            var testFooter = document.createElement("form");
            testFooter.setAttribute("id","form" + i + "")
            var question = document.createElement("h1");
            var answerArray = [result.correct_answer.trim(), result.incorrect_answers[0].trim(), result.incorrect_answers[1].trim(), result.incorrect_answers[2].trim()];
            shuffle(answerArray);
            var onea = document.createElement("input");
            onea.setAttribute("type", "radio");
            onea.setAttribute("id", "button" + i + "a");
            onea.setAttribute("class", "option");
            onea.setAttribute("name","option");
            onea.innerHTML = answerArray[0];
            var oneb = document.createElement("input");
            oneb.setAttribute("type", "radio");
            oneb.setAttribute("id", "button" + i + "a");
            oneb.setAttribute("class", "option");
            oneb.setAttribute("name","option");
            oneb.innerHTML = answerArray[0];
            var onec = document.createElement("input");
            onec.setAttribute("type", "radio");
            onec.setAttribute("id", "button" + i + "a");
            onec.setAttribute("class", "option");
            onec.setAttribute("name","option");
            onec.innerHTML = answerArray[0];
            var oned = document.createElement("input");
            oned.setAttribute("type", "radio");
            oned.setAttribute("id", "button" + i + "a");
            oned.setAttribute("class", "option");
            oned.setAttribute("name","option");
            oned.innerHTML = answerArray[0];
            console.log(result.question);
            question.innerHTML = result.question.trim();
            var labela = document.createElement("label");
            labela.innerHTML=answerArray[0];
            var labelb = document.createElement("label");
            labelb.innerHTML=answerArray[1];
            var labelc = document.createElement("label");
            labelc.innerHTML=answerArray[2];
            var labeld = document.createElement("label");
            labeld.innerHTML=answerArray[3];
            var bra = document.createElement("br");
            var brb = document.createElement("br");
            var brc = document.createElement("br");
            var brd = document.createElement("br");
            onea.value=answerArray[0];
            oneb.value=answerArray[1];
            onec.value=answerArray[2];
            oned.value=answerArray[3];
            testFooter.append(onea, labela, bra, oneb, labelb, brb, onec, labelc, brc, oned, labeld, brd);
            testHeader.append(question);
            testCard.append(testHeader, testFooter);
            testColumn.append(testCard);
        };
        console.log(result.question.trim());
        console.log(answerArray);
    });
};

function generateTelevision(response) {
    $.ajax({
        url: "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        results = response.results
        for (i = 0; i < response.results.length; i++) {
            var result = response.results[i];
            var testCard = document.createElement("card");
            var testHeader = document.createElement("div");
            var testFooter = document.createElement("form");
            testFooter.setAttribute("id","form" + i + "")
            var question = document.createElement("h1");
            var answerArray = [result.correct_answer.trim(), result.incorrect_answers[0].trim(), result.incorrect_answers[1].trim(), result.incorrect_answers[2].trim()];
            shuffle(answerArray);
            var onea = document.createElement("input");
            onea.setAttribute("type", "radio");
            onea.setAttribute("id", "button" + i + "a");
            onea.setAttribute("class", "option");
            onea.setAttribute("name","option");
            onea.innerHTML = answerArray[0];
            var oneb = document.createElement("input");
            oneb.setAttribute("type", "radio");
            oneb.setAttribute("id", "button" + i + "a");
            oneb.setAttribute("class", "option");
            oneb.setAttribute("name","option");
            oneb.innerHTML = answerArray[0];
            var onec = document.createElement("input");
            onec.setAttribute("type", "radio");
            onec.setAttribute("id", "button" + i + "a");
            onec.setAttribute("class", "option");
            onec.setAttribute("name","option");
            onec.innerHTML = answerArray[0];
            var oned = document.createElement("input");
            oned.setAttribute("type", "radio");
            oned.setAttribute("id", "button" + i + "a");
            oned.setAttribute("class", "option");
            oned.setAttribute("name","option");
            oned.innerHTML = answerArray[0];
            console.log(result.question);
            question.innerHTML = result.question.trim();
            var labela = document.createElement("label");
            labela.innerHTML=answerArray[0];
            var labelb = document.createElement("label");
            labelb.innerHTML=answerArray[1];
            var labelc = document.createElement("label");
            labelc.innerHTML=answerArray[2];
            var labeld = document.createElement("label");
            labeld.innerHTML=answerArray[3];
            var bra = document.createElement("br");
            var brb = document.createElement("br");
            var brc = document.createElement("br");
            var brd = document.createElement("br");
            onea.value=answerArray[0];
            oneb.value=answerArray[1];
            onec.value=answerArray[2];
            oned.value=answerArray[3];
            testFooter.append(onea, labela, bra, oneb, labelb, brb, onec, labelc, brc, oned, labeld, brd);
            testHeader.append(question);
            testCard.append(testHeader, testFooter);
            testColumn.append(testCard);
        };
        console.log(result.question.trim());
        console.log(answerArray);
    });
};

function generateSports(response) {
    $.ajax({
        url: "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        results = response.results
        for (i = 0; i < response.results.length; i++) {
            var result = response.results[i];
            var testCard = document.createElement("card");
            var testHeader = document.createElement("div");
            var testFooter = document.createElement("form");
            testFooter.setAttribute("id","form" + i + "")
            var question = document.createElement("h1");
            var answerArray = [result.correct_answer.trim(), result.incorrect_answers[0].trim(), result.incorrect_answers[1].trim(), result.incorrect_answers[2].trim()];
            shuffle(answerArray);
            var onea = document.createElement("input");
            onea.setAttribute("type", "radio");
            onea.setAttribute("id", "button" + i + "a");
            onea.setAttribute("class", "option");
            onea.setAttribute("name","option");
            onea.innerHTML = answerArray[0];
            var oneb = document.createElement("input");
            oneb.setAttribute("type", "radio");
            oneb.setAttribute("id", "button" + i + "a");
            oneb.setAttribute("class", "option");
            oneb.setAttribute("name","option");
            oneb.innerHTML = answerArray[0];
            var onec = document.createElement("input");
            onec.setAttribute("type", "radio");
            onec.setAttribute("id", "button" + i + "a");
            onec.setAttribute("class", "option");
            onec.setAttribute("name","option");
            onec.innerHTML = answerArray[0];
            var oned = document.createElement("input");
            oned.setAttribute("type", "radio");
            oned.setAttribute("id", "button" + i + "a");
            oned.setAttribute("class", "option");
            oned.setAttribute("name","option");
            oned.innerHTML = answerArray[0];
            console.log(result.question);
            question.innerHTML = result.question.trim();
            var labela = document.createElement("label");
            labela.innerHTML=answerArray[0];
            var labelb = document.createElement("label");
            labelb.innerHTML=answerArray[1];
            var labelc = document.createElement("label");
            labelc.innerHTML=answerArray[2];
            var labeld = document.createElement("label");
            labeld.innerHTML=answerArray[3];
            var bra = document.createElement("br");
            var brb = document.createElement("br");
            var brc = document.createElement("br");
            var brd = document.createElement("br");
            onea.value=answerArray[0];
            oneb.value=answerArray[1];
            onec.value=answerArray[2];
            oned.value=answerArray[3];
            testFooter.append(onea, labela, bra, oneb, labelb, brb, onec, labelc, brc, oned, labeld, brd);
            testHeader.append(question);
            testCard.append(testHeader, testFooter);
            testColumn.append(testCard);
        };
        console.log(result.question.trim());
        console.log(answerArray);
    });
};

function generateAnime(response) {
    $.ajax({
        url: "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        results = response.results
        for (i = 0; i < response.results.length; i++) {
            var result = response.results[i];
            var testCard = document.createElement("card");
            var testHeader = document.createElement("div");
            var testFooter = document.createElement("form");
            testFooter.setAttribute("id","form" + i + "")
            var question = document.createElement("h1");
            var answerArray = [result.correct_answer.trim(), result.incorrect_answers[0].trim(), result.incorrect_answers[1].trim(), result.incorrect_answers[2].trim()];
            shuffle(answerArray);
            var onea = document.createElement("input");
            onea.setAttribute("type", "radio");
            onea.setAttribute("id", "button" + i + "a");
            onea.setAttribute("class", "option");
            onea.setAttribute("name","option");
            onea.innerHTML = answerArray[0];
            var oneb = document.createElement("input");
            oneb.setAttribute("type", "radio");
            oneb.setAttribute("id", "button" + i + "a");
            oneb.setAttribute("class", "option");
            oneb.setAttribute("name","option");
            oneb.innerHTML = answerArray[0];
            var onec = document.createElement("input");
            onec.setAttribute("type", "radio");
            onec.setAttribute("id", "button" + i + "a");
            onec.setAttribute("class", "option");
            onec.setAttribute("name","option");
            onec.innerHTML = answerArray[0];
            var oned = document.createElement("input");
            oned.setAttribute("type", "radio");
            oned.setAttribute("id", "button" + i + "a");
            oned.setAttribute("class", "option");
            oned.setAttribute("name","option");
            oned.innerHTML = answerArray[0];
            console.log(result.question);
            question.innerHTML = result.question.trim();
            var labela = document.createElement("label");
            labela.innerHTML=answerArray[0];
            var labelb = document.createElement("label");
            labelb.innerHTML=answerArray[1];
            var labelc = document.createElement("label");
            labelc.innerHTML=answerArray[2];
            var labeld = document.createElement("label");
            labeld.innerHTML=answerArray[3];
            var bra = document.createElement("br");
            var brb = document.createElement("br");
            var brc = document.createElement("br");
            var brd = document.createElement("br");
            onea.value=answerArray[0];
            oneb.value=answerArray[1];
            onec.value=answerArray[2];
            oned.value=answerArray[3];
            testFooter.append(onea, labela, bra, oneb, labelb, brb, onec, labelc, brc, oned, labeld, brd);
            testHeader.append(question);
            testCard.append(testHeader, testFooter);
            testColumn.append(testCard);
        };
        console.log(result.question.trim());
        console.log(answerArray);
    });
};

function generateAnimals(response) {
    $.ajax({
        url: "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        results = response.results
        for (i = 0; i < response.results.length; i++) {
            var result = response.results[i];
            var testCard = document.createElement("card");
            var testHeader = document.createElement("div");
            var testFooter = document.createElement("form");
            testFooter.setAttribute("id","form" + i + "")
            var question = document.createElement("h1");
            var answerArray = [result.correct_answer.trim(), result.incorrect_answers[0].trim(), result.incorrect_answers[1].trim(), result.incorrect_answers[2].trim()];
            shuffle(answerArray);
            var onea = document.createElement("input");
            onea.setAttribute("type", "radio");
            onea.setAttribute("id", "button" + i + "a");
            onea.setAttribute("class", "option");
            onea.setAttribute("name","option");
            onea.innerHTML = answerArray[0];
            var oneb = document.createElement("input");
            oneb.setAttribute("type", "radio");
            oneb.setAttribute("id", "button" + i + "a");
            oneb.setAttribute("class", "option");
            oneb.setAttribute("name","option");
            oneb.innerHTML = answerArray[0];
            var onec = document.createElement("input");
            onec.setAttribute("type", "radio");
            onec.setAttribute("id", "button" + i + "a");
            onec.setAttribute("class", "option");
            onec.setAttribute("name","option");
            onec.innerHTML = answerArray[0];
            var oned = document.createElement("input");
            oned.setAttribute("type", "radio");
            oned.setAttribute("id", "button" + i + "a");
            oned.setAttribute("class", "option");
            oned.setAttribute("name","option");
            oned.innerHTML = answerArray[0];
            console.log(result.question);
            question.innerHTML = result.question.trim();
            var labela = document.createElement("label");
            labela.innerHTML=answerArray[0];
            var labelb = document.createElement("label");
            labelb.innerHTML=answerArray[1];
            var labelc = document.createElement("label");
            labelc.innerHTML=answerArray[2];
            var labeld = document.createElement("label");
            labeld.innerHTML=answerArray[3];
            var bra = document.createElement("br");
            var brb = document.createElement("br");
            var brc = document.createElement("br");
            var brd = document.createElement("br");
            onea.value=answerArray[0];
            oneb.value=answerArray[1];
            onec.value=answerArray[2];
            oned.value=answerArray[3];
            testFooter.append(onea, labela, bra, oneb, labelb, brb, onec, labelc, brc, oned, labeld, brd);
            testHeader.append(question);
            testCard.append(testHeader, testFooter);
            testColumn.append(testCard);
        };
        console.log(result.question.trim());
        console.log(answerArray);
    });
};

function submitAnswers() {
    var score = 0;
    for (i = 0; i < results.length; i++) {
        console.log(i);
        console.log(results);
        var selection = document.querySelector("#form" + i + " input:checked");
        var correctAnswer = results[i].correct_answer;
        console.log(selection.value);
        console.log(correctAnswer);
        if (selection.value === correctAnswer) {
            score = score + 1;
        } else if (selection.value !== correctAnswer) {
            score = score;
        };
    };
    console.log(score);
};

submit.addEventListener("click", submitAnswers);
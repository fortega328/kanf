$(document).ready(function () {
        var results ;

        var Musicq = document.getElementById("Musicq");
        var Televisionq = document.getElementById("Televisionq");
        var Sportsq = document.getElementById("Sportsq");
        var Animeq = document.getElementById("Animeq");
        var Animalsq = document.getElementById("Animalsq");

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
                    var testCard = $("<card>");
                    var testHeader = $("<div>");
                    var testFooter = $("<form id='form" + i + "'>");
                    var question = $("<h1>");
                    var answerArray = [result.correct_answer.trim(), result.incorrect_answers[0].trim(), result.incorrect_answers[1].trim(), result.incorrect_answers[2].trim()];
                    shuffle(answerArray);
                    var onea = $("<input type='radio' name='option' class='option' id='button" + i + "a'> " + answerArray[0] + "<br>");
                    var oneb = $("<input type='radio' name='option' class='option' id='button" + i + "b'> " + answerArray[1] + "<br>");
                    var onec = $("<input type='radio' name='option' class='option' id='button" + i + "c'> " + answerArray[2] + "<br>");
                    var oned = $("<input type='radio' name='option' class='option' id='button" + i + "d'> " + answerArray[3] + "<br>");
                    question.text(result.question.trim());
                    onea.val(answerArray[0]);
                    oneb.val(answerArray[1]);
                    onec.val(answerArray[2]);
                    oned.val(answerArray[3]);
                    testFooter.append(onea, oneb, onec, oned);
                    testHeader.append(question);
                    testCard.append(testHeader, testFooter);
                    $("#testColumn").append(testCard)
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
                    var testCard = $("<card>");
                    var testHeader = $("<div>");
                    var testFooter = $("<form id='form" + i + "'>");
                    var question = $("<h1>");
                    var answerArray = [result.correct_answer.trim(), result.incorrect_answers[0].trim(), result.incorrect_answers[1].trim(), result.incorrect_answers[2].trim()];
                    shuffle(answerArray);
                    var onea = $("<input type='radio' name='option' class='option' id='button" + i + "a'> " + answerArray[0] + "<br>");
                    var oneb = $("<input type='radio' name='option' class='option' id='button" + i + "b'> " + answerArray[1] + "<br>");
                    var onec = $("<input type='radio' name='option' class='option' id='button" + i + "c'> " + answerArray[2] + "<br>");
                    var oned = $("<input type='radio' name='option' class='option' id='button" + i + "d'> " + answerArray[3] + "<br>");
                    question.text(result.question.trim());
                    onea.val(answerArray[0]);
                    oneb.val(answerArray[1]);
                    onec.val(answerArray[2]);
                    oned.val(answerArray[3]);
                    testFooter.append(onea, oneb, onec, oned);
                    testHeader.append(question);
                    testCard.append(testHeader, testFooter);
                    $("#testColumn").append(testCard)
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
                    var testCard = $("<card>");
                    var testHeader = $("<div>");
                    var testFooter = $("<form id='form" + i + "'>");
                    var question = $("<h1>");
                    var answerArray = [result.correct_answer.trim(), result.incorrect_answers[0].trim(), result.incorrect_answers[1].trim(), result.incorrect_answers[2].trim()];
                    shuffle(answerArray);
                    var onea = $("<input type='radio' name='option' class='option' id='button" + i + "a'> " + answerArray[0] + "<br>");
                    var oneb = $("<input type='radio' name='option' class='option' id='button" + i + "b'> " + answerArray[1] + "<br>");
                    var onec = $("<input type='radio' name='option' class='option' id='button" + i + "c'> " + answerArray[2] + "<br>");
                    var oned = $("<input type='radio' name='option' class='option' id='button" + i + "d'> " + answerArray[3] + "<br>");
                    question.text(result.question.trim());
                    onea.val(answerArray[0]);
                    oneb.val(answerArray[1]);
                    onec.val(answerArray[2]);
                    oned.val(answerArray[3]);
                    testFooter.append(onea, oneb, onec, oned);
                    testHeader.append(question);
                    testCard.append(testHeader, testFooter);
                    $("#testColumn").append(testCard)
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
                    var testCard = $("<card>");
                    var testHeader = $("<div>");
                    var testFooter = $("<form id='form" + i + "'>");
                    var question = $("<h1>");
                    var answerArray = [result.correct_answer.trim(), result.incorrect_answers[0].trim(), result.incorrect_answers[1].trim(), result.incorrect_answers[2].trim()];
                    shuffle(answerArray);
                    var onea = $("<input type='radio' name='option' class='option' id='button" + i + "a'> " + answerArray[0] + "<br>");
                    var oneb = $("<input type='radio' name='option' class='option' id='button" + i + "b'> " + answerArray[1] + "<br>");
                    var onec = $("<input type='radio' name='option' class='option' id='button" + i + "c'> " + answerArray[2] + "<br>");
                    var oned = $("<input type='radio' name='option' class='option' id='button" + i + "d'> " + answerArray[3] + "<br>");
                    question.text(result.question.trim());
                    onea.val(answerArray[0]);
                    oneb.val(answerArray[1]);
                    onec.val(answerArray[2]);
                    oned.val(answerArray[3]);
                    testFooter.append(onea, oneb, onec, oned);
                    testHeader.append(question);
                    testCard.append(testHeader, testFooter);
                    $("#testColumn").append(testCard)
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
                    var testCard = $("<card>");
                    var testHeader = $("<div>");
                    var testFooter = $("<form id='form" + i + "'>");
                    var question = $("<h1>");
                    var answerArray = [result.correct_answer.trim(), result.incorrect_answers[0].trim(), result.incorrect_answers[1].trim(), result.incorrect_answers[2].trim()];
                    shuffle(answerArray);
                    var onea = $("<input type='radio' name='option' class='option' id='button" + i + "a'> " + answerArray[0] + "<br>");
                    var oneb = $("<input type='radio' name='option' class='option' id='button" + i + "b'> " + answerArray[1] + "<br>");
                    var onec = $("<input type='radio' name='option' class='option' id='button" + i + "c'> " + answerArray[2] + "<br>");
                    var oned = $("<input type='radio' name='option' class='option' id='button" + i + "d'> " + answerArray[3] + "<br>");
                    question.text(result.question.trim());
                    onea.val(answerArray[0]);
                    oneb.val(answerArray[1]);
                    onec.val(answerArray[2]);
                    oned.val(answerArray[3]);
                    testFooter.append(onea, oneb, onec, oned);
                    testHeader.append(question);
                    testCard.append(testHeader, testFooter);
                    $("#testColumn").append(testCard)
                };
                console.log(result.question.trim());
                console.log(answerArray);
            });
        };

        function submitAnswers() {
            var score = 0;
            for(i=0; i<results.length; i++){
                console.log(i);
                console.log(results);
                var selection = $("#form" + i + " input:checked");
                var correctAnswer = results[i].correct_answer;
                console.log(selection.val());
                console.log(correctAnswer);
                if(selection.val() === correctAnswer){
                    score = score + 1;
                } else if (selection.val() !== correctAnswer) {
                    score = score;
                };
            };
            console.log(score);
        };

        $("#testSubmit").click(function(){
            submitAnswers();
            alert("button was clicked");
        });
});
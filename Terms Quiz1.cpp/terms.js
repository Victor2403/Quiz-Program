const questions = [
    { question: "What is the agreement between people and government regarding rights and obligations?(SC)", answer: "Social Contract" },
    { question: "What is the perspective that people are rational beings and crime results from free will and personal choices?(CS)", answer: "Classical School" },
    { question: "What is the ability to make rational choices among possible actions?(FW)", answer: "Free Will" },
    { question: "What is the aim of punishment to protect society, with deterrence as the key theme?(U)", answer: "Utilitarianism" },
    { question: "What is the orientation toward obtaining a favorable balance of pleasure and pain?(FC)", answer: "Felicific Calculus" },
    { question: "What is the perspective that crime results from conscious choice, and benefits outweigh costs?(RCT)", answer: "Rational Choice Theory" },
    { question: "What is the contention that crime trends relate to everyday social interactions?(RAA)", answer: "Routine-Activities Approach" },
    { question: "What is the perspective that freedom of choice varies by person or situation?(SD)", answer: "Soft Determinism" },
    { question: "What is the idea that punishing one person discourages others from similar acts?(GD)", answer: "General Deterrence" },
    { question: "What is the goal of preventing a particular offender from repeating crimes?(SD)", answer: "Specific Deterrence" },
    { question: "What is the practice of isolating offenders to protect society?(I)", answer: "Incapacitation" },
    { question: "What is the view that laws govern human behavior, and behavior is driven by biological or psychological traits?(P)", answer: "Positivism" },
    { question: "What is the belief that individuals are driven into delinquency by factors beyond their control?(D)", answer: "Determinism" },
    { question: "What is the belief that biological characteristics drive delinquent behavior?(BP)", answer: "Biological Positivism" },
    { question: "What is the interaction between biological factors and environmental influence?(Sb)", answer: "Sociobiology" },
    { question: "What is the belief that biological traits make individuals prone to certain behaviors when the environment encourages it?(BC)", answer: "Biosocial Criminology" },
    { question: "What is the theory based on Freud’s insights for handling juvenile delinquents?(PT)", answer: "Psychoanalytic Theory" },
    { question: "What is the perspective that behavior is governed by rewards and punishments?(RT)", answer: "Reinforcement Theory" },
    { question: "What is the theory that attributes delinquency to inborn characteristics?(TBPM)", answer: "Trait-Based Personality Model" },
    { question: "What is an individual with a personality disorder, often a hard-core delinquent or criminal?(P)", answer: "Psychopath" },
    { question: "What is the perspective that cognitive abilities develop through interaction with the physical and social world?(CT)", answer: "Cognitive Theory" },
    { question: "What are offenders who begin offending early and persist into adulthood called?(LCPO)", answer: "Life-Course-Persistent (LCP) Offenders" },
    { question: "What are individuals who offend only during adolescence called? (ALO)", answer: "Adolescent-Limited (AL) Offenders" },
    { question: "What is the process of stopping criminal behavior over time?(D)", answer: "Desistance" },
    { question: "What is the process by which society amplifies deviant behavior?(DoE)", answer: "Dramatization of Evil" },
    { question: "What are initial acts of deviance that may not lead to labeling?(PD)", answer: "Primary Deviation" },
    { question: "What is behavior resulting from being labeled as deviant?(SD)", answer: "Secondary Deviation" },
    { question: "What is the understanding of oneself through others’ perspectives?(RTatS)", answer: "Role-Taking and the Self" },
    { question: "What is how others perceive and judge an individual?(OAA)", answer: "Others’ Actual Appraisals" },
    { question: "What is how individuals interpret others’ perceptions?(RA)", answer: "Reflected Appraisals" },
    { question: "What is how individuals evaluate themselves based on these interpretations?(SeA)", answer: "Self-Appraisals" },
    { question: "What is the perspective that crime is caused by social conditions favoring the wealthy and powerful?(RC)", answer: "Radical Criminology" },
    { question: "What is the relationship between gender and delinquency tied to power dynamics?(PCT)", answer: "Power-Control Thesis" },
    { question: "What is the misuse of authority against children to enforce conformity?(ToDO)", answer: "Theory of Differential Oppression" },
    { question: "What is the theory that delinquency arises from clashes between cultural norms?(CCT)", answer: "Culture Conflict Theory" },
    { question: "What is the justice approach focusing on healing and accountability for the community, victim, and offender?(RJ)", answer: "Restorative Justice" },
    { question: "What is unfairness in the juvenile justice system, including disproportionate representation of poor youths and harsher treatment of racial minorities? (SI)", answer: "Social Injustice" }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[currentQuestionIndex].question;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").innerText = "";
    document.getElementById("next").style.display = "none";
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value.trim();
    let correctAnswer = questions[currentQuestionIndex].answer;
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById("feedback").innerText = "Correct!";
        score++;
    } else {
        document.getElementById("feedback").innerText = "Incorrect. The correct answer is: " + correctAnswer;
    }
    document.getElementById("score").innerText = "Score: " + score;
    document.getElementById("next").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question-container").innerHTML = "Quiz complete! Your score: " + score + " out of " + questions.length;
        document.getElementById("next").style.display = "none";
    }
}

window.onload = loadQuestion;

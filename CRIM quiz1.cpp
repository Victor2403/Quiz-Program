#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>
#include <algorithm>
#include <ctime>

// Function to run the criminology quiz
void runQuiz(const std::unordered_map<std::string, std::string>& questions) {
    // Convert the map to a vector to allow shuffling
    std::vector<std::pair<std::string, std::string>> quizQuestions(questions.begin(), questions.end());
    std::srand(std::time(0)); // Seed the random number generator

    int score = 0;
    int total = quizQuestions.size();

    // Shuffle the questions to randomize the order
    std::random_shuffle(quizQuestions.begin(), quizQuestions.end());

    // Quiz loop
    for (const auto& [question, answer] : quizQuestions) {
        std::cout << question << "\n";
        std::string userAnswer;
        std::getline(std::cin, userAnswer);

        if (userAnswer == answer) {
            std::cout << "Correct!\n\n";
            score++;
        } else {
            std::cout << "Incorrect. The correct answer is: " << answer << "\n\n";
        }
    }

    // Display final score
    std::cout << "\nQuiz Complete! Your score: " << score << " out of " << total << ". Are you ready for tomorrow?... \n";
}

int main() {
    // Criminology questions and answers
    std::unordered_map<std::string, std::string> questions = {
        {"What term describes the consistency of responses when a youth is asked the same question multiple times and provides the same answer?", "Reliability"},
        {"What term refers to the accuracy of a research instrument in measuring what it is intended to measure?", "Validity"},
        {"What term represents the percentage of a juvenile population that engages in a particular behavior, such as delinquency?", "Prevalence of delinquency"},
        {"What term describes how often a specific delinquent behavior occurs within a population?", "Incidence of delinquency"},
        {"What theoretical perspective views crime and individuals as rational beings, where crime is the result of rational choices?", "Classical school of Criminology"},
        {"What is the agreement between people and the government concerning their rights and regulations called?", "Social Contract"},
        {"According to this perspective, the aim of punishment is to benefit society by achieving the greatest good for the greatest number of people. What is this perspective?", "Utilitarianism"},
        {"What perspective holds that criminality is the result of conscious choice, suggesting that individuals who commit crimes choose to do so?", "Rational Choice Theory"},
        {"What is the belief that a person's biological characteristics make them prone to certain types of behavior when the surrounding environment encourages it?", "Biosocial Criminology"},
        {"According to developmental studies, what term describes individuals who start committing crimes early in life and continue to engage in criminal behavior well into adulthood?", "Life Course Persistent Offenders"},
        {"What is desistance?", "Desistance refers to the process by which individuals stop engaging in criminal behavior and cease offending over time."},
        {"Which theory suggests that when social control breaks down due to disorder within a community, crime and delinquency increase?", "Social Disorganization Theory"},
        {"What term describes a state of normlessness in society, where social rules and values break down?", "Anomie"},
        {"Which theory argues that high-crime areas maintain their crime rates over time because delinquent values become cultural norms and are passed down through generations?", "Cultural Transmission Theory"},
        {"Which theory explains how delinquent behavior develops as a result of alternative norms that differ from mainstream societal values?", "Cultural Deviancy Theory"},
        {"Which theory states that societal pressures, such as the inability to achieve success through legitimate means, push individuals toward delinquency?", "Strain Theory"},
        {"Which theory suggests that individuals may turn to crime due to a lack of legitimate opportunities to achieve their goals?", "Opportunity Theory"},
        {"What theory proposes that delinquency is learned, and that individuals who are exposed to environments that favor criminal behavior are more likely to engage in it?", "Differential Association Theory"},
        {"Which theory states that delinquent acts occur when a juvenile’s bond to society is weakened or broken?", "Social Control Theory"},
        {"Which theory claims that a lack of self-control is the primary factor behind criminal and delinquent behavior?", "Self-Control Theory"},
        {"In Strain Theory, what motivates individuals to take certain actions despite societal pressures?", "Goals"}
    };

    char takeAgain;
    do {
        runQuiz(questions);

        // Ask if the user wants to take the quiz again
        std::cout << "\nWould you like to take the quiz again? (Y/N): ";
        std::cin >> takeAgain;
        std::cin.ignore(); // Ignore newline character left in input buffer
        std::cout << "\n";
    } while (takeAgain == 'Y' || takeAgain == 'y');

    std::cout << "Thank you for taking the quiz!\n";
    return 0;
}
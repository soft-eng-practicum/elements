
describe('Generating the Answers', function()

 {

  it('checks The Answers we get from user', function() {

    var answers = new Array();
    answers[0] = "D" ;
    answers[1] = "C";
    answers[2] = "B";
    answers[3] = "A";
    answers[4] = "D";
    answers[5] = "C";
    answers[6] = "A";
    answers[7] = "D";
    answers[8] = "C";
    answers[9] = "B";

    var answersplayer = checkAnswer();
    expect(answersPlayer).toEqual(['D', 'C', 'B', 'A', 'D', 'C',]);

  });
});

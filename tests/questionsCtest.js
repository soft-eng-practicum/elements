describe('Generating the questions choices', function(){
  it('checks the question muliple choice', function() {

var qa = new Array();
qa[0] = "a= PCl b= K2Cl2 c= K2Cl d= KCl" ;
qa[1] = "a= NBr3 b= NBr c= NaBr d= NBr2";
qa[2] = "a= SI b= NaI c= IS d= NaIO3";
qa[3] = "a= Na2O b= NaO c= SO2 d= SO";

    var qaplayer = checkQa();
    expect(qaplayer).toEqual(['a= PCl b= K2Cl2 c= K2Cl d= KCl', 
    'a= NBr3 b= NBr c= NaBr d= NBr2', 'a= SI b= NaI c= IS d= NaIO3',
    'a= Na2O b= NaO c= SO2 d= SO',]);

  });
});
// CHALLENGE 1
function createFunction() {
    // create a function
      function innerFunc(){
        return console.log(`Hello`);
      }
      return innerFunc;
      // return that function
      // console.log(`Hello`);
    }
    
    // /*** Uncomment these to check your work! ***/
    //const function1 = createFunction();
    //function1(); // => should console.log('hello');
    
    
    // CHALLENGE 2
    function createFunctionPrinter(input) {
      //return a function that prints input
      const innerFunc =()=> console.log(input);
      return innerFunc;
    }
    
    // /*** Uncomment these to check your work! ***/
    // const printSample = createFunctionPrinter('sample');
    // printSample(); // => should console.log('sample');
    // const printHello = createFunctionPrinter('hello');
    // printHello(); // => should console.log('hello');
    
    
    // CHALLENGE 3
    function outer() {
        let counter = 0; // this variable is outside incrementCounter's scope
        function incrementCounter () {
          counter ++;
          console.log('counter', counter);
        }
        return incrementCounter;
      }
    
    const willCounter = outer();
    const jasCounter = outer();
    
    // Uncomment each of these lines one by one.
    // Before your do, guess what will be logged from each function call.
    
    // /*** Uncomment these to check your work! ***/
    // willCounter(); //counter1
    // willCounter(); //counter2
    // willCounter(); //counter3
    
    // jasCounter(); //counter1
    // willCounter(); //counter4
    
    
    function addByX(x) {
    //create new function that adds an input by x
      const newFunction = (input) => x+input;
    //return function
      return newFunction;
    }
    
    // /*** Uncomment these to check your work! ***/
     const addByTwo = addByX(2);
    // console.log(addByTwo(1)); // => should return 3
    // console.log(addByTwo(2)); // => should return 4
    // console.log(addByTwo(3)); // => should return 5
    
    // const addByThree = addByX(3);
    
    
    // const addByFour = addByX(4);
    // addByFour(4); // => should return 8
    // addByFour(5); // => should return 9
    
    
    // CHALLENGE 4
    function once(callback) {
      let count=0;
      
        function innerFunc(item){
        if(count===0){ 
        return count=callback(item); 
      }  else return count;
      }
      return innerFunc;
    }
    
    
    // /*** Uncomment these to check your work! ***/
                                        // innerFunc(addByTwo)
    const onceFunc = once(addByTwo);
    // console.log(onceFunc(4));  // => should log 6
    // console.log(onceFunc(10));  // => should log 6
    // console.log(onceFunc(9001));  // => should log 6
    
    
    // CHALLENGE 5
    function after(count, callback) {
    // create function innerFunc ()
      let run = 0;
      // needs to be invoked once the count is reached 
        const innerFunc=()=>{
          run++;
        if (run===count) callback();
      }
      return innerFunc;
    }
    
    // /*** Uncomment these to check your work! ***/
    const called = function() { console.log('hello') };
    const afterCalled = after(3, called);
    // console.log(afterCalled()); // => nothing is printed
    // console.log(afterCalled()); // => nothing is printed
    // console.log(afterCalled()); // => 'hello' is printed
    
    
    // CHALLENGE 6
    function delay(callback, waitTime) {
        function holup(){
        setTimeout(callback, waitTime);
        }
        return holup;
    }
    
    // let count = 0;
    // const delayedFunc = delay(() => count++, );
    // delayedFunc();
    // console.log(count); 												 // should print '0'
    // setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
    
    // CHALLENGE 7
        // 1st time function is invoked, 1st name is console logged
      // 2nd time function is invoked, 2nd name is console logged etc..    
    
      function rollCall(names) {
        let counter=0;
         const sort=()=>{
           for(let i=0; i<names.length; i+=1){
       
             if(i===counter){
             console.log(names[i]);
             counter++;
               break;
             }
                 if(counter===names.length) {
              console.log('Everyone accounted for'); 
               break;
             }
           }
         }
         return sort;
       };
       
       
       // /*** Uncomment these to check your work! ***/
       const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth', 'Dave', 'Josh'])
       rollCaller() // => should log 'Victoria'
       rollCaller() // => should log 'Juan'
       rollCaller() // => should log 'Ruth'
       rollCaller() // => should log 'Everyone accounted for'
       rollCaller()
       rollCaller()
    
    
    // CHALLENGE 8
    function saveOutput(func, magicWord) {
    
    }
    
    // /*** Uncomment these to check your work! ***/
    // const multiplyBy2 = function(num) { return num * 2; };
    // const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
    // console.log(multBy2AndLog(2)); // => should log 4
    // console.log(multBy2AndLog(9)); // => should log 18
    // console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }
    
    
    // CHALLENGE 9
    function cycleIterator(array) {
    
    }
    
    // /*** Uncomment these to check your work! ***/
    // const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
    // const getDay = cycleIterator(threeDayWeekend);
    // console.log(getDay()); // => should log 'Fri'
    // console.log(getDay()); // => should log 'Sat'
    // console.log(getDay()); // => should log 'Sun'
    // console.log(getDay()); // => should log 'Fri'
    
    
    // CHALLENGE 10
    function defineFirstArg(func, arg) {
    
    }
    
    // /*** Uncomment these to check your work! ***/
    // const subtract = function(big, small) { return big - small; };
    // const subFrom20 = defineFirstArg(subtract, 20);
    // console.log(subFrom20(5)); // => should log 15
    
    
    // CHALLENGE 11
    function dateStamp(func) {
    
    }
    
    // /*** Uncomment these to check your work! ***/
    // const stampedMultBy2 = dateStamp(n => n * 2);
    // console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
    // console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }
    
    
    // CHALLENGE 12
    function censor() {
    
    }
    
    // /*** Uncomment these to check your work! ***/
    // const changeScene = censor();
    // changeScene('dogs', 'cats');
    // changeScene('quick', 'slow');
    // console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'
    
    
    // CHALLENGE 13
    function createSecretHolder(secret) {
    
    }
    
    // /*** Uncomment these to check your work! ***/
    // obj = createSecretHolder(5)
    // obj.getSecret() // => returns 5
    // obj.setSecret(2)
    // obj.getSecret() // => returns 2
    
    
    // CHALLENGE 14
    function callTimes() {
    
    }
    
    // /*** Uncomment these to check your work! ***/
    // let myNewFunc1 = callTimes();
    // let myNewFunc2 = callTimes();
    // myNewFunc1(); // => 1
    // myNewFunc1(); // => 2
    // myNewFunc2(); // => 1
    // myNewFunc2(); // => 2
    
    
    // CHALLENGE 15
    function russianRoulette(num) {
    
    }
    
    // /*** Uncomment these to check your work! ***/
    // const play = russianRoulette(3);
    // console.log(play()); // => should log 'click'
    // console.log(play()); // => should log 'click'
    // console.log(play()); // => should log 'bang'
    // console.log(play()); // => should log 'reload to play again'
    // console.log(play()); // => should log 'reload to play again'
    
    
    // CHALLENGE 16
    function average() {
    
    }
    
    // /*** Uncomment these to check your work! ***/
    // const avgSoFar = average();
    // console.log(avgSoFar()); // => should log 0
    // console.log(avgSoFar(4)); // => should log 4
    // console.log(avgSoFar(8)); // => should log 6
    // console.log(avgSoFar()); // => should log 6
    // console.log(avgSoFar(12)); // => should log 8
    // console.log(avgSoFar()); // => should log 8
    
    
    // CHALLENGE 17
    function makeFuncTester(arrOfTests) {
      
    }
    
    // /*** Uncomment these to check your work! ***/
    // const capLastTestCases = [];
    // capLastTestCases.push(['hello', 'hellO']);
    // capLastTestCases.push(['goodbye', 'goodbyE']);
    // capLastTestCases.push(['howdy', 'howdY']);
    // const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
    // const capLastAttempt1 = str => str.toUpperCase();
    // const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
    // console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
    // console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true
    
    
    // CHALLENGE 18
    function makeHistory(limit) {
    
    }
    
    // /*** Uncomment these to check your work! ***/
    // const myActions = makeHistory(2);
    // console.log(myActions('jump')); // => should log 'jump done'
    // console.log(myActions('undo')); // => should log 'jump undone'
    // console.log(myActions('walk')); // => should log 'walk done'
    // console.log(myActions('code')); // => should log 'code done'
    // console.log(myActions('pose')); // => should log 'pose done'
    // console.log(myActions('undo')); // => should log 'pose undone'
    // console.log(myActions('undo')); // => should log 'code undone'
    // console.log(myActions('undo')); // => should log 'nothing to undo'
    
    
    // CHALLENGE 19
    function blackjack(array) {
    
    }
    
    // /*** Uncomment these to check your work! ***/
    
    // /*** DEALER ***/
    // const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);
    
    // /*** PLAYER 1 ***/
    // const i_like_to_live_dangerously = deal(4, 5);
    // console.log(i_like_to_live_dangerously()); // => should log 9
    // console.log(i_like_to_live_dangerously()); // => should log 11
    // console.log(i_like_to_live_dangerously()); // => should log 17
    // console.log(i_like_to_live_dangerously()); // => should log 18
    // console.log(i_like_to_live_dangerously()); // => should log 'bust'
    // console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
    // console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
    
    // /*** BELOW LINES ARE FOR THE BONUS ***/
    
    // /*** PLAYER 2 ***/
    // const i_TOO_like_to_live_dangerously = deal(2, 2);
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 4
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 15
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 19
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
    
    // /*** PLAYER 3 ***/
    // const i_ALSO_like_to_live_dangerously = deal(3, 7);
    // console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
    // console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
    // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
    // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
    // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
    

/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  var txt=(text.replace(/\s+/g, " ").trim()).split(" ");
  text=txt[0];
  if (text === 'quit'|| text === 'exit') {
    quit();
  }
  else if(text === 'hello'){
    if (txt.length!=1)
      hello(txt[1]);
    else 
      hello('');
  }
  else if(text === 'help'){
    help();
  }
  else if(text === 'list'){
    list();
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){

  if (text=='')
    console.log(`hello!`)
  else
    console.log(`hello ${text} !`)
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * Todo List
 *
 * @returns {void}
 */
function list(){
  var List=['Html','Css','JS'];
  for(let i=0;i<List.length;i++)
  console.log(i+1+'-'+List[i]);
  console.log('\n');


}

/**
 * Print all the possible commands
 *
 * @returns {void}
 */

function help(){
    console.log("Type 'exit' or 'quit' to exit");
    console.log("Type 'hello' to say hello!");
    console.log("Type 'hello' + Somthings to say hello Somthings!");
}

// The following line starts the application
startApp("Hsein Moussa")

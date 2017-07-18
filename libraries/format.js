
function format(input) {
    while (input.includes("  ")) {
        input = input.replace("  ", " ");
    };
    while (input.includes(".")) {
        input = input.replace(".", " ");
    };
    while (input.includes(".")) {
        input = input.replace(",", " , ");
    };
    input = input.toString();
    console.log("[MARKOV] FORMATTING");
    input = input.replace(".", " . ");
    input = input.replace("?", " ? ");
    input = input.replace("!", " ! ");
    while (input.includes("  ")) {
        input = input.replace("  ", " ");
    };

    return input;}

var debugging = false;
function debug() {if(debugging) console.log(...arguments);}

function splitSentences(input) {

    debug("[MARKOV] SENTENCE SPLIT");

    var list = input.split("/");

    for (k in list)
    {if ((list[k].includes(".") || list[k].includes("?") || list[k].includes("!")) == false) {
        list[k] = list[k] + " .";} debug(list[k]);}
    //do some cleanup here later to clear empty or minimal sentences
    return list;}

function splitWords(list) {

    console.log("[MARKOV] WORD SPLIT");

    var r = [];

    for (var k in list)
    {var t = list[k].split(" ");
     l = r.concat(" ");
     r = r.concat(t);

     for (j in t) {debug(t[j]);}}
    for (k in r)
    {debug(r[k]);}
    return r;}


function randomElement(arr) {return Math.floor (Math.random() * tableData[currWord].length);};

module.exports.mWordList = function mWordList(input)
{console.log("[MARKOV] WORD LIST MAKING FOR NON-MARKOV FILES");

 var list = splitSentences(input);
 var localList = [];

 for (var k in list) {var t = list[k].split(" "); locallist = localList.concat(t);}

 for (k in localList) {} return localList;};


function replaceAll(s, o)
{return o.reduce(function(s,e) {
    return s.replace(e[0],e[1]);
},s);}

const maybe = (c,f,a) => c(a) ? f(a) : a;

module.exports.format = function formatOutput(output)
{
    return replaceAll (maybe((o) => !o.includes(/[.?!]/), (o) => o += ".", output.replace(/\s([!?.,])/ ,"$1")),
                       [["duckling", "I"],
                        ["Duckling", "I"],
                        ["I is", "I am"],
                        [" I.", " me."],
                        [" I*.", " me*."]]);
};

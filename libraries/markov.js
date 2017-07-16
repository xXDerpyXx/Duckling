


//module.exports.makeData = 


function format(input){
	while(input.includes("  ")){input = input.replace("  "," ")};
	while(input.includes(".")){input = input.replace("."," ")};
	while(input.includes(".")){input = input.replace(","," , ")};
	input = input.toString();
	console.log("[MARKOV] FORMATTING");
	input = input.replace("."," . ");
	input = input.replace("?"," ? ");
	input = input.replace("!"," ! ");
	while(input.includes("  ")){input = input.replace("  "," ")};

	return input;
}

function splitSentences(input){
	console.log("[MARKOV] SENTENCE SPLIT");
	var list = input.split("/");
	for(k in list){
		if((list[k].includes(".") ||list[k].includes("?") || list[k].includes("!") ) == false){
			list[k] = list[k]+" .";
		}
		//console.log(list[k]);
	}
	//do some cleanup here later to clear empty or minimal sentences
	return list;
}

function splitWords(list){
    console.log("[MARKOV] WORD SPLIT");
    var localList = [];
    for(var k in list){
        var tempList = list[k].split(" ");
        localList = localList.concat(" ");
        localList = localList.concat(tempList);

        for(j in tempList){
            //console.log(tempList[j]);
        }
    }
    for(k in localList){
        //console.log(localList[k]);
    }
    return localList;
}

module.exports.mWordList = function mWordList(input){
	console.log("[MARKOV] WORD LIST MAKING FOR NON-MARKOV FILES");
	list = splitSentences(input);
	var localList = [];
	for(var k in list){
		var tempList = list[k].split(" ");
		locallist = localList.concat(tempList);
	}
	for(k in localList){
		//console.log(localList[k]);
	}
	return localList;
}

function makeData(wordList){
	console.log("[MARKOV] MAKING DATA");
	var data = {};
	//var wordList = splitWords(splitSentences(format(input)));
	for(var k = 0;k<wordList.length;k++){
		if(data[wordList[k]] === undefined){
			data[wordList[k]] = [];
			
		}
		try{
			if(wordList[k-1] === undefined){

			}else{
				data[wordList[k]] = data[wordList[k]].concat(wordList[k+1]);
			}
			//.concat(wordList[k-1])	
		}catch(err){
			//console.log("68:"+err);
		}
		var tempString = "";
		for(var l in data[wordList[k]]){
			tempString+= data[wordList[k]][l]+",";
		}
		//console.log(k.toString()+":"+wordList[k]+":"+tempString)
	}
	//console.log("WORD0"+wordList[0]);
	//console.log("WORD1"+wordList[1]);
	return data;
}

module.exports.fullDataSetup = function fullDataSetup(input){
	console.log("[MARKOV] BUILDING SENTENCE");
	var wordList = splitWords(splitSentences(input));
	//console.log("test:"+wordList[1]);
	console.log("[MARKOV] WORD LIST COMPLETE");
	var tableData = makeData(wordList);
	return tableData;
}

module.exports.makeSentence = function makeSentence(tableData,wordList){
	/*
	console.log("[MARKOV] BUILDING SENTENCE");
	var wordList = splitWords(splitSentences(input));
	console.log("test:"+wordList[1]);
	console.log("[MARKOV] WORD LIST COMPLETE");
	var tableData = makeData(wordList);
	*/
	//try{
	//	var currWord = wordList[Math.round((Math.random()*wordList.length))+1];
	//}catch(err){
	//	console.log("83:"+err)

	//}
	
	var localSentence = "";
	//while(currWord != "."){
	//	currWord = tableData[Math.round((Math.random()*wordList.length))+1];
	//}
	var failures = 0;
	var wordCount = 0;
	//while(wordCount<5){
		wordCount = 0;
		var currWord = " "; //wordList[Math.round((Math.random()*wordList.length))+1];
		while(localSentence.includes(" .") == false && localSentence.includes(" !") == false && localSentence.includes(" ?") == false){
			if(currWord === undefined){
				failures++;
			}else{
				localSentence+=currWord+" ";
				wordCount++;
			}
			//console.log(currWord);
			try{
				currWord = tableData[currWord][Math.round(Math.random()*tableData[currWord].length)];
				while(currWord == undefined && failures<25){
					currWord = tableData[currWord][Math.round(Math.random()*tableData[currWord].length)];
					failures++;
				}
			}catch(err){
				failures++;
				console.log("102:"+err);
				
			}
			if (failures>25){
				break;
			}
			
		}
	//}
		
	if(localSentence.includes(".") || localSentence.includes("?") || localSentence.includes("!")){

	}else{
		localSentence += ".";
	}

	while(localSentence.includes(" .") || localSentence.includes(" ?") ||  localSentence.includes(" !")){
		localSentence = localSentence.replace(" .",".");
		localSentence = localSentence.replace(" !","!");
		localSentence = localSentence.replace(" ?","?");
	}

	localSentence = localSentence.replace("duckling","I")
	localSentence = localSentence.replace("Duckling","I")
	localSentence = localSentence.replace("I is","I am");
	localSentence = localSentence.replace(" I."," me.");
	localSentence = localSentence.replace(" I*."," me*.");

	return localSentence
}
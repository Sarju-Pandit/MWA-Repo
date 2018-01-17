const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"], 
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
}; 


//function find(name) 
//{
  // return function(tree) 
  const find=name=>tree=>
    {
        for(let file of  tree.files){
		
			if(file===name){
				 return true;
			}
        }		
		for(let file of tree.subFolders){
				if(find(name)(file)===true)
            	return true;	
		}
		return false;
    }
//}
console.log(find("notes.txt")(tree)); // true 
console.log(find("paper.txt")(tree)); // false 
console.log(find("randomfile")(tree)); // false
console.log(find("paper.pdf")(tree)); //true



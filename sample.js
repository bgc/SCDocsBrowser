// A generic onclick callback function.
function searchSCCode(info, tab)
{
	var selectedItem = info.selectionText;
	var found = false;
	for(var k in docmap)
	{
		if(docmap[k].title == selectedItem)
		{
			found = true;
			chrome.tabs.create({url: 'http://doc.sccode.org/' + docmap[k].path + '.html'});
		}
	}
	if(found === false){
		var r = window.confirm("Entry not found. Would you like to be redirected to the Search page?");
		if (r==true)
		  {
		 chrome.tabs.create({url: 'http://doc.sccode.org/Search.html'});
		  }
	}	
}


var context = "selection";
var title = "Search selection in SCCode.org";
var id = chrome.contextMenus.create
({
	"title": title,
	"contexts":[context],
	"onclick": searchSCCode
});

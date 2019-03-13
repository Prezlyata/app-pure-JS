var Folder = function (folderName) {
	this.folderName = folderName;
};

var foldersArr = [];

function addFolders() {
	var inputFolderName = document.getElementById('inputFolderName').value;

	if(inputFolderName !== '') {
		var newFolder = new Folder(inputFolderName);
		foldersArr.push(newFolder);
		
		this.resetInput();
		
		var dateCreate = new Date();
		var h = dateCreate.getHours();
		var m = dateCreate.getMinutes();
		var s = dateCreate.getSeconds();
		var time = h + ":" + m + ":" + s;
		dateCreate = document.createElement('span');
		dateCreate.innerHTML = time;
		dateCreate.className = 'dateCreate';
		
		var listOfFolders = document.getElementById('listOfFolders');
		var elemtList = document.createElement('div');
		var imgIcon = document.createElement('div');
		var folder = document.createElement('div');
		var folderName = document.createElement('span');
		var remove = document.createElement('button');
		imgIcon.className = 'listChange';
		imgIcon.className = 'imgIcon';
		folder.className = 'folder';
		elemtList.className = 'elemtList';
		folderName.innerHTML = foldersArr[0].folderName;
		folderName.contentEditable = true;
		elemtList.appendChild(imgIcon);
		elemtList.appendChild(folderName);
		folder.appendChild(elemtList);
		folder.appendChild(dateCreate);
		folder.appendChild(remove);
		remove.innerText = "Remove";
		
		/*  Remove item from list function   */
		remove.onclick = function() {
			var listItem = this.parentNode;
			listOfFolders = listItem.parentNode;
			listOfFolders.removeChild(listItem);
		};
		
		foldersArr.forEach(item => {
			listOfFolders.appendChild(folder);
		});
	} else{
		alert("Input folder name")
	}
	/*  Clean our array after submit to list  */
	foldersArr.splice(-1);
};
function resetInput() {
	document.getElementById('inputFolderName').value="";
}

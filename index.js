// get each event and add eventListener to them
const listenForDelete = function(callback) {
	if(document.getElementsByClassName("delete")) {
		const deleteBtn = document.getElementsByClassName("delete");
		for(let size = 0; size < deleteBtn.length; size++) {
			deleteBtn[size].addEventListener('click', () => {
				const buttonId = deleteBtn[size].value;
				callback(buttonId);
			})
		}
	}
}

const deleteActivities = function(eleId) {
	const headers = new Headers()
	header.append('Content-Type', 'application/json')
	fetch(`https://fakerestapi.azurewebsites.net/api/Activities/${eleId}`, {
		method: 'DELETE',
		headers,
	}).then(response => {
		const data = response.json();
		console.log('the activity has been deleted')
	});
}

listenForDelete(deleteActivities);

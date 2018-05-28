function init() {
  const titleTextField = document.getElementById('title');
  const createActivity = document.getElementById('create-activity');
  const table = document.getElementById('all-activities');
  const createNode = (element) => {
    return document.createElement(element);
  }

  const url = 'http://fakerestapi.azurewebsites.net/api/Activities/'



  createActivity.onclick = function() {  
    let data = {
      title: titleTextField.value
    }
    data = JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const request = new Request(url, {
      method: 'POST',
      headers: headers,
      body: data
    });
    fetch(request)
      .then(res => res.json())
      .then(function(res) {
        console.log(res.Title);
        const tableRow = createNode('tr');
        const title = createNode('td');
        title.append(res.Title);
        tableRow.appendChild(title);
  
        const update = createNode('td');
        update.append('update');
        update.setAttribute('id', res.ID);
        update.innerHtml = 'update';
        tableRow.appendChild(update);
  
        const deleteActivity = createNode('td');
        deleteActivity.append('delete');
        deleteActivity.setAttribute('id', res.ID);
        deleteActivity.innerHtml = 'delete';
        tableRow.appendChild(deleteActivity);
  
        table.appendChild(tableRow);
      });
  }


}



window.onload = init();
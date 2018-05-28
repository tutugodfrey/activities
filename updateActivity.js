const activityContainer = document.getElementById('request-id');
const updateButton = document.getElementById('update-btn');
const updateFieldValue = document.getElementById('updateField').value;

console.log(updateFieldValue);

const updateActivity = () => {
  const url = 'https://fakerestapi.azurewebsites.net/api/Activities/0';
// The data we are going to send in our request

let data = {
  title: updateFieldValue
};
data = JSON.stringify(data);
const headers = new Headers();
headers.append('Content-Type', 'application/json');
// The data we are going to send in our request

// Create our request constructor with all the parameters we need
const request = new Request(url, {
    method: 'PUT',
    headers: headers,
    body: data
});

fetch(request)
.then(res => res.json())
.then(function(result) {
  activityContainer.innerText = result.Title;
    // Handle response we get from the API
    console.log(result);
});

}

updateButton.addEventListener('click', updateActivity);

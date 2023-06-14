// Get the "ADD PRODUCT" button and table body
var addButton = document.querySelector('#adminModal .btn-primary');
var tableBody = document.querySelector('.table tbody');

// Attach a click event listener to the "ADD PRODUCT" button
addButton.addEventListener('click', function() {
  // Get the input values for the new product
  var imageURL = document.getElementById('imageURL').value;
  var sneakerName = document.getElementById('SneakerName').value;
  var sneakerPrice = document.getElementById('sneakerPrice').value;

  // Create a new row element and populate it with the input values
  var newRow = document.createElement('tr');
  newRow.innerHTML = `
    <th scope="row">${tableBody.children.length + 1}</th>
    <td><img src="${imageURL}" alt="Product Image"></td>
    <td>${sneakerName}</td>
    <td>${sneakerPrice}</td>
    <td><button class="editButton">Edit</button></td>
    <td><button class="deleteButton">Delete</button></td>
  `;

  // Append the new row to the table body
  tableBody.appendChild(newRow);

  // Clear the input values
  document.getElementById('imageURL').value = '';
  document.getElementById('SneakerName').value = '';
  document.getElementById('sneakerPrice').value = '';

  // Attach event listeners to the new row's edit and delete buttons
  var editButton = newRow.querySelector('.editButton');
  var deleteButton = newRow.querySelector('.deleteButton');
  editButton.addEventListener('click', handleEdit);
  deleteButton.addEventListener('click', handleDelete);
});

// Function to handle the edit button click event
function handleEdit(event) {
  var row = event.target.closest('tr');
  // Implement the edit functionality here
  console.log('Edit button clicked for row:', row);
}

// Function to handle the delete button click event
function handleDelete(event) {
  var row = event.target.closest('tr');
  // Implement the delete functionality here
  console.log('Delete button clicked for row:', row);
}
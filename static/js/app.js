// from data.js
var tbody = d3.select("tbody");
var tableData = data;


// YOUR CODE HERE!
// okay so here's the function to get append rows in HTML 
// and to then pull data into them
function buildTable (ufoReport) {
    // console.log(ufoReport);
    tbody.html("");
    ufoReport.forEach((dataRow)=> {
      var row = tbody.append("tr");
      Object.entries(dataRow).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
    // var row = tbody.append("tr");
    // Object.entries(ufoReport).forEach(function([key, value]) {
      // console.log(key, value);
      // Append a cell to the row for each value
      // in the Ufo report object
    //   var cell = row.append("td");
    //   cell.text(value);
    // });
  });
}
  
// event listener part :(
// var inputField = d3.select("#datetime");
// var button = d3.select("#button");

// button function
// button.on("click", function  dateFilter() {
function dateFilter() {
    var inputField = d3.select("#datetime");
    var inputValue = inputField.property("value");
    let filteredData = tableData;
    // console.log(inputValue);

  if (inputValue) {
    filteredData = filteredData.filter(row => row.datetime === inputValue);
  }

  

  // d3.selectAll('#filter-btn').on('click', dateFilter);

   buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", dateFilter);

buildTable(tableData);

  //  console.log(filteredData);

  //  d3.select("h1>span").text(inputValue);
  //  d3.select("tbody").remove();

  //  filteredData.forEach(function(ufoReport) {
  //   console.log(ufoReport);
  //   var row = tbody.append("tr");
  //   Object.entries(ufoReport).forEach(function([key, value]) {
  //     console.log(key, value);
  //     // Append a cell to the row for each value
  //     // in the Ufo report object
  //     var cell = row.append("td");
  //     cell.text(value);
    // });

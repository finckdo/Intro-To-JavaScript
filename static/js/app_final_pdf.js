// from data.js
var FilterResults = data;

// Set up variable to hold the table and tbody elements from the index HTML
var DataTable = d3.select("table");
var tbody = d3.select("tbody");

// For each record in the data set; create a new row and write the values in each table cell
data.forEach((FilterResults) => {
    var row = tbody.append("tr");
    Object.entries(FilterResults).forEach(([k, v]) => {
      var cell = row.append("td");
      cell.text(v);
    })
  });

// Setup button variable for filter option
var FilterButton = d3.select("#filter-btn");

// Listen for filter button action
FilterButton.on("click", function() {

  d3.event.preventDefault();
  tbody.selectAll('*').remove();
	// Set input value provided by user equal to variable based on date provided by user
	var UserDate = d3.select("#datetime");
	// Set date filter variable that will be used to filter result set
	var DateFilter = UserDate.property("value")
	// Set variable equal to filtered data set
	var filteredData = FilterResults.filter(x => x.datetime === DateFilter);

	// Append a new row and set table cells based on filtered data captured in variable above
	filteredData.forEach(function(FilterResults) {
		var row = tbody.append("tr");
		Object.entries(FilterResults).forEach(function([k, v]) {
			var cell = tbody.append("td");
			cell.text(v)
    })
  })
})

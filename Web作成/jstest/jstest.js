let team = ["A","B","C","D","E"];

let html = "<tr><th></th>";
for(let x = 0; x<=4; x+=1){
    html += '<th>' + team[x] + '</th>';
}
html += '</tr>';

for(let y = 0; y<=4; y+=1){
	html += '<tr><th>' + team[y] + '</th>';
	for(let x =0; x<=4; x+=1){
		if(x <= y){
			html += '<td>' + '</td>';
		} else {
			html += '<td>' + team[y] + ' vs ' + team[x] + '</td>';
		}
	}
	html += '</tr>';
}
let elem = document.querySelector('table');
elem.innerHTML = html;
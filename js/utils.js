$(function myCalendar(){
  var today=new Date();
  var monthNames = ["January", "February", "March", 
                    "April", "May", "June", 
                    "July", "August", "September", 
                    "October", "November", "December"];
  
  var qwerty = ["",
'<table>',
'  <caption>' + monthNames[today.getMonth()] + ' ' + today.getFullYear() + '</caption>',
'    <thead>',
'      <tr>',
'        <th scope="col" title="Sunday">S</th>',
'        <th scope="col" title="Monday">M</th>',
'        <th scope="col" title="Tuesday">T</th>',
'        <th scope="col" title="Wednesday">W</th>',
'        <th scope="col" title="Thursday">T</th>',
'        <th scope="col" title="Friday">F</th>',
'        <th scope="col" title="Saturday">S</th>',
'      </tr>',
'    </thead>',
'    <tbody>'].join("\n");

  var firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  qwerty += "<tr>\n";
  if (firstDayOfMonth > 0){
    qwerty += '<td colspan="' + firstDayOfMonth + '" class="pad"><span>&nbsp;</span></td>\n'
  }

  var count = firstDayOfMonth;
  for (i = 1; i <= new Date(today.getFullYear(), today.getMonth()+1, 0).getDate(); i++){
    count = (count + 1) % 7;
    
    if (i == today.getDate()) {
      qwerty += ' <td class="today"><a href="#">' + i + '</a></td>\n';
    } else {
      qwerty += '<td><span>' + i + '</span></td>\n';
    }
    
    if (count == 0){
      qwerty += "</tr>\n";
      qwerty += "<tr>\n";
    }
  }
  
  qwerty += "</tr>\n";
  document.getElementById("myCalendar").innerHTML = qwerty;
});

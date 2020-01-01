import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  
 public content ;
 public htmlstring =`<!DOCTYPE html><html><body><h1 style="border:2px solid red;">My First Heading</h1><p>My firstparagraph.</p><img src="img_chania.jpg" alt="Flowers in Chania"><ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul> 
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
</body></html>`;
constructor(){
this.strip_html_tags(this.htmlstring)
}

 strip_html_tags(str)
{
   if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
  this.content= str.replace(/<[^>]*>/g, '');
}

}

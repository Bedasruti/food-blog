import { Component, OnInit ,NgModule} from '@angular/core';
import { FormsModule,FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.css']
})
@NgModule({
 imports: [FormsModule]

})
export class ViewitemComponent implements OnInit {
public receipe = []
  constructor() { }

  ngOnInit() {
  }

}

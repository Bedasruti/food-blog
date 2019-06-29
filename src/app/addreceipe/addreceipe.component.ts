import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-addreceipe',
  templateUrl: './addreceipe.component.html',
  styleUrls: ['./addreceipe.component.css']
})
export class AddreceipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    public imagePath;
    imgURL: any;
    public message: string;
   
    preview(files) {
      if (files.length === 0)
        return;
   
      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
   
      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
      }
    }

}

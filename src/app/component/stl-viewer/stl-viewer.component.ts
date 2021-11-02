import {  Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

//THREE
import * as THREE from 'three'




@Component({
  selector: 'app-stl-viewer',
  templateUrl: './stl-viewer.component.html',
  styleUrls: ['./stl-viewer.component.css'],
  template: 'passed in {{ data.stl_src }}',
})
export class StlViewerComponent implements OnInit {
  fromDialog!: string;
  stl_src_arr: string[] = [];

  //stl viewer settings
  camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 40)
  scene = new THREE.Scene()

  constructor(public dialogRef: MatDialogRef<StlViewerComponent>,
    @Optional() @Inject (MAT_DIALOG_DATA) public data: {stl_src: string} ) {
  
      // default camera position
      this.camera.position.set(4, 4, 4)
  
      // default scene background
      this.scene.background = new THREE.Color(0xF4F4F4)
  }

  //from the data sent from the parent dialog, push the stl src to the page
  ngOnInit(): void {
    this.stl_src_arr.push(this.data.stl_src);
  }

  closeDialog() { this.dialogRef.close({ event: 'close', data: this.fromDialog }); }

}

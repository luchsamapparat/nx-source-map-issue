import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule]
})
export class FooModule {

  constructor() {
    console.log('lib break point does work');
    // debugger;
  }

}

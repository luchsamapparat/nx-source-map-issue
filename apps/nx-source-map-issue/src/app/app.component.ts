import { Component } from "@angular/core";

@Component({
  selector: "foo-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "nx-source-map-issue";

  constructor() {
    console.log('app break point does not work');
    // debugger;
  }

}

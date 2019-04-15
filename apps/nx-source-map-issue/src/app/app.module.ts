import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FooModule } from "@foo/foo";
import { AppComponent } from "./app.component";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FooModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

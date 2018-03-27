import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostListItemComponent } from './postlistitem/postlistitem.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		PostListItemComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
		providers: [],
		bootstrap: [AppComponent]
})
export class AppModule { }
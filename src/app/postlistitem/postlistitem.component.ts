import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-postlistitem',
	templateUrl: './postlistitem.component.html',
	styleUrls: ['./postlistitem.component.scss']
})
export class PostListItemComponent implements OnInit {

	@Input() postTitle: string;
	@Input() postContent: string;
	@Input() postLike: number;
	@Input() postDate: string;

	constructor() { }

	ngOnInit() {
	}
  
	getColor() {
		if (this.postLike > 0) {
			return '#4A743E';
		} else if(this.postLike < 0) {
			return '#9C4841';
		}
	}
	
	onLike() {
		this.postLike++;
	}
	
	onDislike() {
		this.postLike--;
	}

}
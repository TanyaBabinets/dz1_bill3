
import { Component } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
@Component({
	selector: 'my-app',
	standalone: true,
	imports: [FormsModule, CommonModule],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {

	section: string | null = null; //стартовая страница по умолчанию просит выбор
	showSection(sec: string): void {
		this.section = sec;
	}
}







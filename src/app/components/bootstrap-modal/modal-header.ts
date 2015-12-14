import {Component, NgIf} from "angular2/angular2";

@Component({
	selector: 'modal-header',
	templateUrl: 'app/components/bootstrap-modal/modal-header.html',
	directives: [NgIf],
	inputs: [
		'modalTitle: modal-title'
	]
})

export class ModalHeader {}
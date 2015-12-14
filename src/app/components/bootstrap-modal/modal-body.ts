import {Component} from "angular2/angular2";

@Component({
	selector: 'modal-body',
	templateUrl: 'app/components/bootstrap-modal/modal-body.html',
	inputs: [
		'width',
		'height'
	]
})

export class ModalBody {}
import {Component} from "angular2/core";

@Component({
	selector: 'modal-body',
	templateUrl: 'app/components/bootstrap-modal/modal-body.html',
	inputs: [
		'width',
		'height'
	]
})

export class ModalBody {}
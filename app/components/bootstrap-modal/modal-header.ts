import {Component} from "angular2/core";
import {NgIf} from "angular2/common"

@Component({
	selector: 'modal-header',
	templateUrl: 'app/components/bootstrap-modal/modal-header.html',
	directives: [NgIf],
	inputs: [
		'modalTitle: modal-title'
	]
})

export class ModalHeader {}
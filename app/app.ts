import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser"
import {BootstrapModal, ModalHeader, ModalFooter, ModalBody} from "./components/bootstrap-modal/modal"

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.html',
	directives: [BootstrapModal, ModalHeader, ModalFooter, ModalBody]
})


export class MyApp {}

bootstrap(MyApp);
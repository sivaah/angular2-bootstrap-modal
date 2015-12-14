# angular2-bootstrap-modal
Angular2 Modal / Dialogue using bootstrap

##Prerequisites
The generated project has dependencies that require Node 4 or greater.

##Dependent npm modules
1. angular2  >= 2.0.0-alpha.44
2. systemjs >= 0.19.2
3. bootstrap
4. jquery

##Installation
Download the files and from the root run

```
npm install

npm start
```
## Usage

1. Copy the "bootstrap-modal" component to your project components directory
2. import the modal directives "BootstrapModal, ModalHeader, ModalFooter, ModalBody" to your component
3. Use the directives in your component view to create modal

```
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button>

<bootstrap-modal modal-id="myModal">
	<modal-header modal-title="My Modal Title"></modal-header>
	<modal-body>
		<p>One fine body&hellip;</p>
	</modal-body>
	<modal-footer>
		<button type="button" class="btn btn-primary">Save changes</button>
	</modal-footer>
</bootstrap-modal>
```

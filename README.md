#Documentation

## Description :
Simple react component Modal reusable. We can set component handle with useModal Hook and pass a title with title props.

##useModal Hook :
`import {Modal} from "fysalidev-package"`
`const { isShowing, toggle: toggleModal } = useModal();`

##Modal component :
`import {Modal} from "fysalidev-package"`
`<Modal isShowing={isShowing} hide={toggleModal} title="Salut" />`

##Custom CSS Overwrite :
.modal-overlay,
.modal-wrapper,
.modal,
.modal-header,
.modal-close-button,



import { useState } from "react";
import Modal from "../components/modal.component";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    console.log("Clicked Modal");
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta
        dapibus sapien id maximus. Quisque quis imperdiet ante. Fusce interdum,
        eros a dictum egestas, odio magna dapibus lacus, quis elementum est elit
        ac metus. Quisque nibh ex, efficitur ac viverra sit amet, vestibulum in
        orci. Fusce maximus ac sem non accumsan. Aenean in aliquam purus. Ut
        posuere posuere lacus at posuere. In bibendum arcu a facilisis tempor.
        Cras vehicula volutpat augue ac malesuada. Integer venenatis diam ac
        ultrices tristique. Integer eu efficitur lorem, vel rhoncus nisl. Nulla
        facilisi. Morbi ac lorem vitae ligula consequat tincidunt. Suspendisse
        non ipsum eu turpis auctor fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta
        dapibus sapien id maximus. Quisque quis imperdiet ante. Fusce interdum,
        eros a dictum egestas, odio magna dapibus lacus, quis elementum est elit
        ac metus. Quisque nibh ex, efficitur ac viverra sit amet, vestibulum in
        orci. Fusce maximus ac sem non accumsan. Aenean in aliquam purus. Ut
        posuere posuere lacus at posuere. In bibendum arcu a facilisis tempor.
        Cras vehicula volutpat augue ac malesuada. Integer venenatis diam ac
        ultrices tristique. Integer eu efficitur lorem, vel rhoncus nisl. Nulla
        facilisi. Morbi ac lorem vitae ligula consequat tincidunt. Suspendisse
        non ipsum eu turpis auctor fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta
        dapibus sapien id maximus. Quisque quis imperdiet ante. Fusce interdum,
        eros a dictum egestas, odio magna dapibus lacus, quis elementum est elit
        ac metus. Quisque nibh ex, efficitur ac viverra sit amet, vestibulum in
        orci. Fusce maximus ac sem non accumsan. Aenean in aliquam purus. Ut
        posuere posuere lacus at posuere. In bibendum arcu a facilisis tempor.
        Cras vehicula volutpat augue ac malesuada. Integer venenatis diam ac
        ultrices tristique. Integer eu efficitur lorem, vel rhoncus nisl. Nulla
        facilisi. Morbi ac lorem vitae ligula consequat tincidunt. Suspendisse
        non ipsum eu turpis auctor fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta
        dapibus sapien id maximus. Quisque quis imperdiet ante. Fusce interdum,
        eros a dictum egestas, odio magna dapibus lacus, quis elementum est elit
        ac metus. Quisque nibh ex, efficitur ac viverra sit amet, vestibulum in
        orci. Fusce maximus ac sem non accumsan. Aenean in aliquam purus. Ut
        posuere posuere lacus at posuere. In bibendum arcu a facilisis tempor.
        Cras vehicula volutpat augue ac malesuada. Integer venenatis diam ac
        ultrices tristique. Integer eu efficitur lorem, vel rhoncus nisl. Nulla
        facilisi. Morbi ac lorem vitae ligula consequat tincidunt. Suspendisse
        non ipsum eu turpis auctor fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta
        dapibus sapien id maximus. Quisque quis imperdiet ante. Fusce interdum,
        eros a dictum egestas, odio magna dapibus lacus, quis elementum est elit
        ac metus. Quisque nibh ex, efficitur ac viverra sit amet, vestibulum in
        orci. Fusce maximus ac sem non accumsan. Aenean in aliquam purus. Ut
        posuere posuere lacus at posuere. In bibendum arcu a facilisis tempor.
        Cras vehicula volutpat augue ac malesuada. Integer venenatis diam ac
        ultrices tristique. Integer eu efficitur lorem, vel rhoncus nisl. Nulla
        facilisi. Morbi ac lorem vitae ligula consequat tincidunt. Suspendisse
        non ipsum eu turpis auctor fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta
        dapibus sapien id maximus. Quisque quis imperdiet ante. Fusce interdum,
        eros a dictum egestas, odio magna dapibus lacus, quis elementum est elit
        ac metus. Quisque nibh ex, efficitur ac viverra sit amet, vestibulum in
        orci. Fusce maximus ac sem non accumsan. Aenean in aliquam purus. Ut
        posuere posuere lacus at posuere. In bibendum arcu a facilisis tempor.
        Cras vehicula volutpat augue ac malesuada. Integer venenatis diam ac
        ultrices tristique. Integer eu efficitur lorem, vel rhoncus nisl. Nulla
        facilisi. Morbi ac lorem vitae ligula consequat tincidunt. Suspendisse
        non ipsum eu turpis auctor fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta
        dapibus sapien id maximus. Quisque quis imperdiet ante. Fusce interdum,
        eros a dictum egestas, odio magna dapibus lacus, quis elementum est elit
        ac metus. Quisque nibh ex, efficitur ac viverra sit amet, vestibulum in
        orci. Fusce maximus ac sem non accumsan. Aenean in aliquam purus. Ut
        posuere posuere lacus at posuere. In bibendum arcu a facilisis tempor.
        Cras vehicula volutpat augue ac malesuada. Integer venenatis diam ac
        ultrices tristique. Integer eu efficitur lorem, vel rhoncus nisl. Nulla
        facilisi. Morbi ac lorem vitae ligula consequat tincidunt. Suspendisse
        non ipsum eu turpis auctor fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta
        dapibus sapien id maximus. Quisque quis imperdiet ante. Fusce interdum,
        eros a dictum egestas, odio magna dapibus lacus, quis elementum est elit
        ac metus. Quisque nibh ex, efficitur ac viverra sit amet, vestibulum in
        orci. Fusce maximus ac sem non accumsan. Aenean in aliquam purus. Ut
        posuere posuere lacus at posuere. In bibendum arcu a facilisis tempor.
        Cras vehicula volutpat augue ac malesuada. Integer venenatis diam ac
        ultrices tristique. Integer eu efficitur lorem, vel rhoncus nisl. Nulla
        facilisi. Morbi ac lorem vitae ligula consequat tincidunt. Suspendisse
        non ipsum eu turpis auctor fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta
        dapibus sapien id maximus. Quisque quis imperdiet ante. Fusce interdum,
        eros a dictum egestas, odio magna dapibus lacus, quis elementum est elit
        ac metus. Quisque nibh ex, efficitur ac viverra sit amet, vestibulum in
        orci. Fusce maximus ac sem non accumsan. Aenean in aliquam purus. Ut
        posuere posuere lacus at posuere. In bibendum arcu a facilisis tempor.
        Cras vehicula volutpat augue ac malesuada. Integer venenatis diam ac
        ultrices tristique. Integer eu efficitur lorem, vel rhoncus nisl. Nulla
        facilisi. Morbi ac lorem vitae ligula consequat tincidunt. Suspendisse
        non ipsum eu turpis auctor fringilla.
      </p>
    </div>
  );
}

export default ModalPage;

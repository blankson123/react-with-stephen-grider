import { GoBell, GoDatabase, GoGear, GoFlame } from "react-icons/go";

import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBell />
          Click Here!
        </Button>
      </div>
      <div>
        <Button danger>
          <GoDatabase />
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoGear />
          Seal Deal!
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoFlame />
          Check Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded outline>
          <GoBell />
          Something
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;

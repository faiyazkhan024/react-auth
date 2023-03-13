import Banner from "../components/Banner";
import Card from "../components/Card";
import Button from "../components/Button";

import Login from "../assets/Login.png";
import Google from "../assets/Google.svg";
import Linkedin from "../assets/Linkedin.svg";

const Join = () => {
  return (
    <>
      <Banner src={Login} />

      <Card>
        <h2 className="font-extrabold text-xl">Join Strategy Connect</h2>

        <div className="flex flex-col justify-center gap-4">
          <Button variant="outline" color="secondary" icon={Google}>
            Sign up with Google
          </Button>
          <Button variant="outline" color="secondary" icon={Linkedin}>
            Sign up with LinkedIn
          </Button>
        </div>

        <div className="flex items-center gap-6">
          <span className="h-[1px] flex-1 bg-secondary-light" />
          <span className="font-medium text-secondary-dark">or</span>
          <span className="h-[1px] flex-1 bg-secondary-light" />
        </div>

        <Button variant="contained">Login with email</Button>
      </Card>
    </>
  );
};

export default Join;

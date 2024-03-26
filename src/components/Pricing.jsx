import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import Section from "./Section";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden lg:flex justify-center relative mb-[6.5rem]">
          <img
            src={smallSphere}
            alt="sphere"
            width={255}
            height={255}
            className="relative z-1"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              alt="stars"
              width={950}
              height={400}
              className="w-full"
            />
          </div>
        </div>
        <Heading
          className="text-center"
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />
        <div className=""></div>
      </div>
    </Section>
  );
};

export default Pricing;

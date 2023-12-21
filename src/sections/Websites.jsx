import Image2 from "../assets/Image2.png";
import Button from "../components/Button";

const Websites = () => {
  return (
    <section id="achievement" className="">
      <div className="flex items-center justify-between max-lg:flex-col lg:gap-20 w-full max-container">
        <div className="flex-1">
          <img src={Image2} alt="websites"
            width={570} height={522}
            className="object-contain hidden lg:block"
          />
        </div>

        <div className="flex-1">
          <h1 className="section-text-heading mb-5"> We build websites that stand out and converts visitors to customers. </h1>
          <img src={Image2} alt="websites"
            width={570} height={522}
            className="object-contain lg:hidden mb-5"
          />
          <p className="text-heading mb-7" > Let's build you a custom-designed, brand- differentiating marketing website that helps you increase sales, increase bran recall value, promote goodwill in front of customers and target audience, as well as deliver strong marketing messages 24 hours, 365 days a year! </p>

          <Button label="Get Started" />
        </div>

      </div>
    </section >
  )
}

export default Websites
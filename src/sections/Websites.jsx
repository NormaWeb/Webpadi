import Image2 from "../assets/Image2.png";
import Button from "../components/Button";

const Websites = () => {
  return (
    <section id="achievement" className="">
      <div className="flex justify-between items-center max-lg:flex-col gap-20 w-full max-container">
        <div className="flex-1">
          <img src={Image2} alt="websites"
            width={570} height={522}
            className="object-contain"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-semibold leading-tight"> We build websites that <br /> stand out and converts <br /> visitors to customers. </h1>
          <p className=" text-2xl font-montserrat mt-5 mb-7" > Let's build you a custom-designed, brand- <br /> differentiating marketing website that helps you <br /> increase sales, increase bran recall value, promote <br /> goodwill in front of customers and target audience, <br /> as well as deliver strong marketing messages 24 <br /> hours, 365 days a year! </p>

          <div className="flex max-sm:justify-end items-center max-sm:w-full ">
            <Button label="Get Started"  />
          </div>
        </div>

      </div>
    </section >
  )
}

export default Websites
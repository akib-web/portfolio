import { content } from "../Content"
import Typed from 'react-typed'
const Hero = () => {
    const {hero} = content;
    return (
        <section id="home" className="overflow-hidden">
            <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
                <div
                data-aos="slide-right"
                data-aos-delay="1200"
                className="absolute h-full md:w-4/12 w-8/12 top-0 left-0 bg-primaryLinear bottom-0 -z-10"
                >
                </div>
            {/* sec col */}
                <div className="md:h-[37rem] h-96">
                <img
                    src={hero.image}
                    data-aos="slide-up"
                    alt="..."
                    className="h-full object-cover"
                />
                </div>
                {/* first col */}
                <div className="pb-16 px-6 pt-5" data-aos="fade-down">
                    <h1 className="flex justify-start text-[#0043ff]">
                        {hero.firstName}{" "}
                        <span className="text-dark_primary pl-3"> {hero.LastName}</span>
                    </h1>
                    <div className="flex justify-start">
                        <Typed  strings={hero.typed_title}
                                typeSpeed={80}
                                backSpeed={60}
                                attr="placeholder"
                                loop >
                                <input type="text" readOnly/>
                        </Typed>
                    </div>

                    <div className="flex flex-col gap-10 mt-10">
                        {hero.hero_content.map((content, i) => (
                        <div
                            key={i}
                            data-aos="fade-down"
                            data-aos-delay={i * 300}
                            className={`flex items-center w-80 gap-5
                        ${i === 1 && " flex-row-reverse text-right"}  `}
                        >
                            <h3>{content.count}</h3>
                            <p>{content.text}</p>
                        </div>
                        ))}
                    </div>
            </div>
        </div>
    </section>
    )
}
export default Hero;
// import getFaqs from "@/lib/getFaqs/getFaqs";
import { DropDownBtn } from "@/app/components/buttons/Buttons";
import { HeroText } from "@/app/components/texts/texts";
import BgArtTemplate from "@/Templates/bgArtTemplate/BgArtTemplate";
import { Blog, ImageContainer } from "@/Templates/blog/Blog";

export default async function page() {
  //   const faqData = await getFaqs();
  return (
    <>
      <div className="hero-part">
        <ImageContainer
          src={
            "https://res.cloudinary.com/dci00bjtd/image/upload/f_auto,q_auto/v1/images/doctor-helping-boy-physiotherapy-medium-shot_ihuoqv"
          }
          divClass={"hero-img blurdataurl"}
          addClass={"object-cover object-top"}
        />
        <div className="z-20 relative flex items-center justify-center text-center w-full ">
          <HeroText>careers</HeroText>
          <DropDownBtn href={"#faq-content"} />
        </div>
      </div>
      <BgArtTemplate bread={true} top={true}>
        <Blog id={"faq-content"}>
          <div>No content!</div>
          {/* {faqData?.map((faqs, index) => (
            <article className="content" key={index}>
              <h2 className="article-title">{faqs.faqtitle}</h2>
              {faqs.faqitems.map((items, index) => (
                <ul className="faq-items" key={index}>
                  <li className="faqlist">
                    <h3>{items.itemtitle}</h3>
                    {items.itemparas.map((paras, index) => (
                      <p key={index}>{paras.para}</p>
                    ))}
                  </li>
                </ul>
              ))}
            </article>
          ))} */}
        </Blog>
      </BgArtTemplate>
    </>
  );
}

import getFaqs from "@/lib/getFaqs/getFaqs";
import BgArtTemplate from "../components/Templates/bgArtTemplate/BgArtTemplate";
import { Blog, ImageContainer } from "../components/Templates/blog/Blog";
import { DropDownBtn } from "../components/buttons/Buttons";
import { HeroText } from "../components/texts/texts";

export default async function page() {
  const faqData = await getFaqs();
  return (
    <>
      <div className="hero-part">
        <ImageContainer
          src={
            "https://www.physio.co.uk/images/background/our-commitment-to-you.png"
          }
          divClass={"hero-img blurdataurl"}
          addClass={"object-cover object-top"}
        />
        <div className="z-20 relative flex items-center justify-center text-center w-full ">
          <HeroText>
            faq's
          </HeroText>
          <DropDownBtn href={"#faq-content"} />
        </div>
      </div>
      <BgArtTemplate bread={true} top={true}>
        <Blog id={"faq-content"}>
          {faqData?.map((faqs, index) => (
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
          ))}
        </Blog>
      </BgArtTemplate>
    </>
  );
}

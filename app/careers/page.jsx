// import getFaqs from "@/lib/getFaqs/getFaqs";
import BgArtTemplate from "../components/Templates/bgArtTemplate/BgArtTemplate";
import { Blog, ImageContainer } from "../components/Templates/blog/Blog";
import { DropDownBtn } from "../components/buttons/buttons";

export default async function page() {
//   const faqData = await getFaqs();
  return (
    <>
      <div className="hero-part">
        <ImageContainer
          src={
            "https://img.freepik.com/free-photo/doctor-helping-boy-physiotherapy-medium-shot_23-2149047465.jpg?t=st=1722619869~exp=1722623469~hmac=c006c0da51a7c1ae5cb9619c6c2a409090cf9d2bbb774c69371e3ee365db8448&w=1380"
          }
          divClass={"hero-img"}
          addClass={"object-cover object-top"}
        />
        <div className="z-20 relative flex items-center justify-center text-center w-full ">
          <p className="absolute bottom-64 text-7xl font-semibold text-white">
            Careers
          </p>
          <DropDownBtn href={"#faq-content"} />
        </div>
      </div>
      <BgArtTemplate bread={true} top={true}>
        <Blog id={"faq-content"}>
            <div>no content</div>
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

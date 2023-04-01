import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: ( value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
// lowerCasePage is equal to the name of the page prop passed in but its lower cased with all spaces removed so the id is #pagename for the anchor link to work
// Typescript doesnt know we lower cased this and replaced so we need to write the keyword as SelectedPage, which tells typescript to treat this as the SelectedPage.
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-[#FCA311]" : ""}
        transition duration-500 hover:text-[#FCA311]
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
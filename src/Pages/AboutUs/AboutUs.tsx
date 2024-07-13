import ContactInformation from "../../Components/AboutSections/AboutContactInfo.tsx/Acontact";
import AboutBanner from "../../Components/AboutSections/Banner/AboutBanner";
import Information from "../../Components/AboutSections/Information/Information";
import MissionVission from "../../Components/AboutSections/MissionVission/MissionVisssion";
import StoreLocationComponent from "../../Components/AboutSections/OurStorelocation/StoreLocation";
import TeamSection from "../../Components/AboutSections/OurTeamSection/TeamSection";

const AboutUs = () => {
  return (
    <div>
      <AboutBanner></AboutBanner>
      <Information></Information>
      <MissionVission></MissionVission>
      <ContactInformation></ContactInformation>
      <TeamSection></TeamSection>
      <StoreLocationComponent></StoreLocationComponent>
    </div>
  );
};

export default AboutUs;

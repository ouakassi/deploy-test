import "./Contact.css";

import Section from "../../components/Section";
import ContactBox from "./ContactBox";

const Contact = () => {
  const CONTACT_DATA = [
    {
      icon: "uil uil-envelope",
      title: "email",
      data: "ouakassi.oussama@gmail.com",
    },
    { icon: "uil uil-phone", title: "phone", data: "+212 6 11 42 31 16" },
    {
      icon: "uil uil-map-marker-shield",
      title: "location",
      data: "Morocco / Worldwide",
    },
  ];

  return (
    <Section
      className="contact"
      id="contact"
      icon="uil uil-calling"
      sectionTitle="contact me"
      sectionSubtitle="get in touch!"
    >
      <div className="contact__container container">
        <div className="contact__infos">
          <h6>
            Want to get in touch? <br /> Write me at hello[at]maximeheckel.com
            or shoot me a DM on Twitter
          </h6>
          {CONTACT_DATA.map(({ icon, title, data }, i) => {
            return <ContactBox key={i} icon={icon} title={title} data={data} />;
          })}
        </div>
      </div>
    </Section>
  );
};

export default Contact;

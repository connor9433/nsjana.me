import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Development",
    content: "Personal, Business, Ecommerce Website Development.",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "Design",
    content: "I Provide Logo Design, Social Media Banner, Ads and vcard design.",
    icon: "icon-chemistry",
  },
  {
    id: 3,
    name: "Advertising",
    content: "Google Ads, Meta Ads, Twitter Ads and others Social marketing.",
    icon: "icon-directions",
  },
  {
    id: 4,
    name: "SEO",
    content: "I Provide On-Page, Off-Page Seo to Backlink Services.",
    icon: "icon-rocket",
  },
  {
    id: 5,
    name: "Copy Write",
    content: "Content Writing Service for Technology Nich.",
    icon: "icon-note",
  },
  {
    id: 6,
    name: "Support",
    content: "Brand Marketing Strategy and Suggestion.",
    icon: "icon-bubbles",
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;

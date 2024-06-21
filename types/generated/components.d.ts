import type { Schema, Attribute } from "@strapi/strapi";

export interface ElementsFeatureColumn extends Schema.Component {
  collectionName: "components_slices_feature_columns";
  info: {
    name: "FeatureColumn";
    displayName: "Feature column";
    icon: "align-center";
    description: "";
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface ElementsFeatureRow extends Schema.Component {
  collectionName: "components_slices_feature_rows";
  info: {
    name: "FeatureRow";
    displayName: "Feature row";
    icon: "arrows-alt-h";
    description: "";
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    media: Attribute.Media & Attribute.Required;
    link: Attribute.Component<"links.link">;
  };
}

export interface ElementsFeature extends Schema.Component {
  collectionName: "components_elements_features";
  info: {
    displayName: "Feature";
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    media: Attribute.Media;
    showLink: Attribute.Boolean & Attribute.DefaultTo<false>;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    url: Attribute.String;
    text: Attribute.String;
  };
}

export interface ElementsFooterSection extends Schema.Component {
  collectionName: "components_links_footer_sections";
  info: {
    name: "FooterSection";
    displayName: "Footer section";
    icon: "chevron-circle-down";
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<"links.link", true>;
  };
}

export interface ElementsLogos extends Schema.Component {
  collectionName: "components_elements_logos";
  info: {
    name: "logos";
    displayName: "Logos";
    icon: "apple-alt";
  };
  attributes: {
    title: Attribute.String;
    logo: Attribute.Media;
  };
}

export interface ElementsNotificationBanner extends Schema.Component {
  collectionName: "components_elements_notification_banners";
  info: {
    name: "NotificationBanner";
    displayName: "Notification banner";
    icon: "exclamation";
    description: "";
  };
  attributes: {
    type: Attribute.Enumeration<["alert", "info", "warning"]> & Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    show: Attribute.Boolean & Attribute.DefaultTo<false>;
    link: Attribute.Component<"links.link">;
  };
}

export interface ElementsPlan extends Schema.Component {
  collectionName: "components_elements_plans";
  info: {
    name: "plan";
    displayName: "Pricing plan";
    icon: "search-dollar";
    description: "";
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    isRecommended: Attribute.Boolean;
    price: Attribute.Decimal;
    pricePeriod: Attribute.String;
  };
}

export interface ElementsTestimonial extends Schema.Component {
  collectionName: "components_slices_testimonials";
  info: {
    name: "Testimonial";
    displayName: "Testimonial";
    icon: "user-check";
    description: "";
  };
  attributes: {
    picture: Attribute.Media & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    authorName: Attribute.String & Attribute.Required;
  };
}

export interface LayoutAboutPage extends Schema.Component {
  collectionName: "components_layout_about_pages";
  info: {
    displayName: "AboutPage";
    icon: "cup";
  };
  attributes: {
    AboutPage: Attribute.String;
  };
}

export interface LayoutContactPage extends Schema.Component {
  collectionName: "components_layout_contact_pages";
  info: {
    displayName: "ContactPage";
    icon: "file";
  };
  attributes: {
    contact: Attribute.Boolean;
  };
}

export interface LayoutEncyclopediaPage extends Schema.Component {
  collectionName: "components_layout_encyclopedia_pages";
  info: {
    displayName: "Encyclopedia Page";
    icon: "dashboard";
  };
  attributes: {
    isActive: Attribute.Boolean;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: "components_layout_footers";
  info: {
    displayName: "Footer";
    description: "";
  };
  attributes: {
    footerLogo: Attribute.Component<"layout.logo">;
    menuLinks: Attribute.Component<"links.link", true>;
    legalLinks: Attribute.Component<"links.link", true>;
    socialLinks: Attribute.Component<"links.social-link", true>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: "components_layout_logos";
  info: {
    displayName: "Logo";
    description: "";
  };
  attributes: {
    logoImg: Attribute.Media & Attribute.Required;
    logoText: Attribute.String;
  };
}

export interface LayoutMuzePage extends Schema.Component {
  collectionName: "components_layout_muze_pages";
  info: {
    displayName: "Muze Page";
    icon: "dashboard";
  };
  attributes: {
    isActive: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: "components_layout_navbars";
  info: {
    name: "Navbar";
    displayName: "Navbar";
    icon: "map-signs";
    description: "";
  };
  attributes: {
    links: Attribute.Component<"links.link", true>;
    button: Attribute.Component<"links.button-link">;
    navbarLogo: Attribute.Component<"layout.logo">;
  };
}

export interface LayoutTopicPage extends Schema.Component {
  collectionName: "components_layout_topic_pages";
  info: {
    displayName: "Topic Page";
    icon: "dashboard";
  };
  attributes: {
    isBlog: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: "components_links_buttons";
  info: {
    name: "Button-link";
    displayName: "Button link";
    icon: "fingerprint";
    description: "";
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    type: Attribute.Enumeration<["primary", "secondary"]>;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: "components_links_simple_buttons";
  info: {
    name: "Button";
    displayName: "Button";
    icon: "fingerprint";
    description: "";
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<["primary", "secondary"]>;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: "components_links_links";
  info: {
    name: "Link";
    displayName: "Link";
    icon: "link";
    description: "";
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: "components_links_social_links";
  info: {
    displayName: "Social Link";
    description: "";
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
    social: Attribute.Enumeration<["YOUTUBE", "TWITTER", "INSTAGRAM", "LINKEDIN"]>;
  };
}

export interface MetaContent extends Schema.Component {
  collectionName: "components_meta_contents";
  info: {
    displayName: "content";
    icon: "apps";
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface MetaKeywords extends Schema.Component {
  collectionName: "components_meta_keywords";
  info: {
    displayName: "Keywords";
    icon: "chartBubble";
  };
  attributes: {
    topicKeywords: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 31;
      }>;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: "components_meta_metadata";
  info: {
    name: "Metadata";
    displayName: "Metadata";
    icon: "robot";
    description: "";
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
  };
}

export interface MetaQuickTable extends Schema.Component {
  collectionName: "components_meta_quick_tables";
  info: {
    displayName: "QuickTable";
    icon: "archive";
    description: "";
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.Component<"meta.content", true> & Attribute.Required;
  };
}

export interface SectionsAdresss extends Schema.Component {
  collectionName: "components_sections_adressses";
  info: {
    displayName: "Adresss";
    icon: "pinMap";
  };
  attributes: {
    googleMapsUrl: Attribute.String;
    addressText: Attribute.String;
  };
}

export interface SectionsBlogList extends Schema.Component {
  collectionName: "components_sections_blog-list";
  info: {
    displayName: "Blog List";
    icon: "eye";
    description: "";
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.String;
    blogs: Attribute.Relation<"sections.blog-list", "oneToMany", "api::topic.topic">;
  };
}

export interface SectionsBottomActions extends Schema.Component {
  collectionName: "components_slices_bottom_actions";
  info: {
    name: "BottomActions";
    displayName: "Bottom actions";
    icon: "angle-double-right";
    description: "";
  };
  attributes: {
    title: Attribute.String;
    buttons: Attribute.Component<"links.button-link", true>;
    description: Attribute.Text;
  };
}

export interface SectionsCalendar extends Schema.Component {
  collectionName: "components_sections_calendars";
  info: {
    displayName: "Calendar";
    icon: "calendar";
  };
  attributes: {
    takvim: Attribute.String;
  };
}

export interface SectionsEncyclopediaList extends Schema.Component {
  collectionName: "components_sections_encyclopedia-list";
  info: {
    displayName: "Encyclopedia List";
    icon: "eye";
    description: "";
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.String;
    encyclopedias: Attribute.Relation<"sections.encyclopedia-list", "oneToMany", "api::encyclopedia.encyclopedia">;
  };
}

export interface SectionsFeatureColumnsGroup extends Schema.Component {
  collectionName: "components_slices_feature_columns_groups";
  info: {
    name: "FeatureColumnsGroup";
    displayName: "Feature columns group";
    icon: "star-of-life";
  };
  attributes: {
    features: Attribute.Component<"elements.feature-column", true>;
  };
}

export interface SectionsFeatureRowsGroup extends Schema.Component {
  collectionName: "components_slices_feature_rows_groups";
  info: {
    name: "FeatureRowsGroup";
    displayName: "Feaures row group";
    icon: "bars";
  };
  attributes: {
    features: Attribute.Component<"elements.feature-row", true>;
  };
}

export interface SectionsFeatures extends Schema.Component {
  collectionName: "components_layout_features";
  info: {
    displayName: "Features";
    description: "";
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    feature: Attribute.Component<"elements.feature", true>;
  };
}

export interface SectionsHeading extends Schema.Component {
  collectionName: "components_sections_headings";
  info: {
    displayName: "Heading";
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    description: Attribute.String;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: "components_slices_heroes";
  info: {
    name: "Hero";
    displayName: "Hero";
    icon: "heading";
    description: "";
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    picture: Attribute.Media & Attribute.Required;
    buttons: Attribute.Component<"links.button-link", true>;
  };
}

export interface SectionsHightlightedEvents extends Schema.Component {
  collectionName: "components_sections_hightlighted_events";
  info: {
    displayName: "Hightlighted Events";
    icon: "calendar";
    description: "";
  };
  attributes: {
    events: Attribute.Relation<"sections.hightlighted-events", "oneToMany", "api::event.event">;
    title: Attribute.String & Attribute.Required;
    desc: Attribute.String;
    showAllUrl: Attribute.String;
  };
}

export interface SectionsHightlightedTopics extends Schema.Component {
  collectionName: "components_sections_hightlighted_topics";
  info: {
    displayName: "Hightlighted Topics";
    icon: "eye";
    description: "";
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.String;
    showAllUrl: Attribute.String;
    topics: Attribute.Relation<"sections.hightlighted-topics", "oneToMany", "api::topic.topic">;
    cardType: Attribute.Enumeration<["BLOG", "TOPIC"]> & Attribute.Required;
    showAllButton: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    isBlog: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

export interface SectionsJumbotron extends Schema.Component {
  collectionName: "components_sections_jumbotrons";
  info: {
    displayName: "Jumbotron";
    icon: "cube";
    description: "";
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    searchFormVisibilty: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    desc: Attribute.Text;
  };
}

export interface SectionsLargeVideo extends Schema.Component {
  collectionName: "components_slices_large_videos";
  info: {
    name: "LargeVideo";
    displayName: "Large video";
    icon: "play-circle";
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    video: Attribute.Media & Attribute.Required;
    poster: Attribute.Media;
  };
}

export interface SectionsLeadForm extends Schema.Component {
  collectionName: "components_sections_lead_forms";
  info: {
    name: "Lead form";
    displayName: "Lead form";
    icon: "at";
    description: "";
  };
  attributes: {
    title: Attribute.String;
    emailPlaceholder: Attribute.String;
    submitButton: Attribute.Component<"links.button">;
    location: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SectionsMuseums extends Schema.Component {
  collectionName: "components_sections_museums";
  info: {
    displayName: "Museum List";
    icon: "eye";
    description: "";
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.String;
    museums: Attribute.Relation<"sections.museums", "oneToMany", "api::muze.muze">;
  };
}

export interface SectionsPricing extends Schema.Component {
  collectionName: "components_sections_pricings";
  info: {
    name: "Pricing";
    displayName: "Pricing";
    icon: "dollar-sign";
  };
  attributes: {
    title: Attribute.String;
    plans: Attribute.Component<"elements.plan", true>;
  };
}

export interface SectionsRichText extends Schema.Component {
  collectionName: "components_sections_rich_texts";
  info: {
    name: "RichText";
    displayName: "Rich text";
    icon: "text-height";
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface SectionsTestimonialsGroup extends Schema.Component {
  collectionName: "components_slices_testimonials_groups";
  info: {
    name: "TestimonialsGroup";
    displayName: "Testimonials group";
    icon: "user-friends";
    description: "";
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    testimonials: Attribute.Component<"elements.testimonial", true>;
  };
}

export interface SectionsTopicImage extends Schema.Component {
  collectionName: "components_sanaat_landing_topic_images";
  info: {
    displayName: "Topic Image";
    icon: "picture";
    description: "";
  };
  attributes: {
    desc: Attribute.String;
    coverImage: Attribute.Media & Attribute.Required;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: "components_shared_media";
  info: {
    displayName: "Media";
    icon: "file-video";
    description: "";
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: "components_shared_quotes";
  info: {
    displayName: "Quote";
    icon: "indent";
    description: "";
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text & Attribute.Required;
    author: Attribute.String;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: "components_shared_rich_texts";
  info: {
    displayName: "Rich text";
    icon: "align-justify";
    description: "";
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: "components_shared_seos";
  info: {
    name: "Seo";
    icon: "allergies";
    displayName: "Seo";
    description: "";
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: "components_shared_sliders";
  info: {
    displayName: "Slider";
    icon: "address-book";
    description: "";
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedVideoEmbed extends Schema.Component {
  collectionName: "components_sections_video_embeds";
  info: {
    displayName: "Video Embed";
    description: "";
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "elements.feature-column": ElementsFeatureColumn;
      "elements.feature-row": ElementsFeatureRow;
      "elements.feature": ElementsFeature;
      "elements.footer-section": ElementsFooterSection;
      "elements.logos": ElementsLogos;
      "elements.notification-banner": ElementsNotificationBanner;
      "elements.plan": ElementsPlan;
      "elements.testimonial": ElementsTestimonial;
      "layout.about-page": LayoutAboutPage;
      "layout.contact-page": LayoutContactPage;
      "layout.encyclopedia-page": LayoutEncyclopediaPage;
      "layout.footer": LayoutFooter;
      "layout.logo": LayoutLogo;
      "layout.muze-page": LayoutMuzePage;
      "layout.navbar": LayoutNavbar;
      "layout.topic-page": LayoutTopicPage;
      "links.button-link": LinksButtonLink;
      "links.button": LinksButton;
      "links.link": LinksLink;
      "links.social-link": LinksSocialLink;
      "meta.content": MetaContent;
      "meta.keywords": MetaKeywords;
      "meta.metadata": MetaMetadata;
      "meta.quick-table": MetaQuickTable;
      "sections.adresss": SectionsAdresss;
      "sections.blog-list": SectionsBlogList;
      "sections.bottom-actions": SectionsBottomActions;
      "sections.calendar": SectionsCalendar;
      "sections.encyclopedia-list": SectionsEncyclopediaList;
      "sections.feature-columns-group": SectionsFeatureColumnsGroup;
      "sections.feature-rows-group": SectionsFeatureRowsGroup;
      "sections.features": SectionsFeatures;
      "sections.heading": SectionsHeading;
      "sections.hero": SectionsHero;
      "sections.hightlighted-events": SectionsHightlightedEvents;
      "sections.hightlighted-topics": SectionsHightlightedTopics;
      "sections.jumbotron": SectionsJumbotron;
      "sections.large-video": SectionsLargeVideo;
      "sections.lead-form": SectionsLeadForm;
      "sections.museums": SectionsMuseums;
      "sections.pricing": SectionsPricing;
      "sections.rich-text": SectionsRichText;
      "sections.testimonials-group": SectionsTestimonialsGroup;
      "sections.topic-image": SectionsTopicImage;
      "shared.media": SharedMedia;
      "shared.quote": SharedQuote;
      "shared.rich-text": SharedRichText;
      "shared.seo": SharedSeo;
      "shared.slider": SharedSlider;
      "shared.video-embed": SharedVideoEmbed;
    }
  }
}

import type { Schema, Attribute } from "@strapi/strapi";

export interface AdminPermission extends Schema.CollectionType {
  collectionName: "admin_permissions";
  info: {
    name: "Permission";
    description: "";
    singularName: "permission";
    pluralName: "permissions";
    displayName: "Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<"admin::permission", "manyToOne", "admin::role">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::permission", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"admin::permission", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: "admin_users";
  info: {
    name: "User";
    description: "";
    singularName: "user";
    pluralName: "users";
    displayName: "User";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    roles: Attribute.Relation<"admin::user", "manyToMany", "admin::role"> & Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::user", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"admin::user", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: "admin_roles";
  info: {
    name: "Role";
    description: "";
    singularName: "role";
    pluralName: "roles";
    displayName: "Role";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<"admin::role", "manyToMany", "admin::user">;
    permissions: Attribute.Relation<"admin::role", "oneToMany", "admin::permission">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::role", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"admin::role", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: "strapi_api_tokens";
  info: {
    name: "Api Token";
    singularName: "api-token";
    pluralName: "api-tokens";
    displayName: "Api Token";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<"">;
    type: Attribute.Enumeration<["read-only", "full-access", "custom"]> &
      Attribute.Required &
      Attribute.DefaultTo<"read-only">;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<"admin::api-token", "oneToMany", "admin::api-token-permission">;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::api-token", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"admin::api-token", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: "strapi_api_token_permissions";
  info: {
    name: "API Token Permission";
    description: "";
    singularName: "api-token-permission";
    pluralName: "api-token-permissions";
    displayName: "API Token Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<"admin::api-token-permission", "manyToOne", "admin::api-token">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::api-token-permission", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"admin::api-token-permission", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: "strapi_transfer_tokens";
  info: {
    name: "Transfer Token";
    singularName: "transfer-token";
    pluralName: "transfer-tokens";
    displayName: "Transfer Token";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<"">;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<"admin::transfer-token", "oneToMany", "admin::transfer-token-permission">;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::transfer-token", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"admin::transfer-token", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: "strapi_transfer_token_permissions";
  info: {
    name: "Transfer Token Permission";
    description: "";
    singularName: "transfer-token-permission";
    pluralName: "transfer-token-permissions";
    displayName: "Transfer Token Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<"admin::transfer-token-permission", "manyToOne", "admin::transfer-token">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::transfer-token-permission", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"admin::transfer-token-permission", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: "files";
  info: {
    singularName: "file";
    pluralName: "files";
    displayName: "File";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<"plugin::upload.file", "morphToMany">;
    folder: Attribute.Relation<"plugin::upload.file", "manyToOne", "plugin::upload.folder"> & Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"plugin::upload.file", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"plugin::upload.file", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: "upload_folders";
  info: {
    singularName: "folder";
    pluralName: "folders";
    displayName: "Folder";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<"plugin::upload.folder", "manyToOne", "plugin::upload.folder">;
    children: Attribute.Relation<"plugin::upload.folder", "oneToMany", "plugin::upload.folder">;
    files: Attribute.Relation<"plugin::upload.folder", "oneToMany", "plugin::upload.file">;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"plugin::upload.folder", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"plugin::upload.folder", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: "strapi_releases";
  info: {
    singularName: "release";
    pluralName: "releases";
    displayName: "Release";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<["ready", "blocked", "failed", "done", "empty"]> & Attribute.Required;
    actions: Attribute.Relation<
      "plugin::content-releases.release",
      "oneToMany",
      "plugin::content-releases.release-action"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"plugin::content-releases.release", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"plugin::content-releases.release", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction extends Schema.CollectionType {
  collectionName: "strapi_release_actions";
  info: {
    singularName: "release-action";
    pluralName: "release-actions";
    displayName: "Release Action";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<["publish", "unpublish"]> & Attribute.Required;
    entry: Attribute.Relation<"plugin::content-releases.release-action", "morphToOne">;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      "plugin::content-releases.release-action",
      "manyToOne",
      "plugin::content-releases.release"
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"plugin::content-releases.release-action", "oneToOne", "admin::user"> &
      Attribute.Private;
    updatedBy: Attribute.Relation<"plugin::content-releases.release-action", "oneToOne", "admin::user"> &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: "i18n_locale";
  info: {
    singularName: "locale";
    pluralName: "locales";
    collectionName: "locales";
    displayName: "Locale";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"plugin::i18n.locale", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"plugin::i18n.locale", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission extends Schema.CollectionType {
  collectionName: "up_permissions";
  info: {
    name: "permission";
    description: "";
    singularName: "permission";
    pluralName: "permissions";
    displayName: "Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<"plugin::users-permissions.permission", "manyToOne", "plugin::users-permissions.role">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"plugin::users-permissions.permission", "oneToOne", "admin::user"> &
      Attribute.Private;
    updatedBy: Attribute.Relation<"plugin::users-permissions.permission", "oneToOne", "admin::user"> &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: "up_roles";
  info: {
    name: "role";
    description: "";
    singularName: "role";
    pluralName: "roles";
    displayName: "Role";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      "plugin::users-permissions.role",
      "oneToMany",
      "plugin::users-permissions.permission"
    >;
    users: Attribute.Relation<"plugin::users-permissions.role", "oneToMany", "plugin::users-permissions.user">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"plugin::users-permissions.role", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"plugin::users-permissions.role", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: "up_users";
  info: {
    name: "user";
    description: "";
    singularName: "user";
    pluralName: "users";
    displayName: "User";
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<"plugin::users-permissions.user", "manyToOne", "plugin::users-permissions.role">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"plugin::users-permissions.user", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"plugin::users-permissions.user", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiAuthorAuthor extends Schema.CollectionType {
  collectionName: "authors";
  info: {
    singularName: "author";
    pluralName: "authors";
    displayName: "Author";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    about: Attribute.Text;
    topics: Attribute.Relation<"api::author.author", "oneToMany", "api::topic.topic">;
    slug: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::author.author", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::author.author", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiContactFormContactForm extends Schema.CollectionType {
  collectionName: "contact_forms";
  info: {
    singularName: "contact-form";
    pluralName: "contact-forms";
    displayName: "Contact Form";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    email: Attribute.String;
    message: Attribute.String;
    subject: Attribute.String;
    isReading: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::contact-form.contact-form", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::contact-form.contact-form", "oneToOne", "admin::user"> & Attribute.Private;
  };
}

export interface ApiEncyclopediaEncyclopedia extends Schema.CollectionType {
  collectionName: "encyclopedias";
  info: {
    singularName: "encyclopedia";
    pluralName: "encyclopedias";
    displayName: "Encyclopedia";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    topics: Attribute.Relation<"api::encyclopedia.encyclopedia", "oneToMany", "api::topic.topic">;
    desc: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    coverImage: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    shortDesc: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    keywords: Attribute.JSON &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::multi-select.multi-select",
        [
          "Sanat",
          "Tarih",
          "K\u00FClt\u00FCr",
          "Gezi",
          "Arkeoloji",
          "Modern sanat",
          "Mimari",
          "Sanat tarihi",
          "Resim",
          "Heykel",
          "Sanat eseri",
          "Sergi",
          "M\u00FCze",
          "Galeri",
          "Geleneksel sanat",
          "\u00C7a\u011Fda\u015F sanat",
          "Antik sanat",
          "Etnografya",
          "K\u00FClt\u00FCrel miras",
          "Tarih \u00F6ncesi",
          "Arkeolojik kaz\u0131",
          "Arkeolojik buluntular",
          "Tarihi eser",
          "Tarihi mekan",
          "K\u00FClt\u00FCrel gezi",
          "Tarihi tur",
          "\u015Eehir turu",
          "K\u00FClt\u00FCr turizmi",
          "An\u0131t",
          "An\u0131tsal yap\u0131",
          "Sanat tarihi m\u00FCzesi",
          "Tarihi binalar",
          "Mimari tasar\u0131m",
          "Modern mimari",
          "Klasik mimari",
          "Orta\u00E7a\u011F mimarisi",
          "R\u00F6nesans d\u00F6nemi",
          "Barok sanat",
          "Gotik sanat",
          "\u0130slam sanat\u0131",
          "Uzak Do\u011Fu sanat\u0131",
          "Latin Amerika sanat\u0131",
          "Yerel sanat",
          "Halk sanat\u0131",
          "El sanatlar\u0131",
          "Sanat festivali",
          "Bienal",
          "Performans sanat\u0131",
          "Video sanat\u0131",
          "Dijital sanat",
          "Foto\u011Fraf\u00E7\u0131l\u0131k",
          "Sanat ele\u015Ftirisi",
          "Sanat kuram\u0131",
          "Sanat hareketleri",
          "Postmodern sanat",
          "Avangard sanat",
          "Minimalist sanat",
          "Soyut sanat",
          "Realist sanat",
          "Empresyonizm",
          "Ekspresyonizm",
          "S\u00FCrrealizm",
          "Dadaizm",
          "F\u00FCt\u00FCrizm",
          "Pop art",
          "Sanat e\u011Fitimi",
          "Sanat tarihi dersleri",
          "Sanat at\u00F6lyesi",
          "Restorasyon",
          "Konservasyon",
          "Sanat m\u00FCzesi",
          "Tarih m\u00FCzesi",
          "Antik kent",
          "Arkeolojik sit alan\u0131",
          "Mozaik sanat",
          "Fresk",
          "\u0130konografi",
          "Numismatik",
          "Epigrafi",
          "Antropoloji",
          "Paleontoloji",
          "Tarihi belgeler",
          "Ar\u015Fiv \u00E7al\u0131\u015Fmas\u0131",
          "Paleografi",
          "Sanat\u00E7\u0131 biyografileri",
          "Sanat ak\u0131mlar\u0131",
          "K\u00FClt\u00FCrel etkinlikler",
          "D\u00FCnya miras\u0131",
          "UNESCO miras listesi",
          "Tarihi romanlar",
          "Tarihi belgeseller",
          "Sanat galerileri",
          "Arkeoloji dergileri",
          "Sanat dergileri",
          "K\u00FClt\u00FCr dergileri",
          "Tarih kitaplar\u0131",
          "K\u00FClt\u00FCrel yay\u0131nlar",
          "Sanat fuarlar\u0131",
          "Sanat \u00F6d\u00FClleri",
          "Tarihi \u015Fahsiyetler",
          "Sanat m\u00FCze gezisi",
          "K\u00FClt\u00FCrel sempozyumlar",
          "Sanat\u00E7\u0131 r\u00F6portajlar\u0131",
          "K\u00FClt\u00FCrel belgeseller",
          "Tarihi diziler",
          "Sanat koleksiyonlar\u0131",
          "K\u00FClt\u00FCrel miras koruma",
          "K\u00FClt\u00FCr sanat etkinlikleri",
          "Sanat bloglar\u0131",
          "Arkeolojik ke\u015Fifler",
          "Sanat tarihi konferanslar\u0131",
          "M\u00FCzik tarihi",
          "Sanat ele\u015Ftirmenleri",
          "K\u00FClt\u00FCrel analiz",
          "Arkeolojik ara\u015Ft\u0131rmalar",
          "Eski uygarl\u0131klar",
          "Sanat tarihi sergileri",
          "Mimari incelemeler",
          "K\u00FClt\u00FCrel festivaller",
          "Sanat ve tarih",
          "Arkeolojik eserler",
          "Sanat koleksiyonculu\u011Fu",
          "Sanat terapisi",
          "K\u00FClt\u00FCrel miras koruma projeleri",
          "Sanat hareketleri tarihi",
          "K\u00FClt\u00FCrel \u00E7al\u0131\u015Fmalar",
          "Sanat galerisi incelemeleri",
          "Arkeolojik raporlar",
          "Tarihi olaylar",
          "Sanat dersleri",
          "K\u00FClt\u00FCrel faaliyetler",
          "Sanat ve toplum",
          "Arkeolojik alanlar",
          "Sanat galerisi turlar\u0131",
          "K\u00FClt\u00FCrel miras y\u00F6netimi",
          "Sanat sergisi incelemeleri",
          "Arkeolojik kaz\u0131 y\u00F6ntemleri",
          "Tarihi yap\u0131lar",
          "Sanat ele\u015Ftirisi bloglar\u0131",
          "K\u00FClt\u00FCrel ara\u015Ft\u0131rmalar",
          "Sanat ve k\u00FClt\u00FCr etkinlikleri",
          "Arkeoloji ve tarih",
          "Tarihi ara\u015Ft\u0131rmalar",
          "Sanat m\u00FCze incelemeleri",
          "K\u00FClt\u00FCrel proje y\u00F6netimi",
          "Sanat galerisi sergileri",
          "Arkeolojik eser koruma",
          "Tarihi mek\u00E2nlar",
          "Sanat tarihi ve k\u00FClt\u00FCr",
          "K\u00FClt\u00FCrel miras \u00E7al\u0131\u015Fmalar\u0131",
          "Sanat ve bilim",
          "Arkeolojik kaz\u0131 raporlar\u0131",
          "Tarihi d\u00F6nemler",
          "Sanat ve e\u011Fitim",
          "K\u00FClt\u00FCrel miras turlar\u0131",
          "Sanat ar\u015Fivleri",
          "Arkeolojik alan ke\u015Fifleri",
          "",
        ]
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::encyclopedia.encyclopedia", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::encyclopedia.encyclopedia", "oneToOne", "admin::user"> & Attribute.Private;
    localizations: Attribute.Relation<"api::encyclopedia.encyclopedia", "oneToMany", "api::encyclopedia.encyclopedia">;
    locale: Attribute.String;
  };
}

export interface ApiEventEvent extends Schema.CollectionType {
  collectionName: "events";
  info: {
    singularName: "event";
    pluralName: "events";
    displayName: "Event";
    description: "Sergi Etkinlik vb.";
  };
  options: {
    draftAndPublish: true;
    populateCreatorFields: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    shortDesc: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    startDate: Attribute.Date &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    endDate: Attribute.Date &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    visitStartTime: Attribute.Time &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    visitEndTime: Attribute.Time &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    notes: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 114;
      }>;
    address: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ticketUrl: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::event.event", "oneToOne", "admin::user">;
    updatedBy: Attribute.Relation<"api::event.event", "oneToOne", "admin::user">;
    localizations: Attribute.Relation<"api::event.event", "oneToMany", "api::event.event">;
    locale: Attribute.String;
  };
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: "globals";
  info: {
    singularName: "global";
    pluralName: "globals";
    displayName: "Global";
    name: "global";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    metadata: Attribute.Component<"meta.metadata"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    favicon: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    notificationBanner: Attribute.Component<"elements.notification-banner"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    navbar: Attribute.Component<"layout.navbar"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    footer: Attribute.Component<"layout.footer"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::global.global", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::global.global", "oneToOne", "admin::user"> & Attribute.Private;
    localizations: Attribute.Relation<"api::global.global", "oneToMany", "api::global.global">;
    locale: Attribute.String;
  };
}

export interface ApiMuzeMuze extends Schema.CollectionType {
  collectionName: "muzes";
  info: {
    singularName: "muze";
    pluralName: "muzes";
    displayName: "Muze";
    description: "";
  };
  options: {
    draftAndPublish: true;
    populateCreatorFields: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    coverImage: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    topics: Attribute.Relation<"api::muze.muze", "oneToMany", "api::topic.topic">;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    shortDesc: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    notes: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    visitStartTime: Attribute.Time &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    visitEndTime: Attribute.Time &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    googleMapsUrl: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    addressText: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::muze.muze", "oneToOne", "admin::user">;
    updatedBy: Attribute.Relation<"api::muze.muze", "oneToOne", "admin::user">;
    localizations: Attribute.Relation<"api::muze.muze", "oneToMany", "api::muze.muze">;
    locale: Attribute.String;
  };
}

export interface ApiPagePage extends Schema.CollectionType {
  collectionName: "pages";
  info: {
    singularName: "page";
    pluralName: "pages";
    displayName: "Page";
    name: "page";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    shortName: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    contentSections: Attribute.DynamicZone<
      [
        "sections.hero",
        "sections.heading",
        "sections.jumbotron",
        "sections.hightlighted-topics",
        "sections.hightlighted-events",
        "layout.topic-page",
        "sections.museums",
        "layout.muze-page",
        "layout.encyclopedia-page",
        "sections.encyclopedia-list",
        "sections.blog-list",
        "layout.about-page",
        "sections.calendar",
        "layout.contact-page",
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    heading: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<"shared.seo"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::page.page", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::page.page", "oneToOne", "admin::user"> & Attribute.Private;
    localizations: Attribute.Relation<"api::page.page", "oneToMany", "api::page.page">;
    locale: Attribute.String;
  };
}

export interface ApiTopicTopic extends Schema.CollectionType {
  collectionName: "topics";
  info: {
    singularName: "topic";
    pluralName: "topics";
    displayName: "Topic";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    CoverImage: Attribute.Component<"sections.topic-image", true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    QuickTable: Attribute.Component<"meta.quick-table", true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    TopicKeywords: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    shortDesc: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    content: Attribute.Blocks &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    isBlogText: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<false>;
    isCollectionItem: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<false>;
    recomended_topics: Attribute.Relation<"api::topic.topic", "manyToMany", "api::topic.topic">;
    topics: Attribute.Relation<"api::topic.topic", "manyToMany", "api::topic.topic">;
    encyclopedia: Attribute.Relation<"api::topic.topic", "manyToOne", "api::encyclopedia.encyclopedia">;
    author: Attribute.Relation<"api::topic.topic", "oneToOne", "api::author.author">;
    keywords: Attribute.JSON &
      Attribute.CustomField<
        "plugin::multi-select.multi-select",
        [
          "Sanat",
          "Tarih",
          "K\u00FClt\u00FCr",
          "Gezi",
          "Arkeoloji",
          "Modern sanat",
          "Mimari",
          "Sanat tarihi",
          "Resim",
          "Heykel",
          "Sanat eseri",
          "Sergi",
          "M\u00FCze",
          "Galeri",
          "Geleneksel sanat",
          "\u00C7a\u011Fda\u015F sanat",
          "Antik sanat",
          "Etnografya",
          "K\u00FClt\u00FCrel miras",
          "Tarih \u00F6ncesi",
          "Arkeolojik kaz\u0131",
          "Arkeolojik buluntular",
          "Tarihi eser",
          "Tarihi mekan",
          "K\u00FClt\u00FCrel gezi",
          "Tarihi tur",
          "\u015Eehir turu",
          "K\u00FClt\u00FCr turizmi",
          "An\u0131t",
          "An\u0131tsal yap\u0131",
          "Sanat tarihi m\u00FCzesi",
          "Tarihi binalar",
          "Mimari tasar\u0131m",
          "Modern mimari",
          "Klasik mimari",
          "Orta\u00E7a\u011F mimarisi",
          "R\u00F6nesans d\u00F6nemi",
          "Barok sanat",
          "Gotik sanat",
          "\u0130slam sanat\u0131",
          "Uzak Do\u011Fu sanat\u0131",
          "Latin Amerika sanat\u0131",
          "Yerel sanat",
          "Halk sanat\u0131",
          "El sanatlar\u0131",
          "Sanat festivali",
          "Bienal",
          "Performans sanat\u0131",
          "Video sanat\u0131",
          "Dijital sanat",
          "Foto\u011Fraf\u00E7\u0131l\u0131k",
          "Sanat ele\u015Ftirisi",
          "Sanat kuram\u0131",
          "Sanat hareketleri",
          "Postmodern sanat",
          "Avangard sanat",
          "Minimalist sanat",
          "Soyut sanat",
          "Realist sanat",
          "Empresyonizm",
          "Ekspresyonizm",
          "S\u00FCrrealizm",
          "Dadaizm",
          "F\u00FCt\u00FCrizm",
          "Pop art",
          "Sanat e\u011Fitimi",
          "Sanat tarihi dersleri",
          "Sanat at\u00F6lyesi",
          "Restorasyon",
          "Konservasyon",
          "Sanat m\u00FCzesi",
          "Tarih m\u00FCzesi",
          "Antik kent",
          "Arkeolojik sit alan\u0131",
          "Mozaik sanat",
          "Fresk",
          "\u0130konografi",
          "Numismatik",
          "Epigrafi",
          "Antropoloji",
          "Paleontoloji",
          "Tarihi belgeler",
          "Ar\u015Fiv \u00E7al\u0131\u015Fmas\u0131",
          "Paleografi",
          "Sanat\u00E7\u0131 biyografileri",
          "Sanat ak\u0131mlar\u0131",
          "K\u00FClt\u00FCrel etkinlikler",
          "D\u00FCnya miras\u0131",
          "UNESCO miras listesi",
          "Tarihi romanlar",
          "Tarihi belgeseller",
          "Sanat galerileri",
          "Arkeoloji dergileri",
          "Sanat dergileri",
          "K\u00FClt\u00FCr dergileri",
          "Tarih kitaplar\u0131",
          "K\u00FClt\u00FCrel yay\u0131nlar",
          "Sanat fuarlar\u0131",
          "Sanat \u00F6d\u00FClleri",
          "Tarihi \u015Fahsiyetler",
          "Sanat m\u00FCze gezisi",
          "K\u00FClt\u00FCrel sempozyumlar",
          "Sanat\u00E7\u0131 r\u00F6portajlar\u0131",
          "K\u00FClt\u00FCrel belgeseller",
          "Tarihi diziler",
          "Sanat koleksiyonlar\u0131",
          "K\u00FClt\u00FCrel miras koruma",
          "K\u00FClt\u00FCr sanat etkinlikleri",
          "Sanat bloglar\u0131",
          "Arkeolojik ke\u015Fifler",
          "Sanat tarihi konferanslar\u0131",
          "M\u00FCzik tarihi",
          "Sanat ele\u015Ftirmenleri",
          "K\u00FClt\u00FCrel analiz",
          "Arkeolojik ara\u015Ft\u0131rmalar",
          "Eski uygarl\u0131klar",
          "Sanat tarihi sergileri",
          "Mimari incelemeler",
          "K\u00FClt\u00FCrel festivaller",
          "Sanat ve tarih",
          "Arkeolojik eserler",
          "Sanat koleksiyonculu\u011Fu",
          "Sanat terapisi",
          "K\u00FClt\u00FCrel miras koruma projeleri",
          "Sanat hareketleri tarihi",
          "K\u00FClt\u00FCrel \u00E7al\u0131\u015Fmalar",
          "Sanat galerisi incelemeleri",
          "Arkeolojik raporlar",
          "Tarihi olaylar",
          "Sanat dersleri",
          "K\u00FClt\u00FCrel faaliyetler",
          "Sanat ve toplum",
          "Arkeolojik alanlar",
          "Sanat galerisi turlar\u0131",
          "K\u00FClt\u00FCrel miras y\u00F6netimi",
          "Sanat sergisi incelemeleri",
          "Arkeolojik kaz\u0131 y\u00F6ntemleri",
          "Tarihi yap\u0131lar",
          "Sanat ele\u015Ftirisi bloglar\u0131",
          "K\u00FClt\u00FCrel ara\u015Ft\u0131rmalar",
          "Sanat ve k\u00FClt\u00FCr etkinlikleri",
          "Arkeoloji ve tarih",
          "Tarihi ara\u015Ft\u0131rmalar",
          "Sanat m\u00FCze incelemeleri",
          "K\u00FClt\u00FCrel proje y\u00F6netimi",
          "Sanat galerisi sergileri",
          "Arkeolojik eser koruma",
          "Tarihi mek\u00E2nlar",
          "Sanat tarihi ve k\u00FClt\u00FCr",
          "K\u00FClt\u00FCrel miras \u00E7al\u0131\u015Fmalar\u0131",
          "Sanat ve bilim",
          "Arkeolojik kaz\u0131 raporlar\u0131",
          "Tarihi d\u00F6nemler",
          "Sanat ve e\u011Fitim",
          "K\u00FClt\u00FCrel miras turlar\u0131",
          "Sanat ar\u015Fivleri",
          "Arkeolojik alan ke\u015Fifleri",
        ]
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::topic.topic", "oneToOne", "admin::user"> & Attribute.Private;
    updatedBy: Attribute.Relation<"api::topic.topic", "oneToOne", "admin::user"> & Attribute.Private;
    localizations: Attribute.Relation<"api::topic.topic", "oneToMany", "api::topic.topic">;
    locale: Attribute.String;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface ContentTypes {
      "admin::permission": AdminPermission;
      "admin::user": AdminUser;
      "admin::role": AdminRole;
      "admin::api-token": AdminApiToken;
      "admin::api-token-permission": AdminApiTokenPermission;
      "admin::transfer-token": AdminTransferToken;
      "admin::transfer-token-permission": AdminTransferTokenPermission;
      "plugin::upload.file": PluginUploadFile;
      "plugin::upload.folder": PluginUploadFolder;
      "plugin::content-releases.release": PluginContentReleasesRelease;
      "plugin::content-releases.release-action": PluginContentReleasesReleaseAction;
      "plugin::i18n.locale": PluginI18NLocale;
      "plugin::users-permissions.permission": PluginUsersPermissionsPermission;
      "plugin::users-permissions.role": PluginUsersPermissionsRole;
      "plugin::users-permissions.user": PluginUsersPermissionsUser;
      "api::author.author": ApiAuthorAuthor;
      "api::contact-form.contact-form": ApiContactFormContactForm;
      "api::encyclopedia.encyclopedia": ApiEncyclopediaEncyclopedia;
      "api::event.event": ApiEventEvent;
      "api::global.global": ApiGlobalGlobal;
      "api::muze.muze": ApiMuzeMuze;
      "api::page.page": ApiPagePage;
      "api::topic.topic": ApiTopicTopic;
    }
  }
}

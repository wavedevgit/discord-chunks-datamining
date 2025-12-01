/** Chunk was on web.js **/
/** chunk id: 973616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BA: () => _,
  ZN: () => m,
  ZP: () => h
}), require("./953529.js"), require("./997841.js"), require("./467055.js"), require("./388685.js");
var Chunk480189 = require("./480189.js"),
  Chunk81825 = require("./81825.js"),
  Chunk768581 = require("./768581.js"),
  Chunk584597 = require("./584597.js"),
  Chunk598077 = require("./598077.js"),
  Chunk701488 = require("./701488.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = {
  [Chunk701488.Zc]: 7,
  [Chunk701488.qm]: 12
};

function _(e) {
  let t = {
    os: e.os,
    name: e.name
  };
  return null != e.arguments && (t.arguments = e.arguments), null != e.is_launcher && (t.isLauncher = e.is_launcher), t
}
class m extends Chunk81825.Z {
  static createFromServer(e) {
    return new m(f(u({}, e), {
      coverImage: e.cover_image,
      primarySkuId: e.primary_sku_id,
      bot: null != e.bot ? new s.Z(e.bot) : null,
      thirdPartySkus: e.third_party_skus,
      roleConnectionsVerificationUrl: e.role_connections_verification_url,
      parentId: e.parent_id,
      connectionEntrypointUrl: e.connection_entrypoint_url
    }))
  }
  getIconURL(e, t) {
    return null != this.icon ? a.ZP.getGameAssetURL({
      id: this.id,
      hash: this.icon,
      size: e,
      format: t
    }) : null
  }
  getIconSource(e, t) {
    return null != this.icon ? a.ZP.getGameAssetSource({
      id: this.id,
      hash: this.icon,
      size: e,
      format: t
    }) : null
  }
  getSplashURL(e, t) {
    return null != this.splash ? a.ZP.getGameAssetURL({
      id: this.id,
      hash: this.splash,
      size: e,
      keepAspectRatio: true,
      format: t
    }) : null
  }
  getCoverImageURL(e) {
    return null != this.coverImage ? a.ZP.getApplicationIconURL({
      id: this.id,
      icon: this.coverImage,
      size: e,
      keepAspectRatio: true
    }) : null
  }
  constructor(e) {
    var t, n, r, i, a, o;
    super(), c(this, "id", true), c(this, "name", true), c(this, "icon", true), c(this, "description", true), c(this, "type", true), c(this, "coverImage", true), c(this, "primarySkuId", true), c(this, "bot", true), c(this, "splash", true), c(this, "thirdPartySkus", true), c(this, "isMonetized", true), c(this, "isVerified", true), c(this, "roleConnectionsVerificationUrl", true), c(this, "parentId", true), c(this, "connectionEntrypointUrl", true), this.id = e.id, this.name = e.name, this.icon = e.icon, this.splash = e.splash, this.primarySkuId = e.primarySkuId, this.thirdPartySkus = null != (t = e.thirdPartySkus) ? t : [], this.description = e.description, this.bot = e.bot, this.coverImage = e.coverImage, this.type = e.type, this.isMonetized = null != (n = e.is_monetized) ? n : e.isMonetized, this.isVerified = null != (r = e.is_verified) ? r : e.isVerified, this.roleConnectionsVerificationUrl = null != (i = e.role_connections_verification_url) ? i : e.roleConnectionsVerificationUrl, this.parentId = null != (a = e.parent_id) ? a : e.parentId, this.connectionEntrypointUrl = null != (o = e.connection_entrypoint_url) ? o : e.connectionEntrypointUrl
  }
}
class h extends m {
  static createFromServer(e) {
    var t, n, i;
    return new h(f(u({}, e), {
      coverImage: e.cover_image,
      primarySkuId: e.primary_sku_id,
      bot: null != e.bot ? new s.Z(e.bot) : null,
      thirdPartySkus: e.third_party_skus,
      roleConnectionsVerificationUrl: e.role_connections_verification_url,
      overlayWarn: e.overlay_warn,
      overlayCompatibilityHook: e.overlay_compatibility_hook,
      overlayMethods: null != (n = e.overlay_methods) ? n : r.e.DEFAULT,
      hook: e.hook,
      storeListingSkuId: e.store_listing_sku_id,
      guildId: e.guild_id,
      guild: e.guild,
      publishers: null != e.publishers ? e.publishers.map(o.Z.createFromServer) : [],
      developers: null != e.developers ? e.developers.map(o.Z.createFromServer) : [],
      eulaId: e.eula_id,
      slug: e.slug,
      flags: null != (i = e.flags) ? i : 0,
      maxParticipants: e.max_participants,
      tags: e.tags,
      embeddedActivityConfig: e.embedded_activity_config,
      integrationTypesConfig: null != e.integration_types_config ? Object.fromEntries(Object.entries(e.integration_types_config).map(e => {
        let [t, n] = e;
        return [t, {
          oauth2InstallParams: (null != n ? n : {}).oauth2_install_params
        }]
      })) : true,
      termsOfServiceUrl: e.terms_of_service_url,
      privacyPolicyUrl: e.privacy_policy_url,
      isDiscoverable: e.is_discoverable,
      directoryEntry: e.directory_entry,
      categories: e.categories,
      linkedGames: null == (t = e.linked_games) ? true : t.map(e => f(u({}, e), {
        application: null != e.application ? h.createFromServer(e.application) : true
      })),
      deepLinkUri: e.deeplink_uri
    }))
  }
  mergeFromApplicationUpdate(e) {
    var t, n, r, i, a, o, s, l, c, d, f, p, _, m, g, E, b, y, O, v, S, I, T, A, C, N, P, R, w, D, x, L, j, M, k, U, G, Z, B, F, V, H, Y, W, K;
    return new h({
      id: null != (t = e.id) ? t : this.id,
      name: null != (n = e.name) ? n : this.name,
      icon: null != (r = e.icon) ? r : this.icon,
      splash: null != (i = e.splash) ? i : this.splash,
      overlay: null != (a = e.overlay) ? a : this.overlay,
      overlayWarn: null != (o = e.overlayWarn) ? o : this.overlayWarn,
      overlayCompatibilityHook: null != (s = e.overlayCompatibilityHook) ? s : this.overlayCompatibilityHook,
      overlayMethods: null != (l = e.overlayMethods) ? l : this.overlayMethods,
      hook: null != (c = e.hook) ? c : this.hook,
      aliases: null != (d = e.aliases) ? d : this.aliases,
      publishers: null != (f = e.publishers) ? f : this.publishers,
      developers: null != (p = e.developers) ? p : this.developers,
      primarySkuId: null != (_ = e.primarySkuId) ? _ : this.primarySkuId,
      storeListingSkuId: null != (m = e.storeListingSkuId) ? m : this.storeListingSkuId,
      thirdPartySkus: null != (g = e.thirdPartySkus) ? g : this.thirdPartySkus,
      guildId: null != (E = e.guildId) ? E : this.guildId,
      guild: null != (b = e.guild) ? b : this.guild,
      executables: null != (y = e.executables) ? y : this.executables,
      hashes: null != (O = e.hashes) ? O : this.hashes,
      description: null != (v = e.description) ? v : this.description,
      eulaId: null != (S = e.eulaId) ? S : this.eulaId,
      slug: null != (I = e.slug) ? I : this.slug,
      coverImage: null != (T = e.coverImage) ? T : this.coverImage,
      bot: null != (A = e.bot) ? A : this.bot,
      flags: null != (C = e.flags) ? C : this.flags,
      maxParticipants: null != (N = e.maxParticipants) ? N : this.maxParticipants,
      tags: null != (P = e.tags) ? P : this.tags,
      embeddedActivityConfig: null != (R = e.embeddedActivityConfig) ? R : null != this.embeddedActivityConfig ? u({}, this.embeddedActivityConfig) : true,
      type: null != (w = e.type) ? w : this.type,
      team: null != (D = e.team) ? D : this.team,
      roleConnectionsVerificationUrl: null != (x = e.roleConnectionsVerificationUrl) ? x : this.roleConnectionsVerificationUrl,
      connectionEntrypointUrl: null != (L = e.connectionEntrypointUrl) ? L : this.connectionEntrypointUrl,
      integrationTypesConfig: null != (j = e.integrationTypesConfig) ? j : this.integrationTypesConfig,
      isMonetized: null != (M = e.isMonetized) ? M : this.isMonetized,
      storefront_available: null != (k = e.storefront_available) ? k : this.storefront_available,
      termsOfServiceUrl: null != (U = e.termsOfServiceUrl) ? U : this.termsOfServiceUrl,
      privacyPolicyUrl: null != (G = e.privacyPolicyUrl) ? G : this.privacyPolicyUrl,
      isVerified: null != (Z = e.isVerified) ? Z : this.isVerified,
      customInstallUrl: null != (B = e.customInstallUrl) ? B : this.customInstallUrl,
      installParams: null != (F = e.installParams) ? F : this.installParams,
      isDiscoverable: null != (V = e.isDiscoverable) ? V : this.isDiscoverable,
      directoryEntry: null != (H = e.directoryEntry) ? H : this.directoryEntry,
      categories: null != (Y = e.categories) ? Y : this.categories,
      linkedGames: null != (W = e.linkedGames) ? W : this.linkedGames,
      deepLinkUri: null != (K = e.deepLinkUri) ? K : this.deepLinkUri
    })
  }
  getMaxParticipants() {
    var e, t;
    return null != (t = null != (e = this.maxParticipants) ? module : p[this.id]) ? exports : 0
  }
  supportsIntegrationTypes() {
    for (var e = arguments.length, t = Array(module), n = 0; require < module; require++) exports[require] = arguments[require];
    let r = this.integrationTypesConfig;
    return null != Chunk480189 && exports.every(e => e in r)
  }
  get destinationSkuId() {
    return null != this.storeListingSkuId ? this.storeListingSkuId : this.primarySkuId
  }
  get supportsOutOfProcessOverlay() {
    return h.supportsOutOfProcessOverlay(this.overlayMethods)
  }
  static supportsOutOfProcessOverlay(e) {
    let t = r.e.OUT_OF_PROCESS;
    return null != e && (e & t) === t
  }
  constructor(e) {
    var t, n, i, a, o, s, l, d, p, m, g, E, b, y, O, v, S, I, T, A;
    super(e), c(this, "overlay", true), c(this, "overlayWarn", true), c(this, "overlayCompatibilityHook", true), c(this, "overlayMethods", true), c(this, "hook", true), c(this, "aliases", true), c(this, "publishers", true), c(this, "developers", true), c(this, "storeListingSkuId", true), c(this, "guildId", true), c(this, "guild", true), c(this, "executables", true), c(this, "hashes", true), c(this, "eulaId", true), c(this, "slug", true), c(this, "flags", true), c(this, "maxParticipants", true), c(this, "tags", true), c(this, "embeddedActivityConfig", true), c(this, "team", true), c(this, "integrationTypesConfig", true), c(this, "storefront_available", true), c(this, "termsOfServiceUrl", true), c(this, "privacyPolicyUrl", true), c(this, "isDiscoverable", true), c(this, "customInstallUrl", true), c(this, "installParams", true), c(this, "directoryEntry", true), c(this, "categories", true), c(this, "linkedGames", true), c(this, "deepLinkUri", true), this.overlay = null != (n = e.overlay) && n, this.overlayWarn = null != (i = e.overlayWarn) && i, this.overlayCompatibilityHook = null != (a = e.overlayCompatibilityHook) && a, this.overlayMethods = null != (o = e.overlayMethods) ? o : r.e.DEFAULT, this.hook = null == (s = e.hook) || s, this.aliases = null != (l = e.aliases) ? l : [], this.publishers = null != (d = e.publishers) ? d : [], this.developers = null != (p = e.developers) ? p : [], this.storeListingSkuId = e.storeListingSkuId, this.guildId = e.guildId, this.guild = e.guild, this.executables = (null != (m = e.executables) ? m : []).map(_), this.hashes = null != (g = e.hashes) ? g : [], this.eulaId = e.eulaId, this.slug = e.slug, this.flags = null != (E = e.flags) ? E : 0, this.tags = null != (b = e.tags) ? b : [], this.maxParticipants = e.maxParticipants, this.embeddedActivityConfig = null != (y = e.embedded_activity_config) ? y : e.embeddedActivityConfig, this.team = e.team, this.integrationTypesConfig = e.integrationTypesConfig, this.storefront_available = e.storefront_available, this.termsOfServiceUrl = e.termsOfServiceUrl, this.privacyPolicyUrl = e.privacyPolicyUrl, this.isDiscoverable = null != (O = e.is_discoverable) ? O : e.isDiscoverable, this.customInstallUrl = null != (v = e.custom_install_url) ? v : e.customInstallUrl, this.installParams = null != (S = e.install_params) ? S : e.installParams, this.directoryEntry = null != (I = e.directory_entry) ? I : e.directoryEntry, this.categories = e.categories, this.linkedGames = null != (T = null == (t = e.linked_games) ? true : t.map(e => f(u({}, e), {
      application: null != e.application ? h.createFromServer(e.application) : true
    }))) ? T : e.linkedGames, this.deepLinkUri = null != (A = e.deepLinkUri) ? A : e.deeplink_uri
  }
}
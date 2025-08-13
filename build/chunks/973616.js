/** Chunk was on web.js **/
/** chunk id: 973616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BA: () => p,
  ZN: () => h,
  ZP: () => m
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
let _ = {
  [Chunk701488.Zc]: 7,
  [Chunk701488.qm]: 12
};

function p(e) {
  let t = {
    os: e.os,
    name: e.name
  };
  return null != e.arguments && (t.arguments = e.arguments), null != e.is_launcher && (t.isLauncher = e.is_launcher), t
}
class h extends Chunk81825.Z {
  static createFromServer(e) {
    return new h(f(u({}, e), {
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
    return null != this.icon ? o.ZP.getGameAssetURL({
      id: this.id,
      hash: this.icon,
      size: e,
      format: t
    }) : null
  }
  getIconSource(e, t) {
    return null != this.icon ? o.ZP.getGameAssetSource({
      id: this.id,
      hash: this.icon,
      size: e,
      format: t
    }) : null
  }
  getSplashURL(e, t) {
    return null != this.splash ? o.ZP.getGameAssetURL({
      id: this.id,
      hash: this.splash,
      size: e,
      keepAspectRatio: true,
      format: t
    }) : null
  }
  getCoverImageURL(e) {
    return null != this.coverImage ? o.ZP.getApplicationIconURL({
      id: this.id,
      icon: this.coverImage,
      size: e
    }) : null
  }
  constructor(e) {
    var t, n, r, i, o, a;
    super(), c(this, "id", true), c(this, "name", true), c(this, "icon", true), c(this, "description", true), c(this, "type", true), c(this, "coverImage", true), c(this, "primarySkuId", true), c(this, "bot", true), c(this, "splash", true), c(this, "thirdPartySkus", true), c(this, "isMonetized", true), c(this, "isVerified", true), c(this, "roleConnectionsVerificationUrl", true), c(this, "parentId", true), c(this, "connectionEntrypointUrl", true), this.id = e.id, this.name = e.name, this.icon = e.icon, this.splash = e.splash, this.primarySkuId = e.primarySkuId, this.thirdPartySkus = null != (t = e.thirdPartySkus) ? t : [], this.description = e.description, this.bot = e.bot, this.coverImage = e.coverImage, this.type = e.type, this.isMonetized = null != (n = e.is_monetized) ? n : e.isMonetized, this.isVerified = null != (r = e.is_verified) ? r : e.isVerified, this.roleConnectionsVerificationUrl = null != (i = e.role_connections_verification_url) ? i : e.roleConnectionsVerificationUrl, this.parentId = null != (o = e.parent_id) ? o : e.parentId, this.connectionEntrypointUrl = null != (a = e.connection_entrypoint_url) ? a : e.connectionEntrypointUrl
  }
}
class m extends h {
  static createFromServer(e) {
    var t, n;
    return new m(f(u({}, e), {
      coverImage: e.cover_image,
      primarySkuId: e.primary_sku_id,
      bot: null != e.bot ? new s.Z(e.bot) : null,
      thirdPartySkus: e.third_party_skus,
      roleConnectionsVerificationUrl: e.role_connections_verification_url,
      overlayWarn: e.overlay_warn,
      overlayCompatibilityHook: e.overlay_compatibility_hook,
      overlayMethods: null != (t = e.overlay_methods) ? t : r.e.DEFAULT,
      hook: e.hook,
      storeListingSkuId: e.store_listing_sku_id,
      guildId: e.guild_id,
      guild: e.guild,
      publishers: null != e.publishers ? e.publishers.map(a.Z.createFromServer) : [],
      developers: null != e.developers ? e.developers.map(a.Z.createFromServer) : [],
      eulaId: e.eula_id,
      slug: e.slug,
      flags: null != (n = e.flags) ? n : 0,
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
      linkedGames: e.linked_games
    }))
  }
  mergeFromApplicationUpdate(e) {
    var t, n, r, i, o, a, s, l, c, d, f, _, p, h, g, E, b, y, O, v, I, T, S, A, N, C, R, P, w, D, L, x, M, k, j, U, G, B, Z, F, V, H, Y;
    return new m({
      id: null != (t = e.id) ? t : this.id,
      name: null != (n = e.name) ? n : this.name,
      icon: null != (r = e.icon) ? r : this.icon,
      splash: null != (i = e.splash) ? i : this.splash,
      overlay: null != (o = e.overlay) ? o : this.overlay,
      overlayWarn: null != (a = e.overlayWarn) ? a : this.overlayWarn,
      overlayCompatibilityHook: null != (s = e.overlayCompatibilityHook) ? s : this.overlayCompatibilityHook,
      overlayMethods: null != (l = e.overlayMethods) ? l : this.overlayMethods,
      hook: null != (c = e.hook) ? c : this.hook,
      aliases: null != (d = e.aliases) ? d : this.aliases,
      publishers: null != (f = e.publishers) ? f : this.publishers,
      developers: null != (_ = e.developers) ? _ : this.developers,
      primarySkuId: null != (p = e.primarySkuId) ? p : this.primarySkuId,
      storeListingSkuId: null != (h = e.storeListingSkuId) ? h : this.storeListingSkuId,
      thirdPartySkus: null != (g = e.thirdPartySkus) ? g : this.thirdPartySkus,
      guildId: null != (E = e.guildId) ? E : this.guildId,
      guild: null != (b = e.guild) ? b : this.guild,
      executables: null != (y = e.executables) ? y : this.executables,
      hashes: null != (O = e.hashes) ? O : this.hashes,
      description: null != (v = e.description) ? v : this.description,
      eulaId: null != (I = e.eulaId) ? I : this.eulaId,
      slug: null != (T = e.slug) ? T : this.slug,
      coverImage: null != (S = e.coverImage) ? S : this.coverImage,
      bot: null != (A = e.bot) ? A : this.bot,
      flags: null != (N = e.flags) ? N : this.flags,
      maxParticipants: null != (C = e.maxParticipants) ? C : this.maxParticipants,
      tags: null != (R = e.tags) ? R : this.tags,
      embeddedActivityConfig: null != (P = e.embeddedActivityConfig) ? P : null != this.embeddedActivityConfig ? u({}, this.embeddedActivityConfig) : true,
      type: null != (w = e.type) ? w : this.type,
      team: null != (D = e.team) ? D : this.team,
      roleConnectionsVerificationUrl: null != (L = e.roleConnectionsVerificationUrl) ? L : this.roleConnectionsVerificationUrl,
      integrationTypesConfig: null != (x = e.integrationTypesConfig) ? x : this.integrationTypesConfig,
      isMonetized: null != (M = e.isMonetized) ? M : this.isMonetized,
      storefront_available: null != (k = e.storefront_available) ? k : this.storefront_available,
      termsOfServiceUrl: null != (j = e.termsOfServiceUrl) ? j : this.termsOfServiceUrl,
      privacyPolicyUrl: null != (U = e.privacyPolicyUrl) ? U : this.privacyPolicyUrl,
      isVerified: null != (G = e.isVerified) ? G : this.isVerified,
      customInstallUrl: null != (B = e.customInstallUrl) ? B : this.customInstallUrl,
      installParams: null != (Z = e.installParams) ? Z : this.installParams,
      isDiscoverable: null != (F = e.isDiscoverable) ? F : this.isDiscoverable,
      directoryEntry: null != (V = e.directoryEntry) ? V : this.directoryEntry,
      categories: null != (H = e.categories) ? H : this.categories,
      linkedGames: null != (Y = e.linkedGames) ? Y : this.linkedGames
    })
  }
  getMaxParticipants() {
    var e, t;
    return null != (t = null != (e = this.maxParticipants) ? module : _[this.id]) ? exports : 0
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
    return m.supportsOutOfProcessOverlay(this.overlayMethods)
  }
  static supportsOutOfProcessOverlay(e) {
    let t = r.e.OUT_OF_PROCESS;
    return null != e && (e & t) === t
  }
  constructor(e) {
    var t, n, i, o, a, s, l, u, d, f, _, h, m, g, E, b, y, O;
    super(e), c(this, "overlay", true), c(this, "overlayWarn", true), c(this, "overlayCompatibilityHook", true), c(this, "overlayMethods", true), c(this, "hook", true), c(this, "aliases", true), c(this, "publishers", true), c(this, "developers", true), c(this, "storeListingSkuId", true), c(this, "guildId", true), c(this, "guild", true), c(this, "executables", true), c(this, "hashes", true), c(this, "eulaId", true), c(this, "slug", true), c(this, "flags", true), c(this, "maxParticipants", true), c(this, "tags", true), c(this, "embeddedActivityConfig", true), c(this, "team", true), c(this, "integrationTypesConfig", true), c(this, "storefront_available", true), c(this, "termsOfServiceUrl", true), c(this, "privacyPolicyUrl", true), c(this, "isDiscoverable", true), c(this, "customInstallUrl", true), c(this, "installParams", true), c(this, "directoryEntry", true), c(this, "categories", true), c(this, "linkedGames", true), this.overlay = null != (t = e.overlay) && t, this.overlayWarn = null != (n = e.overlayWarn) && n, this.overlayCompatibilityHook = null != (i = e.overlayCompatibilityHook) && i, this.overlayMethods = null != (o = e.overlayMethods) ? o : r.e.DEFAULT, this.hook = null == (a = e.hook) || a, this.aliases = null != (s = e.aliases) ? s : [], this.publishers = null != (l = e.publishers) ? l : [], this.developers = null != (u = e.developers) ? u : [], this.storeListingSkuId = e.storeListingSkuId, this.guildId = e.guildId, this.guild = e.guild, this.executables = (null != (d = e.executables) ? d : []).map(p), this.hashes = null != (f = e.hashes) ? f : [], this.eulaId = e.eulaId, this.slug = e.slug, this.flags = null != (_ = e.flags) ? _ : 0, this.tags = null != (h = e.tags) ? h : [], this.maxParticipants = e.maxParticipants, this.embeddedActivityConfig = null != (m = e.embedded_activity_config) ? m : e.embeddedActivityConfig, this.team = e.team, this.integrationTypesConfig = e.integrationTypesConfig, this.storefront_available = e.storefront_available, this.termsOfServiceUrl = e.termsOfServiceUrl, this.privacyPolicyUrl = e.privacyPolicyUrl, this.isDiscoverable = null != (g = e.is_discoverable) ? g : e.isDiscoverable, this.customInstallUrl = null != (E = e.custom_install_url) ? E : e.customInstallUrl, this.installParams = null != (b = e.install_params) ? b : e.installParams, this.directoryEntry = null != (y = e.directory_entry) ? y : e.directoryEntry, this.categories = e.categories, this.linkedGames = null != (O = e.linked_games) ? O : e.linkedGames
  }
}
/** Chunk was on web.js **/
/** chunk id: 60717, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./938796.js"), require("./228524.js");
var Chunk315069 = require("./315069.js"),
  Chunk948014 = require("./948014.js"),
  Chunk427157 = require("./427157.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o extends Chunk315069.A {
  static createFromServer(e) {
    let t = e.staff_notes;
    return new o({
      id: e.id,
      applicationId: e.sku.application_id,
      skuId: e.sku.id,
      skuFlags: e.sku.flags,
      summary: e.summary,
      tagline: e.tagline,
      flavorText: e.flavor_text,
      description: e.description,
      childSkuIds: null != e.child_skus ? e.child_skus.map(e => e.id) : null,
      alternativeSkuIds: null != e.alternative_skus ? e.alternative_skus.map(e => e.id) : null,
      carouselItems: null != e.carousel_items ? e.carousel_items.map(e => ({
        assetId: e.asset_id,
        youtubeVideoId: e.youtube_video_id
      })) : null,
      assets: null != e.assets ? e.assets.map(i.L) : null,
      staffNotes: null != t ? {
        content: t.content,
        user: null != t.user ? new a.A(t.user) : null
      } : null,
      guild: null != e.guild ? {
        id: e.guild.id,
        name: e.guild.name,
        icon: e.guild.icon,
        approximateMemberCount: e.guild.approximate_member_count,
        approximatePresenceCount: e.guild.approximate_presence_count
      } : null,
      thumbnail: null != e.thumbnail ? (0, i.L)(e.thumbnail) : null,
      previewVideo: null != e.preview_video ? (0, i.L)(e.preview_video) : null,
      headerBackground: null != e.header_background ? (0, i.L)(e.header_background) : null,
      headerLogoDarkTheme: null != e.header_logo_dark_theme ? (0, i.L)(e.header_logo_dark_theme) : null,
      headerLogoLightTheme: null != e.header_logo_light_theme ? (0, i.L)(e.header_logo_light_theme) : null,
      boxArt: null != e.box_art ? (0, i.L)(e.box_art) : null,
      heroBackground: null != e.hero_background ? (0, i.L)(e.hero_background) : null,
      heroVideo: null != e.hero_video ? (0, i.L)(e.hero_video) : null,
      entitlementBranchId: e.entitlement_branch_id,
      benefits: e.benefits,
      published: e.published
    })
  }
  isSlimDirectoryVersion() {
    return null == this.description
  }
  constructor(e) {
    var t, n, r, i, a, o, l, c, u, d, f, p, _;
    super(), s(this, "id", true), s(this, "applicationId", true), s(this, "skuId", true), s(this, "skuFlags", true), s(this, "summary", true), s(this, "tagline", true), s(this, "flavorText", true), s(this, "description", true), s(this, "carouselItems", true), s(this, "childSkuIds", true), s(this, "alternativeSkuIds", true), s(this, "assets", true), s(this, "staffNotes", true), s(this, "guild", true), s(this, "thumbnail", true), s(this, "boxArt", true), s(this, "previewVideo", true), s(this, "headerBackground", true), s(this, "headerLogoDarkTheme", true), s(this, "headerLogoLightTheme", true), s(this, "heroBackground", true), s(this, "heroVideo", true), s(this, "entitlementBranchId", true), s(this, "benefits", true), s(this, "published", true), this.id = e.id, this.applicationId = e.applicationId, this.skuId = e.skuId, this.skuFlags = e.skuFlags, this.summary = e.summary, this.tagline = e.tagline, this.flavorText = e.flavorText, this.description = e.description, this.carouselItems = null != (t = e.carouselItems) ? t : [], this.childSkuIds = null != (n = e.childSkuIds) ? n : [], this.alternativeSkuIds = null != (r = e.alternativeSkuIds) ? r : [], this.assets = null != (i = e.assets) ? i : [], this.staffNotes = e.staffNotes, this.guild = e.guild, this.thumbnail = null != (a = e.thumbnail) ? a : null, this.boxArt = null != (o = e.boxArt) ? o : null, this.previewVideo = null != (l = e.previewVideo) ? l : null, this.headerBackground = null != (c = e.headerBackground) ? c : null, this.headerLogoDarkTheme = null != (u = e.headerLogoDarkTheme) ? u : null, this.headerLogoLightTheme = null != (d = e.headerLogoLightTheme) ? d : null, this.heroBackground = null != (f = e.heroBackground) ? f : null, this.heroVideo = null != (p = e.heroVideo) ? p : null, this.entitlementBranchId = null != (_ = e.entitlementBranchId) ? _ : null, this.benefits = e.benefits, this.published = !!e.published
  }
}
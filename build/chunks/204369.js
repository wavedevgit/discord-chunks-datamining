/** Chunk was on web.js **/
/** chunk id: 204369, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk919395 = require("./919395.js"),
  Chunk486020 = require("./486020.js"),
  Chunk927578 = require("./927578.js"),
  Chunk289173 = require("./289173.js"),
  Chunk788868 = require("./788868.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e, t) {
  return null == t || "" === t ? e : t
}
class u {
  get premiumSince() {
    return this._userProfile.premiumSince
  }
  get premiumGuildSince() {
    return this._userProfile.premiumGuildSince
  }
  get premiumType() {
    return this._userProfile.premiumType
  }
  get widgets() {
    return this._userProfile.widgets
  }
  get gameWidgets() {
    var e;
    return null == (e = this._userProfile.widgets) ? true : e.filter(s.fu)
  }
  get primaryColor() {
    var e, t;
    return null != (e = null == (t = this.themeColors) ? true : t[0]) ? e : this.accentColor
  }
  get canUsePremiumProfileCustomization() {
    return a.Ay.isPremiumAtLeast(this.premiumType, o.PremiumTypes.TIER_2)
  }
  get canEditThemes() {
    return this.canUsePremiumProfileCustomization
  }
  get application() {
    return this._userProfile.application
  }
  get isLoaded() {
    return true !== this._userProfile && (null == this.guildId || true !== this._guildMemberProfile)
  }
  hasThemeColors() {
    var e, t;
    return (null == (e = this.themeColors) ? true : e[0]) != null || (null == (t = this.themeColors) ? true : t[1]) != null
  }
  hasPremiumCustomization() {
    return this.isUsingGuildMemberBanner() || this.isUsingGuildMemberBio() || null != this.banner || this.hasThemeColors() || null != this.popoutAnimationParticleType
  }
  isUsingGuildMemberBanner() {
    var e;
    return (null == (e = this._guildMemberProfile) ? true : e.banner) != null
  }
  isUsingGuildMemberBio() {
    var e, t;
    return (null == (e = this._guildMemberProfile) ? true : e.bio) != null && (null == (t = this._guildMemberProfile) ? true : t.bio) !== ""
  }
  isUsingGuildMemberPronouns() {
    var e, t;
    return (null == (e = this._guildMemberProfile) ? true : e.pronouns) != null && (null == (t = this._guildMemberProfile) ? true : t.pronouns) !== ""
  }
  getBannerURL(e) {
    let {
      canAnimate: t,
      size: n
    } = e;
    return null != this.guildId && this.isUsingGuildMemberBanner() ? (0, i.ns)({
      id: this.userId,
      guildId: this.guildId,
      banner: this.banner,
      canAnimate: t,
      size: n
    }) : (0, i.z)({
      id: this.userId,
      banner: this.banner,
      canAnimate: t,
      size: n
    })
  }
  getPreviewBanner(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 480;
    return null != e ? e : null === e ? this.isUsingGuildMemberBanner() ? (0, i.z)({
      id: this.userId,
      banner: this._userProfile.banner,
      canAnimate: t,
      size: n
    }) : null : this.getBannerURL({
      canAnimate: t,
      size: n
    })
  }
  getPreviewBio(e) {
    var t;
    return (0, r.lw)({
      pendingValue: e,
      userValue: this._userProfile.bio,
      guildValue: null == (t = this._guildMemberProfile) ? true : t.bio,
      guildId: this.guildId
    })
  }
  getPreviewThemeColors(e) {
    return (null == e ? true : e[0]) != null && (null == e ? true : e[1]) != null ? e : true !== e ? this._userProfile.themeColors : this.themeColors
  }
  getBadges() {
    var e, t, n;
    return [...null != (e = this._userProfile.badges) ? e : [], ...null != (t = null == (n = this._guildMemberProfile) ? true : n.badges) ? t : []]
  }
  getLegacyUsername() {
    return this._userProfile.legacyUsername
  }
  constructor(e, t) {
    var n, r, i, a;
    l(this, "userId", true), l(this, "guildId", true), l(this, "banner", true), l(this, "bio", true), l(this, "pronouns", true), l(this, "accentColor", true), l(this, "themeColors", true), l(this, "profileEffect", true), l(this, "popoutAnimationParticleType", true), l(this, "fetchStartedAt", true), l(this, "fetchEndedAt", true), l(this, "_userProfile", true), l(this, "_guildMemberProfile", true), this.userId = e.userId, this.guildId = null == t ? true : t.guildId, this.banner = null != (n = null == t ? true : t.banner) ? n : e.banner, this.bio = c(e.bio, null == t ? true : t.bio), this.pronouns = c(e.pronouns, null == t ? true : t.pronouns), this.accentColor = e.accentColor, this.themeColors = null != (r = null == t ? true : t.themeColors) ? r : e.themeColors, this.profileEffect = null != (i = null == t ? true : t.profileEffect) ? i : e.profileEffect, this.popoutAnimationParticleType = null != (a = null == t ? true : t.popoutAnimationParticleType) ? a : e.popoutAnimationParticleType, this.fetchStartedAt = e.fetchStartedAt, this.fetchEndedAt = e.fetchEndedAt, this._userProfile = e, this._guildMemberProfile = t
  }
}
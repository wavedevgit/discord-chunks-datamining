/** Chunk was on web.js **/
/** chunk id: 598077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./415506.js"), require("./997841.js");
var Chunk149765 = require("./149765.js"),
  Chunk81825 = require("./81825.js"),
  Chunk864106 = require("./864106.js"),
  Chunk131016 = require("./131016.js"),
  Chunk602210 = require("./602210.js"),
  Chunk4242 = require("./4242.js"),
  Chunk768581 = require("./768581.js"),
  Chunk630388 = require("./630388.js"),
  Chunk111361 = require("./111361.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class b extends Chunk81825.Z {
  get createdAt() {
    return new Date(Chunk709054.default.extractTimestamp(this.id))
  }
  hasVerifiedEmailOrPhone() {
    returntrue === this.verified || null != this.phone
  }
  getAvatarURL(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : c.$k,
      i = null != e ? this.guildMemberAvatars[e] : true;
    return null != i && null != e ? c.ZP.getGuildMemberAvatarURLSimple({
      guildId: e,
      avatar: i,
      userId: this.id,
      canAnimate: n,
      canWebP: r
    }) : c.ZP.getUserAvatarURL(this, n, t, null, r)
  }
  addGuildAvatarHash(e, t) {
    if (this.guildMemberAvatars[e] === t) return this;
    let n = E(m({}, this.guildMemberAvatars), {
      [e]: t
    });
    return this.merge({
      guildMemberAvatars: n
    })
  }
  removeGuildAvatarHash(e) {
    if (true === this.guildMemberAvatars[e]) return this;
    let t = E(m({}, this.guildMemberAvatars), {
      [e]: true
    });
    return this.merge({
      guildMemberAvatars: t
    })
  }
  getAvatarSource(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : true;
    if (null != e) {
      let r = this.guildMemberAvatars[e];
      if (null != r) return c.ZP.getAnimatableSourceWithFallback(t, t => c.ZP.makeSource(c.ZP.getGuildMemberAvatarURLSimple({
        guildId: e,
        avatar: r,
        userId: this.id,
        canAnimate: t,
        size: n
      })))
    }
    return c.ZP.getAnimatableSourceWithFallback(t, e => c.ZP.getUserAvatarSource(this, e, n))
  }
  isClaimed() {
    return null != this.email || null != this.phone
  }
  isPhoneVerified() {
    return null != this.phone
  }
  toString() {
    return "" !== this.username ? this.username : "???"
  }
  get tag() {
    return "".concat(this.username, "#").concat("".concat(this.discriminator).padStart(4, "0"))
  }
  hasPurchasedFlag(e) {
    return (0, u.yE)(this.purchasedFlags, e)
  }
  hasPremiumUsageFlag(e) {
    return (0, u.yE)(this.premiumUsageFlags, e)
  }
  hasHadSKU(e) {
    let t = p.vL[e];
    return null != t && this.hasPurchasedFlag(t)
  }
  hasHadPremium() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = this.hasPurchasedFlag(Chunk474936.in.PREMIUM_TIER_0),
      n = this.hasPurchasedFlag(Chunk474936.in.PREMIUM_TIER_1),
      r = this.hasPurchasedFlag(Chunk474936.in.PREMIUM_TIER_2);
    switch (module) {
      case Chunk474936.p9.TIER_0:
        return exports;
      case Chunk474936.p9.TIER_1:
        return require;
      case Chunk474936.p9.TIER_2:
        return Chunk149765;
      default:
        return exports || require || Chunk149765
    }
  }
  hadPremiumSubscription() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null;
    return !(0, Chunk111361.I5)(this) && this.hasHadPremium(module)
  }
  hasFreePremium() {
    return this.isStaff() || this.hasFlag(Chunk981631.xW$.PARTNER) || this.isStaffPersonal()
  }
  hasUrgentMessages() {
    return this.hasFlag(Chunk981631.xW$.HAS_UNREAD_URGENT_MESSAGES)
  }
  isNonUserBot() {
    return this.isSystemUser() || this.bot && this.discriminator === Chunk981631.fo$
  }
  isLocalBot() {
    return this.bot && this.id === Chunk981631.LAt
  }
  isVerifiedBot() {
    return this.isSystemUser() || this.isLocalBot() || this.hasFlag(Chunk981631.xW$.VERIFIED_BOT)
  }
  isSystemUser() {
    returntrue === this.system
  }
  hasAvatarForGuild(e) {
    return null != e && null != this.guildMemberAvatars[e]
  }
  hasUniqueUsername() {
    return "0" === this.discriminator
  }
  get isProvisional() {
    return this.hasFlag(Chunk981631.xW$.PROVISIONAL_ACCOUNT)
  }
  get avatarDecoration() {
    return this.avatarDecorationData
  }
  set avatarDecoration(e) {
    this.avatarDecorationData = (0, o.FG)(e)
  }
  get nameplate() {
    var e;
    return (0, Chunk4242.Pb)(null == (e = this.collectibles) ? true : module.nameplate)
  }
  constructor(e) {
    var t, n, i, o, l, c, u, d, f, p, m, g, E, b, y, O, v, I, T, S, A, N, C, R, P, w, D, L, x, M, j, k, U;
    super(), h(this, "id", true), h(this, "username", true), h(this, "discriminator", true), h(this, "avatar", true), h(this, "avatarDecorationData", true), h(this, "banner", true), h(this, "email", true), h(this, "verified", true), h(this, "bot", true), h(this, "system", true), h(this, "mfaEnabled", true), h(this, "mobile", true), h(this, "desktop", true), h(this, "premiumType", true), h(this, "flags", true), h(this, "publicFlags", true), h(this, "purchasedFlags", true), h(this, "premiumUsageFlags", true), h(this, "phone", true), h(this, "nsfwAllowed", true), h(this, "ageVerificationStatus", true), h(this, "guildMemberAvatars", true), h(this, "hasBouncedEmail", true), h(this, "personalConnectionId", true), h(this, "globalName", true), h(this, "primaryGuild", true), h(this, "collectibles", true), h(this, "displayNameStyles", true), h(this, "hasFlag", e => false), h(this, "isStaff", () => false), h(this, "isStaffPersonal", () => false), h(this, "hasAnyStaffLevel", () => false);
    let G = null != (n = e.premium_type) ? n : e.premiumType;
    this.id = e.id, this.username = null != (i = e.username) ? i : "", this.discriminator = null != (o = e.discriminator) ? o : _.fo$, this.avatar = null != (l = e.avatar) ? l : null, this.avatarDecoration = null != (c = e.avatar_decoration_data) ? c : e.avatarDecorationData, this.email = null != (u = e.email) ? u : null, this.verified = null != (d = e.verified) && d, this.bot = null != (f = e.bot) && f, this.system = null != (p = e.system) && p, this.mfaEnabled = null != (g = null != (m = e.mfa_enabled) ? m : e.mfaEnabled) && g, this.mobile = null != (E = e.mobile) && E, this.desktop = null != (b = e.desktop) && b, this.premiumType = G === _.WND ? null : G, this.flags = null != (y = e.flags) ? y : 0, this.publicFlags = null != (v = null != (O = e.public_flags) ? O : e.publicFlags) ? v : 0, this.purchasedFlags = null != (T = null != (I = e.purchased_flags) ? I : e.purchasedFlags) ? T : 0, this.premiumUsageFlags = null != (A = null != (S = e.premium_usage_flags) ? S : e.premiumUsageFlags) ? A : 0, this.phone = null != (N = e.phone) ? N : null, this.nsfwAllowed = null != (C = e.nsfw_allowed) ? C : e.nsfwAllowed, this.ageVerificationStatus = null != (R = e.age_verification_status) ? R : e.ageVerificationStatus, this.guildMemberAvatars = null != (P = e.guildMemberAvatars) ? P : {}, this.hasBouncedEmail = null != (D = null != (w = e.has_bounced_email) ? w : e.hasBouncedEmail) && D, this.personalConnectionId = null != (x = null != (L = e.personal_connection_id) ? L : e.personalConnectionId) ? x : null, this.globalName = null != (M = e.global_name) ? M : e.globalName, this.banner = e.banner, this.primaryGuild = (0, s.l)(null != (k = null != (j = e.primary_guild) ? j : e.primaryGuild) ? k : null), this.collectibles = e.collectibles, this.displayNameStyles = null != (U = e.displayNameStyles) ? U : (0, a.bN)(e.display_name_styles), Object.defineProperties(this, {
      hasFlag: {
        writable: false,
        configurable: false,
        enumerable: false,
        value: e => {
          if (e <= 0x40000000) return ((this.flags | this.publicFlags) & e) === e;
          let t = r.vB(this.flags),
            n = r.vB(this.publicFlags),
            i = r.vB(e);
          return r.e$(r.$e(t, n), i)
        }
      },
      isStaff: {
        writable: false,
        configurable: false,
        enumerable: false,
        value: () => this.hasFlag(_.xW$.STAFF)
      },
      isStaffPersonal: {
        writable: false,
        configurable: false,
        enumerable: false,
        value: () => !this.hasFlag(_.xW$.STAFF) && null != this.personalConnectionId
      },
      hasAnyStaffLevel: {
        writable: false,
        configurable: false,
        enumerable: false,
        value: () => this.hasFlag(_.xW$.STAFF) || this.hasFlag(_.xW$.COLLABORATOR) || this.hasFlag(_.xW$.RESTRICTED_COLLABORATOR)
      }
    }), (null == (t = this.globalName) ? true : t.length) === 0 && (this.globalName = null)
  }
}
new b({
  id: "0"
})
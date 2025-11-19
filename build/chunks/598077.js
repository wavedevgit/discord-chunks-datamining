/** Chunk was on web.js **/
/** chunk id: 598077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./415506.js"), require("./997841.js");
var Chunk149765 = require("./149765.js"),
  Chunk813820 = require("./813820.js"),
  Chunk81825 = require("./81825.js"),
  Chunk864106 = require("./864106.js"),
  Chunk131016 = require("./131016.js"),
  Chunk602210 = require("./602210.js"),
  Chunk4242 = require("./4242.js"),
  Chunk921383 = require("./921383.js"),
  Chunk768581 = require("./768581.js"),
  Chunk630388 = require("./630388.js"),
  Chunk111361 = require("./111361.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class O extends Chunk81825.Z {
  get createdAt() {
    return new Date(Chunk709054.default.extractTimestamp(this.id))
  }
  hasVerifiedEmailOrPhone() {
    returntrue === this.verified || null != this.phone
  }
  getAvatarURL(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : d.$k,
      i = null != e ? this.guildMemberAvatars[e] : true;
    return null != i && null != e ? d.ZP.getGuildMemberAvatarURLSimple({
      guildId: e,
      avatar: i,
      userId: this.id,
      canAnimate: n,
      canWebP: r
    }) : d.ZP.getUserAvatarURL(this, n, t, null, r)
  }
  addGuildAvatarHash(e, t) {
    if (this.guildMemberAvatars[e] === t) return this;
    let n = y(E({}, this.guildMemberAvatars), {
      [e]: t
    });
    return this.merge({
      guildMemberAvatars: n
    })
  }
  removeGuildAvatarHash(e) {
    if (true === this.guildMemberAvatars[e]) return this;
    let t = y(E({}, this.guildMemberAvatars), {
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
      if (null != r) return d.ZP.getAnimatableSourceWithFallback(t, t => d.ZP.makeSource(d.ZP.getGuildMemberAvatarURLSimple({
        guildId: e,
        avatar: r,
        userId: this.id,
        canAnimate: t,
        size: n
      })))
    }
    return d.ZP.getAnimatableSourceWithFallback(t, e => d.ZP.getUserAvatarSource(this, e, n))
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
    return (0, f.yE)(this.purchasedFlags, e)
  }
  hasPremiumUsageFlag(e) {
    return (0, f.yE)(this.premiumUsageFlags, e)
  }
  hasHadSKU(e) {
    let t = m.vL[e];
    return null != t && this.hasPurchasedFlag(t)
  }
  hasHadPremium() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = this.hasPurchasedFlag(Chunk474936.in.PREMIUM_TIER_0),
      n = this.hasPurchasedFlag(Chunk474936.in.PREMIUM_TIER_1),
      r = this.hasPurchasedFlag(Chunk474936.in.PREMIUM_TIER_2);
    switch (module) {
      case Chunk474936.PremiumTypes.TIER_0:
        return exports;
      case Chunk474936.PremiumTypes.TIER_1:
        return require;
      case Chunk474936.PremiumTypes.TIER_2:
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
  isPremiumWithPremiumGroup() {
    var e;
    return (0, Chunk111361.I5)(this, Chunk474936.PremiumTypes.TIER_2) && (null == (e = this.premiumState) ? true : module.premiumSource) === Chunk813820.d3.SUBSCRIPTION_GROUP
  }
  isPremiumWithFractionalPremiumOnly() {
    var e, t, n;
    return (0, Chunk111361.I5)(this, Chunk474936.PremiumTypes.TIER_2) && ((null == (e = this.premiumState) ? true : module.premiumSubscriptionType) === Chunk813820.W$.NONE_UNSPECIFIED || (null == (t = this.premiumState) ? true : exports.premiumSubscriptionType) === Chunk813820.W$.BOOST_ONLY) && (null == (n = this.premiumState) ? true : require.premiumSource) === Chunk813820.d3.FRACTIONAL_NITRO
  }
  isFractionalPremiumWithNoSubscription() {
    var e;
    return (0, Chunk111361.I5)(this, Chunk474936.PremiumTypes.TIER_2) && (null == (e = this.premiumState) ? true : module.premiumSource) === Chunk813820.d3.FRACTIONAL_NITRO && this.premiumState.premiumSubscriptionType !== Chunk813820.W$.TIER_2
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
  get premiumGroupRole() {
    var e, t;
    return null != (t = null == (e = this.premiumState) ? true : module.premiumSubscriptionGroupRole) ? exports : Chunk813820.bF.UNSPECIFIED
  }
  constructor(e) {
    var t, n, i, a, o, c, d, f, _, p, m, E, b, y, O, v, I, T, S, A, C, N, R, P, D, w, L, x, M, k, j, U, G, B;
    super(), g(this, "id", true), g(this, "username", true), g(this, "discriminator", true), g(this, "avatar", true), g(this, "avatarDecorationData", true), g(this, "banner", true), g(this, "email", true), g(this, "verified", true), g(this, "bot", true), g(this, "system", true), g(this, "mfaEnabled", true), g(this, "mobile", true), g(this, "desktop", true), g(this, "premiumType", true), g(this, "flags", true), g(this, "publicFlags", true), g(this, "purchasedFlags", true), g(this, "premiumUsageFlags", true), g(this, "phone", true), g(this, "nsfwAllowed", true), g(this, "ageVerificationStatus", true), g(this, "guildMemberAvatars", true), g(this, "hasBouncedEmail", true), g(this, "personalConnectionId", true), g(this, "globalName", true), g(this, "primaryGuild", true), g(this, "collectibles", true), g(this, "displayNameStyles", true), g(this, "premiumState", true), g(this, "hasFlag", e => false), g(this, "isStaff", () => false), g(this, "isStaffPersonal", () => false), g(this, "hasAnyStaffLevel", () => false);
    let Z = null != (n = e.premium_type) ? n : e.premiumType;
    this.id = e.id, this.username = null != (i = e.username) ? i : "", this.discriminator = null != (a = e.discriminator) ? a : h.fo$, this.avatar = null != (o = e.avatar) ? o : null, this.avatarDecoration = null != (c = e.avatar_decoration_data) ? c : e.avatarDecorationData, this.email = null != (d = e.email) ? d : null, this.verified = null != (f = e.verified) && f, this.bot = null != (_ = e.bot) && _, this.system = null != (p = e.system) && p, this.mfaEnabled = null != (E = null != (m = e.mfa_enabled) ? m : e.mfaEnabled) && E, this.mobile = null != (b = e.mobile) && b, this.desktop = null != (y = e.desktop) && y, this.premiumType = Z === h.WND ? null : Z, this.flags = null != (O = e.flags) ? O : 0, this.publicFlags = null != (I = null != (v = e.public_flags) ? v : e.publicFlags) ? I : 0, this.purchasedFlags = null != (S = null != (T = e.purchased_flags) ? T : e.purchasedFlags) ? S : 0, this.premiumUsageFlags = null != (C = null != (A = e.premium_usage_flags) ? A : e.premiumUsageFlags) ? C : 0, this.phone = null != (N = e.phone) ? N : null, this.nsfwAllowed = null != (R = e.nsfw_allowed) ? R : e.nsfwAllowed, this.ageVerificationStatus = null != (P = e.age_verification_status) ? P : e.ageVerificationStatus, this.guildMemberAvatars = null != (D = e.guildMemberAvatars) ? D : {}, this.hasBouncedEmail = null != (L = null != (w = e.has_bounced_email) ? w : e.hasBouncedEmail) && L, this.personalConnectionId = null != (M = null != (x = e.personal_connection_id) ? x : e.personalConnectionId) ? M : null, this.globalName = null != (k = e.global_name) ? k : e.globalName, this.banner = e.banner, this.primaryGuild = (0, l.l)(null != (U = null != (j = e.primary_guild) ? j : e.primaryGuild) ? U : null), this.collectibles = e.collectibles, this.displayNameStyles = null != (G = e.displayNameStyles) ? G : (0, s.bN)(e.display_name_styles), this.premiumState = null != (B = e.premiumState) ? B : (0, u.C)(e.premium_state), Object.defineProperties(this, {
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
        value: () => this.hasFlag(h.xW$.STAFF)
      },
      isStaffPersonal: {
        writable: false,
        configurable: false,
        enumerable: false,
        value: () => !this.hasFlag(h.xW$.STAFF) && null != this.personalConnectionId
      },
      hasAnyStaffLevel: {
        writable: false,
        configurable: false,
        enumerable: false,
        value: () => this.hasFlag(h.xW$.STAFF) || this.hasFlag(h.xW$.COLLABORATOR) || this.hasFlag(h.xW$.RESTRICTED_COLLABORATOR)
      }
    }), (null == (t = this.globalName) ? true : t.length) === 0 && (this.globalName = null)
  }
}
new O({
  id: "0"
})
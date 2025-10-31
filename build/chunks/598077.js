/** Chunk was on web.js **/
/** chunk id: 598077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./415506.js"), require("./997841.js");
var Chunk149765 = require("./149765.js"),
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

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class y extends Chunk81825.Z {
  get createdAt() {
    return new Date(Chunk709054.default.extractTimestamp(this.id))
  }
  hasVerifiedEmailOrPhone() {
    returntrue === this.verified || null != this.phone
  }
  getAvatarURL(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : u.$k,
      i = null != e ? this.guildMemberAvatars[e] : true;
    return null != i && null != e ? u.ZP.getGuildMemberAvatarURLSimple({
      guildId: e,
      avatar: i,
      userId: this.id,
      canAnimate: n,
      canWebP: r
    }) : u.ZP.getUserAvatarURL(this, n, t, null, r)
  }
  addGuildAvatarHash(e, t) {
    if (this.guildMemberAvatars[e] === t) return this;
    let n = b(g({}, this.guildMemberAvatars), {
      [e]: t
    });
    return this.merge({
      guildMemberAvatars: n
    })
  }
  removeGuildAvatarHash(e) {
    if (true === this.guildMemberAvatars[e]) return this;
    let t = b(g({}, this.guildMemberAvatars), {
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
      if (null != r) return u.ZP.getAnimatableSourceWithFallback(t, t => u.ZP.makeSource(u.ZP.getGuildMemberAvatarURLSimple({
        guildId: e,
        avatar: r,
        userId: this.id,
        canAnimate: t,
        size: n
      })))
    }
    return u.ZP.getAnimatableSourceWithFallback(t, e => u.ZP.getUserAvatarSource(this, e, n))
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
    return (0, d.yE)(this.purchasedFlags, e)
  }
  hasPremiumUsageFlag(e) {
    return (0, d.yE)(this.premiumUsageFlags, e)
  }
  hasHadSKU(e) {
    let t = h.vL[e];
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
    this.avatarDecorationData = (0, a.FG)(e)
  }
  get nameplate() {
    var e;
    return (0, Chunk4242.Pb)(null == (e = this.collectibles) ? true : module.nameplate)
  }
  constructor(e) {
    var t, n, i, a, l, u, d, f, _, h, g, E, b, y, O, v, I, T, S, A, C, N, R, P, w, D, x, L, M, j, k, U, G, B;
    super(), m(this, "id", true), m(this, "username", true), m(this, "discriminator", true), m(this, "avatar", true), m(this, "avatarDecorationData", true), m(this, "banner", true), m(this, "email", true), m(this, "verified", true), m(this, "bot", true), m(this, "system", true), m(this, "mfaEnabled", true), m(this, "mobile", true), m(this, "desktop", true), m(this, "premiumType", true), m(this, "flags", true), m(this, "publicFlags", true), m(this, "purchasedFlags", true), m(this, "premiumUsageFlags", true), m(this, "phone", true), m(this, "nsfwAllowed", true), m(this, "ageVerificationStatus", true), m(this, "guildMemberAvatars", true), m(this, "hasBouncedEmail", true), m(this, "personalConnectionId", true), m(this, "globalName", true), m(this, "primaryGuild", true), m(this, "collectibles", true), m(this, "displayNameStyles", true), m(this, "premiumState", true), m(this, "hasFlag", e => false), m(this, "isStaff", () => false), m(this, "isStaffPersonal", () => false), m(this, "hasAnyStaffLevel", () => false);
    let Z = null != (n = e.premium_type) ? n : e.premiumType;
    this.id = e.id, this.username = null != (i = e.username) ? i : "", this.discriminator = null != (a = e.discriminator) ? a : p.fo$, this.avatar = null != (l = e.avatar) ? l : null, this.avatarDecoration = null != (u = e.avatar_decoration_data) ? u : e.avatarDecorationData, this.email = null != (d = e.email) ? d : null, this.verified = null != (f = e.verified) && f, this.bot = null != (_ = e.bot) && _, this.system = null != (h = e.system) && h, this.mfaEnabled = null != (E = null != (g = e.mfa_enabled) ? g : e.mfaEnabled) && E, this.mobile = null != (b = e.mobile) && b, this.desktop = null != (y = e.desktop) && y, this.premiumType = Z === p.WND ? null : Z, this.flags = null != (O = e.flags) ? O : 0, this.publicFlags = null != (I = null != (v = e.public_flags) ? v : e.publicFlags) ? I : 0, this.purchasedFlags = null != (S = null != (T = e.purchased_flags) ? T : e.purchasedFlags) ? S : 0, this.premiumUsageFlags = null != (C = null != (A = e.premium_usage_flags) ? A : e.premiumUsageFlags) ? C : 0, this.phone = null != (N = e.phone) ? N : null, this.nsfwAllowed = null != (R = e.nsfw_allowed) ? R : e.nsfwAllowed, this.ageVerificationStatus = null != (P = e.age_verification_status) ? P : e.ageVerificationStatus, this.guildMemberAvatars = null != (w = e.guildMemberAvatars) ? w : {}, this.hasBouncedEmail = null != (x = null != (D = e.has_bounced_email) ? D : e.hasBouncedEmail) && x, this.personalConnectionId = null != (M = null != (L = e.personal_connection_id) ? L : e.personalConnectionId) ? M : null, this.globalName = null != (j = e.global_name) ? j : e.globalName, this.banner = e.banner, this.primaryGuild = (0, s.l)(null != (U = null != (k = e.primary_guild) ? k : e.primaryGuild) ? U : null), this.collectibles = e.collectibles, this.displayNameStyles = null != (G = e.displayNameStyles) ? G : (0, o.bN)(e.display_name_styles), this.premiumState = null != (B = e.premiumState) ? B : (0, c.C)(e.premium_state), Object.defineProperties(this, {
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
        value: () => this.hasFlag(p.xW$.STAFF)
      },
      isStaffPersonal: {
        writable: false,
        configurable: false,
        enumerable: false,
        value: () => !this.hasFlag(p.xW$.STAFF) && null != this.personalConnectionId
      },
      hasAnyStaffLevel: {
        writable: false,
        configurable: false,
        enumerable: false,
        value: () => this.hasFlag(p.xW$.STAFF) || this.hasFlag(p.xW$.COLLABORATOR) || this.hasFlag(p.xW$.RESTRICTED_COLLABORATOR)
      }
    }), (null == (t = this.globalName) ? true : t.length) === 0 && (this.globalName = null)
  }
}
new y({
  id: "0"
})
/** Chunk was on web.js **/
/** chunk id: 427157, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./65821.js"), require("./938796.js");
var Chunk136722 = require("./136722.js"),
  Chunk665260 = require("./665260.js"),
  Chunk988506 = require("./988506.js"),
  Chunk315069 = require("./315069.js"),
  Chunk507698 = require("./507698.js"),
  Chunk945096 = require("./945096.js"),
  Chunk47537 = require("./47537.js"),
  Chunk369496 = require("./369496.js"),
  Chunk392737 = require("./392737.js"),
  Chunk486020 = require("./486020.js"),
  Chunk474090 = require("./474090.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

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

function y(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class O extends Chunk315069.A {
  get createdAt() {
    return new Date(_.default.extractTimestamp(this.id))
  }
  hasVerifiedEmailOrPhone() {
    returntrue === this.verified || null != this.phone
  }
  getAvatarURL(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : f.QB,
      i = null != e ? this.guildMemberAvatars[e] : true;
    return null != i && null != e ? f.Ay.getGuildMemberAvatarURLSimple({
      guildId: e,
      avatar: i,
      userId: this.id,
      canAnimate: n,
      canWebP: r
    }) : f.Ay.getUserAvatarURL(this, n, t, null, r)
  }
  addGuildAvatarHash(e, t) {
    if (this.guildMemberAvatars[e] === t) return this;
    let n = b(E({}, this.guildMemberAvatars), {
      [e]: t
    });
    return this.merge({
      guildMemberAvatars: n
    })
  }
  removeGuildAvatarHash(e) {
    if (true === this.guildMemberAvatars[e]) return this;
    let t = b(E({}, this.guildMemberAvatars), {
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
      if (null != r) return f.Ay.getAnimatableSourceWithFallback(t, t => f.Ay.makeSource(f.Ay.getGuildMemberAvatarURLSimple({
        guildId: e,
        avatar: r,
        userId: this.id,
        canAnimate: t,
        size: n
      })))
    }
    return f.Ay.getAnimatableSourceWithFallback(t, e => f.Ay.getUserAvatarSource(this, e, n))
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
    return (0, i.Lt)(this.purchasedFlags, e)
  }
  hasPremiumUsageFlag(e) {
    return (0, i.Lt)(this.premiumUsageFlags, e)
  }
  hasHadSKU(e) {
    let t = m.OO[e];
    return null != t && this.hasPurchasedFlag(t)
  }
  hasHadPremium() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = this.hasPurchasedFlag(m.lA.PREMIUM_TIER_0),
      n = this.hasPurchasedFlag(m.lA.PREMIUM_TIER_1),
      r = this.hasPurchasedFlag(m.lA.PREMIUM_TIER_2);
    switch (e) {
      case m.PremiumTypes.TIER_0:
        return t;
      case m.PremiumTypes.TIER_1:
        return n;
      case m.PremiumTypes.TIER_2:
        return r;
      default:
        return t || n || r
    }
  }
  hadPremiumSubscription() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null;
    return !(0, p.ki)(this) && this.hasHadPremium(e)
  }
  hasFreePremium() {
    return this.isStaff() || this.hasFlag(h.nhx.PARTNER) || this.isStaffPersonal()
  }
  isPremiumWithPremiumGroup() {
    var e;
    return (0, p.ki)(this, m.PremiumTypes.TIER_2) && (null == (e = this.premiumState) ? true : e.premiumSource) === a.fE.SUBSCRIPTION_GROUP
  }
  isPremiumWithFractionalPremiumOnly() {
    var e, t, n;
    return (0, p.ki)(this, m.PremiumTypes.TIER_2) && ((null == (e = this.premiumState) ? true : e.premiumSubscriptionType) === a.jK.NONE_UNSPECIFIED || (null == (t = this.premiumState) ? true : t.premiumSubscriptionType) === a.jK.BOOST_ONLY) && (null == (n = this.premiumState) ? true : n.premiumSource) === a.fE.FRACTIONAL_NITRO
  }
  isFractionalPremiumWithNoStandardSub() {
    var e;
    return (0, p.ki)(this, m.PremiumTypes.TIER_2) && (null == (e = this.premiumState) ? true : e.premiumSource) === a.fE.FRACTIONAL_NITRO && this.premiumState.premiumSubscriptionType !== a.jK.TIER_2
  }
  hasUrgentMessages() {
    return this.hasFlag(h.nhx.HAS_UNREAD_URGENT_MESSAGES)
  }
  isNonUserBot() {
    return this.isSystemUser() || this.bot && this.discriminator === h.h3J
  }
  isLocalBot() {
    return this.bot && this.id === h.oIV
  }
  isVerifiedBot() {
    return this.isSystemUser() || this.isLocalBot() || this.hasFlag(h.nhx.VERIFIED_BOT)
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
  isPremiumGroupMember() {
    return this.isPremiumWithPremiumGroup() && this.premiumGroupRole === a.qT.MEMBER
  }
  isPremiumGroupPrimary() {
    return this.isPremiumWithPremiumGroup() && this.premiumGroupRole === a.qT.PRIMARY
  }
  get isProvisional() {
    return this.hasFlag(h.nhx.PROVISIONAL_ACCOUNT)
  }
  get avatarDecoration() {
    return this.avatarDecorationData
  }
  set avatarDecoration(e) {
    this.avatarDecorationData = (0, s.Xq)(e)
  }
  get nameplate() {
    var e;
    return (0, u.WK)(null == (e = this.collectibles) ? true : e.nameplate)
  }
  get premiumGroupRole() {
    var e, t;
    return null != (e = null == (t = this.premiumState) ? true : t.premiumSubscriptionGroupRole) ? e : a.qT.UNSPECIFIED
  }
  constructor(e) {
    var t, n, i, a, o, s, u, f, p, _, m, E, y, b, O, v, A, I, S, T, C, N, w, R, P, D, L, x, M, j, k, U, G, V, F, B;
    super(), g(this, "id", true), g(this, "username", true), g(this, "discriminator", true), g(this, "avatar", true), g(this, "avatarDecorationData", true), g(this, "banner", true), g(this, "email", true), g(this, "verified", true), g(this, "bot", true), g(this, "system", true), g(this, "mfaEnabled", true), g(this, "mobile", true), g(this, "desktop", true), g(this, "premiumType", true), g(this, "flags", true), g(this, "publicFlags", true), g(this, "purchasedFlags", true), g(this, "premiumUsageFlags", true), g(this, "phone", true), g(this, "nsfwAllowed", true), g(this, "ageVerificationStatus", true), g(this, "guildMemberAvatars", true), g(this, "hasBouncedEmail", true), g(this, "personalConnectionId", true), g(this, "globalName", true), g(this, "primaryGuild", true), g(this, "collectibles", true), g(this, "displayNameStyles", true), g(this, "premiumState", true), g(this, "appTransactionIds", true), g(this, "hasFlag", e => false), g(this, "isStaff", () => false), g(this, "isStaffPersonal", () => false), g(this, "hasAnyStaffLevel", () => false);
    const H = null != (t = e.premium_type) ? t : e.premiumType;
    this.id = e.id, this.username = null != (n = e.username) ? n : "", this.discriminator = null != (i = e.discriminator) ? i : h.h3J, this.avatar = null != (a = e.avatar) ? a : null, this.avatarDecoration = null != (o = e.avatar_decoration_data) ? o : e.avatarDecorationData, this.email = null != (s = e.email) ? s : null, this.verified = null != (u = e.verified) && u, this.bot = null != (f = e.bot) && f, this.system = null != (p = e.system) && p, this.mfaEnabled = null != (_ = null != (m = e.mfa_enabled) ? m : e.mfaEnabled) && _, this.mobile = null != (E = e.mobile) && E, this.desktop = null != (y = e.desktop) && y, this.premiumType = H === h.oA2 ? null : H, this.flags = null != (b = e.flags) ? b : 0, this.publicFlags = null != (O = null != (v = e.public_flags) ? v : e.publicFlags) ? O : 0, this.purchasedFlags = null != (A = null != (I = e.purchased_flags) ? I : e.purchasedFlags) ? A : 0, this.premiumUsageFlags = null != (S = null != (T = e.premium_usage_flags) ? T : e.premiumUsageFlags) ? S : 0, this.phone = null != (C = e.phone) ? C : null, this.nsfwAllowed = null != (N = e.nsfw_allowed) ? N : e.nsfwAllowed, this.ageVerificationStatus = null != (w = e.age_verification_status) ? w : e.ageVerificationStatus, this.guildMemberAvatars = null != (R = e.guildMemberAvatars) ? R : {}, this.hasBouncedEmail = null != (P = null != (D = e.has_bounced_email) ? D : e.hasBouncedEmail) && P, this.personalConnectionId = null != (L = null != (x = e.personal_connection_id) ? x : e.personalConnectionId) ? L : null, this.globalName = null != (M = e.global_name) ? M : e.globalName, this.banner = e.banner, this.primaryGuild = (0, c.j)(null != (j = null != (k = e.primary_guild) ? k : e.primaryGuild) ? j : null), this.collectibles = e.collectibles, this.displayNameStyles = null != (U = e.displayNameStyles) ? U : (0, l.mT)(e.display_name_styles), this.premiumState = null != (G = e.premiumState) ? G : (0, d.f)(e.premium_state), this.appTransactionIds = null != (V = null != (F = e.appTransactionIds) ? F : e.app_transaction_ids) ? V : null, Object.defineProperties(this, {
      hasFlag: {
        writable: false,
        configurable: false,
        enumerable: false,
        value: e => {
          if (e <= 0x40000000) return ((this.flags | this.publicFlags) & e) === e;
          let t = r.iu(this.flags),
            n = r.iu(this.publicFlags),
            i = r.iu(e);
          return r.zy(r.kg(t, n), i)
        }
      },
      isStaff: {
        writable: false,
        configurable: false,
        enumerable: false,
        value: () => this.hasFlag(h.nhx.STAFF)
      },
      isStaffPersonal: {
        writable: false,
        configurable: false,
        enumerable: false,
        value: () => !this.hasFlag(h.nhx.STAFF) && null != this.personalConnectionId
      },
      hasAnyStaffLevel: {
        writable: false,
        configurable: false,
        enumerable: false,
        value: () => this.hasFlag(h.nhx.STAFF) || this.hasFlag(h.nhx.COLLABORATOR) || this.hasFlag(h.nhx.RESTRICTED_COLLABORATOR)
      }
    }), (null == (B = this.globalName) ? true : B.length) === 0 && (this.globalName = null)
  }
}
new O({
  id: "0"
})
/** Chunk was on web.js **/
/** chunk id: 427157, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./65821.js"), require("./938796.js");
var Chunk136722 = require("./136722.js"),
  Chunk665260 = require("./665260.js"),
  Chunk988506 = require("./988506.js"),
  Chunk315069 = require("./315069.js"),
  Chunk507698 = require("./507698.js"),
  Chunk945096 = require("./945096.js"),
  Chunk47537 = require("./47537.js"),
  Chunk369496 = require("./369496.js"),
  Chunk244284 = require("./244284.js"),
  Chunk392737 = require("./392737.js"),
  Chunk486020 = require("./486020.js"),
  Chunk474090 = require("./474090.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
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

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class v extends Chunk315069.A {
  get createdAt() {
    return new Date(h.default.extractTimestamp(this.id))
  }
  hasVerifiedEmailOrPhone() {
    returntrue === this.verified || null != this.phone
  }
  getAvatarURL(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : p.QB,
      i = null != e ? this.guildMemberAvatars[e] : true;
    return null != i && null != e ? p.Ay.getGuildMemberAvatarURLSimple({
      guildId: e,
      avatar: i,
      userId: this.id,
      canAnimate: n,
      canWebP: r
    }) : p.Ay.getUserAvatarURL(this, n, t, null, r)
  }
  addGuildAvatarHash(e, t) {
    if (this.guildMemberAvatars[e] === t) return this;
    let n = O(y({}, this.guildMemberAvatars), {
      [e]: t
    });
    return this.merge({
      guildMemberAvatars: n
    })
  }
  removeGuildAvatarHash(e) {
    if (true === this.guildMemberAvatars[e]) return this;
    let t = O(y({}, this.guildMemberAvatars), {
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
      if (null != r) return p.Ay.getAnimatableSourceWithFallback(t, t => p.Ay.makeSource(p.Ay.getGuildMemberAvatarURLSimple({
        guildId: e,
        avatar: r,
        userId: this.id,
        canAnimate: t,
        size: n
      })))
    }
    return p.Ay.getAnimatableSourceWithFallback(t, e => p.Ay.getUserAvatarSource(this, e, n))
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
    let t = g.OO[e];
    return null != t && this.hasPurchasedFlag(t)
  }
  hasHadPremium() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
      t = this.hasPurchasedFlag(g.lA.PREMIUM_TIER_0),
      n = this.hasPurchasedFlag(g.lA.PREMIUM_TIER_1),
      r = this.hasPurchasedFlag(g.lA.PREMIUM_TIER_2);
    switch (e) {
      case g.PremiumTypes.TIER_0:
        return t;
      case g.PremiumTypes.TIER_1:
        return n;
      case g.PremiumTypes.TIER_2:
        return r;
      default:
        return t || n || r
    }
  }
  hadPremiumSubscription() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null;
    return !(0, _.ki)(this) && this.hasHadPremium(e)
  }
  hasFreePremium() {
    return this.isStaff() || this.hasFlag(m.nhx.PARTNER) || this.isStaffPersonal()
  }
  isPremiumWithPremiumGroup() {
    var e;
    return (0, _.ki)(this, g.PremiumTypes.TIER_2) && (null == (e = this.premiumState) ? true : e.premiumSource) === a.fE.SUBSCRIPTION_GROUP
  }
  isPremiumWithFractionalPremiumOnly() {
    var e, t, n;
    return (0, _.ki)(this, g.PremiumTypes.TIER_2) && ((null == (e = this.premiumState) ? true : e.premiumSubscriptionType) === a.jK.NONE_UNSPECIFIED || (null == (t = this.premiumState) ? true : t.premiumSubscriptionType) === a.jK.BOOST_ONLY) && (null == (n = this.premiumState) ? true : n.premiumSource) === a.fE.FRACTIONAL_NITRO
  }
  isFractionalPremiumWithNoStandardSub() {
    var e;
    return (0, _.ki)(this, g.PremiumTypes.TIER_2) && (null == (e = this.premiumState) ? true : e.premiumSource) === a.fE.FRACTIONAL_NITRO && this.premiumState.premiumSubscriptionType !== a.jK.TIER_2
  }
  hasUrgentMessages() {
    return this.hasFlag(m.nhx.HAS_UNREAD_URGENT_MESSAGES)
  }
  isNonUserBot() {
    return this.isSystemUser() || this.bot && this.discriminator === m.h3J
  }
  isLocalBot() {
    return this.bot && this.id === m.oIV
  }
  isVerifiedBot() {
    return this.isSystemUser() || this.isLocalBot() || this.hasFlag(m.nhx.VERIFIED_BOT)
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
    return this.hasFlag(m.nhx.PROVISIONAL_ACCOUNT)
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
    var t, n, i, a, o, s, u, p, _, h, g, y, b, O, v, A, I, S, T, C, N, w, R, P, D, L, x, M, j, k, U, G, V, F, B, H, Y;
    super(), E(this, "id", true), E(this, "username", true), E(this, "discriminator", true), E(this, "avatar", true), E(this, "avatarDecorationData", true), E(this, "banner", true), E(this, "email", true), E(this, "verified", true), E(this, "bot", true), E(this, "system", true), E(this, "mfaEnabled", true), E(this, "mobile", true), E(this, "desktop", true), E(this, "premiumType", true), E(this, "flags", true), E(this, "publicFlags", true), E(this, "purchasedFlags", true), E(this, "premiumUsageFlags", true), E(this, "phone", true), E(this, "nsfwAllowed", true), E(this, "ageVerificationStatus", true), E(this, "guildMemberAvatars", true), E(this, "hasBouncedEmail", true), E(this, "personalConnectionId", true), E(this, "globalName", true), E(this, "primaryGuild", true), E(this, "collectibles", true), E(this, "displayNameStyles", true), E(this, "premiumState", true), E(this, "restrictedSchedule", true), E(this, "appTransactionIds", true), E(this, "hasFlag", e => false), E(this, "isStaff", () => false), E(this, "isStaffPersonal", () => false), E(this, "hasAnyStaffLevel", () => false);
    const W = null != (t = e.premium_type) ? t : e.premiumType;
    this.id = e.id, this.username = null != (n = e.username) ? n : "", this.discriminator = null != (i = e.discriminator) ? i : m.h3J, this.avatar = null != (a = e.avatar) ? a : null, this.avatarDecoration = null != (o = e.avatar_decoration_data) ? o : e.avatarDecorationData, this.email = null != (s = e.email) ? s : null, this.verified = null != (u = e.verified) && u, this.bot = null != (p = e.bot) && p, this.system = null != (_ = e.system) && _, this.mfaEnabled = null != (h = null != (g = e.mfa_enabled) ? g : e.mfaEnabled) && h, this.mobile = null != (y = e.mobile) && y, this.desktop = null != (b = e.desktop) && b, this.premiumType = W === m.oA2 ? null : W, this.flags = null != (O = e.flags) ? O : 0, this.publicFlags = null != (v = null != (A = e.public_flags) ? A : e.publicFlags) ? v : 0, this.purchasedFlags = null != (I = null != (S = e.purchased_flags) ? S : e.purchasedFlags) ? I : 0, this.premiumUsageFlags = null != (T = null != (C = e.premium_usage_flags) ? C : e.premiumUsageFlags) ? T : 0, this.phone = null != (N = e.phone) ? N : null, this.nsfwAllowed = null != (w = e.nsfw_allowed) ? w : e.nsfwAllowed, this.ageVerificationStatus = null != (R = e.age_verification_status) ? R : e.ageVerificationStatus, this.guildMemberAvatars = null != (P = e.guildMemberAvatars) ? P : {}, this.hasBouncedEmail = null != (D = null != (L = e.has_bounced_email) ? L : e.hasBouncedEmail) && D, this.personalConnectionId = null != (x = null != (M = e.personal_connection_id) ? M : e.personalConnectionId) ? x : null, this.globalName = null != (j = e.global_name) ? j : e.globalName, this.banner = e.banner, this.primaryGuild = (0, c.j)(null != (k = null != (U = e.primary_guild) ? U : e.primaryGuild) ? k : null), this.collectibles = e.collectibles, this.displayNameStyles = null != (G = e.displayNameStyles) ? G : (0, l.mT)(e.display_name_styles), this.premiumState = null != (V = e.premiumState) ? V : (0, f.f)(e.premium_state), this.restrictedSchedule = (0, d.QU)(null != (F = e.restricted_schedule) ? F : e.restrictedSchedule), this.appTransactionIds = null != (B = null != (H = e.appTransactionIds) ? H : e.app_transaction_ids) ? B : null, Object.defineProperties(this, {
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
        value: () => this.hasFlag(m.nhx.STAFF)
      },
      isStaffPersonal: {
        writable: false,
        configurable: false,
        enumerable: false,
        value: () => !this.hasFlag(m.nhx.STAFF) && null != this.personalConnectionId
      },
      hasAnyStaffLevel: {
        writable: false,
        configurable: false,
        enumerable: false,
        value: () => this.hasFlag(m.nhx.STAFF) || this.hasFlag(m.nhx.COLLABORATOR) || this.hasFlag(m.nhx.RESTRICTED_COLLABORATOR)
      }
    }), (null == (Y = this.globalName) ? true : Y.length) === 0 && (this.globalName = null)
  }
}
new v({
  id: "0"
})
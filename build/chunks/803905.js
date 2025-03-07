/** Chunk was on web.js **/
"use strict";
n.d(t, {
  $0: () => P,
  AN: () => j,
  Ct: () => A,
  EQ: () => V,
  Ej: () => S,
  ME: () => m,
  O1: () => O,
  O8: () => D,
  Pl: () => I,
  Ry: () => N,
  Uw: () => x,
  ZE: () => k,
  _G: () => y,
  _O: () => T,
  _y: () => g,
  do: () => U,
  g7: () => w,
  g_: () => p,
  hs: () => v,
  j4: () => R,
  ks: () => Z,
  lX: () => b,
  m_: () => h,
  qH: () => L,
  tj: () => E,
  uw: () => C,
  wN: () => B,
  zZ: () => G,
  zm: () => M
}), n(26686);
var r = n(848246),
  i = n(710845),
  o = n(380684),
  a = n(533293),
  s = n(526998),
  l = n(575691),
  c = n(474936);
let u = new i.Z("ProductCatalog.tsx"),
  d = Object.freeze({
    [c.p9.TIER_0]: c.Si.TIER_0,
    [c.p9.TIER_1]: c.Si.TIER_1,
    [c.p9.TIER_2]: c.Si.TIER_2
  });

function f(e, t) {
  if (null == t || null == t.premiumType) return !1;
  try {
    let n = d[t.premiumType];
    if (null == n) return u.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
    let r = F[n];
    if (null == r) return u.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, " and premium type ").concat(t.premiumType)), !1;
    return r.skuFeatures.includes(e)
  } catch (e) {
    var n;
    u.error("Error while retrieving user's feature access: ".concat(null !== (n = e.message) && void 0 !== n ? n : JSON.stringify(e)))
  }
  return !1
}
class _ extends a.Z {
  constructor(e, t) {
    super(e, e => f(this, e), t)
  }
}
let p = new _(r.q.ANIMATED_EMOJIS),
  h = new _(r.q.EMOJIS_EVERYWHERE),
  m = new _(r.q.STICKERS_EVERYWHERE),
  g = new _(r.q.SOUNDBOARD_EVERYWHERE),
  E = new _(r.q.CUSTOM_CALL_SOUNDS),
  v = new _(r.q.PREMIUM_VOICE_FILTERS),
  b = new _(r.q.ANIMATED_AVATAR),
  y = new _(r.q.CUSTOM_DISCRIMINATOR),
  O = new _(r.q.PREMIUM_GUILD_MEMBER_PROFILE),
  I = new _("profileBadges"),
  S = new _(r.q.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
  T = new _("collectibles"),
  N = new _(r.q.INCREASED_RECENT_AVATARS_LIMIT),
  A = new _("appIcons"),
  C = new _(r.q.CLIENT_THEMES),
  R = new _("boostDiscount"),
  P = new _("freeBoosts"),
  w = new _(r.q.STREAM_MID_QUALITY),
  D = new _(r.q.STREAM_HIGH_QUALITY),
  L = new _(r.q.CUSTOM_NOTIFICATION_SOUNDS),
  x = new _("fancyVoiceChannelReactions"),
  M = new _("installPremiumApplications"),
  k = new _("redeemPremiumPerks"),
  j = new _(r.q.VIDEO_FILTER_ASSETS);
new a.Z(r.q.INCREASED_FILE_UPLOAD_SIZE, o.h);
let U = new _(r.q.INCREASED_GUILD_LIMIT),
  G = new _(r.q.INCREASED_MESSAGE_LENGTH),
  B = new _("increasedVideoUploadQuality"),
  V = new _("uploadLargeFiles"),
  F = Object.freeze({
    [c.Si.TIER_0]: new l.Z(c.Si.TIER_0, [p, h, m, I, j, B, V, A]),
    [c.Si.TIER_1]: new l.Z(c.Si.TIER_1, [p, h, b, y, I, R, w, x, B, V, A]),
    [c.Si.TIER_2]: new l.Z(c.Si.TIER_2, [p, h, m, g, E, b, y, O, I, S, C, R, P, w, D, x, M, k, j, U, G, B, V, A, T, L, v, N])
  });

function Z(e, t) {
  return !(0, s.U)("canUserUse", t) && e.getFeatureValue(t)
}
/** Chunk was on web.js **/
"use strict";
n.d(t, {
  $0: () => P,
  AN: () => k,
  Ct: () => A,
  EQ: () => F,
  Ej: () => I,
  ME: () => m,
  O1: () => O,
  O8: () => w,
  Pl: () => S,
  Ry: () => N,
  Uw: () => x,
  ZE: () => j,
  _G: () => y,
  _O: () => T,
  _y: () => g,
  do: () => U,
  g7: () => D,
  g_: () => _,
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
    let r = V[n];
    if (null == r) return u.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, " and premium type ").concat(t.premiumType)), !1;
    return r.skuFeatures.includes(e)
  } catch (e) {
    var n;
    u.error("Error while retrieving user's feature access: ".concat(null !== (n = e.message) && void 0 !== n ? n : JSON.stringify(e)))
  }
  return !1
}
class p extends a.Z {
  constructor(e, t) {
    super(e, e => f(this, e), t)
  }
}
let _ = new p(r.q.ANIMATED_EMOJIS),
  h = new p(r.q.EMOJIS_EVERYWHERE),
  m = new p(r.q.STICKERS_EVERYWHERE),
  g = new p(r.q.SOUNDBOARD_EVERYWHERE),
  E = new p(r.q.CUSTOM_CALL_SOUNDS),
  v = new p(r.q.PREMIUM_VOICE_FILTERS),
  b = new p(r.q.ANIMATED_AVATAR),
  y = new p(r.q.CUSTOM_DISCRIMINATOR),
  O = new p(r.q.PREMIUM_GUILD_MEMBER_PROFILE),
  S = new p("profileBadges"),
  I = new p(r.q.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
  T = new p("collectibles"),
  N = new p(r.q.INCREASED_RECENT_AVATARS_LIMIT),
  A = new p("appIcons"),
  C = new p(r.q.CLIENT_THEMES),
  R = new p("boostDiscount"),
  P = new p("freeBoosts"),
  D = new p(r.q.STREAM_MID_QUALITY),
  w = new p(r.q.STREAM_HIGH_QUALITY),
  L = new p(r.q.CUSTOM_NOTIFICATION_SOUNDS),
  x = new p("fancyVoiceChannelReactions"),
  M = new p("installPremiumApplications"),
  j = new p("redeemPremiumPerks"),
  k = new p(r.q.VIDEO_FILTER_ASSETS);
new a.Z(r.q.INCREASED_FILE_UPLOAD_SIZE, o.h);
let U = new p(r.q.INCREASED_GUILD_LIMIT),
  G = new p(r.q.INCREASED_MESSAGE_LENGTH),
  B = new p("increasedVideoUploadQuality"),
  F = new p("uploadLargeFiles"),
  V = Object.freeze({
    [c.Si.TIER_0]: new l.Z(c.Si.TIER_0, [_, h, m, S, k, B, F, A]),
    [c.Si.TIER_1]: new l.Z(c.Si.TIER_1, [_, h, b, y, S, R, D, x, B, F, A]),
    [c.Si.TIER_2]: new l.Z(c.Si.TIER_2, [_, h, m, g, E, b, y, O, S, I, C, R, P, D, w, x, M, j, k, U, G, B, F, A, T, L, v, N])
  });

function Z(e, t) {
  return !(0, s.U)("canUserUse", t) && e.getFeatureValue(t)
}
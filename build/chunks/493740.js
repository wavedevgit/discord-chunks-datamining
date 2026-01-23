/** Chunk was on web.js **/
/** chunk id: 493740, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DG: () => U,
  G3: () => I,
  GS: () => h,
  He: () => m,
  II: () => R,
  JK: () => _,
  OW: () => y,
  Pm: () => M,
  Qz: () => k,
  RM: () => Y,
  T7: () => S,
  Uc: () => V,
  WQ: () => D,
  Zc: () => j,
  _V: () => C,
  _w: () => x,
  aE: () => N,
  cS: () => A,
  gQ: () => p,
  ii: () => g,
  lx: () => O,
  nI: () => v,
  nh: () => b,
  sj: () => w,
  u6: () => G,
  x: () => L,
  z0: () => E,
  zL: () => T
}), require("./457529.js");
var Chunk83790 = require("./83790.js"),
  Chunk626584 = require("./626584.js"),
  Chunk125584 = require("./125584.js"),
  Chunk124856 = require("./124856.js"),
  Chunk276767 = require("./276767.js"),
  Chunk594579 = require("./594579.js"),
  Chunk788868 = require("./788868.js");
let u = new Chunk626584.A("ProductCatalog.tsx");

function d(e, t) {
  if (null == t || null == t.premiumType) returnfalse;
  try {
    let n = c.u0[t.premiumType];
    if (null == n) return u.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), false;
    let r = F[n];
    if (null == r) return u.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, " and premium type ").concat(t.premiumType)), false;
    return r.skuFeatures.includes(e)
  } catch (e) {
    var n;
    u.error("Error while retrieving user's feature access: ".concat(null != (n = e.message) ? n : JSON.stringify(e)))
  }
  returnfalse
}
class f extends Chunk124856.A {
  constructor(e, t) {
    super(e, e => d(this, e), t)
  }
}
let p = new f(Chunk83790.w.ANIMATED_EMOJIS),
  _ = new f(Chunk83790.w.EMOJIS_EVERYWHERE),
  h = new f(Chunk83790.w.STICKERS_EVERYWHERE),
  m = new f(Chunk83790.w.SOUNDBOARD_EVERYWHERE),
  g = new f(Chunk83790.w.CUSTOM_CALL_SOUNDS),
  E = new f(Chunk83790.w.PREMIUM_VOICE_FILTERS),
  y = new f(Chunk83790.w.ANIMATED_AVATAR),
  b = new f(Chunk83790.w.CUSTOM_DISCRIMINATOR),
  O = new f(Chunk83790.w.PREMIUM_GUILD_MEMBER_PROFILE),
  v = new f("profileBadges"),
  A = new f(Chunk83790.w.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
  I = new f("collectibles"),
  S = new f("appIcons"),
  T = new f(Chunk83790.w.CLIENT_THEMES),
  C = new f("boostDiscount"),
  N = new f("freeBoosts"),
  R = new f(Chunk83790.w.STREAM_MID_QUALITY),
  w = new f(Chunk83790.w.STREAM_HIGH_QUALITY),
  P = new f(Chunk83790.w.CUSTOM_NOTIFICATION_SOUNDS),
  D = new f("fancyVoiceChannelReactions"),
  x = new f("installPremiumApplications"),
  L = new f("redeemPremiumPerks"),
  j = new f(Chunk83790.w.VIDEO_FILTER_ASSETS);
new Chunk124856.A(Chunk83790.w.INCREASED_FILE_UPLOAD_SIZE, Chunk125584.f);
let M = new f(Chunk83790.w.INCREASED_GUILD_LIMIT),
  k = new f(Chunk83790.w.INCREASED_MESSAGE_LENGTH),
  U = new f("increasedVideoUploadQuality"),
  G = new f("uploadLargeFiles"),
  V = new f("warpPrivateBrowsing"),
  F = Object.freeze({
    [Chunk788868.pe.TIER_0]: new Chunk594579.A(Chunk788868.pe.TIER_0, [p, _, h, v, j, U, G, S]),
    [Chunk788868.pe.TIER_1]: new Chunk594579.A(Chunk788868.pe.TIER_1, [p, _, y, b, v, C, R, D, U, G, S]),
    [Chunk788868.pe.TIER_2]: new Chunk594579.A(Chunk788868.pe.TIER_2, [p, _, h, m, g, y, b, O, v, A, T, C, N, R, w, D, x, L, j, M, k, U, G, S, I, P, E, V])
  }),
  B = [C, N, V],
  H = [V];

function Y(e, t, n) {
  return !((0, o.Z)("canUserUse", t) || null != t && t.isPremiumWithFractionalPremiumOnly() && B.includes(e) || n && H.includes(e)) && e.getFeatureValue(t)
}
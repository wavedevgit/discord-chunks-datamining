/** Chunk was on web.js **/
/** chunk id: 803905, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $0: () => N,
  AN: () => M,
  Ct: () => S,
  EQ: () => G,
  Ej: () => I,
  ME: () => h,
  O1: () => O,
  O8: () => P,
  Pl: () => v,
  Uw: () => w,
  ZE: () => L,
  _G: () => y,
  _O: () => T,
  _y: () => m,
  do: () => j,
  g7: () => R,
  g_: () => _,
  hs: () => E,
  j4: () => C,
  ks: () => F,
  lX: () => b,
  m_: () => p,
  tj: () => g,
  uw: () => A,
  wN: () => U,
  zZ: () => k,
  zm: () => x
}), require("./49124.js");
var Chunk848246 = require("./848246.js"),
  Chunk710845 = require("./710845.js"),
  Chunk380684 = require("./380684.js"),
  Chunk533293 = require("./533293.js"),
  Chunk526998 = require("./526998.js"),
  Chunk575691 = require("./575691.js"),
  Chunk474936 = require("./474936.js");
let u = new Chunk710845.Z("ProductCatalog.tsx");

function d(e, t) {
  if (null == t || null == t.premiumType) returnfalse;
  try {
    let n = c.uM[t.premiumType];
    if (null == n) return u.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), false;
    let r = B[n];
    if (null == r) return u.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, " and premium type ").concat(t.premiumType)), false;
    return r.skuFeatures.includes(e)
  } catch (e) {
    var n;
    u.error("Error while retrieving user's feature access: ".concat(null != (n = e.message) ? n : JSON.stringify(e)))
  }
  returnfalse
}
class f extends Chunk533293.Z {
  constructor(e, t) {
    super(e, e => d(this, e), t)
  }
}
let _ = new f(Chunk848246.q.ANIMATED_EMOJIS),
  p = new f(Chunk848246.q.EMOJIS_EVERYWHERE),
  h = new f(Chunk848246.q.STICKERS_EVERYWHERE),
  m = new f(Chunk848246.q.SOUNDBOARD_EVERYWHERE),
  g = new f(Chunk848246.q.CUSTOM_CALL_SOUNDS),
  E = new f(Chunk848246.q.PREMIUM_VOICE_FILTERS),
  b = new f(Chunk848246.q.ANIMATED_AVATAR),
  y = new f(Chunk848246.q.CUSTOM_DISCRIMINATOR),
  O = new f(Chunk848246.q.PREMIUM_GUILD_MEMBER_PROFILE),
  v = new f("profileBadges"),
  I = new f(Chunk848246.q.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
  T = new f("collectibles"),
  S = new f("appIcons"),
  A = new f(Chunk848246.q.CLIENT_THEMES),
  C = new f("boostDiscount"),
  N = new f("freeBoosts"),
  R = new f(Chunk848246.q.STREAM_MID_QUALITY),
  P = new f(Chunk848246.q.STREAM_HIGH_QUALITY),
  D = new f(Chunk848246.q.CUSTOM_NOTIFICATION_SOUNDS),
  w = new f("fancyVoiceChannelReactions"),
  x = new f("installPremiumApplications"),
  L = new f("redeemPremiumPerks"),
  M = new f(Chunk848246.q.VIDEO_FILTER_ASSETS);
new Chunk533293.Z(Chunk848246.q.INCREASED_FILE_UPLOAD_SIZE, Chunk380684.h);
let j = new f(Chunk848246.q.INCREASED_GUILD_LIMIT),
  k = new f(Chunk848246.q.INCREASED_MESSAGE_LENGTH),
  U = new f("increasedVideoUploadQuality"),
  G = new f("uploadLargeFiles"),
  B = Object.freeze({
    [Chunk474936.Si.TIER_0]: new Chunk575691.Z(Chunk474936.Si.TIER_0, [_, p, h, v, M, U, G, S]),
    [Chunk474936.Si.TIER_1]: new Chunk575691.Z(Chunk474936.Si.TIER_1, [_, p, b, y, v, C, R, w, U, G, S]),
    [Chunk474936.Si.TIER_2]: new Chunk575691.Z(Chunk474936.Si.TIER_2, [_, p, h, m, g, b, y, O, v, I, A, C, N, R, P, w, x, L, M, j, k, U, G, S, T, D, E])
  }),
  Z = [C, N];

function F(e, t, n) {
  return !((0, s.U)("canUserUse", t) || null !== n && n === c.a$.FP_ONLY && Z.includes(e)) && e.getFeatureValue(t)
}
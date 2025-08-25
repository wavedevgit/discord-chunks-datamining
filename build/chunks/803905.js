/** Chunk was on web.js **/
/** chunk id: 803905, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $0: () => R,
  AN: () => k,
  Ct: () => A,
  DU: () => Z,
  EQ: () => B,
  Ej: () => T,
  ME: () => m,
  O1: () => v,
  O8: () => w,
  Pl: () => I,
  Uw: () => x,
  ZE: () => j,
  _G: () => O,
  _O: () => S,
  _y: () => g,
  do: () => M,
  g7: () => P,
  g_: () => p,
  hs: () => b,
  j4: () => N,
  ks: () => H,
  lX: () => y,
  m_: () => h,
  qH: () => D,
  tj: () => E,
  uw: () => C,
  wN: () => G,
  zZ: () => U,
  zm: () => L
}), require("./49124.js");
var Chunk848246 = require("./848246.js"),
  Chunk710845 = require("./710845.js"),
  Chunk380684 = require("./380684.js"),
  Chunk533293 = require("./533293.js"),
  Chunk526998 = require("./526998.js"),
  Chunk575691 = require("./575691.js"),
  Chunk474936 = require("./474936.js");
let u = new Chunk710845.Z("ProductCatalog.tsx"),
  d = Object.freeze({
    [Chunk474936.p9.TIER_0]: Chunk474936.Si.TIER_0,
    [Chunk474936.p9.TIER_1]: Chunk474936.Si.TIER_1,
    [Chunk474936.p9.TIER_2]: Chunk474936.Si.TIER_2
  });

function f(e, t) {
  if (null == t || null == t.premiumType) returnfalse;
  try {
    let n = d[t.premiumType];
    if (null == n) return u.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), false;
    let r = V[n];
    if (null == r) return u.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, " and premium type ").concat(t.premiumType)), false;
    return r.skuFeatures.includes(e)
  } catch (e) {
    var n;
    u.error("Error while retrieving user's feature access: ".concat(null != (n = e.message) ? n : JSON.stringify(e)))
  }
  returnfalse
}
class _ extends Chunk533293.Z {
  constructor(e, t) {
    super(e, e => f(this, e), t)
  }
}
let p = new _(Chunk848246.q.ANIMATED_EMOJIS),
  h = new _(Chunk848246.q.EMOJIS_EVERYWHERE),
  m = new _(Chunk848246.q.STICKERS_EVERYWHERE),
  g = new _(Chunk848246.q.SOUNDBOARD_EVERYWHERE),
  E = new _(Chunk848246.q.CUSTOM_CALL_SOUNDS),
  b = new _(Chunk848246.q.PREMIUM_VOICE_FILTERS),
  y = new _(Chunk848246.q.ANIMATED_AVATAR),
  O = new _(Chunk848246.q.CUSTOM_DISCRIMINATOR),
  v = new _(Chunk848246.q.PREMIUM_GUILD_MEMBER_PROFILE),
  I = new _("profileBadges"),
  T = new _(Chunk848246.q.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
  S = new _("collectibles"),
  A = new _("appIcons"),
  C = new _(Chunk848246.q.CLIENT_THEMES),
  N = new _("boostDiscount"),
  R = new _("freeBoosts"),
  P = new _(Chunk848246.q.STREAM_MID_QUALITY),
  w = new _(Chunk848246.q.STREAM_HIGH_QUALITY),
  D = new _(Chunk848246.q.CUSTOM_NOTIFICATION_SOUNDS),
  x = new _("fancyVoiceChannelReactions"),
  L = new _("installPremiumApplications"),
  j = new _("redeemPremiumPerks"),
  k = new _(Chunk848246.q.VIDEO_FILTER_ASSETS);
new Chunk533293.Z(Chunk848246.q.INCREASED_FILE_UPLOAD_SIZE, Chunk380684.h);
let M = new _(Chunk848246.q.INCREASED_GUILD_LIMIT),
  U = new _(Chunk848246.q.INCREASED_MESSAGE_LENGTH),
  G = new _("increasedVideoUploadQuality"),
  B = new _("uploadLargeFiles"),
  Z = new _(Chunk848246.q.CHAT_WALLPAPERS),
  V = Object.freeze({
    [Chunk474936.Si.TIER_0]: new Chunk575691.Z(Chunk474936.Si.TIER_0, [p, h, m, I, k, G, B, A]),
    [Chunk474936.Si.TIER_1]: new Chunk575691.Z(Chunk474936.Si.TIER_1, [p, h, y, O, I, N, P, x, G, B, A]),
    [Chunk474936.Si.TIER_2]: new Chunk575691.Z(Chunk474936.Si.TIER_2, [p, h, m, g, E, y, O, v, I, T, C, N, R, P, w, x, L, j, k, M, U, G, B, A, S, D, b, Z])
  }),
  F = [N, R];

function H(e, t, n) {
  return !((0, s.U)("canUserUse", t) || null !== n && n === c.a$.FP_ONLY && F.includes(e)) && e.getFeatureValue(t)
}
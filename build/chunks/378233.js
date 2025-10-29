/** Chunk was on web.js **/
/** chunk id: 378233, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B0: () => R,
  Hc: () => D,
  J8: () => L,
  Q6: () => N,
  V9: () => k,
  WD: () => w,
  Zt: () => T,
  Zv: () => A,
  _V: () => C,
  cv: () => M,
  gM: () => G,
  jl: () => x,
  z: () => P
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./415506.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./781311.js");
var Chunk586132 = require("./586132.js"),
  Chunk134432 = require("./134432.js"),
  Chunk581883 = require("./581883.js"),
  Chunk430824 = require("./430824.js"),
  Chunk117530 = require("./117530.js"),
  Chunk768581 = require("./768581.js"),
  Chunk358085 = require("./358085.js"),
  Chunk913663 = require("./913663.js"),
  Chunk11513 = require("./11513.js"),
  Chunk373228 = require("./373228.js"),
  Chunk611480 = require("./611480.js"),
  Chunk981631 = require("./981631.js");
let {
  API_ENDPOINT: h,
  MEDIA_PROXY_ENDPOINT: m,
  PROJECT_ENV: g,
  ASSET_ENDPOINT: E,
  CDN_HOST: b
} = window.GLOBAL_ENV, y = Object.values(Chunk373228.og), O = decodeURIComponent(Chunk981631.ANM.STICKER_ASSET("[\\d]+", "(".concat(y.join("|"), ")"))), v = RegExp("(".concat(location.protocol).concat(E, "|").concat(location.protocol).concat(m, ")(").concat(O, ")"), "ig"), I = RegExp("".concat(location.protocol).concat(h, "(").concat(O, ")"), "ig"), T = e => {
  if (null != e.cover_sticker_id) {
    let t = e.stickers.find(t => t.id === e.cover_sticker_id);
    if (null != t) return t
  }
  return e.stickers[0]
}, S = e => {
  switch (e) {
    case f.u3.PNG:
      return l.$k ? f.og.WEBP : f.og.PNG;
    case f.u3.APNG:
      return f.og.APNG;
    case f.u3.LOTTIE:
      return f.og.LOTTIE;
    case f.u3.GIF:
      return f.og.GIF;
    default:
      throw Error("Unexpected format type: ".concat(e))
  }
}, A = e => {
  switch (e) {
    case "application/json":
      return f.u3.LOTTIE;
    case "image/apng":
      return f.u3.APNG;
    case "image/png":
    case "image/webp":
      return f.u3.PNG;
    case "image/gif":
      return f.u3.GIF;
    default:
      throw Error("Unexpected file type: ".concat(e))
  }
}, C = e => null == e ? null : "".concat(e.name, ".").concat(S(e.format_type)), N = function(e) {
  let {
    isPreview: t = false,
    size: n = _.lE
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  if (null == e.format_type) return null;
  let a = e.format_type;
  e.format_type === f.u3.GIF && t && (a = f.u3.PNG);
  let o = S(a),
    s = p.ANM.STICKER_ASSET(e.id, o),
    l = (0, r.W)({
      location: "sticker_url"
    }).enabled;
  if ("development" !== g) {
    if (e.format_type === f.u3.LOTTIE) return "".concat(location.protocol).concat(E).concat(s);
    let r = Math.min(2, (0, i.x_)()),
      a = new URL(s, location.protocol + m);
    return a.searchParams.set("size", (0, i.oO)(n * r).toString()), e.format_type === f.u3.APNG && t && !(0, c.isAndroid)() && a.searchParams.set("passthrough", "false"), o === f.og.WEBP && a.searchParams.set("quality", "lossless"), l && a.searchParams.set("force_sdr", "true"), a.toString()
  }
  let u = new URL(s, location.protocol + m);
  return l && u.searchParams.set("force_sdr", "true"), u.toString()
}, R = e => null != e.match("development" !== g ? v : I), P = e => ({
  type: f.Ih.PACK,
  id: e.id,
  name: e.name,
  stickers: e.stickers,
  previewSticker: T(e)
}), w = (e, t) => e === _.yr.ANIMATE_ON_INTERACTION ? t : e !== _.yr.NEVER_ANIMATE, D = (e, t, n, r) => {
  if (s.Z.getUploadCount(n, r) > 0) returntrue;
  let i = u.Z.getStickerPreview(n, r);
  if (null != i && i.length > 0) returntrue;
  switch (e) {
    case f.V0.STICKER_PICKER:
      return "" !== t.trim();
    case f.V0.AUTOCOMPLETE:
      return (0, d.w)(t).length > 1;
    case f.V0.BUILT_IN_INTEGRATION:
    default:
      returnfalse
  }
}, L = e => e.type === f.n0.GUILD, x = e => e.type === f.n0.STANDARD, M = e => e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : [], k = e => {
  if (null === e) returnfalse;
  let t = e.guild_id;
  return true !== o.Z.getGuild(t)
}, j = [];

function U() {
  var e, t;
  return null != (t = null == (e = Chunk581883.Z.frecencyWithoutFetchingLatest.favoriteStickers) ? true : module.stickerIds) ? exports : j
}

function G(e) {
  return U().includes(e)
}
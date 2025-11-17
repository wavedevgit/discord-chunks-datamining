/** Chunk was on web.js **/
/** chunk id: 378233, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B0: () => N,
  Hc: () => D,
  J8: () => w,
  Q6: () => C,
  V9: () => M,
  WD: () => P,
  Zt: () => I,
  Zv: () => S,
  _V: () => A,
  cv: () => x,
  gM: () => U,
  jl: () => L,
  z: () => R
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./415506.js"), require("./781311.js");
var Chunk134432 = require("./134432.js"),
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
  API_ENDPOINT: p,
  MEDIA_PROXY_ENDPOINT: h,
  PROJECT_ENV: m,
  ASSET_ENDPOINT: g,
  CDN_HOST: E
} = window.GLOBAL_ENV, b = Object.values(Chunk373228.og), y = decodeURIComponent(Chunk981631.ANM.STICKER_ASSET("[\\d]+", "(".concat(b.join("|"), ")"))), O = RegExp("(".concat(location.protocol).concat(g, "|").concat(location.protocol).concat(h, ")(").concat(y, ")"), "ig"), v = RegExp("".concat(location.protocol).concat(p, "(").concat(y, ")"), "ig"), I = e => {
  if (null != e.cover_sticker_id) {
    let t = e.stickers.find(t => t.id === e.cover_sticker_id);
    if (null != t) return t
  }
  return e.stickers[0]
}, T = e => {
  switch (e) {
    case d.u3.PNG:
      return s.$k ? d.og.WEBP : d.og.PNG;
    case d.u3.APNG:
      return d.og.APNG;
    case d.u3.LOTTIE:
      return d.og.LOTTIE;
    case d.u3.GIF:
      return d.og.GIF;
    default:
      throw Error("Unexpected format type: ".concat(e))
  }
}, S = e => {
  switch (e) {
    case "application/json":
      return d.u3.LOTTIE;
    case "image/apng":
      return d.u3.APNG;
    case "image/png":
    case "image/webp":
      return d.u3.PNG;
    case "image/gif":
      return d.u3.GIF;
    default:
      throw Error("Unexpected file type: ".concat(e))
  }
}, A = e => null == e ? null : "".concat(e.name, ".").concat(T(e.format_type)), C = function(e) {
  let {
    isPreview: t = false,
    size: i = f.lE
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  if (null == e.format_type) return null;
  let a = e.format_type;
  e.format_type === d.u3.GIF && t && (a = d.u3.PNG);
  let o = T(a),
    s = _.ANM.STICKER_ASSET(e.id, o),
    c = false;
  try {
    let {
      getForceSdrEmojisStickersConfig: e
    } = n(586132);
    c = e({
      location: "sticker_url"
    }).enabled
  } catch (e) {}
  let u = c ? "&force_sdr=true" : "",
    p = o === d.og.WEBP ? "&quality=lossless" : "";
  if ("development" !== m) {
    if (e.format_type === d.u3.LOTTIE) return "".concat(location.protocol).concat(g).concat(s);
    let n = e.format_type === d.u3.APNG && t && !(0, l.isAndroid)() ? "&passthrough=false" : "",
      a = Math.min(2, (0, r.x_)());
    return "".concat(location.protocol).concat(h).concat(s, "?size=").concat((0, r.oO)(i * a)).concat(n).concat(p).concat(u)
  }
  let E = "".concat(location.protocol).concat(h).concat(s);
  return c ? "".concat(E, "?force_sdr=true") : E
}, N = e => null != e.match("development" !== m ? O : v), R = e => ({
  type: d.Ih.PACK,
  id: e.id,
  name: e.name,
  stickers: e.stickers,
  previewSticker: I(e)
}), P = (e, t) => e === f.yr.ANIMATE_ON_INTERACTION ? t : e !== f.yr.NEVER_ANIMATE, D = (e, t, n, r) => {
  if (o.Z.getUploadCount(n, r) > 0) returntrue;
  let i = c.Z.getStickerPreview(n, r);
  if (null != i && i.length > 0) returntrue;
  switch (e) {
    case d.V0.STICKER_PICKER:
      return "" !== t.trim();
    case d.V0.AUTOCOMPLETE:
      return (0, u.w)(t).length > 1;
    case d.V0.BUILT_IN_INTEGRATION:
    default:
      returnfalse
  }
}, w = e => e.type === d.n0.GUILD, L = e => e.type === d.n0.STANDARD, x = e => e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : [], M = e => {
  if (null === e) returnfalse;
  let t = e.guild_id;
  return true !== a.Z.getGuild(t)
}, k = [];

function j() {
  var e, t;
  return null != (t = null == (e = Chunk581883.Z.frecencyWithoutFetchingLatest.favoriteStickers) ? true : module.stickerIds) ? exports : k
}

function U(e) {
  return j().includes(e)
}
/** Chunk was on web.js **/
/** chunk id: 378058, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FD: () => x,
  Id: () => A,
  NO: () => N,
  Qn: () => w,
  T5: () => R,
  Xw: () => D,
  Y4: () => j,
  YS: () => P,
  l3: () => S,
  o1: () => U,
  o6: () => L,
  sL: () => T,
  zg: () => C
}), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./65821.js"), require("./733351.js");
var Chunk776231 = require("./776231.js"),
  Chunk617617 = require("./617617.js"),
  Chunk71393 = require("./71393.js"),
  Chunk522602 = require("./522602.js"),
  Chunk486020 = require("./486020.js"),
  Chunk723702 = require("./723702.js"),
  Chunk931664 = require("./931664.js"),
  Chunk930958 = require("./930958.js"),
  Chunk842086 = require("./842086.js"),
  Chunk823894 = require("./823894.js"),
  Chunk652215 = require("./652215.js");
let {
  API_ENDPOINT: _,
  MEDIA_PROXY_ENDPOINT: h,
  PROJECT_ENV: m,
  ASSET_ENDPOINT: g,
  CDN_HOST: E
} = window.GLOBAL_ENV, y = Object.values(Chunk842086.y3), b = decodeURIComponent(Chunk652215.Rsh.STICKER_ASSET("[\\d]+", "(".concat(y.join("|"), ")"))), O = RegExp("(".concat(location.protocol).concat(g, "|").concat(location.protocol).concat(h, ")(").concat(b, ")"), "ig"), v = RegExp("".concat(location.protocol).concat(_, "(").concat(b, ")"), "ig"), A = e => {
  if (null != e.cover_sticker_id) {
    let t = e.stickers.find(t => t.id === e.cover_sticker_id);
    if (null != t) return t
  }
  return e.stickers[0]
}, I = e => {
  switch (e) {
    case d.TG.PNG:
      return o.QB ? d.y3.WEBP : d.y3.PNG;
    case d.TG.APNG:
      return d.y3.APNG;
    case d.TG.LOTTIE:
      return d.y3.LOTTIE;
    case d.TG.GIF:
      return d.y3.GIF;
    default:
      throw Error("Unexpected format type: ".concat(e))
  }
}, S = e => {
  switch (e) {
    case "application/json":
      return d.TG.LOTTIE;
    case "image/apng":
      return d.TG.APNG;
    case "image/png":
    case "image/webp":
      return d.TG.PNG;
    case "image/gif":
      return d.TG.GIF;
    default:
      throw Error("Unexpected file type: ".concat(e))
  }
}, T = e => null == e ? null : "".concat(e.name, ".").concat(I(e.format_type)), C = function(e) {
  let {
    isPreview: t = false,
    size: i = 160
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  if (null == e.format_type) return null;
  let a = e.format_type;
  e.format_type === d.TG.GIF && t && (a = d.TG.PNG);
  let s = I(a),
    o = p.Rsh.STICKER_ASSET(e.id, s),
    c = false;
  try {
    let {
      getForceSdrEmojisStickersConfig: e
    } = n(796272);
    c = e({
      location: "sticker_url"
    }).enabled
  } catch (e) {}
  let u = c ? "&force_sdr=true" : "",
    f = s === d.y3.WEBP ? "&quality=lossless" : "";
  if ("development" !== m) {
    if (e.format_type === d.TG.LOTTIE) return "".concat(location.protocol).concat(g).concat(o);
    let n = e.format_type === d.TG.APNG && t && !(0, l.isAndroid)() ? "&passthrough=false" : "",
      a = Math.min(2, (0, r.mZ)());
    return "".concat(location.protocol).concat(h).concat(o, "?size=").concat((0, r.kr)(i * a)).concat(n).concat(f).concat(u)
  }
  let _ = "".concat(location.protocol).concat(h).concat(o);
  return c ? "".concat(_, "?force_sdr=true") : _
}, N = e => null != e.match("development" !== m ? O : v), R = e => ({
  type: d.Z2.PACK,
  id: e.id,
  name: e.name,
  stickers: e.stickers,
  previewSticker: A(e)
}), w = (e, t) => e === f.BJ.ANIMATE_ON_INTERACTION ? t : e !== f.BJ.NEVER_ANIMATE, P = (e, t, n, r) => {
  if (s.A.getUploadCount(n, r) > 0) returntrue;
  let i = c.A.getStickerPreview(n, r);
  if (null != i && i.length > 0) returntrue;
  switch (e) {
    case d.D6.STICKER_PICKER:
      return "" !== t.trim();
    case d.D6.AUTOCOMPLETE:
      return (0, u.k)(t).length > 1;
    case d.D6.BUILT_IN_INTEGRATION:
    default:
      returnfalse
  }
}, D = e => e.type === d.NL.GUILD, x = e => e.type === d.NL.STANDARD, L = e => e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : [], j = e => {
  if (null === e) returnfalse;
  let t = e.guild_id;
  return true !== a.A.getGuild(t)
}, M = [];

function k() {
  var e, t;
  return null != (e = null == (t = i.A.frecencyWithoutFetchingLatest.favoriteStickers) ? true : t.stickerIds) ? e : M
}

function U(e) {
  return k().includes(e)
}
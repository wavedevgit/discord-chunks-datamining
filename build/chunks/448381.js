/** Chunk was on 92414 **/
/** chunk id: 448381, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EF: () => u,
  NI: () => c,
  Xg: () => o,
  wz: () => d
}), require("./938796.js"), require("./747238.js");
var Chunk665260 = require("./665260.js"),
  Chunk77350 = require("./77350.js"),
  Chunk639169 = require("./639169.js"),
  Chunk652215 = require("./652215.js");
let a = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
  o = e => "IMAGE" === e || "VIDEO" === e || "CLIP" === e || "VISUAL_PLACEHOLDER" === e,
  u = e => "IMAGE" === e || "VIDEO" === e || "VISUAL_PLACEHOLDER" === e;

function c(e, t) {
  let {
    filename: n,
    width: o,
    height: u
  } = e;
  if (t && null != o && o > 0 && null != u && u > 0)
    if ((0, l.u)(n)) return "IMAGE";
    else {
      var c;
      if (!(0, l.AE)(n) || null == e.proxy_url) return "INVALID";
      return (0, r.Lt)(null != (c = e.flags) ? c : 0, s.sbO.IS_CLIP) ? "CLIP" : "VIDEO"
    } return null != t && a.test(n) && null != e.url ? "AUDIO" : null != e.url && (0, i.C)(n) ? "PLAINTEXT_PREVIEW" : "OTHER"
}

function d(e) {
  let {
    contentType: t,
    width: n,
    height: r
  } = e;
  if (null != n && n > 0 && null != r && r > 0) {
    if ((0, l.tT)(t)) return "IMAGE";
    else if ((0, l.XB)(t)) return "VIDEO"
  }
  return "VISUAL_PLACEHOLDER"
}
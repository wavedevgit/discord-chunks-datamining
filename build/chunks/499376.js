/** Chunk was on 85372 **/
/** chunk id: 499376, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ld: () => u,
  R_: () => s,
  aw: () => c,
  pU: () => d
}), require("./997841.js"), require("./35282.js");
var Chunk630388 = require("./630388.js"),
  Chunk406432 = require("./406432.js"),
  Chunk828061 = require("./828061.js"),
  Chunk981631 = require("./981631.js");
let a = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
  s = e => "IMAGE" === e || "VIDEO" === e || "CLIP" === e || "VISUAL_PLACEHOLDER" === e,
  u = e => "IMAGE" === e || "VIDEO" === e || "VISUAL_PLACEHOLDER" === e;

function c(e, t) {
  let {
    filename: n,
    width: s,
    height: u
  } = e;
  if (t && null != s && s > 0 && null != u && u > 0)
    if ((0, i.CO)(n)) return "IMAGE";
    else {
      var c;
      if (!(0, i.NU)(n) || null == e.proxy_url) return "INVALID";
      return (0, r.yE)(null != (c = e.flags) ? c : 0, o.J0y.IS_CLIP) ? "CLIP" : "VIDEO"
    } return null != t && a.test(n) && null != e.url ? "AUDIO" : null != e.url && (0, l.O)(n) ? "PLAINTEXT_PREVIEW" : "OTHER"
}

function d(e) {
  let {
    contentType: t,
    width: n,
    height: r
  } = e;
  if (null != n && n > 0 && null != r && r > 0) {
    if ((0, i.tw)(t)) return "IMAGE";
    else if ((0, i.X2)(t)) return "VIDEO"
  }
  return "VISUAL_PLACEHOLDER"
}
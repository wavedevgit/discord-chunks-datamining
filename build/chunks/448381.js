/** Chunk was on web.js **/
/** chunk id: 448381, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EF: () => c,
  NI: () => u,
  Xg: () => l,
  wz: () => d
}), require("./938796.js"), require("./747238.js");
var Chunk665260 = require("./665260.js"),
  Chunk77350 = require("./77350.js"),
  Chunk639169 = require("./639169.js"),
  Chunk652215 = require("./652215.js");
let o = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
  l = e => "IMAGE" === e || "VIDEO" === e || "CLIP" === e || "VISUAL_PLACEHOLDER" === e,
  c = e => "IMAGE" === e || "VIDEO" === e || "VISUAL_PLACEHOLDER" === e;

function u(e, t) {
  let {
    filename: n,
    width: l,
    height: c
  } = e;
  if (t && null != l && l > 0 && null != c && c > 0)
    if ((0, i.u)(n)) return "IMAGE";
    else {
      var u;
      if (!(0, i.AE)(n) || null == e.proxy_url) return "INVALID";
      return (0, r.Lt)(null != (u = e.flags) ? u : 0, s.sbO.IS_CLIP) ? "CLIP" : "VIDEO"
    } return null != t && o.test(n) && null != e.url ? "AUDIO" : null != e.url && (0, a.C)(n) ? "PLAINTEXT_PREVIEW" : "OTHER"
}

function d(e) {
  let {
    contentType: t,
    width: n,
    height: r
  } = e;
  if (null != n && n > 0 && null != r && r > 0) {
    if ((0, i.tT)(t)) return "IMAGE";
    else if ((0, i.XB)(t)) return "VIDEO"
  }
  return "VISUAL_PLACEHOLDER"
}
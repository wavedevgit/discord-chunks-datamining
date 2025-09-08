/** Chunk was on web.js **/
/** chunk id: 223135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk584973 = require("./584973.jsx"),
  Chunk833858 = require("./833858.js"),
  Chunk505905 = require("./505905.js");
let s = e => {
  var t;
  let {
    className: n,
    hangStatusActivity: s,
    size: l,
    animate: c = true,
    fallbackVariant: u = "original"
  } = e;
  if ((0, a.Fe)(null == s ? true : s.state)[0] === o.tN.CUSTOM && null != s) return null != s.emoji ? (0, r.jsx)(i.Z, {
    emoji: s.emoji,
    className: n,
    hideTooltip: true,
    animate: c
  }) : null;
  let d = null == (t = (0, a.tV)(s, u)) ? true : t.icon;
  if (null == d) return null;
  if ("string" == typeof d) return null != d ? (0, r.jsx)("img", {
    src: d,
    alt: "",
    className: null != n ? n : true
  }) : null;
  let f = d;
  return (0, r.jsx)(f, {
    size: l,
    className: n
  })
}
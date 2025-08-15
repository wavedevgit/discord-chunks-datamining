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
  Chunk981631 = require("./981631.js");
let s = e => {
  var t;
  let {
    className: n,
    hangStatusActivity: s,
    animate: l = true
  } = e;
  if ((null == s ? true : s.state) === o.tNA.CUSTOM) return null != s.emoji ? (0, r.jsx)(i.Z, {
    emoji: s.emoji,
    className: n,
    hideTooltip: true,
    animate: l
  }) : null;
  let c = null == (t = (0, a.tV)(s)) ? true : t.icon;
  return null != c ? (0, r.jsx)("img", {
    src: c,
    alt: "",
    className: null != n ? n : true
  }) : null
}
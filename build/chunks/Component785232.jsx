/** Chunk was on web.js **/
/** chunk id: 785232, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk289823 = require("./289823.jsx"),
  Chunk594174 = require("./594174.js");

function l(e, t) {
  if (null == e) return {};
  var n, r, i = c(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let u = function(e) {
  var {
    recipients: t,
    size: n,
    status: c,
    isTyping: u,
    className: d
  } = e, f = l(e, ["recipients", "size", "status", "isTyping", "className"]);
  let _ = o.ny6[n],
    p = (0, i.Wu)([s.default], () => t.slice(0, 2).map(e => {
      let t = s.default.getUser(e);
      if (null != t) return t.getAvatarURL(true, _.size, false)
    }), [t, _.size]);
  return (0, r.jsx)(a.Z, {
    "aria-label": f["aria-label"],
    "aria-hidden": f["aria-hidden"],
    backSrc: p[0],
    frontSrc: p[1],
    size: n,
    status: c,
    isTyping: null != u && u,
    className: d
  })
}
/** Chunk was on web.js **/
/** chunk id: 785232, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk289823 = require("./289823.jsx"),
  Chunk594174 = require("./594174.js");

function l(e, t) {
  if (null == e) return {};
  var n, r, i = c(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
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
  let _ = a.ny6[n],
    p = (0, i.Wu)([s.default], () => t.slice(0, 2).map(e => {
      let t = s.default.getUser(e);
      if (null != t) return t.getAvatarURL(true, _.size, false)
    }), [t, _.size]);
  return (0, r.jsx)(o.Z, {
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
/** Chunk was on web.js **/
/** chunk id: 954376, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk478063 = require("./478063.jsx"),
  Chunk287809 = require("./287809.js");

function l(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = c(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let u = function(e) {
  let {
    recipients: t,
    size: n,
    status: c,
    isTyping: u,
    className: d
  } = e, f = l(e, ["recipients", "size", "status", "isTyping", "className"]), p = a.vCh[n], _ = (0, i.yK)([o.default], () => t.slice(0, 2).map(e => {
    let t = o.default.getUser(e);
    if (null != t) return t.getAvatarURL(true, p.size, false)
  }), [t, p.size]);
  return (0, r.jsx)(s.A, {
    "aria-label": f["aria-label"],
    "aria-hidden": f["aria-hidden"],
    backSrc: _[0],
    frontSrc: _[1],
    size: n,
    status: c,
    isTyping: null != u && u,
    className: d
  })
}
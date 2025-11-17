/** Chunk was on web.js **/
/** chunk id: 266076, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk43267 = require("./43267.js"),
  Chunk785232 = require("./785232.jsx");

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

function u(e) {
  var {
    channel: t,
    size: n,
    facepileSizeOverride: i,
    isTyping: c,
    status: u,
    className: d,
    animated: f = false
  } = e, _ = l(e, ["channel", "size", "facepileSizeOverride", "isTyping", "status", "className", "animated"]);
  return t.recipients.length >= 2 && null == t.icon ? (0, r.jsx)(s.Z, {
    "aria-label": _["aria-label"],
    "aria-hidden": _["aria-hidden"],
    className: d,
    recipients: t.recipients,
    size: null != i ? i : n,
    isTyping: c,
    status: u
  }) : (0, r.jsx)(a.qEK, {
    "aria-hidden": _["aria-hidden"],
    "aria-label": _["aria-label"],
    className: d,
    size: n,
    src: (0, o.x)(t, 80, f)
  })
}
let d = Chunk473749.memo(u)
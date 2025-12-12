/** Chunk was on web.js **/
/** chunk id: 700582, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk372900 = require("./372900.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = u(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function d(e, t, n, r) {
  return e.getAvatarURL(r, t, n)
}
let f = Chunk473749.memo(function(e) {
  var {
    user: t,
    guildId: n,
    size: s = o.EFr.SIZE_32,
    animate: u = false,
    "aria-hidden": f = false
  } = e, p = c(e, ["user", "guildId", "size", "animate", "aria-hidden"]);
  let _ = i.useContext(a.Z);
  return (0, r.jsx)(o.qEK, l({
    src: d(t, (0, o.dcp)(s), u, null != n ? n : _),
    size: s,
    "aria-label": f ? true : t.username,
    "aria-hidden": f
  }, p))
})
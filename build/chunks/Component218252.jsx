/** Chunk was on web.js **/
/** chunk id: 218252, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk967198 = require("./967198.js"),
  Chunk676279 = require("./676279.js"),
  Chunk453771 = require("./453771.js"),
  Chunk975571 = require("./975571.js"),
  Chunk831318 = require("./831318.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk206433 = require("./206433.js"),
  Chunk323454 = require("./323454.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = g(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let E = 2.1,
  b = e => {
    let {
      handleLearnMore: t
    } = e, n = m(e, ["handleLearnMore"]), _ = (0, i.bG)([a.A], () => a.A.getGuildId()), g = (0, o.Iu)({
      guildId: _,
      onClick: () => {
        window.open(l.A.getArticleURL(u.MVz.NITRO_FAQ), "_blank")
      }
    }), b = (0, s.TM)() ? f.A : p.A;
    return (0, r.jsx)(c.A, h({
      gradientColor: "nitro-pink",
      title: d.intl.string(d.t["9C+41g"]),
      subtitle: g,
      videoSrc: b,
      loopAt: E,
      onSecondaryClick: t
    }, n))
  }
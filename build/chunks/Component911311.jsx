/** Chunk was on web.js **/
/** chunk id: 911311, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk914010 = require("./914010.js"),
  Chunk526167 = require("./526167.js"),
  Chunk403182 = require("./403182.js"),
  Chunk63063 = require("./63063.js"),
  Chunk7366 = require("./7366.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk152599 = require("./152599.js"),
  Chunk860978 = require("./860978.js");

function p(e, t, n) {
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
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let E = 2.1,
  b = e => {
    var {
      handleLearnMore: t
    } = e, n = m(e, ["handleLearnMore"]);
    let p = (0, i.e7)([o.Z], () => o.Z.getGuildId()),
      g = (0, s.iL)({
        guildId: p,
        onClick: () => {
          window.open(l.Z.getArticleURL(u.BhN.NITRO_FAQ), "_blank")
        }
      }),
      b = (0, a.rO)() ? f.Z : _.Z;
    return (0, r.jsx)(c.Z, h({
      gradientColor: "nitro-pink",
      title: d.intl.string(d.t["9C+41t"]),
      subtitle: g,
      videoSrc: b,
      loopAt: E,
      onSecondaryClick: t
    }, n))
  }
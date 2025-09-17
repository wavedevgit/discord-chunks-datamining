/** Chunk was on web.js **/
/** chunk id: 53558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk970321 = require("./970321.js"),
  Chunk283836 = require("./283836.js"),
  Chunk621853 = require("./621853.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e) {
  var {
    user: t,
    onClick: n
  } = e, i = p(e, ["user", "onClick"]);
  return (0, l.q)(t.id), (0, r.jsx)(u.tG, _({
    action: "PRESS_APP_STOREFRONT",
    icon: o.EOn,
    text: d.intl.string(d.t.V7j5aW),
    color: a.Tt.BRAND,
    themeColor: "none",
    onClick: n
  }, i))
}

function g(e) {
  var t, {
      user: a,
      guildId: l
    } = e,
    u = p(e, ["user", "guildId"]);
  let d = (0, i.e7)([c.Z], () => {
      var e;
      return null == (e = c.Z.getUserProfile(a.id)) ? true : e.application
    }),
    f = (0, s.R)(null != (t = null == d ? true : d.id) ? t : "");
  if (null == d || !f) return null;
  let h = () => {
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("77803"), n.e("80691")]).then(n.bind(n, 7225));
      return t => (0, r.jsx)(e, _({
        appId: d.id,
        guildId: l
      }, t))
    })
  };
  return (0, r.jsx)(m, _({
    user: a,
    guildId: l,
    onClick: h
  }, u))
}
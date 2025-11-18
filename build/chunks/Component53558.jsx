/** Chunk was on web.js **/
/** chunk id: 53558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk970321 = require("./970321.js"),
  Chunk283836 = require("./283836.js"),
  Chunk621853 = require("./621853.js"),
  Chunk732380 = require("./732380.jsx"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function h(e) {
  var {
    user: t,
    onClick: n
  } = e, i = _(e, ["user", "onClick"]);
  return (0, s.q)(t.id), (0, r.jsx)(c.O1, f({
    action: "PRESS_APP_STOREFRONT",
    icon: a.EOn,
    text: u.intl.string(u.t.V7j5aZ),
    onClick: n,
    variant: "primary"
  }, i))
}

function m(e) {
  var t, {
      user: s,
      guildId: c
    } = e,
    u = _(e, ["user", "guildId"]);
  let d = (0, i.e7)([l.Z], () => {
      var e;
      return null == (e = l.Z.getUserProfile(s.id)) ? true : e.application
    }),
    p = (0, o.R)(null != (t = null == d ? true : d.id) ? t : "");
  if (null == d || !p) return null;
  let m = () => {
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("77803"), n.e("15351")]).then(n.bind(n, 7225));
      return t => (0, r.jsx)(e, f({
        appId: d.id,
        guildId: c
      }, t))
    })
  };
  return (0, r.jsx)(h, f({
    user: s,
    guildId: c,
    onClick: m
  }, u))
}
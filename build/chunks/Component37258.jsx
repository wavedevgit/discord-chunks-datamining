/** Chunk was on web.js **/
/** chunk id: 37258, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk981631 = require("./981631.js"),
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

function p(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e) {
  var {
    label: t,
    onAction: n,
    icon: d
  } = e, _ = p(e, ["label", "onAction", "icon"]);
  let {
    analyticsLocations: m
  } = (0, a.ZP)(), {
    context: h
  } = (0, s.KZ)(), g = (0, o.Aq)(), E = (0, o.bp)();
  return (0, r.jsx)(i.sNh, {
    id: "user-profile",
    label: null != t ? t : u.intl.string(u.t.LYju5J),
    action: () => {
      null == n || n(), (0, l.openUserProfileModal)(f({
        sourceAnalyticsLocations: m,
        appContext: E
      }, h, _)), g.dispatch(c.CkL.POPOUT_CLOSE)
    },
    icon: d
  })
}
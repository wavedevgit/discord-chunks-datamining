/** Chunk was on web.js **/
/** chunk id: 243949, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk183555 = require("./183555.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = _(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function h(e) {
  let {
    label: t,
    onAction: n,
    icon: d
  } = e, _ = p(e, ["label", "onAction", "icon"]), {
    analyticsLocations: h
  } = (0, a.Ay)(), {
    context: m
  } = (0, s.NJ)(), g = (0, o.aL)(), E = (0, o.Us)();
  return (0, r.jsx)(i.Drp, {
    id: "user-profile",
    label: null != t ? t : u.intl.string(u.t.LYju5J),
    action: () => {
      null == n || n(), (0, l.openUserProfileModal)(f({
        sourceAnalyticsLocations: h,
        appContext: E
      }, m, _)), g.dispatch(c.jej.POPOUT_CLOSE)
    },
    icon: d,
    leadingAccessory: null != d ? {
      type: "icon",
      icon: d
    } : true
  })
}
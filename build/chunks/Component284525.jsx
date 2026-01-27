/** Chunk was on web.js **/
/** chunk id: 284525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk594262 = require("./594262.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = u(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function d(e) {
  let {
    activity: t,
    embeddedActivity: n,
    user: s,
    onAction: u,
    location: d,
    variant: f = "secondary",
    size: p = "sm"
  } = e, _ = c(e, ["activity", "embeddedActivity", "user", "onAction", "location", "variant", "size"]), h = (0, o.l)({
    activity: null != t ? t : true,
    embeddedActivity: n,
    user: s,
    onGameJoin: u,
    location: d
  });
  if (null == h) return null;
  let {
    isJoining: m,
    handleJoinRequest: g,
    buttonCTA: E,
    tooltip: y,
    isEnabled: b
  } = h;
  return (0, r.jsx)(i.m, {
    text: y,
    children: (0, r.jsx)(a.Button, l({
      variant: f,
      size: p,
      text: E,
      onClick: g,
      disabled: !b,
      loading: m,
      fullWidth: true
    }, _))
  }, "join")
}
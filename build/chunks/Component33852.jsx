/** Chunk was on web.js **/
/** chunk id: 33852, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk882997 = require("./882997.jsx"),
  Chunk962173 = require("./962173.js"),
  Chunk985018 = require("./985018.jsx");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = f(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function p(e) {
  let {
    platform: t,
    variant: n = "secondary",
    size: c = "sm",
    onAction: f,
    icon: p
  } = e, _ = d(e, ["platform", "variant", "size", "onAction", "icon"]);
  if ((0, i.bG)([o.A], () => o.A.getAccounts().some(e => e.type === t.type))) return null;
  let h = () => {
    null == f || f(), (0, s.A)({
      platformType: t.type,
      location: "Activity Action"
    })
  };
  return (0, r.jsx)(a.Button, u({
    onClick: h,
    variant: n,
    size: c,
    icon: p,
    text: l.intl.format(l.t.XWSHTb, {
      platform: t.name
    }),
    fullWidth: true
  }, _))
}
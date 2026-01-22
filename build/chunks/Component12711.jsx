/** Chunk was on web.js **/
/** chunk id: 12711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  xp: () => d
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js"), require("./417597.js");
var Chunk397927 = require("./397927.js");
require("./775602.js");
var Chunk985018 = require("./985018.jsx");
require("./333354.js");
var Chunk329431 = require("./329431.js");

function o(e, t, n) {
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
      o(e, t, n[t])
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
    heading: t,
    description: n,
    label: o,
    isEnabled: l
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.Heading, {
      className: s.zQ,
      variant: "heading-lg/extrabold",
      children: t
    }), (0, r.jsx)(i.Text, {
      className: s.LW,
      variant: "text-sm/normal",
      children: n
    }), (0, r.jsxs)("div", {
      className: s.XN,
      children: [null != o && (0, r.jsxs)("div", {
        className: s.qB,
        children: [(0, r.jsx)(i._Jp, {
          size: "sm",
          color: i.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          children: o
        })]
      }), l && (0, r.jsxs)("div", {
        className: s.qB,
        children: [(0, r.jsx)(i.yr3, {
          size: "custom",
          height: 14,
          width: 14,
          color: "currentColor"
        }), (0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "currentColor",
          children: a.intl.string(a.t.pCMkDb)
        })]
      })]
    })]
  })
}
require("./676611.js"), require("./772324.js"), require("./696403.js"), require("./538510.js")
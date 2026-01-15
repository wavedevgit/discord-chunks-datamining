/** Chunk was on web.js **/
/** chunk id: 126484, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hk: () => h,
  UQ: () => i.pJ,
  o4: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk913793 = require("./913793.js"),
  Chunk595707 = require("./595707.js"),
  Chunk23893 = require("./23893.js"),
  Chunk481060 = require("./481060.js"),
  Chunk15960 = require("./15960.js");

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
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
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

function h(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(i.V2, {
    className: l.panel,
    children: t
  })
}

function m(e) {
  var {
    children: t
  } = e, n = p(e, ["children"]);
  let {
    isDisabled: i
  } = (0, a.jn)(o.b, "trigger");
  return (0, r.jsx)(s.tEY, {
    children: (0, r.jsx)(o.z, {
      slot: "trigger",
      className: l.trigger,
      children: (0, r.jsxs)(s.Text, f(u({}, n), {
        className: l.triggerContent,
        children: [t, !i && (0, r.jsx)(s.CJ0, {
          size: "xs",
          color: "currentColor",
          className: l.chevron
        })]
      }))
    })
  })
}
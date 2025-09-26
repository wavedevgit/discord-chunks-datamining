/** Chunk was on web.js **/
/** chunk id: 179067, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk375316 = require("./375316.js"),
  Chunk267603 = require("./267603.js"),
  Chunk692547 = require("./692547.js"),
  Chunk197723 = require("./197723.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk860684 = require("./860684.jsx"),
  Chunk571527 = require("./571527.js");

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
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g(e) {
  var {
    label: t,
    layout: n,
    isDisabled: d,
    icon: _
  } = e, m = h(e, ["label", "layout", "isDisabled", "icon"]);
  return (0, r.jsx)(i.Vp, p(f({}, m), {
    className: u.tag,
    textValue: t,
    isDisabled: d,
    children: e => {
      let {
        allowsRemoving: i
      } = e;
      return (0, r.jsxs)(r.Fragment, {
        children: [null != _ && (0, r.jsx)(c.D, {
          graphic: _,
          layout: n
        }), (0, r.jsx)(l.x, {
          variant: "inline" === n ? "text-sm/normal" : "text-md/normal",
          children: t
        }), i && (0, r.jsx)(a.z, {
          slot: "remove",
          children: (0, r.jsx)(s.D, {
            size: "inline" === n ? "xs" : "sm",
            color: o.Z.colors.ICON_DEFAULT
          })
        })]
      })
    }
  }))
}
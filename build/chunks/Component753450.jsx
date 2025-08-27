/** Chunk was on web.js **/
/** chunk id: 753450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk375316 = require("./375316.js"),
  Chunk267603 = require("./267603.js"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk636280 = require("./636280.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
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
    label: t,
    layout: n,
    isDisabled: i
  } = e, u = p(e, ["label", "layout", "isDisabled"]);
  return (0, r.jsx)(a.Vp, _(d({}, u), {
    className: c.tag,
    textValue: t,
    isDisabled: i,
    children: e => {
      let {
        allowsRemoving: i
      } = e;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.x, {
          variant: "inline" === n ? "text-sm/normal" : "text-md/normal",
          children: t
        }), i && (0, r.jsx)(o.z, {
          slot: "remove",
          children: (0, r.jsx)(l.Dio, {
            size: "inline" === n ? "xs" : "sm",
            color: l.TVs.colors.ICON_DEFAULT
          })
        })]
      })
    }
  }))
}

function g(e) {
  let {
    label: t,
    disabledKeys: n,
    selectionMode: o = "none",
    layout: s = "default",
    items: l,
    onRemove: u,
    children: d
  } = e, [f, _] = i.useState(() => new Set);
  return (0, r.jsxs)(a.QS, {
    "aria-label": t,
    "data-layout": s,
    className: c.tagGroup,
    selectionMode: o,
    selectedKeys: f,
    onSelectionChange: _,
    disabledKeys: n,
    onRemove: u,
    children: [(0, r.jsx)(a.PS, {
      className: c.tagList,
      children: l.map(e => (0, r.jsx)(m, {
        id: e.id,
        label: e.label,
        layout: s,
        isDisabled: e.isDisabled
      }, e.id))
    }), d]
  })
}
/** Chunk was on web.js **/
/** chunk id: 373662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => O,
  fO: () => y,
  sF: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk951394 = require("./951394.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk946866 = require("./946866.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let b = Chunk647438.forwardRef(function(e, t) {
  var {
    label: n,
    ariaLabel: i,
    tooltipText: a,
    icon: _,
    iconProps: h,
    onClick: E,
    onTooltipShow: b,
    onTooltipHide: y,
    disabled: O,
    dangerous: v,
    separator: I,
    showNewBadge: T,
    buttonClassName: S,
    children: A
  } = e, C = g(e, ["label", "ariaLabel", "tooltipText", "icon", "iconProps", "onClick", "onTooltipShow", "onTooltipHide", "disabled", "dangerous", "separator", "showNewBadge", "buttonClassName", "children"]);
  return (0, r.jsx)(s.u, {
    asContainer: true,
    __unsupportedReactNodeAsText: null != a ? a : n,
    "aria-label": n,
    onTooltipShow: b,
    onTooltipHide: y,
    children: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(u.zx, m(p({
        ref: t,
        className: o()(f.hoverBarButton, S),
        onClick: e => {
          E(e)
        },
        "aria-label": null != i ? i : n,
        disabled: O,
        dangerous: v
      }, C), {
        children: [null != _ ? (0, r.jsx)(_, p({
          className: f.icon,
          color: "currentColor"
        }, h)) : null, null != A ? (0, r.jsx)("div", {
          className: o()(f.icon, f.buttonContent),
          children: A
        }) : null, T && (0, r.jsx)(l.IGR, {
          text: d.intl.string(d.t.y2b7CA),
          color: c.Z.BG_BRAND,
          className: f.newBadge
        })]
      })), I && (0, r.jsx)(u.Z0, {})]
    })
  })
});

function y(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)("div", {
    className: o()(f.separator, t)
  })
}

function O(e) {
  var {
    children: t
  } = e, n = g(e, ["children"]);
  return (0, r.jsx)(u.ZP, {
    className: o()(n.className, f.popover),
    children: t
  })
}
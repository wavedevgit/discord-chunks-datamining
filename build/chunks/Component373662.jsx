/** Chunk was on web.js **/
/** chunk id: 373662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => y,
  fO: () => b,
  sF: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk951394 = require("./951394.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk946866 = require("./946866.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let E = Chunk647438.forwardRef(function(e, t) {
  var {
    label: n,
    ariaLabel: i,
    tooltipText: a,
    tooltipColor: f,
    icon: p,
    iconProps: g,
    onClick: E,
    onTooltipShow: b,
    onTooltipHide: y,
    disabled: O,
    dangerous: v,
    separator: I,
    showNewBadge: T,
    buttonClassName: S,
    children: A
  } = e, C = m(e, ["label", "ariaLabel", "tooltipText", "tooltipColor", "icon", "iconProps", "onClick", "onTooltipShow", "onTooltipHide", "disabled", "dangerous", "separator", "showNewBadge", "buttonClassName", "children"]);
  return (0, r.jsx)(s.ua7, {
    text: null != a ? a : n,
    color: null != f ? f : s.FGA.PRIMARY,
    "aria-label": n,
    onTooltipShow: b,
    onTooltipHide: y,
    hideOnClick: true,
    tooltipClassName: d.tooltip,
    children: e => {
      let {
        onMouseEnter: a,
        onMouseLeave: f,
        onFocus: m,
        onBlur: b,
        onClick: y
      } = e;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(c.zx, h(_({
          ref: t,
          className: o()(d.hoverBarButton, S),
          onMouseEnter: a,
          onMouseLeave: f,
          onFocus: m,
          onBlur: b,
          onClick: e => {
            null == y || y(), E(e)
          },
          "aria-label": null != i ? i : n,
          disabled: O,
          dangerous: v
        }, C), {
          children: [null != p ? (0, r.jsx)(p, _({
            className: d.icon,
            color: "currentColor"
          }, g)) : null, null != A ? (0, r.jsx)("div", {
            className: o()(d.icon, d.buttonContent),
            children: A
          }) : null, T && (0, r.jsx)(s.IGR, {
            text: u.intl.string(u.t.y2b7CA),
            color: l.Z.BG_BRAND,
            className: d.newBadge
          })]
        })), I && (0, r.jsx)(c.Z0, {})]
      })
    }
  })
});

function b(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)("div", {
    className: o()(d.separator, t)
  })
}

function y(e) {
  var {
    children: t
  } = e, n = m(e, ["children"]);
  return (0, r.jsx)(c.ZP, {
    className: o()(n.className, d.popover),
    children: t
  })
}
/** Chunk was on web.js **/
/** chunk id: 582474, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk670596 = require("./670596.js"),
  Chunk743236 = require("./743236.js"),
  Chunk481060 = require("./481060.js"),
  Chunk939350 = require("./939350.js"),
  Chunk334405 = require("./334405.js");

function f(e, t, n) {
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
      f(e, t, n[t])
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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    color: t = "default",
    label: n,
    checked: o,
    disabled: f = false,
    isFocused: _,
    menuItemProps: h,
    action: g,
    className: E
  } = e, {
    onInteraction: b
  } = i.useContext(s.p), y = i.useRef(null), O = i.useId();
  i.useEffect(() => {
    _ && (0, l.F)(y)
  }, [_]);
  let v = i.useCallback(e => {
    g(e), null == b || b({
      type: s.U.SWITCH
    })
  }, [g, b]);
  return (0, r.jsxs)("div", m(p({
    ref: y,
    className: a()(d.item, d.switchItem, d.hideInteraction, u._e[t], E, {
      [d.disabled]: f
    }),
    "aria-checked": o,
    "aria-disabled": f
  }, h), {
    children: [null != n ? (0, r.jsx)("div", {
      className: d.labelContainer,
      children: (0, r.jsx)("label", {
        htmlFor: O,
        className: d.label,
        children: n
      })
    }) : null, (0, r.jsx)("div", {
      className: d.switchContainer,
      children: (0, r.jsx)(c.rsf, {
        id: O,
        checked: o,
        onChange: v,
        disabled: f
      })
    })]
  }))
}
/** Chunk was on web.js **/
/** chunk id: 592282, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk761224 = require("./761224.js"),
  Chunk670596 = require("./670596.js"),
  Chunk743236 = require("./743236.js"),
  Chunk939350 = require("./939350.js"),
  Chunk334405 = require("./334405.js");

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

function g(e) {
  let {
    color: t = "default",
    label: n,
    checked: a,
    subtext: _,
    disabled: h,
    isFocused: g,
    menuItemProps: E,
    action: b,
    className: y,
    focusedClassName: O
  } = e, {
    onInteraction: v
  } = i.useContext(c.p), I = i.useRef(null);
  i.useEffect(() => {
    g && (0, u.F)(I)
  }, [g]);
  let T = i.useCallback(e => {
    b(e), null == v || v({
      type: c.U.CHECKBOX
    })
  }, [b, v]);
  return (0, r.jsxs)(s.P3F, m(p({
    innerRef: I,
    className: o()(f.item, f.checkboxContainer, f.labelContainer, d._[t], y, {
      [f.disabled]: h,
      [f.focused]: g,
      [null != O ? O : ""]: g
    }),
    onClick: h ? true : T
  }, E), {
    "aria-checked": a,
    "aria-disabled": h,
    children: [(0, r.jsxs)("div", {
      className: f.label,
      children: [(0, l.I)(n, e), null != _ && (0, r.jsx)("div", {
        className: f.subtext,
        children: _
      })]
    }), (0, r.jsx)("div", {
      className: f.iconContainer,
      children: (0, r.jsx)(s.FZ5, {
        checked: a,
        disabled: h,
        size: 20
      })
    })]
  }))
}
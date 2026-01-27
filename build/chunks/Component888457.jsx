/** Chunk was on web.js **/
/** chunk id: 888457, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk86968 = require("./86968.js"),
  Chunk900283 = require("./900283.js"),
  Chunk563014 = require("./563014.js"),
  Chunk745396 = require("./745396.js"),
  Chunk298063 = require("./298063.js"),
  Chunk112378 = require("./112378.jsx"),
  Chunk52738 = require("./52738.jsx"),
  Chunk885621 = require("./885621.js"),
  Chunk658122 = require("./658122.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  let {
    color: t = "default",
    label: n,
    void_label: a,
    checked: g,
    subtext: y,
    subtextLineClamp: O,
    leftIcon: v,
    leadingAccessory: A,
    disabled: I,
    isFocused: S,
    menuItemProps: T,
    action: C,
    className: N,
    focusedClassName: w
  } = e, {
    onInteraction: R
  } = i.useContext(c.x), P = (0, f.Y)("MenuCheckboxItem"), D = i.useRef(null);
  i.useEffect(() => {
    S && (0, u.Y)(D)
  }, [S]);
  let L = i.useCallback(e => {
    C(e), null == R || R({
      type: c.Q.CHECKBOX
    })
  }, [C, R]);
  return (0, r.jsxs)(s.DUT, b(E({
    innerRef: D,
    className: o()(m.item, m.checkboxContainer, m.labelContainer, h.jV[t], N, {
      [m.disabled]: I,
      [m.focused]: S,
      [null != w ? w : ""]: S
    }),
    onClick: I ? true : L
  }, T), {
    "aria-checked": g,
    "aria-disabled": I,
    children: [P ? null != A && (0, r.jsx)(_.B, {
      accessory: A,
      isFocused: S
    }) : (0, d.O)(v) ? v : null != v && (0, r.jsx)("div", {
      className: m.iconContainerLeft,
      children: (0, r.jsx)(v, {
        color: "currentColor",
        className: m.icon
      })
    }), (0, r.jsxs)("div", {
      className: m.label,
      children: [(0, r.jsx)(p.V, {
        children: (0, l.J)(null != a ? a : n, {
          isFocused: S,
          disabled: I
        })
      }), null != y && (0, r.jsx)(s.EYj, {
        variant: "text-xs/normal",
        className: o()(m.subtext, {
          [m.subtextLineClamp]: null != O
        }),
        lineClamp: O,
        children: y
      })]
    }), (0, r.jsx)("div", {
      className: m.iconContainer,
      children: (0, r.jsx)(s.P7L, {
        checked: g,
        disabled: I,
        size: 20
      })
    })]
  }))
}
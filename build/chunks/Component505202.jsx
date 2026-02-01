/** Chunk was on web.js **/
/** chunk id: 505202, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => v
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
  Chunk516971 = require("./516971.jsx"),
  Chunk885621 = require("./885621.js"),
  Chunk658122 = require("./658122.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    color: t = "default",
    label: n,
    void_label: a,
    icon: E,
    iconLeft: b,
    leadingAccessory: v,
    trailingIndicator: A,
    shortcut: I,
    subtext: S,
    subtextLineClamp: T,
    hasSubmenu: C,
    loading: N,
    badge: w,
    disabled: R,
    isFocused: P,
    menuItemProps: D,
    action: L,
    onClose: x,
    onFocus: M,
    className: j,
    focusedClassName: k,
    dontCloseOnActionIfHoldingShiftKey: U,
    dontCloseOnAction: G,
    iconProps: V
  } = e, {
    onSelect: F,
    onInteraction: B
  } = i.useContext(c.x), H = i.useRef(null), Y = (0, f.Y)("MenuItem"), W = i.useCallback(e => {
    var t;
    if (null == B || B({
        type: c.Q.DEFAULT
      }), null == L) returnfalse;
    e.shiftKey && U || G || x(), e.persist(), null == F || F(), (null != (t = e.nativeEvent.view) ? t : window).requestAnimationFrame(() => L(e))
  }, [L, x, F, U, G, B]);
  return i.useEffect(() => {
    P && ((0, u.Y)(H), null == M || M())
  }, [P, M]), (0, r.jsxs)(s.DUT, O(y({
    innerRef: H,
    className: o()(g.item, g.labelContainer, m.jV[t], j, {
      [g.disabled]: R,
      [g.focused]: P,
      [null != k ? k : ""]: P
    }),
    onClick: R ? true : W,
    "aria-disabled": R
  }, D), {
    "data-menu-item": "true",
    children: [Y || (null == v ? true : v.type) === "status" ? null != v && (0, r.jsx)(_.B, {
      accessory: v,
      isFocused: P
    }) : (0, d.O)(b) ? b : null != b && (0, r.jsx)("div", {
      className: g.iconContainerLeft,
      children: (0, r.jsx)(b, O(y({
        color: "currentColor"
      }, V), {
        className: o()(g.icon, null == V ? true : V.className)
      }))
    }), (0, r.jsxs)("div", {
      className: g.label,
      children: [(0, r.jsx)(p.V, {
        children: (0, l.J)(null != a ? a : n, e)
      }), null != S && (0, r.jsx)(s.EYj, {
        variant: "text-xs/normal",
        className: o()(g.subtext, {
          [g.subtextLineClamp]: null != T
        }),
        lineClamp: T,
        children: S
      })]
    }), null != I && (0, r.jsx)("div", {
      className: g.shortcutContainer,
      children: I
    }), null != w && (0, r.jsx)("div", {
      className: g.badgeContainer,
      children: (0, r.jsx)(s.Exy, {
        type: w
      })
    }), N && (0, r.jsx)("div", {
      className: g.iconContainer,
      children: (0, r.jsx)(s.y$y, {
        type: s.y$y.Type.PULSING_ELLIPSIS
      })
    }), Y ? null != A && (0, r.jsx)(h.g, {
      indicator: A
    }) : (0, d.O)(E) ? E : null != E && (0, r.jsx)("div", {
      className: g.iconContainer,
      children: (0, r.jsx)(E, O(y({
        color: "currentColor"
      }, V), {
        className: o()(g.icon, null == V ? true : V.className)
      }))
    }), C && (0, r.jsx)("div", {
      className: g.iconContainer,
      children: (0, r.jsx)(s._BQ, {
        size: "md",
        color: "currentColor",
        className: g.caret
      })
    })]
  }))
}
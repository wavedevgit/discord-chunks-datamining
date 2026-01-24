/** Chunk was on web.js **/
/** chunk id: 505202, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk86968 = require("./86968.js"),
  Chunk900283 = require("./900283.js"),
  Chunk563014 = require("./563014.js"),
  Chunk745396 = require("./745396.js"),
  Chunk112378 = require("./112378.jsx"),
  Chunk52738 = require("./52738.jsx"),
  Chunk516971 = require("./516971.jsx"),
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
    icon: g,
    iconLeft: y,
    leadingAccessory: O,
    trailingIndicator: v,
    hint: A,
    subtext: I,
    subtextLineClamp: S,
    hasSubmenu: T,
    loading: C,
    badge: N,
    disabled: w,
    isFocused: R,
    menuItemProps: P,
    action: D,
    onClose: x,
    onFocus: L,
    className: j,
    focusedClassName: M,
    dontCloseOnActionIfHoldingShiftKey: k,
    dontCloseOnAction: U,
    iconProps: G
  } = e, {
    onSelect: V,
    onInteraction: F
  } = i.useContext(c.x), B = i.useRef(null), H = i.useCallback(e => {
    var t;
    if (null == F || F({
        type: c.Q.DEFAULT
      }), null == D) returnfalse;
    e.shiftKey && k || U || x(), e.persist(), null == V || V(), (null != (t = e.nativeEvent.view) ? t : window).requestAnimationFrame(() => D(e))
  }, [D, x, V, k, U, F]);
  return i.useEffect(() => {
    R && ((0, u.Y)(B), null == L || L())
  }, [R, L]), (0, r.jsxs)(o.DUT, b(E({
    innerRef: B,
    className: s()(m.item, m.labelContainer, h.jV[t], j, {
      [m.disabled]: w,
      [m.focused]: R,
      [null != M ? M : ""]: R
    }),
    onClick: w ? true : H,
    "aria-disabled": w
  }, P), {
    "data-menu-item": "true",
    children: [null != y && (0, r.jsx)("div", {
      className: m.iconContainerLeft,
      children: (0, r.jsx)(y, b(E({
        color: "currentColor"
      }, G), {
        className: s()(m.icon, null == G ? true : G.className)
      }))
    }), null != O && (0, r.jsx)(p.B, {
      accessory: O,
      isFocused: R
    }), (0, r.jsxs)("div", {
      className: m.label,
      children: [(0, r.jsx)(f.V, {
        children: (0, l.J)(null != a ? a : n, e)
      }), null != I && (0, r.jsx)(o.EYj, {
        variant: "text-xs/normal",
        className: s()(m.subtext, {
          [m.subtextLineClamp]: null != S
        }),
        lineClamp: S,
        children: I
      })]
    }), null != A && (0, r.jsx)("div", {
      className: m.hintContainer,
      children: (0, l.J)(A, e)
    }), null != N && (0, r.jsx)("div", {
      className: m.badgeContainer,
      children: (0, r.jsx)(o.Exy, {
        type: N
      })
    }), C && (0, r.jsx)("div", {
      className: m.iconContainer,
      children: (0, r.jsx)(o.y$y, {
        type: o.y$y.Type.PULSING_ELLIPSIS
      })
    }), (0, d.O)(g) ? g : null != g && (0, r.jsx)("div", {
      className: m.iconContainer,
      children: (0, r.jsx)(g, b(E({
        color: "currentColor"
      }, G), {
        className: s()(m.icon, null == G ? true : G.className)
      }))
    }), null != v && (0, r.jsx)(_.g, {
      indicator: v
    }), T && (0, r.jsx)("div", {
      className: m.iconContainer,
      children: (0, r.jsx)(o._BQ, {
        size: "md",
        color: "currentColor",
        className: m.caret
      })
    })]
  }))
}
/** Chunk was on web.js **/
/** chunk id: 504135, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk761224 = require("./761224.js"),
  Chunk670596 = require("./670596.js"),
  Chunk743236 = require("./743236.js"),
  Chunk525220 = require("./525220.js"),
  Chunk768581 = require("./768581.js"),
  Chunk106683 = require("./106683.jsx"),
  Chunk939350 = require("./939350.js"),
  Chunk564546 = require("./564546.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function v(e, t, n) {
  let {
    emojiId: r,
    src: i,
    animated: a = false
  } = e;
  return null != r ? f.ZP.getEmojiURL({
    id: r,
    animated: a && (!n || t),
    size: 18
  }) : i
}

function S(e, t, n) {
  switch (e.type) {
    case "icon": {
      let {
        type: t,
        icon: n,
        color: i = "currentColor",
        className: a
      } = e, s = y(e, ["type", "icon", "color", "className"]);
      return (0, r.jsx)("div", {
        className: h.iconContainerLeft,
        children: (0, r.jsx)(n, b(g({
          "aria-hidden": true,
          color: i
        }, s), {
          className: o()(h.icon, a)
        }))
      })
    }
    case "emoji": {
      let i = v(e, t, n);
      return (0, r.jsx)("div", {
        className: h.iconContainerLeft,
        children: (0, r.jsx)("img", {
          "aria-hidden": true,
          alt: "",
          src: i,
          className: h.icon
        })
      })
    }
    case "image":
      return (0, r.jsx)("img", {
        "aria-hidden": true,
        alt: "",
        src: e.src,
        className: h.imageAccessory
      });
    case "avatar":
      return (0, r.jsx)("img", {
        "aria-hidden": true,
        alt: "",
        src: e.src,
        className: h.avatarAccessory
      })
  }
}

function I(e) {
  let {
    color: t = "default",
    label: n,
    icon: a,
    iconLeft: f,
    iconLeftSize: m = "md",
    leadingAccessory: E,
    hint: y,
    subtext: O,
    subtextLineClamp: v,
    hasSubmenu: I,
    disabled: T,
    isFocused: C,
    menuItemProps: A,
    action: N,
    onClose: P,
    onFocus: w,
    className: R,
    focusedClassName: D,
    subMenuIconClassName: x,
    dontCloseOnActionIfHoldingShiftKey: L,
    dontCloseOnAction: j,
    iconProps: M
  } = e, {
    onSelect: k,
    onInteraction: U
  } = i.useContext(c.p), {
    reducedMotion: G
  } = i.useContext(s.Sfi), Z = i.useRef(null), F = i.useCallback(e => {
    var t;
    if (null == U || U({
        type: c.U.DEFAULT
      }), null == N) returnfalse;
    e.shiftKey && L || j || P(), e.persist(), null == k || k(), (null != (t = e.nativeEvent.view) ? t : window).requestAnimationFrame(() => N(e))
  }, [N, P, k, L, j, U]);
  return i.useEffect(() => {
    C && ((0, u.F)(Z), null == w || w())
  }, [C, w]), (0, r.jsxs)(s.P3F, b(g({
    innerRef: Z,
    className: o()(h.item, h.labelContainer, _._e[t], R, {
      [h.disabled]: T,
      [h.focused]: C,
      [null != D ? D : ""]: C
    }),
    onClick: T ? true : F,
    "aria-disabled": T
  }, A), {
    "data-menu-item": "true",
    children: [null != f && (0, r.jsx)("div", {
      className: o()(h.iconContainerLeft, {
        [h.iconContainerLarge]: "lg" === m
      }),
      children: (0, r.jsx)(f, b(g({
        color: "currentColor"
      }, M), {
        className: o()(h.icon, null == M ? true : M.className)
      }))
    }), null != E && S(E, C, G.enabled), (0, r.jsxs)("div", {
      className: h.label,
      children: [(0, r.jsx)(p.i, {
        children: (0, l.I)(n, e)
      }), null != O && (0, r.jsx)(s.xvT, {
        variant: "text-xs/normal",
        className: o()(h.subtext, {
          [h.subtextLineClamp]: null != v
        }),
        lineClamp: v,
        children: O
      })]
    }), null != y && (0, r.jsx)("div", {
      className: h.hintContainer,
      children: (0, l.I)(y, e)
    }), (0, d.Y)(a) ? a : null != a && (0, r.jsx)("div", {
      className: h.iconContainer,
      children: (0, r.jsx)(a, b(g({
        color: "currentColor"
      }, M), {
        className: o()(h.icon, null == M ? true : M.className)
      }))
    }), I && (0, r.jsx)("div", {
      className: h.iconContainer,
      children: (0, r.jsx)(s.Fbu, {
        size: "md",
        color: "currentColor",
        className: o()(h.caret, x)
      })
    })]
  }))
}
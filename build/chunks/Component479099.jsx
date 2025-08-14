/** Chunk was on web.js **/
/** chunk id: 479099, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I,
  f: () => T
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk339085 = require("./339085.js"),
  Chunk695346 = require("./695346.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk716754 = require("./716754.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
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

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var v = function(e) {
  return e[e.SMALL = 0] = "SMALL", e[e.MEDIUM = 1] = "MEDIUM", e
}(v || {});

function I(e) {
  let {
    tag: t,
    size: o = 1,
    disabled: E,
    className: y,
    onClick: v,
    onRemove: I,
    selected: T,
    ariaLabel: S
  } = e, {
    name: A,
    emojiId: N,
    emojiName: C
  } = t, R = null != I, [P, w] = i.useState(false), D = (0, l.e7)([_.ZP], () => null != N ? _.ZP.getUsableCustomEmojiById(N) : null), L = R || null != v, x = (!R || !P) && (null != N || null != C), M = 0 === o, k = i.useRef(null), j = (0, l.e7)([f.Z], () => f.Z.keyboardModeEnabled), U = e => {
    null == v || v(e), null == I || I(t), j || null == k.current || k.current.blur()
  }, G = e => {
    let i = p.Sb.getSetting();
    h.wS && i && (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("29646").then(n.bind(n, 955116));
      return n => (0, r.jsx)(e, O(b({}, n), {
        tag: t
      }))
    })
  }, B = (0, r.jsxs)(r.Fragment, {
    children: [x ? (0, r.jsx)(d.Z, {
      className: a()(g.emoji, {
        [g.small]: M
      }),
      emojiId: N,
      emojiName: C,
      animated: !!(null == D ? true : D.animated),
      size: "reaction"
    }) : null, P && R && (0, r.jsx)("div", {
      className: g.closeCircle,
      children: (0, r.jsx)(c.Dio, {
        size: "md",
        color: "currentColor",
        className: g.close
      })
    }), (0, r.jsx)(c.Text, {
      variant: M ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: A
    })]
  }), Z = {
    key: t.id,
    className: a()(g.pill, {
      [g.disabled]: E,
      [g.clickable]: L,
      [g.small]: M,
      [g.selected]: T,
      [g[t.color]]: null != t.color && !L
    }, y),
    onClick: U,
    onContextMenu: e => G(e),
    onMouseEnter: () => R && w(true),
    onMouseLeave: () => R && w(false)
  }, F = (0, s.JA)("forum-tag-".concat(t.id));
  return L ? (0, r.jsx)(c.P3F, O(b(O(b({}, F), {
    innerRef: k,
    focusProps: {
      ringTarget: k
    },
    "aria-label": null != S ? S : m.intl.formatToPlainString(m.t.iyRTLi, {
      tagName: A
    }),
    role: "button",
    "aria-pressed": T
  }), Z), {
    children: B
  })) : (0, r.jsx)("div", O(b({}, Z), {
    children: B
  }))
}

function T(e) {
  let {
    tags: t,
    count: n,
    size: i = 1
  } = e, o = 0 === i;
  return (0, r.jsx)(c.ua7, {
    "aria-label": m.intl.string(m.t["P/y+sr"]),
    text: (0, r.jsx)(r.Fragment, {
      children: t.map(e => (0, r.jsx)(I, {
        tag: e,
        className: g.tooltipPill,
        size: I.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, r.jsx)("div", O(b({}, e), {
      className: a()(g.pill, {
        [g.small]: o
      }),
      children: (0, r.jsxs)(c.Text, {
        variant: o ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    }))
  })
}
I.Sizes = v
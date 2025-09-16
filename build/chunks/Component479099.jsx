/** Chunk was on 10576 **/
/** chunk id: 479099, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f,
  f: () => p
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var O = ((r = O || {})[r.SMALL = 0] = "SMALL", r[r.MEDIUM = 1] = "MEDIUM", r);

function f(e) {
  let {
    tag: t,
    size: r = 1,
    disabled: a,
    className: O,
    onClick: f,
    onRemove: p,
    selected: R,
    ariaLabel: S
  } = e, {
    name: C,
    emojiId: L,
    emojiName: D
  } = t, U = null != p, [M, b] = i.useState(false), x = (0, u.e7)([A.ZP], () => null != L ? A.ZP.getUsableCustomEmojiById(L) : null), v = U || null != f, P = (!U || !M) && (null != L || null != D), j = 0 === r, y = i.useRef(null), G = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled), w = (0, l.jsxs)(l.Fragment, {
    children: [P ? (0, l.jsx)(d.Z, {
      className: s()(g.emoji, {
        [g.small]: j
      }),
      emojiId: L,
      emojiName: D,
      animated: !!(null == x ? true : x.animated),
      size: "reaction"
    }) : null, M && U && (0, l.jsx)("div", {
      className: g.closeCircle,
      children: (0, l.jsx)(c.Dio, {
        size: "md",
        color: "currentColor",
        className: g.close
      })
    }), (0, l.jsx)(c.Text, {
      variant: j ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: C
    })]
  }), k = {
    key: t.id,
    className: s()(g.pill, {
      [g.disabled]: a,
      [g.clickable]: v,
      [g.small]: j,
      [g.selected]: R,
      [g[t.color]]: null != t.color && !v
    }, O),
    onClick: e => {
      null == f || f(e), null == p || p(t), G || null == y.current || y.current.blur()
    },
    onContextMenu: e => (e => {
      let r = T.Sb.getSetting();
      m.wS && r && (0, E.jW)(e, async () => {
        let {
          default: e
        } = await n.e("29646").then(n.bind(n, 955116));
        return n => (0, l.jsx)(e, N(h({}, n), {
          tag: t
        }))
      })
    })(e),
    onMouseEnter: () => U && b(true),
    onMouseLeave: () => U && b(false)
  }, F = (0, o.JA)("forum-tag-".concat(t.id));
  return v ? (0, l.jsx)(c.P3F, N(h(N(h({}, F), {
    innerRef: y,
    focusProps: {
      ringTarget: y
    },
    "aria-label": null != S ? S : I.intl.formatToPlainString(I.t.iyRTLi, {
      tagName: C
    }),
    role: "button",
    "aria-pressed": R
  }), k), {
    children: w
  })) : (0, l.jsx)("div", N(h({}, k), {
    children: w
  }))
}

function p(e) {
  let {
    tags: t,
    count: n,
    size: r = 1
  } = e, i = 0 === r;
  return (0, l.jsx)(c.ua7, {
    "aria-label": I.intl.string(I.t["P/y+sr"]),
    text: (0, l.jsx)(l.Fragment, {
      children: t.map(e => (0, l.jsx)(f, {
        tag: e,
        className: g.tooltipPill,
        size: f.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, l.jsx)("div", N(h({}, e), {
      className: s()(g.pill, {
        [g.small]: i
      }),
      children: (0, l.jsxs)(c.Text, {
        variant: i ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    }))
  })
}
f.Sizes = O
/** Chunk was on 57354 **/
/** chunk id: 479099, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => S,
  f: () => x
}), require("./388685.js");
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk308571 = require("./308571.js");

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = i[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      i.push.apply(i, n)
    }
    return i
  })(Object(t)).forEach(function(i) {
    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i))
  }), e
}
var C = ((n = C || {})[n.SMALL = 0] = "SMALL", n[n.MEDIUM = 1] = "MEDIUM", n);

function S(e) {
  let {
    tag: t,
    size: n = 1,
    disabled: o,
    className: C,
    onClick: S,
    onRemove: x,
    selected: T,
    ariaLabel: w
  } = e, {
    name: O,
    emojiId: F,
    emojiName: I
  } = t, j = null != x, [E, P] = a.useState(false), M = (0, d.e7)([p.ZP], () => null != F ? p.ZP.getUsableCustomEmojiById(F) : null), Z = j || null != S, A = (!j || !E) && (null != F || null != I), k = 0 === n, H = a.useRef(null), L = (0, d.e7)([g.Z], () => g.Z.keyboardModeEnabled), D = (0, s.jsxs)(s.Fragment, {
    children: [A ? (0, s.jsx)(u.Z, {
      className: l()(v.emoji, {
        [v.small]: k
      }),
      emojiId: F,
      emojiName: I,
      animated: !!(null == M ? true : M.animated),
      size: "reaction"
    }) : null, E && j && (0, s.jsx)("div", {
      className: v.closeCircle,
      children: (0, s.jsx)(h.Dio, {
        size: "md",
        color: "currentColor",
        className: v.close
      })
    }), (0, s.jsx)(h.Text, {
      variant: k ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: O
    })]
  }), B = {
    key: t.id,
    className: l()(v.pill, {
      [v.disabled]: o,
      [v.clickable]: Z,
      [v.small]: k,
      [v.selected]: T,
      [v[t.color]]: null != t.color && !Z
    }, C),
    onClick: e => {
      null == S || S(e), null == x || x(t), L || null == H.current || H.current.blur()
    },
    onContextMenu: e => (e => {
      let n = b.Sb.getSetting();
      f.wS && n && (0, c.jW)(e, async () => {
        let {
          default: e
        } = await i.e("29646").then(i.bind(i, 955116));
        return i => (0, s.jsx)(e, y(_({}, i), {
          tag: t
        }))
      })
    })(e),
    onMouseEnter: () => j && P(true),
    onMouseLeave: () => j && P(false)
  }, N = (0, r.JA)("forum-tag-".concat(t.id));
  return Z ? (0, s.jsx)(h.P3F, y(_(y(_({}, N), {
    innerRef: H,
    focusProps: {
      ringTarget: H
    },
    "aria-label": null != w ? w : m.intl.formatToPlainString(m.t.iyRTLi, {
      tagName: O
    }),
    role: "button",
    "aria-pressed": T
  }), B), {
    children: D
  })) : (0, s.jsx)("div", y(_({}, B), {
    children: D
  }))
}

function x(e) {
  let {
    tags: t,
    count: i,
    size: n = 1
  } = e, a = 0 === n;
  return (0, s.jsx)(h.ua7, {
    "aria-label": m.intl.string(m.t["P/y+sr"]),
    text: (0, s.jsx)(s.Fragment, {
      children: t.map(e => (0, s.jsx)(S, {
        tag: e,
        className: v.tooltipPill,
        size: S.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, s.jsx)("div", y(_({}, e), {
      className: l()(v.pill, {
        [v.small]: a
      }),
      children: (0, s.jsxs)(h.Text, {
        variant: a ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", i]
      })
    }))
  })
}
S.Sizes = C
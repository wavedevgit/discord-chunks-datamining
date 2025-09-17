/** Chunk was on 77756 **/
/** chunk id: 479099, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w,
  f: () => C
}), require("./388685.js");
var a, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
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

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var v = ((a = v || {})[a.SMALL = 0] = "SMALL", a[a.MEDIUM = 1] = "MEDIUM", a);

function w(e) {
  let {
    tag: t,
    size: a = 1,
    disabled: l,
    className: v,
    onClick: w,
    onRemove: C,
    selected: j,
    ariaLabel: T
  } = e, {
    name: I,
    emojiId: O,
    emojiName: M
  } = t, E = null != C, [P, S] = i.useState(false), k = (0, c.e7)([g.ZP], () => null != O ? g.ZP.getUsableCustomEmojiById(O) : null), Z = E || null != w, B = (!E || !P) && (null != O || null != M), A = 0 === a, F = i.useRef(null), L = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled), D = (0, o.jsxs)(o.Fragment, {
    children: [B ? (0, o.jsx)(b.Z, {
      className: r()(m.emoji, {
        [m.small]: A
      }),
      emojiId: O,
      emojiName: M,
      animated: !!(null == k ? true : k.animated),
      size: "reaction"
    }) : null, P && E && (0, o.jsx)("div", {
      className: m.closeCircle,
      children: (0, o.jsx)(u.Dio, {
        size: "md",
        color: "currentColor",
        className: m.close
      })
    }), (0, o.jsx)(u.Text, {
      variant: A ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: I
    })]
  }), N = {
    key: t.id,
    className: r()(m.pill, {
      [m.disabled]: l,
      [m.clickable]: Z,
      [m.small]: A,
      [m.selected]: j,
      [m[t.color]]: null != t.color && !Z
    }, v),
    onClick: e => {
      null == w || w(e), null == C || C(t), L || null == F.current || F.current.blur()
    },
    onContextMenu: e => (e => {
      let a = p.Sb.getSetting();
      _.wS && a && (0, d.jW)(e, async () => {
        let {
          default: e
        } = await n.e("29646").then(n.bind(n, 955116));
        return n => (0, o.jsx)(e, x(y({}, n), {
          tag: t
        }))
      })
    })(e),
    onMouseEnter: () => E && S(true),
    onMouseLeave: () => E && S(false)
  }, U = (0, s.JA)("forum-tag-".concat(t.id));
  return Z ? (0, o.jsx)(u.P3F, x(y(x(y({}, U), {
    innerRef: F,
    focusProps: {
      ringTarget: F
    },
    "aria-label": null != T ? T : h.intl.formatToPlainString(h.t.iyRTLi, {
      tagName: I
    }),
    role: "button",
    "aria-pressed": j
  }), N), {
    children: D
  })) : (0, o.jsx)("div", x(y({}, N), {
    children: D
  }))
}

function C(e) {
  let {
    tags: t,
    count: n,
    size: a = 1
  } = e, i = 0 === a;
  return (0, o.jsx)(u.ua7, {
    "aria-label": h.intl.string(h.t["P/y+sr"]),
    text: (0, o.jsx)(o.Fragment, {
      children: t.map(e => (0, o.jsx)(w, {
        tag: e,
        className: m.tooltipPill,
        size: w.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, o.jsx)("div", x(y({}, e), {
      className: r()(m.pill, {
        [m.small]: i
      }),
      children: (0, o.jsxs)(u.Text, {
        variant: i ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    }))
  })
}
w.Sizes = v
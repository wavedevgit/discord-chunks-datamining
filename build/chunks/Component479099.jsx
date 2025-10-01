/** Chunk was on 89442 **/
/** chunk id: 479099, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j,
  f: () => x
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
  Chunk308571 = require("./308571.js");

function O(e) {
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

function b(e, t) {
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
var y = ((r = y || {})[r.SMALL = 0] = "SMALL", r[r.MEDIUM = 1] = "MEDIUM", r);

function j(e) {
  let {
    tag: t,
    size: r = 1,
    disabled: a,
    className: y,
    onClick: j,
    onRemove: x,
    selected: w,
    ariaLabel: E
  } = e, {
    name: L,
    emojiId: S,
    emojiName: N
  } = t, P = null != x, [_, C] = i.useState(false), T = (0, c.e7)([p.ZP], () => null != S ? p.ZP.getUsableCustomEmojiById(S) : null), Z = P || null != j, M = (!P || !_) && (null != S || null != N), R = 0 === r, A = i.useRef(null), I = (0, c.e7)([g.Z], () => g.Z.keyboardModeEnabled), U = (0, l.jsxs)(l.Fragment, {
    children: [M ? (0, l.jsx)(h.Z, {
      className: s()(D.emoji, {
        [D.small]: R
      }),
      emojiId: S,
      emojiName: N,
      animated: !!(null == T ? true : T.animated),
      size: "reaction"
    }) : null, _ && P && (0, l.jsx)("div", {
      className: D.closeCircle,
      children: (0, l.jsx)(u.Dio, {
        size: "md",
        color: "currentColor",
        className: D.close
      })
    }), (0, l.jsx)(u.Text, {
      variant: R ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: L
    })]
  }), k = {
    key: t.id,
    className: s()(D.pill, {
      [D.disabled]: a,
      [D.clickable]: Z,
      [D.small]: R,
      [D.selected]: w,
      [D[t.color]]: null != t.color && !Z
    }, y),
    onClick: e => {
      null == j || j(e), null == x || x(t), I || null == A.current || A.current.blur()
    },
    onContextMenu: e => (e => {
      let r = f.Sb.getSetting();
      v.wS && r && (0, d.jW)(e, async () => {
        let {
          default: e
        } = await n.e("29646").then(n.bind(n, 955116));
        return n => (0, l.jsx)(e, b(O({}, n), {
          tag: t
        }))
      })
    })(e),
    onMouseEnter: () => P && C(true),
    onMouseLeave: () => P && C(false)
  }, z = (0, o.JA)("forum-tag-".concat(t.id));
  return Z ? (0, l.jsx)(u.P3F, b(O(b(O({}, z), {
    innerRef: A,
    focusProps: {
      ringTarget: A
    },
    "aria-label": null != E ? E : m.intl.formatToPlainString(m.t.iyRTLi, {
      tagName: L
    }),
    role: "button",
    "aria-pressed": w
  }), k), {
    children: U
  })) : (0, l.jsx)("div", b(O({}, k), {
    children: U
  }))
}

function x(e) {
  let {
    tags: t,
    count: n,
    size: r = 1
  } = e, i = 0 === r;
  return (0, l.jsx)(u.ua7, {
    "aria-label": m.intl.string(m.t["P/y+sr"]),
    text: (0, l.jsx)(l.Fragment, {
      children: t.map(e => (0, l.jsx)(j, {
        tag: e,
        className: D.tooltipPill,
        size: j.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, l.jsx)("div", b(O({}, e), {
      className: s()(D.pill, {
        [D.small]: i
      }),
      children: (0, l.jsxs)(u.Text, {
        variant: i ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    }))
  })
}
j.Sizes = y
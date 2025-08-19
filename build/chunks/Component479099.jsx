/** Chunk was on 12630 **/
/** chunk id: 479099, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => M,
  f: () => p
}), require("./388685.js");
var n, Chunk951288 = require("./951288.js"),
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

function B(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
      return Object.getOwnPropertyDescriptor(t, A).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = t[e], e in A ? Object.defineProperty(A, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : A[e] = n
    })
  }
  return A
}

function w(A, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : (function(A, e) {
    var t = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(A);
      t.push.apply(t, n)
    }
    return t
  })(Object(e)).forEach(function(t) {
    Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
  }), A
}
var D = ((n = D || {})[n.SMALL = 0] = "SMALL", n[n.MEDIUM = 1] = "MEDIUM", n);

function M(A) {
  let {
    tag: e,
    size: n = 1,
    disabled: i,
    className: D,
    onClick: M,
    onRemove: p,
    selected: I,
    ariaLabel: H
  } = A, {
    name: b,
    emojiId: O,
    emojiName: Q
  } = e, P = null != p, [j, V] = l.useState(false), m = (0, o.e7)([u.ZP], () => null != O ? u.ZP.getUsableCustomEmojiById(O) : null), T = P || null != M, y = (!P || !j) && (null != O || null != Q), L = 0 === n, x = l.useRef(null), N = (0, o.e7)([v.Z], () => v.Z.keyboardModeEnabled), Z = (0, r.jsxs)(r.Fragment, {
    children: [y ? (0, r.jsx)(f.Z, {
      className: s()(C.emoji, {
        [C.small]: L
      }),
      emojiId: O,
      emojiName: Q,
      animated: !!(null == m ? true : m.animated),
      size: "reaction"
    }) : null, j && P && (0, r.jsx)("div", {
      className: C.closeCircle,
      children: (0, r.jsx)(g.Dio, {
        size: "md",
        color: "currentColor",
        className: C.close
      })
    }), (0, r.jsx)(g.Text, {
      variant: L ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: b
    })]
  }), S = {
    key: e.id,
    className: s()(C.pill, {
      [C.disabled]: i,
      [C.clickable]: T,
      [C.small]: L,
      [C.selected]: I,
      [C[e.color]]: null != e.color && !T
    }, D),
    onClick: A => {
      null == M || M(A), null == p || p(e), N || null == x.current || x.current.blur()
    },
    onContextMenu: A => (A => {
      let n = h.Sb.getSetting();
      d.wS && n && (0, c.jW)(A, async () => {
        let {
          default: A
        } = await t.e("29646").then(t.bind(t, 955116));
        return t => (0, r.jsx)(A, w(B({}, t), {
          tag: e
        }))
      })
    })(A),
    onMouseEnter: () => P && V(true),
    onMouseLeave: () => P && V(false)
  }, R = (0, a.JA)("forum-tag-".concat(e.id));
  return T ? (0, r.jsx)(g.P3F, w(B(w(B({}, R), {
    innerRef: x,
    focusProps: {
      ringTarget: x
    },
    "aria-label": null != H ? H : E.intl.formatToPlainString(E.t.iyRTLi, {
      tagName: b
    }),
    role: "button",
    "aria-pressed": I
  }), S), {
    children: Z
  })) : (0, r.jsx)("div", w(B({}, S), {
    children: Z
  }))
}

function p(A) {
  let {
    tags: e,
    count: t,
    size: n = 1
  } = A, l = 0 === n;
  return (0, r.jsx)(g.ua7, {
    "aria-label": E.intl.string(E.t["P/y+sr"]),
    text: (0, r.jsx)(r.Fragment, {
      children: e.map(A => (0, r.jsx)(M, {
        tag: A,
        className: C.tooltipPill,
        size: M.Sizes.SMALL
      }, A.id))
    }),
    children: A => (0, r.jsx)("div", w(B({}, A), {
      className: s()(C.pill, {
        [C.small]: l
      }),
      children: (0, r.jsxs)(g.Text, {
        variant: l ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", t]
      })
    }))
  })
}
M.Sizes = D
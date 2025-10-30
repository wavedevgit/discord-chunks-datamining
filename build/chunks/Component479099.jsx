/** Chunk was on 67807 **/
/** chunk id: 479099, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x,
  f: () => E
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk339085 = require("./339085.js"),
  Chunk695346 = require("./695346.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk308571 = require("./308571.js");

function j(e) {
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

function D(e, t) {
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

function x(e) {
  let {
    tag: t,
    size: r = 1,
    disabled: s,
    className: u,
    onClick: y,
    onRemove: x,
    selected: E,
    ariaLabel: N
  } = e, {
    name: w,
    emojiId: P,
    emojiName: L
  } = t, S = null != x, [M, T] = i.useState(false), A = (0, c.e7)([g.ZP], () => null != P ? g.ZP.getUsableCustomEmojiById(P) : null), I = S || null != y, _ = (!S || !M) && (null != P || null != L), Z = 0 === r, C = i.useRef(null), U = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled), R = (0, l.jsxs)(l.Fragment, {
    children: [_ ? (0, l.jsx)(h.Z, {
      className: a()(O.emoji, {
        [O.small]: Z
      }),
      emojiId: P,
      emojiName: L,
      animated: !!(null == A ? true : A.animated),
      size: "reaction"
    }) : null, M && S && (0, l.jsx)("div", {
      className: O.closeCircle,
      children: (0, l.jsx)(d.Dio, {
        size: "md",
        color: "currentColor",
        className: O.close
      })
    }), (0, l.jsx)(d.Text, {
      variant: Z ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: w
    })]
  }), k = {
    key: t.id,
    className: a()(O.pill, {
      [O.disabled]: s,
      [O.clickable]: I,
      [O.small]: Z,
      [O.selected]: E,
      [O[t.color]]: null != t.color && !I
    }, u),
    onClick: e => {
      null == y || y(e), null == x || x(t), U || null == C.current || C.current.blur()
    },
    onContextMenu: e => (e => {
      let r = v.Sb.getSetting();
      m.wS && r && (0, p.jW)(e, async () => {
        let {
          default: e
        } = await n.e("29646").then(n.bind(n, 955116));
        return n => (0, l.jsx)(e, D(j({}, n), {
          tag: t
        }))
      })
    })(e),
    onMouseEnter: () => S && T(true),
    onMouseLeave: () => S && T(false)
  }, z = (0, o.JA)("forum-tag-".concat(t.id));
  return I ? (0, l.jsx)(d.P3F, D(j(D(j({}, z), {
    innerRef: C,
    focusProps: {
      ringTarget: C
    },
    "aria-label": null != N ? N : b.intl.formatToPlainString(b.t.iyRTLm, {
      tagName: w
    }),
    role: "button",
    "aria-pressed": E
  }), k), {
    children: R
  })) : (0, l.jsx)("div", D(j({}, k), {
    children: R
  }))
}

function E(e) {
  let {
    tags: t,
    count: n,
    size: r = 1
  } = e, i = 0 === r;
  return (0, l.jsx)(u.u, {
    "aria-label": b.intl.string(b.t["P/y+sj"]),
    __unsupportedReactNodeAsText: (0, l.jsx)(l.Fragment, {
      children: t.map(e => (0, l.jsx)(x, {
        tag: e,
        className: O.tooltipPill,
        size: x.Sizes.SMALL
      }, e.id))
    }),
    children: (0, l.jsx)("div", {
      className: a()(O.pill, {
        [O.small]: i
      }),
      children: (0, l.jsxs)(d.Text, {
        variant: i ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    })
  })
}
x.Sizes = y
/** Chunk was on 76844 **/
/** chunk id: 479099, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j,
  f: () => x
}), require("./388685.js");
var l, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk815417 = require("./815417.js");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var O = ((l = O || {})[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM", l);

function j(e) {
  let {
    tag: t,
    size: l = 1,
    disabled: a,
    className: c,
    onClick: O,
    onRemove: j,
    selected: x,
    ariaLabel: w
  } = e, {
    name: N,
    emojiId: R,
    emojiName: P
  } = t, S = null != j, [C, L] = i.useState(false), A = (0, u.e7)([f.ZP], () => null != R ? f.ZP.getUsableCustomEmojiById(R) : null), _ = S || null != O, M = (!S || !C) && (null != R || null != P), T = 0 === l, Z = i.useRef(null), I = (0, u.e7)([g.Z], () => g.Z.keyboardModeEnabled), U = (0, r.jsxs)(r.Fragment, {
    children: [M ? (0, r.jsx)(p.Z, {
      className: s()(b.emoji, {
        [b.small]: T
      }),
      emojiId: R,
      emojiName: P,
      animated: !!(null == A ? true : A.animated),
      size: "reaction"
    }) : null, C && S && (0, r.jsx)("div", {
      className: b.closeCircle,
      children: (0, r.jsx)(d.Dio, {
        size: "md",
        color: "currentColor",
        className: b.close
      })
    }), (0, r.jsx)(d.Text, {
      variant: T ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: N
    })]
  }), k = {
    key: t.id,
    className: s()(b.pill, {
      [b.disabled]: a,
      [b.clickable]: _,
      [b.small]: T,
      [b.selected]: x,
      [b[t.color]]: null != t.color && !_
    }, c),
    onClick: e => {
      null == O || O(e), null == j || j(t), I || null == Z.current || Z.current.blur()
    },
    onContextMenu: e => (e => {
      let l = v.Sb.getSetting();
      m.wS && l && (0, h.jW)(e, async () => {
        let {
          default: e
        } = await n.e("29646").then(n.bind(n, 955116));
        return n => (0, r.jsx)(e, E(y({}, n), {
          tag: t
        }))
      })
    })(e),
    onMouseEnter: () => S && L(true),
    onMouseLeave: () => S && L(false)
  }, z = (0, o.JA)("forum-tag-".concat(t.id));
  return _ ? (0, r.jsx)(d.P3F, E(y(E(y({}, z), {
    innerRef: Z,
    focusProps: {
      ringTarget: Z
    },
    "aria-label": null != w ? w : D.intl.formatToPlainString(D.t.iyRTLm, {
      tagName: N
    }),
    role: "button",
    "aria-pressed": x
  }), k), {
    children: U
  })) : (0, r.jsx)("div", E(y({}, k), {
    children: U
  }))
}

function x(e) {
  let {
    tags: t,
    count: n,
    size: l = 1
  } = e, i = 0 === l;
  return (0, r.jsx)(c.u, {
    "aria-label": D.intl.string(D.t["P/y+sj"]),
    __unsupportedReactNodeAsText: (0, r.jsx)(r.Fragment, {
      children: t.map(e => (0, r.jsx)(j, {
        tag: e,
        className: b.tooltipPill,
        size: j.Sizes.SMALL
      }, e.id))
    }),
    children: (0, r.jsx)("div", {
      className: s()(b.pill, {
        [b.small]: i
      }),
      children: (0, r.jsxs)(d.Text, {
        variant: i ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    })
  })
}
j.Sizes = O
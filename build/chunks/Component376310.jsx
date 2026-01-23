/** Chunk was on 94503 **/
/** chunk id: 376310, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p,
  q: () => S
}), require("./896048.js");
var l, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk508675 = require("./508675.js"),
  Chunk253932 = require("./253932.js"),
  Chunk957565 = require("./957565.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk576140 = require("./576140.js");

function m(e) {
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

function N(e, t) {
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
var f = ((l = f || {})[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM", l);

function p(e) {
  let {
    tag: t,
    size: l = 1,
    disabled: i,
    className: c,
    onClick: f,
    onRemove: p,
    selected: S,
    ariaLabel: G
  } = e, {
    name: R,
    emojiId: D,
    emojiName: C
  } = t, L = null != p, [b, x] = a.useState(false), M = (0, u.bG)([A.Ay], () => null != D ? A.Ay.getUsableCustomEmojiById(D) : null), v = L || null != f, j = (!L || !b) && (null != D || null != C), U = 0 === l, y = a.useRef(null), k = (0, u.bG)([g.A], () => g.A.keyboardModeEnabled), P = (0, r.jsxs)(r.Fragment, {
    children: [j ? (0, r.jsx)(_.A, {
      className: s()(O.emoji, {
        [O.small]: U
      }),
      emojiId: D,
      emojiName: C,
      animated: !!(null == M ? true : M.animated),
      size: "reaction"
    }) : null, b && L && (0, r.jsx)("div", {
      className: O.closeCircle,
      children: (0, r.jsx)(E.PGe, {
        size: "md",
        color: "currentColor",
        className: O.close
      })
    }), (0, r.jsx)(E.Text, {
      variant: U ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: R
    })]
  }), F = {
    key: t.id,
    className: s()(O.pill, {
      [O.disabled]: i,
      [O.clickable]: v,
      [O.small]: U,
      [O.selected]: S,
      [O[t.color]]: null != t.color && !v
    }, c),
    onClick: e => {
      null == f || f(e), null == p || p(t), k || null == y.current || y.current.blur()
    },
    onContextMenu: e => {
      let l;
      return l = T.Q_.getSetting(), void(h.p5 && l && (0, d.L3)(e, async () => {
        let {
          default: e
        } = await n.e("32612").then(n.bind(n, 960015));
        return n => (0, r.jsx)(e, N(m({}, n), {
          tag: t
        }))
      }))
    },
    onMouseEnter: () => L && x(true),
    onMouseLeave: () => L && x(false)
  }, w = (0, o.rm)("forum-tag-".concat(t.id));
  return v ? (0, r.jsx)(E.DUT, N(m(N(m({}, w), {
    innerRef: y,
    focusProps: {
      ringTarget: y
    },
    "aria-label": null != G ? G : I.intl.formatToPlainString(I.t.iyRTLm, {
      tagName: R
    }),
    role: "button",
    "aria-pressed": S
  }), F), {
    children: P
  })) : (0, r.jsx)("div", N(m({}, F), {
    children: P
  }))
}

function S(e) {
  let {
    tags: t,
    count: n,
    size: l = 1
  } = e, a = 0 === l;
  return (0, r.jsx)(c.m, {
    "aria-label": I.intl.string(I.t["P/y+sj"]),
    __unsupportedReactNodeAsText: (0, r.jsx)(r.Fragment, {
      children: t.map(e => (0, r.jsx)(p, {
        tag: e,
        className: O.tooltipPill,
        size: p.Sizes.SMALL
      }, e.id))
    }),
    children: (0, r.jsx)("div", {
      className: s()(O.pill, {
        [O.small]: a
      }),
      children: (0, r.jsxs)(E.Text, {
        variant: a ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    })
  })
}
p.Sizes = f
/** Chunk was on 94503 **/
/** chunk id: 376310, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S,
  q: () => p
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

function O(e) {
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
var m = ((l = m || {})[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM", l);

function S(e) {
  let {
    tag: t,
    size: l = 1,
    disabled: i,
    className: u,
    onClick: m,
    onRemove: S,
    selected: p,
    ariaLabel: b
  } = e, {
    name: G,
    emojiId: R,
    emojiName: D
  } = t, L = null != S, [x, C] = a.useState(false), M = (0, c.bG)([A.Ay], () => null != R ? A.Ay.getUsableCustomEmojiById(R) : null), v = L || null != m, j = (!L || !x) && (null != R || null != D), U = 0 === l, y = a.useRef(null), P = (0, c.bG)([g.A], () => g.A.keyboardModeEnabled), k = (0, r.jsxs)(r.Fragment, {
    children: [j ? (0, r.jsx)(_.A, {
      className: s()(I.emoji, {
        [I.small]: U
      }),
      emojiId: R,
      emojiName: D,
      animated: !!(null == M ? true : M.animated),
      size: "reaction"
    }) : null, x && L && (0, r.jsx)("div", {
      className: I.closeCircle,
      children: (0, r.jsx)(E.PGe, {
        size: "md",
        color: "currentColor",
        className: I.close
      })
    }), (0, r.jsx)(E.Text, {
      variant: U ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: G
    })]
  }), F = {
    key: t.id,
    className: s()(I.pill, {
      [I.disabled]: i,
      [I.clickable]: v,
      [I.small]: U,
      [I.selected]: p,
      [I[t.color]]: null != t.color && !v
    }, u),
    onClick: e => {
      null == m || m(e), null == S || S(t), P || null == y.current || y.current.blur()
    },
    onContextMenu: e => {
      let l;
      return l = T.Q_.getSetting(), void(f.p5 && l && (0, d.L3)(e, async () => {
        let {
          default: e
        } = await n.e("32612").then(n.bind(n, 960015));
        return n => (0, r.jsx)(e, N(O({}, n), {
          tag: t
        }))
      }))
    },
    onMouseEnter: () => L && C(true),
    onMouseLeave: () => L && C(false)
  }, w = (0, o.rm)("forum-tag-".concat(t.id));
  return v ? (0, r.jsx)(E.DUT, N(O(N(O({}, w), {
    innerRef: y,
    focusProps: {
      ringTarget: y
    },
    "aria-label": null != b ? b : h.intl.formatToPlainString(h.t.iyRTLm, {
      tagName: G
    }),
    role: "button",
    "aria-pressed": p
  }), F), {
    children: k
  })) : (0, r.jsx)("div", N(O({}, F), {
    children: k
  }))
}

function p(e) {
  let {
    tags: t,
    count: n,
    size: l = 1
  } = e, a = 0 === l;
  return (0, r.jsx)(u.m, {
    "aria-label": h.intl.string(h.t["P/y+sj"]),
    __unsupportedReactNodeAsText: (0, r.jsx)(r.Fragment, {
      children: t.map(e => (0, r.jsx)(S, {
        tag: e,
        className: I.tooltipPill,
        size: S.Sizes.SMALL
      }, e.id))
    }),
    children: (0, r.jsx)("div", {
      className: s()(I.pill, {
        [I.small]: a
      }),
      children: (0, r.jsxs)(E.Text, {
        variant: a ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    })
  })
}
S.Sizes = m
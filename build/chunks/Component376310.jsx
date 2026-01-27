/** Chunk was on 39289 **/
/** chunk id: 376310, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v,
  q: () => T
}), require("./896048.js");
var a, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  c = require.n(Chunk503698),
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

function j(e, t) {
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
var C = ((a = C || {})[a.SMALL = 0] = "SMALL", a[a.MEDIUM = 1] = "MEDIUM", a);

function v(e) {
  let {
    tag: t,
    size: a = 1,
    disabled: r,
    className: _,
    onClick: C,
    onRemove: v,
    selected: T,
    ariaLabel: w
  } = e, {
    name: E,
    emojiId: A,
    emojiName: I
  } = t, S = null != v, [k, O] = i.useState(false), M = (0, s.bG)([p.Ay], () => null != A ? p.Ay.getUsableCustomEmojiById(A) : null), R = S || null != C, P = (!S || !k) && (null != A || null != I), L = 0 === a, G = i.useRef(null), B = (0, s.bG)([f.A], () => f.A.keyboardModeEnabled), D = (0, o.jsxs)(o.Fragment, {
    children: [P ? (0, o.jsx)(d.A, {
      className: c()(x.emoji, {
        [x.small]: L
      }),
      emojiId: A,
      emojiName: I,
      animated: !!(null == M ? true : M.animated),
      size: "reaction"
    }) : null, k && S && (0, o.jsx)("div", {
      className: x.closeCircle,
      children: (0, o.jsx)(b.PGe, {
        size: "md",
        color: "currentColor",
        className: x.close
      })
    }), (0, o.jsx)(b.Text, {
      variant: L ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: E
    })]
  }), N = {
    key: t.id,
    className: c()(x.pill, {
      [x.disabled]: r,
      [x.clickable]: R,
      [x.small]: L,
      [x.selected]: T,
      [x[t.color]]: null != t.color && !R
    }, _),
    onClick: e => {
      null == C || C(e), null == v || v(t), B || null == G.current || G.current.blur()
    },
    onContextMenu: e => {
      let a;
      return a = h.Q_.getSetting(), void(m.p5 && a && (0, u.L3)(e, async () => {
        let {
          default: e
        } = await n.e("32612").then(n.bind(n, 960015));
        return n => (0, o.jsx)(e, j(y({}, n), {
          tag: t
        }))
      }))
    },
    onMouseEnter: () => S && O(true),
    onMouseLeave: () => S && O(false)
  }, F = (0, l.rm)("forum-tag-".concat(t.id));
  return R ? (0, o.jsx)(b.DUT, j(y(j(y({}, F), {
    innerRef: G,
    focusProps: {
      ringTarget: G
    },
    "aria-label": null != w ? w : g.intl.formatToPlainString(g.t.iyRTLm, {
      tagName: E
    }),
    role: "button",
    "aria-pressed": T
  }), N), {
    children: D
  })) : (0, o.jsx)("div", j(y({}, N), {
    children: D
  }))
}

function T(e) {
  let {
    tags: t,
    count: n,
    size: a = 1
  } = e, i = 0 === a;
  return (0, o.jsx)(_.m, {
    "aria-label": g.intl.string(g.t["P/y+sj"]),
    __unsupportedReactNodeAsText: (0, o.jsx)(o.Fragment, {
      children: t.map(e => (0, o.jsx)(v, {
        tag: e,
        className: x.tooltipPill,
        size: v.Sizes.SMALL
      }, e.id))
    }),
    children: (0, o.jsx)("div", {
      className: c()(x.pill, {
        [x.small]: i
      }),
      children: (0, o.jsxs)(b.Text, {
        variant: i ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    })
  })
}
v.Sizes = C
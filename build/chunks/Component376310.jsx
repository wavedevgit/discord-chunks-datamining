/** Chunk was on 91798 **/
/** chunk id: 376310, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => C,
  q: () => w
}), require("./896048.js");
var n, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = a[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      a.push.apply(a, n)
    }
    return a
  })(Object(t)).forEach(function(a) {
    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
  }), e
}
var j = ((n = j || {})[n.SMALL = 0] = "SMALL", n[n.MEDIUM = 1] = "MEDIUM", n);

function C(e) {
  let {
    tag: t,
    size: n = 1,
    disabled: i,
    className: u,
    onClick: j,
    onRemove: C,
    selected: w,
    ariaLabel: A
  } = e, {
    name: E,
    emojiId: O,
    emojiName: T
  } = t, I = null != C, [M, S] = r.useState(false), P = (0, c.bG)([_.Ay], () => null != O ? _.Ay.getUsableCustomEmojiById(O) : null), k = I || null != j, L = (!I || !M) && (null != O || null != T), N = 0 === n, D = r.useRef(null), F = (0, c.bG)([p.A], () => p.A.keyboardModeEnabled), B = (0, l.jsxs)(l.Fragment, {
    children: [L ? (0, l.jsx)(f.A, {
      className: o()(y.emoji, {
        [y.small]: N
      }),
      emojiId: O,
      emojiName: T,
      animated: !!(null == P ? true : P.animated),
      size: "reaction"
    }) : null, M && I && (0, l.jsx)("div", {
      className: y.closeCircle,
      children: (0, l.jsx)(d.PGe, {
        size: "md",
        color: "currentColor",
        className: y.close
      })
    }), (0, l.jsx)(d.Text, {
      variant: N ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: E
    })]
  }), G = {
    key: t.id,
    className: o()(y.pill, {
      [y.disabled]: i,
      [y.clickable]: k,
      [y.small]: N,
      [y.selected]: w,
      [y[t.color]]: null != t.color && !k
    }, u),
    onClick: e => {
      null == j || j(e), null == C || C(t), F || null == D.current || D.current.blur()
    },
    onContextMenu: e => {
      let n;
      return n = g.Q_.getSetting(), void(h.p5 && n && (0, b.L3)(e, async () => {
        let {
          default: e
        } = await a.e("32612").then(a.bind(a, 960015));
        return a => (0, l.jsx)(e, v(x({}, a), {
          tag: t
        }))
      }))
    },
    onMouseEnter: () => I && S(true),
    onMouseLeave: () => I && S(false)
  }, U = (0, s.rm)("forum-tag-".concat(t.id));
  return k ? (0, l.jsx)(d.DUT, v(x(v(x({}, U), {
    innerRef: D,
    focusProps: {
      ringTarget: D
    },
    "aria-label": null != A ? A : m.intl.formatToPlainString(m.t.iyRTLm, {
      tagName: E
    }),
    role: "button",
    "aria-pressed": w
  }), G), {
    children: B
  })) : (0, l.jsx)("div", v(x({}, G), {
    children: B
  }))
}

function w(e) {
  let {
    tags: t,
    count: a,
    size: n = 1
  } = e, r = 0 === n;
  return (0, l.jsx)(u.m, {
    "aria-label": m.intl.string(m.t["P/y+sj"]),
    __unsupportedReactNodeAsText: (0, l.jsx)(l.Fragment, {
      children: t.map(e => (0, l.jsx)(C, {
        tag: e,
        className: y.tooltipPill,
        size: C.Sizes.SMALL
      }, e.id))
    }),
    children: (0, l.jsx)("div", {
      className: o()(y.pill, {
        [y.small]: r
      }),
      children: (0, l.jsxs)(d.Text, {
        variant: r ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", a]
      })
    })
  })
}
C.Sizes = j
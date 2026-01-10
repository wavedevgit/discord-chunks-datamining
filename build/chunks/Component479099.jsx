/** Chunk was on 96551 **/
/** chunk id: 479099, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => j,
  f: () => T
}), require("./388685.js");
var n, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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

function v(e) {
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

function w(e, t) {
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
var C = ((n = C || {})[n.SMALL = 0] = "SMALL", n[n.MEDIUM = 1] = "MEDIUM", n);

function j(e) {
  let {
    tag: t,
    size: n = 1,
    disabled: o,
    className: d,
    onClick: C,
    onRemove: j,
    selected: T,
    ariaLabel: I
  } = e, {
    name: O,
    emojiId: M,
    emojiName: E
  } = t, P = null != j, [S, k] = l.useState(false), Z = (0, s.e7)([p.ZP], () => null != M ? p.ZP.getUsableCustomEmojiById(M) : null), _ = P || null != C, A = (!P || !S) && (null != M || null != E), B = 0 === n, L = l.useRef(null), F = (0, s.e7)([g.Z], () => g.Z.keyboardModeEnabled), N = (0, c.jsxs)(c.Fragment, {
    children: [A ? (0, c.jsx)(b.Z, {
      className: i()(x.emoji, {
        [x.small]: B
      }),
      emojiId: M,
      emojiName: E,
      animated: !!(null == Z ? true : Z.animated),
      size: "reaction"
    }) : null, S && P && (0, c.jsx)("div", {
      className: x.closeCircle,
      children: (0, c.jsx)(u.Dio, {
        size: "md",
        color: "currentColor",
        className: x.close
      })
    }), (0, c.jsx)(u.Text, {
      variant: B ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: O
    })]
  }), D = {
    key: t.id,
    className: i()(x.pill, {
      [x.disabled]: o,
      [x.clickable]: _,
      [x.small]: B,
      [x.selected]: T,
      [x[t.color]]: null != t.color && !_
    }, d),
    onClick: e => {
      null == C || C(e), null == j || j(t), F || null == L.current || L.current.blur()
    },
    onContextMenu: e => (e => {
      let n = h.Sb.getSetting();
      m.wS && n && (0, f.jW)(e, async () => {
        let {
          default: e
        } = await a.e("29646").then(a.bind(a, 955116));
        return a => (0, c.jsx)(e, w(v({}, a), {
          tag: t
        }))
      })
    })(e),
    onMouseEnter: () => P && k(true),
    onMouseLeave: () => P && k(false)
  }, R = (0, r.JA)("forum-tag-".concat(t.id));
  return _ ? (0, c.jsx)(u.P3F, w(v(w(v({}, R), {
    innerRef: L,
    focusProps: {
      ringTarget: L
    },
    "aria-label": null != I ? I : y.intl.formatToPlainString(y.t.iyRTLm, {
      tagName: O
    }),
    role: "button",
    "aria-pressed": T
  }), D), {
    children: N
  })) : (0, c.jsx)("div", w(v({}, D), {
    children: N
  }))
}

function T(e) {
  let {
    tags: t,
    count: a,
    size: n = 1
  } = e, l = 0 === n;
  return (0, c.jsx)(d.u, {
    "aria-label": y.intl.string(y.t["P/y+sj"]),
    __unsupportedReactNodeAsText: (0, c.jsx)(c.Fragment, {
      children: t.map(e => (0, c.jsx)(j, {
        tag: e,
        className: x.tooltipPill,
        size: j.Sizes.SMALL
      }, e.id))
    }),
    children: (0, c.jsx)("div", {
      className: i()(x.pill, {
        [x.small]: l
      }),
      children: (0, c.jsxs)(u.Text, {
        variant: l ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", a]
      })
    })
  })
}
j.Sizes = C
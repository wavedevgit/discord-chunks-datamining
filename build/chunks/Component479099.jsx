/** Chunk was on 27381 **/
/** chunk id: 479099, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => w,
  f: () => T
}), require("./388685.js");
var n, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = i[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      i.push.apply(i, n)
    }
    return i
  })(Object(t)).forEach(function(i) {
    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i))
  }), e
}
var x = ((n = x || {})[n.SMALL = 0] = "SMALL", n[n.MEDIUM = 1] = "MEDIUM", n);

function w(e) {
  let {
    tag: t,
    size: n = 1,
    disabled: o,
    className: d,
    onClick: x,
    onRemove: w,
    selected: T,
    ariaLabel: O
  } = e, {
    name: F,
    emojiId: I,
    emojiName: j
  } = t, E = null != w, [P, M] = a.useState(false), Z = (0, c.e7)([b.ZP], () => null != I ? b.ZP.getUsableCustomEmojiById(I) : null), A = E || null != x, k = (!E || !P) && (null != I || null != j), _ = 0 === n, H = a.useRef(null), L = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled), D = (0, s.jsxs)(s.Fragment, {
    children: [k ? (0, s.jsx)(g.Z, {
      className: l()(y.emoji, {
        [y.small]: _
      }),
      emojiId: I,
      emojiName: j,
      animated: !!(null == Z ? true : Z.animated),
      size: "reaction"
    }) : null, P && E && (0, s.jsx)("div", {
      className: y.closeCircle,
      children: (0, s.jsx)(h.Dio, {
        size: "md",
        color: "currentColor",
        className: y.close
      })
    }), (0, s.jsx)(h.Text, {
      variant: _ ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: F
    })]
  }), N = {
    key: t.id,
    className: l()(y.pill, {
      [y.disabled]: o,
      [y.clickable]: A,
      [y.small]: _,
      [y.selected]: T,
      [y[t.color]]: null != t.color && !A
    }, d),
    onClick: e => {
      null == x || x(e), null == w || w(t), L || null == H.current || H.current.blur()
    },
    onContextMenu: e => (e => {
      let n = p.Sb.getSetting();
      m.wS && n && (0, u.jW)(e, async () => {
        let {
          default: e
        } = await i.e("29646").then(i.bind(i, 955116));
        return i => (0, s.jsx)(e, S(C({}, i), {
          tag: t
        }))
      })
    })(e),
    onMouseEnter: () => E && M(true),
    onMouseLeave: () => E && M(false)
  }, B = (0, r.JA)("forum-tag-".concat(t.id));
  return A ? (0, s.jsx)(h.P3F, S(C(S(C({}, B), {
    innerRef: H,
    focusProps: {
      ringTarget: H
    },
    "aria-label": null != O ? O : v.intl.formatToPlainString(v.t.iyRTLm, {
      tagName: F
    }),
    role: "button",
    "aria-pressed": T
  }), N), {
    children: D
  })) : (0, s.jsx)("div", S(C({}, N), {
    children: D
  }))
}

function T(e) {
  let {
    tags: t,
    count: i,
    size: n = 1
  } = e, a = 0 === n;
  return (0, s.jsx)(d.u, {
    "aria-label": v.intl.string(v.t["P/y+sj"]),
    __unsupportedReactNodeAsText: (0, s.jsx)(s.Fragment, {
      children: t.map(e => (0, s.jsx)(w, {
        tag: e,
        className: y.tooltipPill,
        size: w.Sizes.SMALL
      }, e.id))
    }),
    children: (0, s.jsx)("div", {
      className: l()(y.pill, {
        [y.small]: a
      }),
      children: (0, s.jsxs)(h.Text, {
        variant: a ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", i]
      })
    })
  })
}
w.Sizes = x
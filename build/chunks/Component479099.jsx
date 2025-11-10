/** Chunk was on 48890 **/
/** chunk id: 479099, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => x,
  f: () => w
}), require("./388685.js");
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk716754 = require("./716754.js");

function y(e) {
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

function C(e, t) {
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
var S = ((n = S || {})[n.SMALL = 0] = "SMALL", n[n.MEDIUM = 1] = "MEDIUM", n);

function x(e) {
  let {
    tag: t,
    size: n = 1,
    disabled: o,
    className: h,
    onClick: S,
    onRemove: x,
    selected: w,
    ariaLabel: T
  } = e, {
    name: O,
    emojiId: F,
    emojiName: I
  } = t, j = null != x, [E, P] = a.useState(false), M = (0, d.e7)([b.ZP], () => null != F ? b.ZP.getUsableCustomEmojiById(F) : null), Z = j || null != S, A = (!j || !E) && (null != F || null != I), k = 0 === n, H = a.useRef(null), L = (0, d.e7)([p.Z], () => p.Z.keyboardModeEnabled), D = (0, s.jsxs)(s.Fragment, {
    children: [A ? (0, s.jsx)(g.Z, {
      className: l()(_.emoji, {
        [_.small]: k
      }),
      emojiId: F,
      emojiName: I,
      animated: !!(null == M ? true : M.animated),
      size: "reaction"
    }) : null, E && j && (0, s.jsx)("div", {
      className: _.closeCircle,
      children: (0, s.jsx)(c.Dio, {
        size: "md",
        color: "currentColor",
        className: _.close
      })
    }), (0, s.jsx)(c.Text, {
      variant: k ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: O
    })]
  }), N = {
    key: t.id,
    className: l()(_.pill, {
      [_.disabled]: o,
      [_.clickable]: Z,
      [_.small]: k,
      [_.selected]: w,
      [_[t.color]]: null != t.color && !Z
    }, h),
    onClick: e => {
      null == S || S(e), null == x || x(t), L || null == H.current || H.current.blur()
    },
    onContextMenu: e => (e => {
      let n = f.Sb.getSetting();
      m.wS && n && (0, u.jW)(e, async () => {
        let {
          default: e
        } = await i.e("29646").then(i.bind(i, 955116));
        return i => (0, s.jsx)(e, C(y({}, i), {
          tag: t
        }))
      })
    })(e),
    onMouseEnter: () => j && P(true),
    onMouseLeave: () => j && P(false)
  }, B = (0, r.JA)("forum-tag-".concat(t.id));
  return Z ? (0, s.jsx)(c.P3F, C(y(C(y({}, B), {
    innerRef: H,
    focusProps: {
      ringTarget: H
    },
    "aria-label": null != T ? T : v.intl.formatToPlainString(v.t.iyRTLm, {
      tagName: O
    }),
    role: "button",
    "aria-pressed": w
  }), N), {
    children: D
  })) : (0, s.jsx)("div", C(y({}, N), {
    children: D
  }))
}

function w(e) {
  let {
    tags: t,
    count: i,
    size: n = 1
  } = e, a = 0 === n;
  return (0, s.jsx)(h.u, {
    "aria-label": v.intl.string(v.t["P/y+sj"]),
    __unsupportedReactNodeAsText: (0, s.jsx)(s.Fragment, {
      children: t.map(e => (0, s.jsx)(x, {
        tag: e,
        className: _.tooltipPill,
        size: x.Sizes.SMALL
      }, e.id))
    }),
    children: (0, s.jsx)("div", {
      className: l()(_.pill, {
        [_.small]: a
      }),
      children: (0, s.jsxs)(c.Text, {
        variant: a ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", i]
      })
    })
  })
}
x.Sizes = S
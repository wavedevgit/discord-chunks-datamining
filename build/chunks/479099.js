/** Chunk was on 75450 **/
n.d(t, {
  Z: () => v,
  f: () => T
}), n(388685);
var a, i = n(255367),
  l = n(73800),
  r = n(120356),
  o = n.n(r),
  s = n(91192),
  c = n(442837),
  d = n(481060),
  u = n(239091),
  m = n(596454),
  p = n(607070),
  g = n(339085),
  _ = n(695346),
  f = n(572004),
  h = n(388032),
  b = n(559297);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a
    })
  }
  return e
}

function C(e, t) {
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
var x = ((a = x || {})[a.SMALL = 0] = "SMALL", a[a.MEDIUM = 1] = "MEDIUM", a);

function v(e) {
  let {
    tag: t,
    size: a = 1,
    disabled: r,
    className: x,
    onClick: v,
    onRemove: T,
    selected: O,
    ariaLabel: I
  } = e, {
    name: j,
    emojiId: E,
    emojiName: S
  } = t, M = null != T, [P, A] = l.useState(!1), w = (0, c.e7)([g.ZP], () => null != E ? g.ZP.getUsableCustomEmojiById(E) : null), D = M || null != v, k = (!M || !P) && (null != E || null != S), N = 0 === a, z = l.useRef(null), R = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled), L = e => {
    let a = _.Sb.getSetting();
    f.wS && a && (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("29646").then(n.bind(n, 955116));
      return n => (0, i.jsx)(e, C(y({}, n), {
        tag: t
      }))
    })
  }, Z = (0, i.jsxs)(i.Fragment, {
    children: [k ? (0, i.jsx)(m.Z, {
      className: o()(b.emoji, {
        [b.small]: N
      }),
      emojiId: E,
      emojiName: S,
      animated: !!(null == w ? void 0 : w.animated),
      size: "reaction"
    }) : null, P && M && (0, i.jsx)("div", {
      className: b.closeCircle,
      children: (0, i.jsx)(d.Dio, {
        size: "md",
        color: "currentColor",
        className: b.close
      })
    }), (0, i.jsx)(d.Text, {
      variant: N ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: j
    })]
  }), U = {
    key: t.id,
    className: o()(b.pill, {
      [b.disabled]: r,
      [b.clickable]: D,
      [b.small]: N,
      [b.selected]: O
    }, x),
    onClick: e => {
      null == v || v(e), null == T || T(t), R || null == z.current || z.current.blur()
    },
    onContextMenu: e => L(e),
    onMouseEnter: () => M && A(!0),
    onMouseLeave: () => M && A(!1)
  }, B = (0, s.JA)("forum-tag-".concat(t.id));
  return D ? (0, i.jsx)(d.P3F, C(y(C(y({}, B), {
    innerRef: z,
    focusProps: {
      ringTarget: z
    },
    "aria-label": null != I ? I : h.intl.formatToPlainString(h.t.iyRTLi, {
      tagName: j
    }),
    role: "button",
    "aria-pressed": O
  }), U), {
    children: Z
  })) : (0, i.jsx)("div", C(y({}, U), {
    children: Z
  }))
}

function T(e) {
  let {
    tags: t,
    count: n,
    size: a = 1
  } = e, l = 0 === a;
  return (0, i.jsx)(d.ua7, {
    "aria-label": h.intl.string(h.t["P/y+sr"]),
    text: (0, i.jsx)(i.Fragment, {
      children: t.map(e => (0, i.jsx)(v, {
        tag: e,
        className: b.tooltipPill,
        size: v.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, i.jsx)("div", C(y({}, e), {
      className: o()(b.pill, {
        [b.small]: l
      }),
      children: (0, i.jsxs)(d.Text, {
        variant: l ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    }))
  })
}
v.Sizes = x
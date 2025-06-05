/** Chunk was on 27115 **/
n.d(t, {
  Z: () => j,
  f: () => P
}), n(388685);
var a, i = n(255367),
  r = n(73800),
  l = n(120356),
  o = n.n(l),
  c = n(91192),
  s = n(442837),
  u = n(481060),
  d = n(239091),
  m = n(596454),
  p = n(607070),
  g = n(339085),
  f = n(695346),
  b = n(572004),
  _ = n(388032),
  y = n(559297);

function O(e) {
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

function h(e, t) {
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
var v = ((a = v || {})[a.SMALL = 0] = "SMALL", a[a.MEDIUM = 1] = "MEDIUM", a);

function j(e) {
  let {
    tag: t,
    size: a = 1,
    disabled: l,
    className: v,
    onClick: j,
    onRemove: P,
    selected: C,
    ariaLabel: E
  } = e, {
    name: x,
    emojiId: T,
    emojiName: S
  } = t, I = null != P, [A, M] = r.useState(!1), w = (0, s.e7)([g.ZP], () => null != T ? g.ZP.getUsableCustomEmojiById(T) : null), D = I || null != j, L = (!I || !A) && (null != T || null != S), N = 0 === a, Z = r.useRef(null), R = (0, s.e7)([p.Z], () => p.Z.keyboardModeEnabled), U = e => {
    let a = f.Sb.getSetting();
    b.wS && a && (0, d.jW)(e, async () => {
      let {
        default: e
      } = await n.e("29646").then(n.bind(n, 955116));
      return n => (0, i.jsx)(e, h(O({}, n), {
        tag: t
      }))
    })
  }, k = (0, i.jsxs)(i.Fragment, {
    children: [L ? (0, i.jsx)(m.Z, {
      className: o()(y.emoji, {
        [y.small]: N
      }),
      emojiId: T,
      emojiName: S,
      animated: !!(null == w ? void 0 : w.animated),
      size: "reaction"
    }) : null, A && I && (0, i.jsx)("div", {
      className: y.closeCircle,
      children: (0, i.jsx)(u.Dio, {
        size: "md",
        color: "currentColor",
        className: y.close
      })
    }), (0, i.jsx)(u.Text, {
      variant: N ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: x
    })]
  }), F = {
    key: t.id,
    className: o()(y.pill, {
      [y.disabled]: l,
      [y.clickable]: D,
      [y.small]: N,
      [y.selected]: C,
      [y[t.color]]: null != t.color && !D
    }, v),
    onClick: e => {
      null == j || j(e), null == P || P(t), R || null == Z.current || Z.current.blur()
    },
    onContextMenu: e => U(e),
    onMouseEnter: () => I && M(!0),
    onMouseLeave: () => I && M(!1)
  }, z = (0, c.JA)("forum-tag-".concat(t.id));
  return D ? (0, i.jsx)(u.P3F, h(O(h(O({}, z), {
    innerRef: Z,
    focusProps: {
      ringTarget: Z
    },
    "aria-label": null != E ? E : _.intl.formatToPlainString(_.t.iyRTLi, {
      tagName: x
    }),
    role: "button",
    "aria-pressed": C
  }), F), {
    children: k
  })) : (0, i.jsx)("div", h(O({}, F), {
    children: k
  }))
}

function P(e) {
  let {
    tags: t,
    count: n,
    size: a = 1
  } = e, r = 0 === a;
  return (0, i.jsx)(u.ua7, {
    "aria-label": _.intl.string(_.t["P/y+sr"]),
    text: (0, i.jsx)(i.Fragment, {
      children: t.map(e => (0, i.jsx)(j, {
        tag: e,
        className: y.tooltipPill,
        size: j.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, i.jsx)("div", h(O({}, e), {
      className: o()(y.pill, {
        [y.small]: r
      }),
      children: (0, i.jsxs)(u.Text, {
        variant: r ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    }))
  })
}
j.Sizes = v
/** Chunk was on 21958 **/
n.d(t, {
  Z: () => C,
  f: () => v
}), n(388685);
var a, i = n(255367),
  r = n(73800),
  l = n(120356),
  o = n.n(l),
  c = n(91192),
  s = n(442837),
  d = n(481060),
  u = n(239091),
  m = n(596454),
  p = n(607070),
  g = n(339085),
  f = n(695346),
  h = n(572004),
  _ = n(388032),
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

function O(e, t) {
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
var T = ((a = T || {})[a.SMALL = 0] = "SMALL", a[a.MEDIUM = 1] = "MEDIUM", a);

function C(e) {
  let {
    tag: t,
    size: a = 1,
    disabled: l,
    className: T,
    onClick: C,
    onRemove: v,
    selected: x,
    ariaLabel: E
  } = e, {
    name: j,
    emojiId: I,
    emojiName: P
  } = t, S = null != v, [A, M] = r.useState(!1), w = (0, s.e7)([g.ZP], () => null != I ? g.ZP.getUsableCustomEmojiById(I) : null), N = S || null != C, L = (!S || !A) && (null != I || null != P), D = 0 === a, k = r.useRef(null), R = (0, s.e7)([p.Z], () => p.Z.keyboardModeEnabled), Z = e => {
    let a = f.Sb.getSetting();
    h.wS && a && (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("29646").then(n.bind(n, 955116));
      return n => (0, i.jsx)(e, O(y({}, n), {
        tag: t
      }))
    })
  }, z = (0, i.jsxs)(i.Fragment, {
    children: [L ? (0, i.jsx)(m.Z, {
      className: o()(b.emoji, {
        [b.small]: D
      }),
      emojiId: I,
      emojiName: P,
      animated: !!(null == w ? void 0 : w.animated),
      size: "reaction"
    }) : null, A && S && (0, i.jsx)("div", {
      className: b.closeCircle,
      children: (0, i.jsx)(d.Dio, {
        size: "md",
        color: "currentColor",
        className: b.close
      })
    }), (0, i.jsx)(d.Text, {
      variant: D ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: j
    })]
  }), U = {
    key: t.id,
    className: o()(b.pill, {
      [b.disabled]: l,
      [b.clickable]: N,
      [b.small]: D,
      [b.selected]: x,
      [b[t.color]]: null != t.color && !N
    }, T),
    onClick: e => {
      null == C || C(e), null == v || v(t), R || null == k.current || k.current.blur()
    },
    onContextMenu: e => Z(e),
    onMouseEnter: () => S && M(!0),
    onMouseLeave: () => S && M(!1)
  }, G = (0, c.JA)("forum-tag-".concat(t.id));
  return N ? (0, i.jsx)(d.P3F, O(y(O(y({}, G), {
    innerRef: k,
    focusProps: {
      ringTarget: k
    },
    "aria-label": null != E ? E : _.intl.formatToPlainString(_.t.iyRTLi, {
      tagName: j
    }),
    role: "button",
    "aria-pressed": x
  }), U), {
    children: z
  })) : (0, i.jsx)("div", O(y({}, U), {
    children: z
  }))
}

function v(e) {
  let {
    tags: t,
    count: n,
    size: a = 1
  } = e, r = 0 === a;
  return (0, i.jsx)(d.ua7, {
    "aria-label": _.intl.string(_.t["P/y+sr"]),
    text: (0, i.jsx)(i.Fragment, {
      children: t.map(e => (0, i.jsx)(C, {
        tag: e,
        className: b.tooltipPill,
        size: C.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, i.jsx)("div", O(y({}, e), {
      className: o()(b.pill, {
        [b.small]: r
      }),
      children: (0, i.jsxs)(d.Text, {
        variant: r ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    }))
  })
}
C.Sizes = T
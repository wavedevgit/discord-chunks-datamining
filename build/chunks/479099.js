/** Chunk was on 75450 **/
n.d(t, {
  Z: () => v,
  f: () => T
}), n(388685);
var a, i = n(200651),
  l = n(192379),
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
    ariaLabel: j
  } = e, {
    name: I,
    emojiId: M,
    emojiName: P
  } = t, E = null != T, [S, A] = l.useState(!1), w = (0, c.e7)([g.ZP], () => null != M ? g.ZP.getUsableCustomEmojiById(M) : null), N = E || null != v, D = (!E || !S) && (null != M || null != P), k = 0 === a, z = l.useRef(null), L = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled), R = e => {
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
    children: [D ? (0, i.jsx)(m.Z, {
      className: o()(b.emoji, {
        [b.small]: k
      }),
      emojiId: M,
      emojiName: P,
      animated: !!(null == w ? void 0 : w.animated),
      size: "reaction"
    }) : null, S && E && (0, i.jsx)("div", {
      className: b.closeCircle,
      children: (0, i.jsx)(d.Dio, {
        size: "md",
        color: "currentColor",
        className: b.close
      })
    }), (0, i.jsx)(d.Text, {
      variant: k ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: I
    })]
  }), U = {
    key: t.id,
    className: o()(b.pill, {
      [b.disabled]: r,
      [b.clickable]: N,
      [b.small]: k,
      [b.selected]: O
    }, x),
    onClick: e => {
      null == v || v(e), null == T || T(t), L || null == z.current || z.current.blur()
    },
    onContextMenu: e => R(e),
    onMouseEnter: () => E && A(!0),
    onMouseLeave: () => E && A(!1)
  }, B = (0, s.JA)("forum-tag-".concat(t.id));
  return N ? (0, i.jsx)(d.P3F, C(y(C(y({}, B), {
    innerRef: z,
    focusProps: {
      ringTarget: z
    },
    "aria-label": null != j ? j : h.NW.formatToPlainString(h.t.iyRTLi, {
      tagName: I
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
    "aria-label": h.NW.string(h.t["P/y+sr"]),
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
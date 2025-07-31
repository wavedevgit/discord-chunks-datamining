/** Chunk was on 13653 **/
n.d(t, {
  Z: () => E,
  f: () => O
}), n(388685);
var a, i = n(255367),
  o = n(73800),
  r = n(120356),
  c = n.n(r),
  l = n(91192),
  s = n(442837),
  u = n(481060),
  d = n(239091),
  m = n(596454),
  p = n(607070),
  _ = n(339085),
  f = n(695346),
  g = n(572004),
  b = n(388032),
  h = n(559297);

function T(e) {
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

function y(e, t) {
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

function E(e) {
  let {
    tag: t,
    size: a = 1,
    disabled: r,
    className: C,
    onClick: E,
    onRemove: O,
    selected: v,
    ariaLabel: x
  } = e, {
    name: I,
    emojiId: M,
    emojiName: S
  } = t, j = null != O, [w, N] = o.useState(!1), P = (0, s.e7)([_.ZP], () => null != M ? _.ZP.getUsableCustomEmojiById(M) : null), A = j || null != E, k = (!j || !w) && (null != M || null != S), D = 0 === a, L = o.useRef(null), R = (0, s.e7)([p.Z], () => p.Z.keyboardModeEnabled), Z = e => {
    let a = f.Sb.getSetting();
    g.wS && a && (0, d.jW)(e, async () => {
      let {
        default: e
      } = await n.e("29646").then(n.bind(n, 955116));
      return n => (0, i.jsx)(e, y(T({}, n), {
        tag: t
      }))
    })
  }, B = (0, i.jsxs)(i.Fragment, {
    children: [k ? (0, i.jsx)(m.Z, {
      className: c()(h.emoji, {
        [h.small]: D
      }),
      emojiId: M,
      emojiName: S,
      animated: !!(null == P ? void 0 : P.animated),
      size: "reaction"
    }) : null, w && j && (0, i.jsx)("div", {
      className: h.closeCircle,
      children: (0, i.jsx)(u.Dio, {
        size: "md",
        color: "currentColor",
        className: h.close
      })
    }), (0, i.jsx)(u.Text, {
      variant: D ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: I
    })]
  }), F = {
    key: t.id,
    className: c()(h.pill, {
      [h.disabled]: r,
      [h.clickable]: A,
      [h.small]: D,
      [h.selected]: v,
      [h[t.color]]: null != t.color && !A
    }, C),
    onClick: e => {
      null == E || E(e), null == O || O(t), R || null == L.current || L.current.blur()
    },
    onContextMenu: e => Z(e),
    onMouseEnter: () => j && N(!0),
    onMouseLeave: () => j && N(!1)
  }, G = (0, l.JA)("forum-tag-".concat(t.id));
  return A ? (0, i.jsx)(u.P3F, y(T(y(T({}, G), {
    innerRef: L,
    focusProps: {
      ringTarget: L
    },
    "aria-label": null != x ? x : b.intl.formatToPlainString(b.t.iyRTLi, {
      tagName: I
    }),
    role: "button",
    "aria-pressed": v
  }), F), {
    children: B
  })) : (0, i.jsx)("div", y(T({}, F), {
    children: B
  }))
}

function O(e) {
  let {
    tags: t,
    count: n,
    size: a = 1
  } = e, o = 0 === a;
  return (0, i.jsx)(u.ua7, {
    "aria-label": b.intl.string(b.t["P/y+sr"]),
    text: (0, i.jsx)(i.Fragment, {
      children: t.map(e => (0, i.jsx)(E, {
        tag: e,
        className: h.tooltipPill,
        size: E.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, i.jsx)("div", y(T({}, e), {
      className: c()(h.pill, {
        [h.small]: o
      }),
      children: (0, i.jsxs)(u.Text, {
        variant: o ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    }))
  })
}
E.Sizes = C
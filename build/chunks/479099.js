/** Chunk was on 80416 **/
n.d(t, {
  Z: () => O,
  f: () => E
}), n(388685);
var a, o = n(255367),
  i = n(73800),
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

function T(e, t) {
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

function O(e) {
  let {
    tag: t,
    size: a = 1,
    disabled: r,
    className: C,
    onClick: O,
    onRemove: E,
    selected: x,
    ariaLabel: v
  } = e, {
    name: I,
    emojiId: M,
    emojiName: S
  } = t, j = null != E, [N, w] = i.useState(!1), P = (0, s.e7)([_.ZP], () => null != M ? _.ZP.getUsableCustomEmojiById(M) : null), A = j || null != O, k = (!j || !N) && (null != M || null != S), L = 0 === a, D = i.useRef(null), R = (0, s.e7)([p.Z], () => p.Z.keyboardModeEnabled), Z = e => {
    let a = f.Sb.getSetting();
    g.wS && a && (0, d.jW)(e, async () => {
      let {
        default: e
      } = await n.e("29646").then(n.bind(n, 955116));
      return n => (0, o.jsx)(e, T(y({}, n), {
        tag: t
      }))
    })
  }, B = (0, o.jsxs)(o.Fragment, {
    children: [k ? (0, o.jsx)(m.Z, {
      className: c()(h.emoji, {
        [h.small]: L
      }),
      emojiId: M,
      emojiName: S,
      animated: !!(null == P ? void 0 : P.animated),
      size: "reaction"
    }) : null, N && j && (0, o.jsx)("div", {
      className: h.closeCircle,
      children: (0, o.jsx)(u.Dio, {
        size: "md",
        color: "currentColor",
        className: h.close
      })
    }), (0, o.jsx)(u.Text, {
      variant: L ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: I
    })]
  }), F = {
    key: t.id,
    className: c()(h.pill, {
      [h.disabled]: r,
      [h.clickable]: A,
      [h.small]: L,
      [h.selected]: x,
      [h[t.color]]: null != t.color && !A
    }, C),
    onClick: e => {
      null == O || O(e), null == E || E(t), R || null == D.current || D.current.blur()
    },
    onContextMenu: e => Z(e),
    onMouseEnter: () => j && w(!0),
    onMouseLeave: () => j && w(!1)
  }, G = (0, l.JA)("forum-tag-".concat(t.id));
  return A ? (0, o.jsx)(u.P3F, T(y(T(y({}, G), {
    innerRef: D,
    focusProps: {
      ringTarget: D
    },
    "aria-label": null != v ? v : b.intl.formatToPlainString(b.t.iyRTLi, {
      tagName: I
    }),
    role: "button",
    "aria-pressed": x
  }), F), {
    children: B
  })) : (0, o.jsx)("div", T(y({}, F), {
    children: B
  }))
}

function E(e) {
  let {
    tags: t,
    count: n,
    size: a = 1
  } = e, i = 0 === a;
  return (0, o.jsx)(u.ua7, {
    "aria-label": b.intl.string(b.t["P/y+sr"]),
    text: (0, o.jsx)(o.Fragment, {
      children: t.map(e => (0, o.jsx)(O, {
        tag: e,
        className: h.tooltipPill,
        size: O.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, o.jsx)("div", T(y({}, e), {
      className: c()(h.pill, {
        [h.small]: i
      }),
      children: (0, o.jsxs)(u.Text, {
        variant: i ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    }))
  })
}
O.Sizes = C
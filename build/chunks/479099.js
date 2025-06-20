/** Chunk was on 94495 **/
n.d(t, {
  Z: () => O,
  f: () => x
}), n(388685);
var a, i = n(255367),
  o = n(73800),
  r = n(120356),
  c = n.n(r),
  l = n(91192),
  s = n(442837),
  d = n(481060),
  u = n(239091),
  m = n(596454),
  p = n(607070),
  f = n(339085),
  _ = n(695346),
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
    onRemove: x,
    selected: j,
    ariaLabel: v
  } = e, {
    name: I,
    emojiId: E,
    emojiName: P
  } = t, w = null != x, [S, M] = o.useState(!1), A = (0, s.e7)([f.ZP], () => null != E ? f.ZP.getUsableCustomEmojiById(E) : null), N = w || null != O, R = (!w || !S) && (null != E || null != P), k = 0 === a, L = o.useRef(null), D = (0, s.e7)([p.Z], () => p.Z.keyboardModeEnabled), Z = e => {
    let a = _.Sb.getSetting();
    g.wS && a && (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("29646").then(n.bind(n, 955116));
      return n => (0, i.jsx)(e, T(y({}, n), {
        tag: t
      }))
    })
  }, B = (0, i.jsxs)(i.Fragment, {
    children: [R ? (0, i.jsx)(m.Z, {
      className: c()(h.emoji, {
        [h.small]: k
      }),
      emojiId: E,
      emojiName: P,
      animated: !!(null == A ? void 0 : A.animated),
      size: "reaction"
    }) : null, S && w && (0, i.jsx)("div", {
      className: h.closeCircle,
      children: (0, i.jsx)(d.Dio, {
        size: "md",
        color: "currentColor",
        className: h.close
      })
    }), (0, i.jsx)(d.Text, {
      variant: k ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: I
    })]
  }), z = {
    key: t.id,
    className: c()(h.pill, {
      [h.disabled]: r,
      [h.clickable]: N,
      [h.small]: k,
      [h.selected]: j,
      [h[t.color]]: null != t.color && !N
    }, C),
    onClick: e => {
      null == O || O(e), null == x || x(t), D || null == L.current || L.current.blur()
    },
    onContextMenu: e => Z(e),
    onMouseEnter: () => w && M(!0),
    onMouseLeave: () => w && M(!1)
  }, U = (0, l.JA)("forum-tag-".concat(t.id));
  return N ? (0, i.jsx)(d.P3F, T(y(T(y({}, U), {
    innerRef: L,
    focusProps: {
      ringTarget: L
    },
    "aria-label": null != v ? v : b.intl.formatToPlainString(b.t.iyRTLi, {
      tagName: I
    }),
    role: "button",
    "aria-pressed": j
  }), z), {
    children: B
  })) : (0, i.jsx)("div", T(y({}, z), {
    children: B
  }))
}

function x(e) {
  let {
    tags: t,
    count: n,
    size: a = 1
  } = e, o = 0 === a;
  return (0, i.jsx)(d.ua7, {
    "aria-label": b.intl.string(b.t["P/y+sr"]),
    text: (0, i.jsx)(i.Fragment, {
      children: t.map(e => (0, i.jsx)(O, {
        tag: e,
        className: h.tooltipPill,
        size: O.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, i.jsx)("div", T(y({}, e), {
      className: c()(h.pill, {
        [h.small]: o
      }),
      children: (0, i.jsxs)(d.Text, {
        variant: o ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    }))
  })
}
O.Sizes = C
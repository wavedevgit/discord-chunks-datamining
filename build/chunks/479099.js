/** Chunk was on 99546 **/
n.d(t, {
  Z: () => v,
  f: () => x
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

function v(e) {
  let {
    tag: t,
    size: a = 1,
    disabled: r,
    className: C,
    onClick: v,
    onRemove: x,
    selected: O,
    ariaLabel: I
  } = e, {
    name: E,
    emojiId: S,
    emojiName: j
  } = t, w = null != x, [M, P] = i.useState(!1), A = (0, s.e7)([_.ZP], () => null != S ? _.ZP.getUsableCustomEmojiById(S) : null), N = w || null != v, k = (!w || !M) && (null != S || null != j), L = 0 === a, R = i.useRef(null), D = (0, s.e7)([p.Z], () => p.Z.keyboardModeEnabled), Z = e => {
    let a = f.Sb.getSetting();
    g.wS && a && (0, d.jW)(e, async () => {
      let {
        default: e
      } = await n.e("29646").then(n.bind(n, 955116));
      return n => (0, o.jsx)(e, y(T({}, n), {
        tag: t
      }))
    })
  }, B = (0, o.jsxs)(o.Fragment, {
    children: [k ? (0, o.jsx)(m.Z, {
      className: c()(h.emoji, {
        [h.small]: L
      }),
      emojiId: S,
      emojiName: j,
      animated: !!(null == A ? void 0 : A.animated),
      size: "reaction"
    }) : null, M && w && (0, o.jsx)("div", {
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
      children: E
    })]
  }), F = {
    key: t.id,
    className: c()(h.pill, {
      [h.disabled]: r,
      [h.clickable]: N,
      [h.small]: L,
      [h.selected]: O,
      [h[t.color]]: null != t.color && !N
    }, C),
    onClick: e => {
      null == v || v(e), null == x || x(t), D || null == R.current || R.current.blur()
    },
    onContextMenu: e => Z(e),
    onMouseEnter: () => w && P(!0),
    onMouseLeave: () => w && P(!1)
  }, z = (0, l.JA)("forum-tag-".concat(t.id));
  return N ? (0, o.jsx)(u.P3F, y(T(y(T({}, z), {
    innerRef: R,
    focusProps: {
      ringTarget: R
    },
    "aria-label": null != I ? I : b.intl.formatToPlainString(b.t.iyRTLi, {
      tagName: E
    }),
    role: "button",
    "aria-pressed": O
  }), F), {
    children: B
  })) : (0, o.jsx)("div", y(T({}, F), {
    children: B
  }))
}

function x(e) {
  let {
    tags: t,
    count: n,
    size: a = 1
  } = e, i = 0 === a;
  return (0, o.jsx)(u.ua7, {
    "aria-label": b.intl.string(b.t["P/y+sr"]),
    text: (0, o.jsx)(o.Fragment, {
      children: t.map(e => (0, o.jsx)(v, {
        tag: e,
        className: h.tooltipPill,
        size: v.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, o.jsx)("div", y(T({}, e), {
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
v.Sizes = C
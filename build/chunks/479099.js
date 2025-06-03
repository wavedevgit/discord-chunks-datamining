/** Chunk was on 27115 **/
n.d(t, {
  Z: () => x,
  f: () => v
}), n(388685);
var a, i = n(255367),
  r = n(73800),
  o = n(120356),
  l = n.n(o),
  s = n(91192),
  c = n(442837),
  d = n(481060),
  u = n(239091),
  m = n(596454),
  p = n(607070),
  g = n(339085),
  h = n(695346),
  f = n(572004),
  b = n(388032),
  _ = n(559297);

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
var j = ((a = j || {})[a.SMALL = 0] = "SMALL", a[a.MEDIUM = 1] = "MEDIUM", a);

function x(e) {
  let {
    tag: t,
    size: a = 1,
    disabled: o,
    className: j,
    onClick: x,
    onRemove: v,
    selected: C,
    ariaLabel: T
  } = e, {
    name: P,
    emojiId: S,
    emojiName: w
  } = t, E = null != v, [I, M] = r.useState(!1), A = (0, c.e7)([g.ZP], () => null != S ? g.ZP.getUsableCustomEmojiById(S) : null), D = E || null != x, N = (!E || !I) && (null != S || null != w), L = 0 === a, k = r.useRef(null), Z = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled), z = e => {
    let a = h.Sb.getSetting();
    f.wS && a && (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("29646").then(n.bind(n, 955116));
      return n => (0, i.jsx)(e, O(y({}, n), {
        tag: t
      }))
    })
  }, R = (0, i.jsxs)(i.Fragment, {
    children: [N ? (0, i.jsx)(m.Z, {
      className: l()(_.emoji, {
        [_.small]: L
      }),
      emojiId: S,
      emojiName: w,
      animated: !!(null == A ? void 0 : A.animated),
      size: "reaction"
    }) : null, I && E && (0, i.jsx)("div", {
      className: _.closeCircle,
      children: (0, i.jsx)(d.Dio, {
        size: "md",
        color: "currentColor",
        className: _.close
      })
    }), (0, i.jsx)(d.Text, {
      variant: L ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      color: "currentColor",
      children: P
    })]
  }), U = {
    key: t.id,
    className: l()(_.pill, {
      [_.disabled]: o,
      [_.clickable]: D,
      [_.small]: L,
      [_.selected]: C,
      [_[t.color]]: null != t.color && !D
    }, j),
    onClick: e => {
      null == x || x(e), null == v || v(t), Z || null == k.current || k.current.blur()
    },
    onContextMenu: e => z(e),
    onMouseEnter: () => E && M(!0),
    onMouseLeave: () => E && M(!1)
  }, F = (0, s.JA)("forum-tag-".concat(t.id));
  return D ? (0, i.jsx)(d.P3F, O(y(O(y({}, F), {
    innerRef: k,
    focusProps: {
      ringTarget: k
    },
    "aria-label": null != T ? T : b.intl.formatToPlainString(b.t.iyRTLi, {
      tagName: P
    }),
    role: "button",
    "aria-pressed": C
  }), U), {
    children: R
  })) : (0, i.jsx)("div", O(y({}, U), {
    children: R
  }))
}

function v(e) {
  let {
    tags: t,
    count: n,
    size: a = 1
  } = e, r = 0 === a;
  return (0, i.jsx)(d.ua7, {
    "aria-label": b.intl.string(b.t["P/y+sr"]),
    text: (0, i.jsx)(i.Fragment, {
      children: t.map(e => (0, i.jsx)(x, {
        tag: e,
        className: _.tooltipPill,
        size: x.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, i.jsx)("div", O(y({}, e), {
      className: l()(_.pill, {
        [_.small]: r
      }),
      children: (0, i.jsxs)(d.Text, {
        variant: r ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    }))
  })
}
x.Sizes = j
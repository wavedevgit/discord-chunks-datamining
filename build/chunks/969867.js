/** Chunk was on 99014 **/
n.d(t, {
  Z: () => j
});
var o = n(200651),
  r = n(192379),
  s = n(120356),
  a = n.n(s),
  c = n(481060),
  i = n(413335),
  l = n(762762),
  u = n(690786),
  d = n(279604),
  b = n(367123),
  p = n(388032),
  m = n(423839);

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      o = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), o.forEach(function(t) {
      var o;
      o = n[t], t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o
    })
  }
  return e
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      n.push.apply(n, o)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  let {
    className: t,
    guildId: n,
    powerup: s,
    onError: j
  } = e, {
    onActivate: _,
    isLoading: v,
    error: x,
    onShowDeactivate: g
  } = (0, d.ZP)(n, s), y = null != (0, u.Z)(n, s);
  r.useEffect(() => {
    null == j || j(x)
  }, [x, j]);
  let {
    disabled: I,
    reason: h
  } = (0, l.Z)(n, s, y);
  return (0, o.jsxs)("div", {
    className: a()(m.container, t),
    children: [y && (0, o.jsx)(c.ua7, {
      delay: 100,
      "aria-label": p.NW.string(b.Z.TZsu1d),
      text: (0, o.jsxs)("div", {
        className: m.tooltipContainer,
        children: [(0, o.jsx)(c.Text, {
          variant: "text-xs/semibold",
          children: p.NW.string(b.Z.TZsu1d)
        }), (0, o.jsx)(c.Text, {
          variant: "text-xs/medium",
          children: p.NW.formatToPlainString(b.Z["5HQUzM"], {
            boostCount: s.cost
          })
        })]
      }),
      children: e => (0, o.jsxs)(c.zxk, O(f({}, e), {
        className: m.secondaryButton,
        innerClassName: a()(m.buttonInner, m.secondaryButtonInner),
        color: c.Ttl.PRIMARY,
        "aria-label": p.NW.string(b.Z.TZsu1d),
        grow: !1,
        onClick: g,
        children: [(0, o.jsx)(c.mTd, {
          size: "sm"
        }), (0, o.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: s.cost
        })]
      }))
    }), (0, o.jsx)(c.ua7, {
      delay: 100,
      text: h,
      shouldShow: null != h,
      children: e => (0, o.jsxs)(c.zxk, O(f({}, e), {
        disabled: I,
        className: m.primaryButton,
        innerClassName: m.buttonInner,
        wrapperClassName: m.buttonWrapper,
        grow: !0,
        onClick: y ? () => {} : _,
        submitting: !y && v,
        children: [y ? p.NW.string(b.Z["g5Ds6+"]) : p.NW.string(b.Z.gSxlHR), !y && (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsx)("span", {
            className: m.dot,
            children: "•"
          }), (0, o.jsx)(i.Z, {
            size: "sm",
            className: m.boost,
            fill: "white"
          }), (0, o.jsx)("span", {
            children: s.cost
          })]
        })]
      }))
    })]
  })
}
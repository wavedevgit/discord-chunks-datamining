/** Chunk was on 44799 **/
t.d(n, {
  Z: () => v
});
var r = t(200651),
  i = t(192379),
  o = t(120356),
  s = t.n(o),
  a = t(481060),
  l = t(413335),
  c = t(762762),
  d = t(690786),
  u = t(279604),
  p = t(730621),
  _ = t(388032),
  x = t(423839);

function m(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[n] = r
    })
  }
  return e
}

function b(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function v(e) {
  let {
    className: n,
    guildId: t,
    powerup: o,
    onError: v
  } = e, {
    onActivate: f,
    isLoading: g,
    error: h,
    onShowDeactivate: j
  } = (0, u.ZP)(t, o), Z = null != (0, d.Z)(t, o);
  i.useEffect(() => {
    null == v || v(h)
  }, [h, v]);
  let {
    disabled: C,
    reason: N
  } = (0, c.Z)(t, o, Z);
  return (0, r.jsxs)("div", {
    className: s()(x.container, n),
    children: [Z && (0, r.jsx)(a.ua7, {
      delay: 100,
      "aria-label": _.NW.string(p.Z.TZsu1d),
      text: (0, r.jsxs)("div", {
        className: x.tooltipContainer,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-xs/semibold",
          children: _.NW.string(p.Z.TZsu1d)
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/medium",
          children: _.NW.formatToPlainString(p.Z["5HQUzM"], {
            boostCount: o.cost
          })
        })]
      }),
      children: e => (0, r.jsxs)(a.zxk, b(m({}, e), {
        className: x.secondaryButton,
        innerClassName: s()(x.buttonInner, x.secondaryButtonInner),
        color: a.Ttl.PRIMARY,
        "aria-label": _.NW.string(p.Z.TZsu1d),
        grow: !1,
        onClick: j,
        children: [(0, r.jsx)(a.mTd, {
          size: "sm"
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          children: o.cost
        })]
      }))
    }), (0, r.jsx)(a.ua7, {
      delay: 100,
      text: N,
      shouldShow: null != N,
      children: e => (0, r.jsxs)(a.zxk, b(m({}, e), {
        disabled: C,
        className: x.primaryButton,
        innerClassName: x.buttonInner,
        wrapperClassName: x.buttonWrapper,
        grow: !0,
        onClick: Z ? () => {} : f,
        submitting: !Z && g,
        children: [Z ? _.NW.string(p.Z["g5Ds6+"]) : _.NW.string(p.Z.gSxlHR), !Z && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("span", {
            className: x.dot,
            children: "•"
          }), (0, r.jsx)(l.Z, {
            size: "sm",
            className: x.boost,
            fill: "white"
          }), (0, r.jsx)("span", {
            children: o.cost
          })]
        })]
      }))
    })]
  })
}
/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => m
});
var n = r(200651);
r(192379);
var l = r(120356),
  i = r.n(l),
  o = r(481060),
  a = r(884697),
  s = r(409116),
  c = r(200615),
  u = r(981631),
  d = r(388032),
  p = r(302841);

function f() {
  return (f = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  }).apply(this, arguments)
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function m(e) {
  let {
    product: t,
    isPremiumUser: r,
    discount: l,
    className: m,
    nitroUpsell: C = !1
  } = e, g = (0, a.ql)(t, u.tuJ.DEFAULT);
  if (null == g) return null;
  if (g.amount <= 0) return (0, n.jsx)("div", {
    className: i()(p.priceTagsContainer, m),
    children: (0, n.jsx)(s.F, {
      price: g
    })
  });
  let v = (0, a.ql)(t, u.tuJ.PREMIUM_TIER_2),
    x = !r && !(0, a.x6)(t),
    j = (0, a.x6)(t) && r ? h(b({}, g), {
      amount: l.original
    }) : g;
  return (0, n.jsxs)("div", {
    className: i()(p.priceTagsContainer, m),
    children: [(0, n.jsx)(s.F, {
      price: j,
      discount: r ? a.f_ : l,
      className: i()(p.price, {
        [p.striked]: r,
        [p.dimmed]: r,
        [p.fullPrice]: x
      })
    }), null != v && (0, n.jsx)(s.F, {
      price: v,
      discount: r ? l : a.f_,
      renderPrice: C ? e => (0, n.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: d.NW.format(d.t.Sv8iiY, {
          price: e,
          subscribeNowHook: e => (0, n.jsx)(c.F, {
            text: e
          })
        })
      }) : x ? e => d.NW.formatToPlainString(d.t.W3gIWF, {
        price: e
      }) : void 0,
      className: i()(p.price, {
        [p.dimmed]: !r,
        [p.fullPrice]: x
      }),
      variant: r ? void 0 : "text-xs/semibold",
      icon: (0, n.jsx)(o.ua7, {
        text: d.NW.string(d.t.MPFyJy),
        "aria-label": d.NW.string(d.t.X3Ekj4),
        children: e => {
          var t = f({}, function(e) {
            if (null == e) throw TypeError("Cannot destructure " + e);
            return e
          }(e));
          return (0, n.jsx)(o.SrA, h(b({
            size: "md",
            color: "currentColor"
          }, t), {
            className: i()(p.premiumIcon, {
              [p.fullPrice]: x
            })
          }))
        }
      })
    })]
  })
}
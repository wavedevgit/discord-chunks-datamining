/** Chunk was on 76282 **/
n.d(t, {
  Z: () => m
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  l = n(481060),
  a = n(884697),
  s = n(409116),
  c = n(200615),
  u = n(981631),
  d = n(388032),
  _ = n(302841);

function p() {
  return (p = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  let {
    product: t,
    isPremiumUser: n,
    discount: i,
    className: m,
    nitroUpsell: h = !1
  } = e, g = (0, a.ql)(t, u.tuJ.DEFAULT);
  if (null == g) return null;
  if (g.amount <= 0) return (0, r.jsx)("div", {
    className: o()(_.priceTagsContainer, m),
    children: (0, r.jsx)(s.F, {
      price: g
    })
  });
  let b = (0, a.ql)(t, u.tuJ.PREMIUM_TIER_2),
    O = !n && !(0, a.x6)(t),
    N = (0, a.x6)(t) && n ? f(E({}, g), {
      amount: i.original
    }) : g;
  return (0, r.jsxs)("div", {
    className: o()(_.priceTagsContainer, m),
    children: [(0, r.jsx)(s.F, {
      price: N,
      discount: n ? a.f_ : i,
      className: o()(_.price, {
        [_.striked]: n,
        [_.dimmed]: n,
        [_.fullPrice]: O
      })
    }), null != b && (0, r.jsx)(s.F, {
      price: b,
      discount: n ? i : a.f_,
      renderPrice: h ? e => (0, r.jsx)(l.Text, {
        variant: "text-xs/medium",
        children: d.NW.format(d.t.Sv8iiY, {
          price: e,
          subscribeNowHook: e => (0, r.jsx)(c.F, {
            text: e
          })
        })
      }) : O ? e => d.NW.formatToPlainString(d.t.W3gIWF, {
        price: e
      }) : void 0,
      className: o()(_.price, {
        [_.dimmed]: !n,
        [_.fullPrice]: O
      }),
      variant: n ? void 0 : "text-xs/semibold",
      icon: (0, r.jsx)(l.ua7, {
        text: d.NW.string(d.t.MPFyJy),
        "aria-label": d.NW.string(d.t.X3Ekj4),
        children: e => {
          var t = p({}, function(e) {
            if (null == e) throw TypeError("Cannot destructure " + e);
            return e
          }(e));
          return (0, r.jsx)(l.SrA, f(E({
            size: "md",
            color: "currentColor"
          }, t), {
            className: o()(_.premiumIcon, {
              [_.fullPrice]: O
            })
          }))
        }
      })
    })]
  })
}
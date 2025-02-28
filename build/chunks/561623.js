/** Chunk was on 29681 **/
n.d(t, {
  default: () => M
}), n(47120), n(411104);
var r = n(200651),
  o = n(192379),
  i = n(442837),
  l = n(780384),
  a = n(481060),
  s = n(366939),
  u = n(911969),
  c = n(410030),
  d = n(100527),
  _ = n(906732),
  m = n(583046),
  f = n(963249),
  p = n(853872),
  N = n(509545),
  C = n(626135),
  h = n(74538),
  I = n(937615),
  b = n(212895),
  g = n(296848),
  y = n(374649),
  T = n(807163),
  x = n(798769),
  P = n(317269),
  E = n(474936),
  O = n(981631),
  v = n(388032),
  W = n(523539);
let M = e => {
  var t, n, M, S, j, k, {
      daysLeft: R,
      premiumType: U,
      premiumSubscription: A,
      analyticsSource: L
    } = e,
    w = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["daysLeft", "premiumType", "premiumSubscription", "analyticsSource"]);
  let Z = (0, c.ZP)(),
    [F, Y] = o.useState(!1),
    {
      analyticsLocations: X
    } = (0, _.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
    D = (0, i.e7)([p.Z], () => (null == A ? void 0 : A.paymentSourceId) != null ? p.Z.getPaymentSource(A.paymentSourceId) : null, [A]),
    B = A.items[0].planId,
    H = (0, h.Wz)(E.GP[B].skuId),
    {
      priceOptions: z
    } = (0, m.Z)({
      activeSubscription: null,
      skuIDs: [H],
      paymentSourceId: null == A ? void 0 : A.paymentSourceId,
      isGift: !1
    }),
    [G] = (0, y.ED)({
      subscriptionId: A.id,
      items: [{
        planId: B,
        quantity: 1
      }],
      renewal: !0,
      paymentSourceId: null == A ? void 0 : A.paymentSourceId,
      currency: z.currency,
      analyticsLocations: (0, _.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
      analyticsLocation: d.Z.PREMIUM_UNCANCEL_MODAL
    }),
    K = (0, i.e7)([N.Z], () => (0, g.oE)(B), [B]),
    Q = (0, i.e7)([N.Z], () => N.Z.isFetchingForSKU(H)),
    V = null == G ? void 0 : null === (k = G.invoiceItems) || void 0 === k ? void 0 : null === (j = k.find(e => e.subscriptionPlanId === B)) || void 0 === j ? void 0 : null === (S = j.discounts) || void 0 === S ? void 0 : null === (M = S.find(e => e.type === u.eW.SUBSCRIPTION_PLAN)) || void 0 === M ? void 0 : M.amount,
    q = null != K ? (0, h.aS)(K.id, !1, !1, z) : null,
    J = null != q && null != V ? (0, I.T4)(q.amount - (null != V ? V : 0), q.currency) : null,
    {
      intervalType: $,
      intervalCount: ee
    } = h.ZP.getInterval(B),
    et = U === E.p9.TIER_1,
    en = null != q ? (0, I.T4)(q.amount, q.currency) : null;
  return o.useEffect(() => {
    C.default.track(O.rMx.OPEN_MODAL, {
      type: "Premium Uncancel Winback",
      source: L
    })
  }, [L]), (0, r.jsx)(a.Y0X, (t = function(e) {
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
  }({}, w), n = n = {
    className: W.modal,
    children: F ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(x.Z, {
        premiumType: U,
        onClose: w.onClose
      }), (0, r.jsx)(P.ZP, {
        planId: B,
        onClose: w.onClose,
        paymentSourceType: null == D ? void 0 : D.type
      })]
    }) : (0, r.jsx)(T.Z, {
      premiumType: U,
      titleText: et ? v.NW.formatToPlainString(v.t.Sngnzs, {
        daysLeft: R
      }) : v.NW.formatToPlainString(v.t.tdvIlZ, {
        daysLeft: R
      }),
      subtitleText: et ? v.NW.format(v.t["6Su2XV"], {}) : v.NW.format(v.t["lE+P8f"], {}),
      footer: (0, r.jsxs)("div", {
        children: [null !== en ? (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          children: function(e) {
            switch ($) {
              case E.rV.YEAR:
                return et ? v.NW.format(v.t.O7JRzc, {
                  price: e
                }) : v.NW.format(v.t["0y5kAA"], {
                  price: e
                });
              case E.rV.MONTH:
                if (null != J) return v.NW.format(v.t["1/ucvr"], {
                  discountPrice: J,
                  defaultPrice: e
                });
                if (et) return v.NW.format(v.t.rbwRlZ, {
                  price: e
                });
                if (1 === ee) return v.NW.format(v.t.C9oRCw, {
                  price: e
                });
                return v.NW.format(v.t.TmmTgo, {
                  price: e,
                  intervalCount: ee
                });
              default:
                throw Error("Unknown interval type ".concat($))
            }
          }(en)
        }) : (0, r.jsx)(a.$jN, {
          type: a.RAz.SPINNING_CIRCLE
        }), (0, r.jsxs)("div", {
          className: W.footer,
          children: [(0, r.jsx)(a.zxk, {
            disabled: Q,
            onClick: () => {
              if (null != A) {
                let e = (0, b.tD)(B, A.currency, null == D ? void 0 : D.id);
                null != D && D.id === A.paymentSourceId && e ? (s.O5(A, X, O.Sbl.UNCANCEL_WINBACK_MODAL), Y(!0)) : (w.onClose(), (0, f.Z)({
                  initialPlanId: B,
                  analyticsLocations: X,
                  analyticsLocation: O.Sbl.UNCANCEL_WINBACK_MODAL
                }))
              }
            },
            children: v.NW.string(v.t["2+luBg"])
          }), (0, r.jsx)(a.zxk, {
            look: a.zxk.Looks.LINK,
            color: (0, l.wj)(Z) ? a.zxk.Colors.WHITE : a.zxk.Colors.PRIMARY,
            onClick: w.onClose,
            children: v.NW.string(v.t.XDpS4O)
          })]
        })]
      }),
      onClose: w.onClose
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}
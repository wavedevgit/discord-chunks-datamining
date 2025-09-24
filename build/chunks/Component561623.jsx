/** Chunk was on 11394 **/
/** chunk id: 561623, original params: e,o,r (module,exports,require) **/
require.d(exports, {
  default: () => F
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk366939 = require("./366939.js"),
  Chunk911969 = require("./911969.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk583046 = require("./583046.js"),
  Chunk963249 = require("./963249.jsx"),
  Chunk853872 = require("./853872.js"),
  Chunk509545 = require("./509545.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk212895 = require("./212895.js"),
  Chunk296848 = require("./296848.js"),
  Chunk374649 = require("./374649.js"),
  Chunk807163 = require("./807163.jsx"),
  Chunk798769 = require("./798769.jsx"),
  Chunk317269 = require("./317269.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk953333 = require("./953333.js");
let F = e => {
  var o, r, F, N, E, k, {
      daysLeft: M,
      premiumType: U,
      premiumSubscription: Z,
      analyticsSource: R
    } = e,
    B = function(e, o) {
      if (null == e) return {};
      var r, t, n = function(e, o) {
        if (null == e) return {};
        var r, t, n = {},
          i = Object.keys(e);
        for (t = 0; t < i.length; t++) r = i[t], o.indexOf(r) >= 0 || (n[r] = e[r]);
        return n
      }(e, o);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (t = 0; t < i.length; t++) r = i[t], !(o.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
      }
      return n
    }(e, ["daysLeft", "premiumType", "premiumSubscription", "analyticsSource"]);
  let z = (0, _.ZP)(),
    [D, Y] = n.useState(false),
    {
      analyticsLocations: G
    } = (0, p.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
    W = (0, i.e7)([b.Z], () => (null == Z ? true : Z.paymentSourceId) != null ? b.Z.getPaymentSource(Z.paymentSourceId) : null, [Z]),
    K = Z.items[0].planId,
    V = (0, h.Wz)(x.GP[K].skuId),
    {
      priceOptions: X
    } = (0, f.Z)({
      activeSubscription: null,
      skuIDs: [V],
      paymentSourceId: null == Z ? true : Z.paymentSourceId,
      isGift: false
    }),
    [H] = (0, v.ED)({
      subscriptionId: Z.id,
      items: [{
        planId: K,
        quantity: 1
      }],
      renewal: true,
      paymentSourceId: null == Z ? true : Z.paymentSourceId,
      currency: X.currency,
      analyticsLocations: (0, p.ZP)(d.Z.PREMIUM_UNCANCEL_MODAL),
      analyticsLocation: d.Z.PREMIUM_UNCANCEL_MODAL
    }),
    q = (0, i.e7)([y.Z], () => (0, g.oE)(K), [K]),
    J = (0, i.e7)([y.Z], () => y.Z.isFetchingForSKU(V)),
    $ = null == H || null == (k = H.invoiceItems) || null == (E = k.find(e => e.subscriptionPlanId === K)) || null == (N = E.discounts) || null == (F = N.find(e => e.type === s.eW.SUBSCRIPTION_PLAN)) ? true : F.amount,
    Q = null != q ? (0, h.aS)(q.id, false, false, X) : null,
    ee = null != Q && null != $ ? (0, P.T4)(Q.amount - (null != $ ? $ : 0), Q.currency) : null,
    {
      intervalType: eo,
      intervalCount: er
    } = h.ZP.getInterval(K),
    et = U === x.p9.TIER_1,
    en = null != Q ? (0, P.T4)(Q.amount, Q.currency) : null;
  return n.useEffect(() => {
    I.default.track(T.rMx.OPEN_MODAL, {
      type: "Premium Uncancel Winback",
      source: R
    })
  }, [R]), (0, t.jsx)(c.Y0X, (o = function(e) {
    for (var o = 1; o < arguments.length; o++) {
      var r = null != arguments[o] ? arguments[o] : {},
        t = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), t.forEach(function(o) {
        var t;
        t = r[o], o in e ? Object.defineProperty(e, o, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[o] = t
      })
    }
    return e
  }({}, B), r = r = {
    className: A.modal,
    parentComponent: "UncancelModalWhatYouLose",
    children: D ? (0, t.jsxs)(m.PaymentContextProvider, {
      activeSubscription: Z,
      stepConfigs: [],
      skuIDs: [],
      children: [(0, t.jsx)(L.Z, {
        premiumType: U,
        onClose: B.onClose
      }), (0, t.jsx)(S.ZP, {
        planId: K,
        onClose: B.onClose,
        paymentSourceType: null == W ? true : W.type
      })]
    }) : (0, t.jsx)(w.Z, {
      premiumType: U,
      titleText: et ? j.intl.formatToPlainString(j.t.Sngnzs, {
        daysLeft: M
      }) : j.intl.formatToPlainString(j.t.tdvIlZ, {
        daysLeft: M
      }),
      subtitleText: et ? j.intl.format(j.t["6Su2XV"], {}) : j.intl.format(j.t["lE+P8f"], {}),
      footer: (0, t.jsxs)("div", {
        children: [null !== en ? (0, t.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: function(e) {
            switch (eo) {
              case x.rV.YEAR:
                return et ? j.intl.format(j.t.O7JRzc, {
                  price: e
                }) : j.intl.format(j.t["0y5kAA"], {
                  price: e
                });
              case x.rV.MONTH:
                if (null != ee) return j.intl.format(j.t["1/ucvr"], {
                  discountPrice: ee,
                  defaultPrice: e
                });
                if (et) return j.intl.format(j.t.rbwRlZ, {
                  price: e
                });
                if (1 === er) return j.intl.format(j.t.C9oRCw, {
                  price: e
                });
                return j.intl.format(j.t.TmmTgo, {
                  price: e,
                  intervalCount: er
                });
              default:
                throw Error("Unknown interval type ".concat(eo))
            }
          }(en)
        }) : (0, t.jsx)(c.$jN, {
          type: c.RAz.SPINNING_CIRCLE
        }), (0, t.jsxs)("div", {
          className: A.footer,
          children: [(0, t.jsx)(c.zxk, {
            variant: "primary",
            text: j.intl.string(j.t["2+luBg"]),
            disabled: J,
            onClick: async () => {
              if (null != Z) {
                let e = (0, O.tD)(K, Z.currency, null == W ? true : W.id);
                null != W && W.id === Z.paymentSourceId && e ? (await u.O5(Z, G, Z.currency, W, T.Sbl.UNCANCEL_WINBACK_MODAL), Y(true)) : (B.onClose(), (0, C.Z)({
                  initialPlanId: K,
                  analyticsLocations: G,
                  analyticsLocation: T.Sbl.UNCANCEL_WINBACK_MODAL
                }))
              }
            }
          }), (0, t.jsx)(l.zx, {
            "data-migration-pending": true,
            look: l.zx.Looks.LINK,
            color: (0, a.wj)(z) ? l.zx.Colors.WHITE : l.zx.Colors.PRIMARY,
            onClick: B.onClose,
            children: j.intl.string(j.t.XDpS4O)
          })]
        })]
      }),
      onClose: B.onClose
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : (function(e, o) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var t = Object.getOwnPropertySymbols(e);
      r.push.apply(r, t)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e))
  }), o))
}
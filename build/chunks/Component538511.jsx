/** Chunk was on 5606 **/
/** chunk id: 538511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => W,
  i: () => Y
}), require("./65821.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk158032 = require("./158032.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk531260 = require("./531260.js"),
  Chunk626584 = require("./626584.js"),
  Chunk532794 = require("./532794.jsx"),
  Chunk832946 = require("./832946.js"),
  Chunk97352 = require("./97352.js"),
  Chunk481354 = require("./481354.jsx"),
  Chunk85563 = require("./85563.jsx"),
  Chunk739508 = require("./739508.js"),
  Chunk927578 = require("./927578.js"),
  Chunk83617 = require("./83617.js"),
  Chunk615396 = require("./615396.js"),
  Chunk526292 = require("./526292.js"),
  Chunk637073 = require("./637073.js"),
  Chunk110919 = require("./110919.js"),
  Chunk422936 = require("./422936.js"),
  Chunk795269 = require("./795269.jsx"),
  Chunk327479 = require("./327479.jsx"),
  Chunk473702 = require("./473702.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk601107 = require("./601107.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk282151 = require("./282151.js");

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function G(e, t) {
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
let U = new Chunk626584.A("SubscriptionHeader.tsx"),
  k = {
    page: Chunk652215.liQ.USER_SETTINGS,
    section: Chunk652215.JJy.SETTINGS_PREMIUM,
    object: Chunk652215.ZSU.CARD
  },
  H = [Chunk652215.Dmq.PAUSED, Chunk652215.Dmq.PAUSE_PENDING, Chunk652215.Dmq.BILLING_RETRY];

function B(e) {
  let {
    wordMark: t,
    subscriptionInfo: n,
    buttons: i,
    statusClasses: s,
    shouldUseDiscountMarketing: a,
    discountAmount: o
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(L.vK, s),
    children: [(0, r.jsx)("div", {
      className: L.aK
    }), (0, r.jsxs)("div", {
      className: L.wt,
      children: [(0, r.jsx)("div", {
        className: L.Sl
      }), (0, r.jsxs)("div", {
        className: L.zH,
        children: [(0, r.jsxs)("div", {
          className: L.Gp,
          children: [t, a && null != o && (0, r.jsx)(S.ir, {
            text: w.intl.formatToPlainString(w.t.iiLbvu, {
              percent: o
            }),
            className: L.NM,
            colorOptions: S.at.PREMIUM_TIER_2_WHITE_FILL,
            isPillOnBorder: false
          })]
        }), n]
      })]
    }), (0, r.jsx)("div", {
      className: L.Uo,
      children: i
    })]
  })
}

function V(e) {
  let {
    wordMark: t,
    subscriptionInfo: n,
    buttons: i,
    statusClasses: s,
    shouldUseDiscountMarketing: a,
    discountAmount: o
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(L.vK, s, L.uR),
    children: [(0, r.jsx)("div", {
      className: L.aK
    }), (0, r.jsx)("div", {
      className: L.wt,
      children: (0, r.jsx)("div", {
        className: L.zH,
        children: (0, r.jsxs)("div", {
          className: L.Gp,
          children: [(0, r.jsx)("div", {
            className: L.Sl
          }), (0, r.jsxs)("div", {
            className: L.Ck,
            children: [t, a && null != o && (0, r.jsx)(S.ir, {
              text: w.intl.formatToPlainString(w.t.iiLbvu, {
                percent: o
              }),
              className: L.NM,
              colorOptions: S.at.PREMIUM_TIER_2_WHITE_FILL,
              isPillOnBorder: false
            }), n]
          })]
        })
      })
    }), (0, r.jsx)("div", {
      className: L.Uo,
      children: i
    })]
  })
}

function F() {
  return (0, r.jsxs)("div", {
    className: L.Up,
    children: [(0, r.jsx)(A.A, {
      className: L.sq,
      "aria-label": w.intl.string(w.t.FSOz78)
    }), (0, r.jsx)("div", {
      className: L.CJ
    })]
  })
}

function Y() {
  let {
    analyticsLocations: e
  } = (0, p.Ay)(u.A.ACCOUNT_CREDIT_BANNER);
  return (0, r.jsx)(B, {
    wordMark: (0, r.jsx)(F, {}),
    subscriptionInfo: (0, r.jsx)("div", {
      className: L.MS,
      children: w.intl.string(w.t.R0GJL2)
    }),
    buttons: (0, r.jsx)(I.A, {
      className: L.au,
      onClick: () => (0, g.A)({
        subscriptionTier: P.pe.TIER_1,
        analyticsLocations: e,
        analyticsObject: k
      }),
      text: w.intl.string(w.t["/ygMUY"])
    }),
    statusClasses: {
      [L.aS]: true
    }
  })
}
let W = function(e) {
  var t;
  let {
    subscription: i,
    currentInvoicePreview: s,
    renewalInvoicePreview: m,
    paymentSource: S,
    busy: Y,
    analyticsLocation: W
  } = e, {
    analyticsLocations: K
  } = (0, p.Ay)(u.A.SUBSCRIPTION_HEADER), z = (0, _.A)({
    forceFetch: false
  }), {
    fractionalState: Z
  } = z, q = Z === P.xc.FP_SUB_PAUSED, {
    enabled: X
  } = (0, T.Ay)({
    location: "subscription_header"
  });
  P.QV.has(i.planId) && R.Uyk.ALL_PAUSEABLE.has(i.status) && !q || (X = false);
  let J = (0, v.O)(),
    Q = null == J || null == (t = J.discount) ? true : t.amount,
    $ = (0, y.k5)(),
    ee = (0, y.nf)(),
    et = (0, j.d)(),
    en = () => {
      (i.status === R.Dmq.ACTIVE || i.status === R.Dmq.PAST_DUE || i.status === R.Dmq.PAUSED) && el(N.g.PAUSE_SELECT)
    },
    er = () => {
      (i.status === R.Dmq.ACTIVE || i.status === R.Dmq.PAST_DUE || i.status === R.Dmq.PAUSE_PENDING || q) && el()
    },
    ei = () => {
      i.status === R.Dmq.BILLING_RETRY && el(N.g.CONFIRM)
    },
    el = e => {
      (0, c.mMO)(async () => {
        let {
          PremiumBrandRefreshSubscriptionCancellationModal: t
        } = await n.e("72820").then(n.bind(n, 281439));
        return n => (0, r.jsx)(t, G(M({}, n), {
          premiumSubscription: i,
          analyticsLocation: W,
          analyticsLocations: K,
          initialStep: e
        }))
      })
    },
    es = () => {
      if (null != i && null != i.premiumPlanIdFromItems) {
        let e = b.A.get(i.premiumPlanIdFromItems);
        if (null == e) return void U.info("Plan not fetched for plan id: ".concat(i.premiumPlanIdFromItems));
        let t = (0, O._w)(e, null == S ? true : S.id, false),
          l = t.length > 0 ? t[0] : i.currency,
          o = true;
        1 === t.length && (null == S ? true : S.id) === i.paymentSourceId && (0, O.jJ)(e.id, l, null == S ? true : S.id) && (o = false), o ? (0, g.A)({
          initialPlanId: i.premiumPlanIdFromItems,
          analyticsLocations: K,
          analyticsLocation: W,
          analyticsObject: k,
          subscription: i
        }) : (a()(null != m, "Expected renewalInvoicePreview"), a()(null != s, "Expected currentInvoicePreview"), (0, c.mMO)(async () => {
          let {
            PremiumResubscribeModal: e
          } = await Promise.all([n.e("14704"), n.e("29716"), n.e("2824"), n.e("86819")]).then(n.bind(n, 46292));
          return t => (0, r.jsx)(e, G(M({}, t), {
            premiumSubscription: i,
            analyticsLocations: K,
            fractionalPremiumInfo: z,
            currentInvoicePreview: s,
            renewalInvoicePreview: m
          }))
        }))
      }
    },
    ea = () => {
      H.includes(i.status) && null != i.pauseEndsAt ? i.status === R.Dmq.PAUSED && i.pauseReason !== D.qf.USER_TEMPORARY_BAN ? (0, g.A)({
        initialPlanId: i.premiumPlanIdFromItems,
        analyticsLocations: K,
        analyticsLocation: W,
        analyticsObject: k,
        subscription: i,
        skipConfirm: true
      }) : d.U(i, K) : (0, E.pM)(Error("Invalid subscription to resume"), {
        extra: {
          subscriptionId: i.id,
          status: i.status,
          pauseEndsAt: i.pauseEndsAt
        }
      })
    },
    eo = () => {
      i.status === R.Dmq.PAUSED && el(N.g.PAUSE_SELECT)
    },
    ec = () => {
      el(N.g.WHAT_YOU_LOSE)
    },
    ed = x.Ay.getPlanIdFromInvoice(i, s);
  if ((0, f.m1)(ed)) return null;
  let eu = x.Ay.getStatusFromInvoice(i, s),
    ep = x.Ay.getPremiumType(ed),
    e_ = {
      [L.Vd]: ep === P.PremiumTypes.TIER_0,
      [L.aS]: ep === P.PremiumTypes.TIER_1,
      [L.hA]: ep === P.PremiumTypes.TIER_2,
      [L.aD]: eu === R.Dmq.CANCELED,
      [L.WY]: eu === R.Dmq.PAUSE_PENDING,
      [L.Ft]: eu === R.Dmq.PAUSED && !q,
      [L.GD]: (0, x.PK)(eu)
    },
    em = null;
  switch (ep) {
    case P.PremiumTypes.TIER_0:
      em = (0, r.jsxs)("div", {
        className: L.Up,
        children: [(0, r.jsx)(A.A, {
          className: L.sq,
          "aria-label": w.intl.string(w.t["t9uG/o"])
        }), (0, r.jsx)("div", {
          className: L.sT
        })]
      });
      break;
    case P.PremiumTypes.TIER_1:
      em = (0, r.jsx)(F, {});
      break;
    case P.PremiumTypes.TIER_2:
      em = (0, r.jsx)(h.A, {
        className: L.V6,
        "aria-label": w.intl.string(w.t.lpNrPu)
      })
  }
  let eg = H.includes(i.status) && !q ? V : B;
  return (0, r.jsx)(eg, {
    wordMark: em,
    subscriptionInfo: (a()(null != s, "Expected currentInvoicePreview"), (0, r.jsx)("div", {
      className: L.MS,
      children: et ? w.intl.format(w.t["/SfHwl"], {
        weeks: 1
      }) : (0, x.nB)({
        planId: ed,
        subscription: i,
        renewalInvoicePreview: s,
        hasDiscountApplied: $,
        activeDiscountInfo: ee,
        hasFractionalPremiumWithSub: q
      })
    })),
    buttons: (() => {
      let {
        status: e
      } = i;
      if (i.isPurchasedExternally) {
        let e = (0, x.tW)(i.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
        return (0, r.jsx)(c.MzZ, {
          href: e,
          useDefaultUnderlineStyles: false,
          children: (0, r.jsx)(c.Button, {
            variant: "overlay-primary",
            size: "sm",
            loading: Y,
            text: w.intl.string(w.t.obRG6Y).toLocaleUpperCase()
          })
        })
      }

      function t() {
        let e = x.Ay.isSwitchingPlansDisabled(i),
          t = x.Ay.getSwitchingPlansDisabledMessage(i);
        return (0, r.jsxs)("div", {
          className: L.Lv,
          children: [X ? (0, r.jsx)("div", {
            className: L.xP,
            children: (0, r.jsx)(c.QWc, {
              variant: "always-white",
              disabled: Y,
              onClick: en,
              size: "sm",
              text: w.intl.string(w.t.eFlYVA)
            })
          }) : (0, r.jsx)("div", {
            className: L.Nn,
            children: (0, r.jsx)(c.QWc, {
              variant: "always-white",
              onClick: er,
              disabled: Y,
              size: "sm",
              text: w.intl.string(w.t["ETE/oC"])
            })
          }), (0, r.jsx)(o.m_, {
            text: t,
            asContainer: true,
            children: (0, r.jsx)(I.A, {
              className: l()(L.au, L.lB),
              disabled: e,
              onClick: () => {
                (0, g.A)({
                  analyticsLocations: K,
                  analyticsLocation: W,
                  analyticsObject: k,
                  subscription: i
                })
              },
              text: w.intl.string(w.t["dylp/7"])
            })
          })]
        })
      }
      if (x.Ay.isBaseSubscriptionCanceled(i)) return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: L.au,
        children: (0, r.jsx)(c.Button, {
          variant: "overlay-primary",
          size: "sm",
          text: w.intl.string(w.t.iIvF2z),
          loading: Y,
          onClick: es
        })
      });
      switch (e) {
        case R.Dmq.BILLING_RETRY:
          return (0, r.jsx)(c.Button, {
            variant: "overlay-primary",
            size: "sm",
            onClick: ei,
            loading: Y,
            text: w.intl.string(w.t["ETE/oC"])
          });
        case R.Dmq.PAUSE_PENDING:
          return (0, r.jsxs)("div", {
            className: L.Lv,
            children: [(0, r.jsx)("div", {
              className: L.Nn,
              children: (0, r.jsx)(c.QWc, {
                variant: "always-white",
                disabled: Y,
                onClick: er,
                size: "sm",
                text: w.intl.string(w.t.cM1H0K)
              })
            }), (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: L.au,
              children: (0, r.jsx)(c.Button, {
                variant: "overlay-primary",
                size: "sm",
                text: w.intl.string(w.t.TgV5Qf),
                loading: Y,
                onClick: ea
              })
            })]
          });
        case R.Dmq.PAUSED:
          if (q) return t();
          let {
            durations: n
          } = (0, C.Vy)(i);
          return (0, r.jsxs)("div", {
            className: L.Lv,
            children: [(0, r.jsx)("div", {
              className: L.Nn,
              children: n.length > 0 ? (0, r.jsx)(c.QWc, {
                variant: "always-white",
                onClick: eo,
                disabled: Y,
                size: "sm",
                text: w.intl.string(w.t.jNHWt6)
              }) : (0, r.jsx)(c.QWc, {
                variant: "always-white",
                onClick: ec,
                disabled: Y,
                size: "sm",
                text: w.intl.string(w.t.cM1H0K)
              })
            }), (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: L.au,
              children: (0, r.jsx)(c.Button, {
                variant: "overlay-primary",
                size: "sm",
                text: w.intl.string(w.t.zpi5pg),
                loading: Y,
                onClick: ea
              })
            })]
          });
        case R.Dmq.ACTIVE:
        case R.Dmq.PAST_DUE:
          return t()
      }
    })(),
    statusClasses: e_,
    shouldUseDiscountMarketing: $,
    discountAmount: Q
  })
}
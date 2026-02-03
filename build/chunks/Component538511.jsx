/** Chunk was on 9207 **/
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
  B = [Chunk652215.Dmq.PAUSED, Chunk652215.Dmq.PAUSE_PENDING, Chunk652215.Dmq.BILLING_RETRY];

function H(e) {
  let {
    wordMark: t,
    subscriptionInfo: n,
    buttons: i,
    statusClasses: s,
    shouldUseDiscountMarketing: a,
    discountAmount: o
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(w.vK, s),
    children: [(0, r.jsx)("div", {
      className: w.aK
    }), (0, r.jsxs)("div", {
      className: w.wt,
      children: [(0, r.jsx)("div", {
        className: w.Sl
      }), (0, r.jsxs)("div", {
        className: w.zH,
        children: [(0, r.jsxs)("div", {
          className: w.Gp,
          children: [t, a && null != o && (0, r.jsx)(j.ir, {
            text: L.intl.formatToPlainString(L.t.iiLbvu, {
              percent: o
            }),
            className: w.NM,
            colorOptions: j.at.PREMIUM_TIER_2_WHITE_FILL,
            isPillOnBorder: false
          })]
        }), n]
      })]
    }), (0, r.jsx)("div", {
      className: w.Uo,
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
    className: l()(w.vK, s, w.uR),
    children: [(0, r.jsx)("div", {
      className: w.aK
    }), (0, r.jsx)("div", {
      className: w.wt,
      children: (0, r.jsx)("div", {
        className: w.zH,
        children: (0, r.jsxs)("div", {
          className: w.Gp,
          children: [(0, r.jsx)("div", {
            className: w.Sl
          }), (0, r.jsxs)("div", {
            className: w.Ck,
            children: [t, a && null != o && (0, r.jsx)(j.ir, {
              text: L.intl.formatToPlainString(L.t.iiLbvu, {
                percent: o
              }),
              className: w.NM,
              colorOptions: j.at.PREMIUM_TIER_2_WHITE_FILL,
              isPillOnBorder: false
            }), n]
          })]
        })
      })
    }), (0, r.jsx)("div", {
      className: w.Uo,
      children: i
    })]
  })
}

function F() {
  return (0, r.jsxs)("div", {
    className: w.Up,
    children: [(0, r.jsx)(h.A, {
      className: w.sq,
      "aria-label": L.intl.string(L.t.FSOz78)
    }), (0, r.jsx)("div", {
      className: w.CJ
    })]
  })
}

function Y() {
  let {
    analyticsLocations: e
  } = (0, _.Ay)(u.A.ACCOUNT_CREDIT_BANNER);
  return (0, r.jsx)(H, {
    wordMark: (0, r.jsx)(F, {}),
    subscriptionInfo: (0, r.jsx)("div", {
      className: w.MS,
      children: L.intl.string(L.t.R0GJL2)
    }),
    buttons: (0, r.jsx)(y.A, {
      className: w.au,
      onClick: () => (0, g.A)({
        subscriptionTier: P.pe.TIER_1,
        analyticsLocations: e,
        analyticsObject: k
      }),
      text: L.intl.string(L.t["/ygMUY"])
    }),
    statusClasses: {
      [w.aS]: true
    }
  })
}
let W = function(e) {
  var t;
  let {
    subscription: i,
    currentInvoicePreview: s,
    renewalInvoicePreview: m,
    paymentSource: j,
    busy: Y,
    analyticsLocation: W
  } = e, {
    analyticsLocations: K
  } = (0, _.Ay)(u.A.SUBSCRIPTION_HEADER), z = (0, p.A)({
    forceFetch: false
  }), {
    fractionalState: Z
  } = z, X = Z === P.xc.FP_SUB_PAUSED, {
    enabled: q
  } = (0, I.Ay)({
    location: "subscription_header"
  });
  P.QV.has(i.planId) && R.Uyk.ALL_PAUSEABLE.has(i.status) && !X || (q = false);
  let J = (0, N.O)(),
    Q = null == J || null == (t = J.discount) ? true : t.amount,
    $ = (0, S.k5)(),
    ee = (0, S.nf)(),
    et = (0, T.d)(),
    en = () => {
      (i.status === R.Dmq.ACTIVE || i.status === R.Dmq.PAST_DUE || i.status === R.Dmq.PAUSED) && el(v.g.PAUSE_SELECT)
    },
    er = () => {
      (i.status === R.Dmq.ACTIVE || i.status === R.Dmq.PAST_DUE || i.status === R.Dmq.PAUSE_PENDING || X) && el()
    },
    ei = () => {
      i.status === R.Dmq.BILLING_RETRY && el(v.g.CONFIRM)
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
        let e = f.A.get(i.premiumPlanIdFromItems);
        if (null == e) return void U.info("Plan not fetched for plan id: ".concat(i.premiumPlanIdFromItems));
        let t = (0, x._w)(e, null == j ? true : j.id, false),
          l = t.length > 0 ? t[0] : i.currency,
          o = true;
        1 === t.length && (null == j ? true : j.id) === i.paymentSourceId && (0, x.jJ)(e.id, l, null == j ? true : j.id) && (o = false), o ? (0, g.A)({
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
      B.includes(i.status) && null != i.pauseEndsAt ? i.status === R.Dmq.PAUSED && i.pauseReason !== D.qf.USER_TEMPORARY_BAN ? (0, g.A)({
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
      i.status === R.Dmq.PAUSED && el(v.g.PAUSE_SELECT)
    },
    ec = () => {
      el(v.g.WHAT_YOU_LOSE)
    },
    ed = O.Ay.getPlanIdFromInvoice(i, s);
  if ((0, A.m1)(ed)) return null;
  let eu = O.Ay.getStatusFromInvoice(i, s),
    e_ = O.Ay.getPremiumType(ed),
    ep = {
      [w.Vd]: e_ === P.PremiumTypes.TIER_0,
      [w.aS]: e_ === P.PremiumTypes.TIER_1,
      [w.hA]: e_ === P.PremiumTypes.TIER_2,
      [w.aD]: eu === R.Dmq.CANCELED,
      [w.WY]: eu === R.Dmq.PAUSE_PENDING,
      [w.Ft]: eu === R.Dmq.PAUSED && !X,
      [w.GD]: (0, O.PK)(eu)
    },
    em = null;
  switch (e_) {
    case P.PremiumTypes.TIER_0:
      em = (0, r.jsxs)("div", {
        className: w.Up,
        children: [(0, r.jsx)(h.A, {
          className: w.sq,
          "aria-label": L.intl.string(L.t["t9uG/o"])
        }), (0, r.jsx)("div", {
          className: w.sT
        })]
      });
      break;
    case P.PremiumTypes.TIER_1:
      em = (0, r.jsx)(F, {});
      break;
    case P.PremiumTypes.TIER_2:
      em = (0, r.jsx)(b.A, {
        className: w.V6,
        "aria-label": L.intl.string(L.t.lpNrPu)
      })
  }
  let eg = B.includes(i.status) && !X ? V : H;
  return (0, r.jsx)(eg, {
    wordMark: em,
    subscriptionInfo: (a()(null != s, "Expected currentInvoicePreview"), (0, r.jsx)("div", {
      className: w.MS,
      children: et ? L.intl.format(L.t["/SfHwl"], {
        weeks: 1
      }) : (0, O.nB)({
        planId: ed,
        subscription: i,
        renewalInvoicePreview: s,
        hasDiscountApplied: $,
        activeDiscountInfo: ee,
        hasFractionalPremiumWithSub: X
      })
    })),
    buttons: (() => {
      let {
        status: e
      } = i;
      if (i.isPurchasedExternally) {
        let e = (0, O.tW)(i.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
        return (0, r.jsx)(c.MzZ, {
          href: e,
          useDefaultUnderlineStyles: false,
          children: (0, r.jsx)(c.Button, {
            variant: "overlay-primary",
            size: "sm",
            loading: Y,
            text: L.intl.string(L.t.obRG6Y).toLocaleUpperCase()
          })
        })
      }

      function t() {
        let e = O.Ay.isSwitchingPlansDisabled(i),
          t = O.Ay.getSwitchingPlansDisabledMessage(i);
        return (0, r.jsxs)("div", {
          className: w.Lv,
          children: [q ? (0, r.jsx)("div", {
            className: w.xP,
            children: (0, r.jsx)(c.QWc, {
              variant: "always-white",
              disabled: Y,
              onClick: en,
              size: "sm",
              text: L.intl.string(L.t.eFlYVA)
            })
          }) : (0, r.jsx)("div", {
            className: w.Nn,
            children: (0, r.jsx)(c.QWc, {
              variant: "always-white",
              onClick: er,
              disabled: Y,
              size: "sm",
              text: L.intl.string(L.t["ETE/oC"])
            })
          }), (0, r.jsx)(o.m_, {
            text: t,
            asContainer: true,
            children: (0, r.jsx)(y.A, {
              className: l()(w.au, w.lB),
              disabled: e,
              onClick: () => {
                (0, g.A)({
                  analyticsLocations: K,
                  analyticsLocation: W,
                  analyticsObject: k,
                  subscription: i
                })
              },
              text: L.intl.string(L.t["dylp/7"])
            })
          })]
        })
      }
      if (O.Ay.isBaseSubscriptionCanceled(i)) return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: w.au,
        children: (0, r.jsx)(c.Button, {
          variant: "overlay-primary",
          size: "sm",
          text: L.intl.string(L.t.iIvF2z),
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
            text: L.intl.string(L.t["ETE/oC"])
          });
        case R.Dmq.PAUSE_PENDING:
          return (0, r.jsxs)("div", {
            className: w.Lv,
            children: [(0, r.jsx)("div", {
              className: w.Nn,
              children: (0, r.jsx)(c.QWc, {
                variant: "always-white",
                disabled: Y,
                onClick: er,
                size: "sm",
                text: L.intl.string(L.t.cM1H0K)
              })
            }), (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: w.au,
              children: (0, r.jsx)(c.Button, {
                variant: "overlay-primary",
                size: "sm",
                text: L.intl.string(L.t.TgV5Qf),
                loading: Y,
                onClick: ea
              })
            })]
          });
        case R.Dmq.PAUSED:
          if (X) return t();
          let {
            durations: n
          } = (0, C.Vy)(i);
          return (0, r.jsxs)("div", {
            className: w.Lv,
            children: [(0, r.jsx)("div", {
              className: w.Nn,
              children: n.length > 0 ? (0, r.jsx)(c.QWc, {
                variant: "always-white",
                onClick: eo,
                disabled: Y,
                size: "sm",
                text: L.intl.string(L.t.jNHWt6)
              }) : (0, r.jsx)(c.QWc, {
                variant: "always-white",
                onClick: ec,
                disabled: Y,
                size: "sm",
                text: L.intl.string(L.t.cM1H0K)
              })
            }), (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: w.au,
              children: (0, r.jsx)(c.Button, {
                variant: "overlay-primary",
                size: "sm",
                text: L.intl.string(L.t.zpi5pg),
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
    statusClasses: ep,
    shouldUseDiscountMarketing: $,
    discountAmount: Q
  })
}
/** Chunk was on 60667 **/
/** chunk id: 538511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => z,
  i: () => W
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
  Chunk416848 = require("./416848.js"),
  Chunk422936 = require("./422936.js"),
  Chunk795269 = require("./795269.jsx"),
  Chunk327479 = require("./327479.jsx"),
  Chunk473702 = require("./473702.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk601107 = require("./601107.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk282151 = require("./282151.js");

function U(e) {
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
let k = new Chunk626584.A("SubscriptionHeader.tsx"),
  V = {
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
    className: l()(M.vK, s),
    children: [(0, r.jsx)("div", {
      className: M.aK
    }), (0, r.jsxs)("div", {
      className: M.wt,
      children: [(0, r.jsx)("div", {
        className: M.Sl
      }), (0, r.jsxs)("div", {
        className: M.zH,
        children: [(0, r.jsxs)("div", {
          className: M.Gp,
          children: [t, a && null != o && (0, r.jsx)(N.ir, {
            text: L.intl.formatToPlainString(L.t.iiLbvu, {
              percent: o
            }),
            className: M.NM,
            colorOptions: N.at.PREMIUM_TIER_2_WHITE_FILL,
            isPillOnBorder: false
          })]
        }), n]
      })]
    }), (0, r.jsx)("div", {
      className: M.Uo,
      children: i
    })]
  })
}

function F(e) {
  let {
    wordMark: t,
    subscriptionInfo: n,
    buttons: i,
    statusClasses: s,
    shouldUseDiscountMarketing: a,
    discountAmount: o
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(M.vK, s, M.uR),
    children: [(0, r.jsx)("div", {
      className: M.aK
    }), (0, r.jsx)("div", {
      className: M.wt,
      children: (0, r.jsx)("div", {
        className: M.zH,
        children: (0, r.jsxs)("div", {
          className: M.Gp,
          children: [(0, r.jsx)("div", {
            className: M.Sl
          }), (0, r.jsxs)("div", {
            className: M.Ck,
            children: [t, a && null != o && (0, r.jsx)(N.ir, {
              text: L.intl.formatToPlainString(L.t.iiLbvu, {
                percent: o
              }),
              className: M.NM,
              colorOptions: N.at.PREMIUM_TIER_2_WHITE_FILL,
              isPillOnBorder: false
            }), n]
          })]
        })
      })
    }), (0, r.jsx)("div", {
      className: M.Uo,
      children: i
    })]
  })
}

function Y() {
  return (0, r.jsxs)("div", {
    className: M.Up,
    children: [(0, r.jsx)(b.A, {
      className: M.sq,
      "aria-label": L.intl.string(L.t.FSOz78)
    }), (0, r.jsx)("div", {
      className: M.CJ
    })]
  })
}

function W() {
  let {
    analyticsLocations: e
  } = (0, _.Ay)(u.A.ACCOUNT_CREDIT_BANNER);
  return (0, r.jsx)(B, {
    wordMark: (0, r.jsx)(Y, {}),
    subscriptionInfo: (0, r.jsx)("div", {
      className: M.MS,
      children: L.intl.string(L.t.R0GJL2)
    }),
    buttons: (0, r.jsx)(y.A, {
      className: M.au,
      onClick: () => (0, g.A)({
        subscriptionTier: R.pe.TIER_1,
        analyticsLocations: e,
        analyticsObject: V
      }),
      text: L.intl.string(L.t["/ygMUY"])
    }),
    statusClasses: {
      [M.aS]: true
    }
  })
}
let z = function(e) {
  var t;
  let {
    subscription: i,
    currentInvoicePreview: s,
    renewalInvoicePreview: m,
    paymentSource: N,
    busy: W,
    analyticsLocation: z
  } = e, K = "subscription_header", {
    analyticsLocations: Z
  } = (0, _.Ay)(u.A.SUBSCRIPTION_HEADER), X = (0, p.A)({
    forceFetch: false
  }), {
    fractionalState: q
  } = X, J = q === R.xc.FP_SUB_PAUSED, {
    enabled: Q
  } = (0, S.Ay)({
    location: K
  }), $ = (0, j.g)(K);
  R.QV.has(i.planId) && D.Uyk.ALL_PAUSEABLE.has(i.status) && !J || (Q = false);
  let ee = (0, v.O)(),
    et = null == ee || null == (t = ee.discount) ? true : t.amount,
    en = (0, T.k5)(),
    er = (0, T.nf)(),
    ei = (0, I.d)(),
    el = () => {
      (i.status === D.Dmq.ACTIVE || i.status === D.Dmq.PAST_DUE || i.status === D.Dmq.PAUSED) && eo(P.g.PAUSE_SELECT)
    },
    es = () => {
      (i.status === D.Dmq.ACTIVE || i.status === D.Dmq.PAST_DUE || i.status === D.Dmq.PAUSE_PENDING || J) && eo()
    },
    ea = () => {
      i.status === D.Dmq.BILLING_RETRY && eo(P.g.CONFIRM)
    },
    eo = e => {
      (0, c.mMO)(async () => {
        let {
          PremiumBrandRefreshSubscriptionCancellationModal: t
        } = await n.e("72820").then(n.bind(n, 281439));
        return n => (0, r.jsx)(t, G(U({}, n), {
          premiumSubscription: i,
          analyticsLocation: z,
          analyticsLocations: Z,
          initialStep: e
        }))
      })
    },
    ec = () => {
      if (null != i && null != i.premiumPlanIdFromItems) {
        let e = f.A.get(i.premiumPlanIdFromItems);
        if (null == e) return void k.info("Plan not fetched for plan id: ".concat(i.premiumPlanIdFromItems));
        let t = (0, O._w)(e, null == N ? true : N.id, false),
          l = t.length > 0 ? t[0] : i.currency,
          o = true;
        1 === t.length && (null == N ? true : N.id) === i.paymentSourceId && (0, O.jJ)(e.id, l, null == N ? true : N.id) && (o = false), o ? (0, g.A)({
          initialPlanId: i.premiumPlanIdFromItems,
          analyticsLocations: Z,
          analyticsLocation: z,
          analyticsObject: V,
          subscription: i
        }) : $ ? (a()(null != m, "Expected renewalInvoicePreview"), a()(null != s, "Expected currentInvoicePreview"), (0, c.mMO)(async () => {
          let {
            PremiumResubscribeModal: e
          } = await Promise.all([n.e("14704"), n.e("29716"), n.e("2824"), n.e("86819")]).then(n.bind(n, 46292));
          return t => (0, r.jsx)(e, G(U({}, t), {
            premiumSubscription: i,
            analyticsLocations: Z,
            fractionalPremiumInfo: X,
            currentInvoicePreview: s,
            renewalInvoicePreview: m
          }))
        })) : d.Ir(i, Z)
      }
    },
    ed = () => {
      H.includes(i.status) && null != i.pauseEndsAt ? i.status === D.Dmq.PAUSED && i.pauseReason !== w.qf.USER_TEMPORARY_BAN ? (0, g.A)({
        initialPlanId: i.premiumPlanIdFromItems,
        analyticsLocations: Z,
        analyticsLocation: z,
        analyticsObject: V,
        subscription: i,
        skipConfirm: true
      }) : d.U(i, Z) : (0, E.pM)(Error("Invalid subscription to resume"), {
        extra: {
          subscriptionId: i.id,
          status: i.status,
          pauseEndsAt: i.pauseEndsAt
        }
      })
    },
    eu = () => {
      i.status === D.Dmq.PAUSED && eo(P.g.PAUSE_SELECT)
    },
    e_ = () => {
      eo(P.g.WHAT_YOU_LOSE)
    },
    ep = x.Ay.getPlanIdFromInvoice(i, s);
  if ((0, A.m1)(ep)) return null;
  let em = x.Ay.getStatusFromInvoice(i, s),
    eg = x.Ay.getPremiumType(ep),
    eA = {
      [M.Vd]: eg === R.PremiumTypes.TIER_0,
      [M.aS]: eg === R.PremiumTypes.TIER_1,
      [M.hA]: eg === R.PremiumTypes.TIER_2,
      [M.aD]: em === D.Dmq.CANCELED,
      [M.WY]: em === D.Dmq.PAUSE_PENDING,
      [M.Ft]: em === D.Dmq.PAUSED && !J,
      [M.GD]: (0, x.PK)(em)
    },
    ef = null;
  switch (eg) {
    case R.PremiumTypes.TIER_0:
      ef = (0, r.jsxs)("div", {
        className: M.Up,
        children: [(0, r.jsx)(b.A, {
          className: M.sq,
          "aria-label": L.intl.string(L.t["t9uG/o"])
        }), (0, r.jsx)("div", {
          className: M.sT
        })]
      });
      break;
    case R.PremiumTypes.TIER_1:
      ef = (0, r.jsx)(Y, {});
      break;
    case R.PremiumTypes.TIER_2:
      ef = (0, r.jsx)(h.A, {
        className: M.V6,
        "aria-label": L.intl.string(L.t.lpNrPu)
      })
  }
  let eh = H.includes(i.status) && !J ? F : B;
  return (0, r.jsx)(eh, {
    wordMark: ef,
    subscriptionInfo: (a()(null != s, "Expected currentInvoicePreview"), (0, r.jsx)("div", {
      className: M.MS,
      children: ei ? L.intl.format(L.t["/SfHwl"], {
        weeks: 1
      }) : (0, x.nB)({
        planId: ep,
        subscription: i,
        renewalInvoicePreview: s,
        hasDiscountApplied: en,
        activeDiscountInfo: er,
        hasFractionalPremiumWithSub: J
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
            loading: W,
            text: L.intl.string(L.t.obRG6Y).toLocaleUpperCase()
          })
        })
      }

      function t() {
        let e = x.Ay.isSwitchingPlansDisabled(i),
          t = x.Ay.getSwitchingPlansDisabledMessage(i);
        return (0, r.jsxs)("div", {
          className: M.Lv,
          children: [Q ? (0, r.jsx)("div", {
            className: M.xP,
            children: (0, r.jsx)(c.QWc, {
              variant: "always-white",
              disabled: W,
              onClick: el,
              size: "sm",
              text: L.intl.string(L.t.eFlYVA)
            })
          }) : (0, r.jsx)("div", {
            className: M.Nn,
            children: (0, r.jsx)(c.QWc, {
              variant: "always-white",
              onClick: es,
              disabled: W,
              size: "sm",
              text: L.intl.string(L.t["ETE/oC"])
            })
          }), (0, r.jsx)(o.m_, {
            text: t,
            asContainer: true,
            children: (0, r.jsx)(y.A, {
              className: l()(M.au, M.lB),
              disabled: e,
              onClick: () => {
                (0, g.A)({
                  analyticsLocations: Z,
                  analyticsLocation: z,
                  analyticsObject: V,
                  subscription: i
                })
              },
              text: L.intl.string(L.t["dylp/7"])
            })
          })]
        })
      }
      if (x.Ay.isBaseSubscriptionCanceled(i)) return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: M.au,
        children: (0, r.jsx)(c.Button, {
          variant: "overlay-primary",
          size: "sm",
          text: L.intl.string(L.t.iIvF2z),
          loading: W,
          onClick: ec
        })
      });
      switch (e) {
        case D.Dmq.BILLING_RETRY:
          return (0, r.jsx)(c.Button, {
            variant: "overlay-primary",
            size: "sm",
            onClick: ea,
            loading: W,
            text: L.intl.string(L.t["ETE/oC"])
          });
        case D.Dmq.PAUSE_PENDING:
          return (0, r.jsxs)("div", {
            className: M.Lv,
            children: [(0, r.jsx)("div", {
              className: M.Nn,
              children: (0, r.jsx)(c.QWc, {
                variant: "always-white",
                disabled: W,
                onClick: es,
                size: "sm",
                text: L.intl.string(L.t.cM1H0K)
              })
            }), (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: M.au,
              children: (0, r.jsx)(c.Button, {
                variant: "overlay-primary",
                size: "sm",
                text: L.intl.string(L.t.TgV5Qf),
                loading: W,
                onClick: ed
              })
            })]
          });
        case D.Dmq.PAUSED:
          if (J) return t();
          let {
            durations: n
          } = (0, C.Vy)(i);
          return (0, r.jsxs)("div", {
            className: M.Lv,
            children: [(0, r.jsx)("div", {
              className: M.Nn,
              children: n.length > 0 ? (0, r.jsx)(c.QWc, {
                variant: "always-white",
                onClick: eu,
                disabled: W,
                size: "sm",
                text: L.intl.string(L.t.jNHWt6)
              }) : (0, r.jsx)(c.QWc, {
                variant: "always-white",
                onClick: e_,
                disabled: W,
                size: "sm",
                text: L.intl.string(L.t.cM1H0K)
              })
            }), (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: M.au,
              children: (0, r.jsx)(c.Button, {
                variant: "overlay-primary",
                size: "sm",
                text: L.intl.string(L.t.zpi5pg),
                loading: W,
                onClick: ed
              })
            })]
          });
        case D.Dmq.ACTIVE:
        case D.Dmq.PAST_DUE:
          return t()
      }
    })(),
    statusClasses: eA,
    shouldUseDiscountMarketing: en,
    discountAmount: et
  })
}
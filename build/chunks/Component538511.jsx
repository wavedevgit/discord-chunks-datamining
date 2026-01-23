/** Chunk was on web.js **/
/** chunk id: 538511, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => q,
  i: () => z
}), require("./65821.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
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

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let F = new Chunk626584.A("SubscriptionHeader.tsx"),
  B = {
    page: Chunk652215.liQ.USER_SETTINGS,
    section: Chunk652215.JJy.SETTINGS_PREMIUM,
    object: Chunk652215.ZSU.CARD
  },
  H = [Chunk652215.Dmq.PAUSED, Chunk652215.Dmq.PAUSE_PENDING, Chunk652215.Dmq.BILLING_RETRY];

function Y(e) {
  let {
    wordMark: t,
    subscriptionInfo: n,
    buttons: i,
    statusClasses: s,
    shouldUseDiscountMarketing: o,
    discountAmount: l
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(M.vK, s),
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
          children: [t, o && null != l && (0, r.jsx)(R.ir, {
            text: j.intl.formatToPlainString(j.t.iiLbvu, {
              percent: l
            }),
            className: M.NM,
            colorOptions: R.at.PREMIUM_TIER_2_WHITE_FILL,
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

function W(e) {
  let {
    wordMark: t,
    subscriptionInfo: n,
    buttons: i,
    statusClasses: s,
    shouldUseDiscountMarketing: o,
    discountAmount: l
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(M.vK, s, M.uR),
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
            children: [t, o && null != l && (0, r.jsx)(R.ir, {
              text: j.intl.formatToPlainString(j.t.iiLbvu, {
                percent: l
              }),
              className: M.NM,
              colorOptions: R.at.PREMIUM_TIER_2_WHITE_FILL,
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

function K() {
  return (0, r.jsxs)("div", {
    className: M.Up,
    children: [(0, r.jsx)(y.A, {
      className: M.sq,
      "aria-label": j.intl.string(j.t.FSOz78)
    }), (0, r.jsx)("div", {
      className: M.CJ
    })]
  })
}

function z() {
  let {
    analyticsLocations: e
  } = (0, f.Ay)(d.A.ACCOUNT_CREDIT_BANNER);
  return (0, r.jsx)(Y, {
    wordMark: (0, r.jsx)(K, {}),
    subscriptionInfo: (0, r.jsx)("div", {
      className: M.MS,
      children: j.intl.string(j.t.R0GJL2)
    }),
    buttons: (0, r.jsx)(w.A, {
      className: M.au,
      onClick: () => (0, h.A)({
        subscriptionTier: D.pe.TIER_1,
        analyticsLocations: e,
        analyticsObject: B
      }),
      text: j.intl.string(j.t["/ygMUY"])
    }),
    statusClasses: {
      [M.aS]: true
    }
  })
}
let q = function(e) {
  var t;
  let {
    subscription: i,
    currentInvoicePreview: s,
    renewalInvoicePreview: _,
    paymentSource: R,
    busy: k,
    analyticsLocation: G
  } = e, z = "subscription_header", {
    analyticsLocations: q
  } = (0, f.Ay)(d.A.SUBSCRIPTION_HEADER), X = (0, p.A)({
    forceFetch: false
  }), {
    fractionalState: Z
  } = X, Q = Z === D.xc.FP_SUB_PAUSED, {
    enabled: $
  } = (0, T.Ay)({
    location: z
  }), J = (0, C.g)(z);
  D.QV.has(i.planId) && x.Uyk.ALL_PAUSEABLE.has(i.status) && !Q || ($ = false);
  let ee = (0, N.O)(),
    et = null == ee || null == (t = ee.discount) ? true : t.amount,
    en = (0, I.k5)(),
    er = (0, I.nf)(),
    ei = (0, S.d)(),
    ea = () => {
      (i.status === x.Dmq.ACTIVE || i.status === x.Dmq.PAST_DUE || i.status === x.Dmq.PAUSED) && el(P.g.PAUSE_SELECT)
    },
    es = () => {
      (i.status === x.Dmq.ACTIVE || i.status === x.Dmq.PAST_DUE || i.status === x.Dmq.PAUSE_PENDING || Q) && el()
    },
    eo = () => {
      i.status === x.Dmq.BILLING_RETRY && el(P.g.CONFIRM)
    },
    el = e => {
      (0, c.mMO)(async () => {
        let {
          PremiumBrandRefreshSubscriptionCancellationModal: t
        } = await n.e("72820").then(n.bind(n, 281439));
        return n => (0, r.jsx)(t, V(U({}, n), {
          premiumSubscription: i,
          analyticsLocation: G,
          analyticsLocations: q,
          initialStep: e
        }))
      })
    },
    ec = () => {
      o()(null != _, "Expected renewalInvoicePreview"), o()(null != s, "Expected currentInvoicePreview"), (0, c.mMO)(async () => {
        let {
          PremiumResubscribeModal: e
        } = await Promise.all([n.e("14704"), n.e("29716"), n.e("2824"), n.e("66801")]).then(n.bind(n, 46292));
        return t => (0, r.jsx)(e, V(U({}, t), {
          premiumSubscription: i,
          analyticsLocations: q,
          fractionalPremiumInfo: X,
          currentInvoicePreview: s,
          renewalInvoicePreview: _
        }))
      })
    },
    eu = () => {
      if (null != i && null != i.premiumPlanIdFromItems) {
        let e = g.A.get(i.premiumPlanIdFromItems);
        if (null == e) return void F.info("Plan not fetched for plan id: ".concat(i.premiumPlanIdFromItems));
        let t = (0, v._w)(e, null == R ? true : R.id, false),
          n = t.length > 0 ? t[0] : i.currency,
          r = true;
        1 === t.length && (null == R ? true : R.id) === i.paymentSourceId && (0, v.jJ)(e.id, n, null == R ? true : R.id) && (r = false), r ? (0, h.A)({
          initialPlanId: i.premiumPlanIdFromItems,
          analyticsLocations: q,
          analyticsLocation: G,
          analyticsObject: B,
          subscription: i
        }) : J ? ec() : u.Ir(i, q)
      }
    },
    ed = () => {
      H.includes(i.status) && null != i.pauseEndsAt ? i.status === x.Dmq.PAUSED && i.pauseReason !== L.qf.USER_TEMPORARY_BAN ? (0, h.A)({
        initialPlanId: i.premiumPlanIdFromItems,
        analyticsLocations: q,
        analyticsLocation: G,
        analyticsObject: B,
        subscription: i,
        skipConfirm: true
      }) : u.U(i, q) : (0, b.pM)(Error("Invalid subscription to resume"), {
        extra: {
          subscriptionId: i.id,
          status: i.status,
          pauseEndsAt: i.pauseEndsAt
        }
      })
    },
    ef = () => {
      i.status === x.Dmq.PAUSED && el(P.g.PAUSE_SELECT)
    },
    ep = () => {
      el(P.g.WHAT_YOU_LOSE)
    },
    e_ = e => (o()(null != s, "Expected currentInvoicePreview"), (0, r.jsx)("div", {
      className: M.MS,
      children: ei ? j.intl.format(j.t["/SfHwl"], {
        weeks: 1
      }) : (0, O.nB)({
        planId: e,
        subscription: i,
        renewalInvoicePreview: s,
        hasDiscountApplied: en,
        activeDiscountInfo: er,
        hasFractionalPremiumWithSub: Q
      })
    })),
    eh = () => {
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
            loading: k,
            text: j.intl.string(j.t.obRG6Y).toLocaleUpperCase()
          })
        })
      }

      function t() {
        let e = O.Ay.isSwitchingPlansDisabled(i),
          t = O.Ay.getSwitchingPlansDisabledMessage(i);
        return (0, r.jsxs)("div", {
          className: M.Lv,
          children: [$ ? (0, r.jsx)("div", {
            className: M.xP,
            children: (0, r.jsx)(c.QWc, {
              variant: "always-white",
              disabled: k,
              onClick: ea,
              size: "sm",
              text: j.intl.string(j.t.eFlYVA)
            })
          }) : (0, r.jsx)("div", {
            className: M.Nn,
            children: (0, r.jsx)(c.QWc, {
              variant: "always-white",
              onClick: es,
              disabled: k,
              size: "sm",
              text: j.intl.string(j.t["ETE/oC"])
            })
          }), (0, r.jsx)(l.m_, {
            text: t,
            asContainer: true,
            children: (0, r.jsx)(w.A, {
              className: a()(M.au, M.lB),
              disabled: e,
              onClick: () => {
                (0, h.A)({
                  analyticsLocations: q,
                  analyticsLocation: G,
                  analyticsObject: B,
                  subscription: i
                })
              },
              text: j.intl.string(j.t["dylp/7"])
            })
          })]
        })
      }
      if (O.Ay.isBaseSubscriptionCanceled(i)) return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: M.au,
        children: (0, r.jsx)(c.Button, {
          variant: "overlay-primary",
          size: "sm",
          text: j.intl.string(j.t.iIvF2z),
          loading: k,
          onClick: eu
        })
      });
      switch (e) {
        case x.Dmq.BILLING_RETRY:
          return (0, r.jsx)(c.Button, {
            variant: "overlay-primary",
            size: "sm",
            onClick: eo,
            loading: k,
            text: j.intl.string(j.t["ETE/oC"])
          });
        case x.Dmq.PAUSE_PENDING:
          return (0, r.jsxs)("div", {
            className: M.Lv,
            children: [(0, r.jsx)("div", {
              className: M.Nn,
              children: (0, r.jsx)(c.QWc, {
                variant: "always-white",
                disabled: k,
                onClick: es,
                size: "sm",
                text: j.intl.string(j.t.cM1H0K)
              })
            }), (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: M.au,
              children: (0, r.jsx)(c.Button, {
                variant: "overlay-primary",
                size: "sm",
                text: j.intl.string(j.t.TgV5Qf),
                loading: k,
                onClick: ed
              })
            })]
          });
        case x.Dmq.PAUSED:
          if (Q) return t();
          let {
            durations: n
          } = (0, A.Vy)(i);
          return (0, r.jsxs)("div", {
            className: M.Lv,
            children: [(0, r.jsx)("div", {
              className: M.Nn,
              children: n.length > 0 ? (0, r.jsx)(c.QWc, {
                variant: "always-white",
                onClick: ef,
                disabled: k,
                size: "sm",
                text: j.intl.string(j.t.jNHWt6)
              }) : (0, r.jsx)(c.QWc, {
                variant: "always-white",
                onClick: ep,
                disabled: k,
                size: "sm",
                text: j.intl.string(j.t.cM1H0K)
              })
            }), (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: M.au,
              children: (0, r.jsx)(c.Button, {
                variant: "overlay-primary",
                size: "sm",
                text: j.intl.string(j.t.zpi5pg),
                loading: k,
                onClick: ed
              })
            })]
          });
        case x.Dmq.ACTIVE:
        case x.Dmq.PAST_DUE:
          return t()
      }
    },
    em = O.Ay.getPlanIdFromInvoice(i, s);
  if ((0, m.m1)(em)) return null;
  let eg = O.Ay.getStatusFromInvoice(i, s),
    eE = O.Ay.getPremiumType(em),
    ey = {
      [M.Vd]: eE === D.PremiumTypes.TIER_0,
      [M.aS]: eE === D.PremiumTypes.TIER_1,
      [M.hA]: eE === D.PremiumTypes.TIER_2,
      [M.aD]: eg === x.Dmq.CANCELED,
      [M.WY]: eg === x.Dmq.PAUSE_PENDING,
      [M.Ft]: eg === x.Dmq.PAUSED && !Q,
      [M.GD]: (0, O.PK)(eg)
    },
    eb = null;
  switch (eE) {
    case D.PremiumTypes.TIER_0:
      eb = (0, r.jsxs)("div", {
        className: M.Up,
        children: [(0, r.jsx)(y.A, {
          className: M.sq,
          "aria-label": j.intl.string(j.t["t9uG/o"])
        }), (0, r.jsx)("div", {
          className: M.sT
        })]
      });
      break;
    case D.PremiumTypes.TIER_1:
      eb = (0, r.jsx)(K, {});
      break;
    case D.PremiumTypes.TIER_2:
      eb = (0, r.jsx)(E.A, {
        className: M.V6,
        "aria-label": j.intl.string(j.t.lpNrPu)
      })
  }
  let eO = H.includes(i.status) && !Q ? W : Y;
  return (0, r.jsx)(eO, {
    wordMark: eb,
    subscriptionInfo: e_(em),
    buttons: eh(),
    statusClasses: ey,
    shouldUseDiscountMarketing: en,
    discountAmount: et
  })
}
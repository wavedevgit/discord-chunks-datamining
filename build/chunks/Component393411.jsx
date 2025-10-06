/** Chunk was on web.js **/
/** chunk id: 393411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => H,
  Z: () => Y
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk366939 = require("./366939.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk710845 = require("./710845.js"),
  Chunk963249 = require("./963249.jsx"),
  Chunk301766 = require("./301766.js"),
  Chunk509545 = require("./509545.js"),
  Chunk931331 = require("./931331.jsx"),
  Chunk754347 = require("./754347.jsx"),
  Chunk122289 = require("./122289.js"),
  Chunk74538 = require("./74538.js"),
  Chunk212895 = require("./212895.js"),
  Chunk296848 = require("./296848.js"),
  Chunk140465 = require("./140465.js"),
  Chunk695349 = require("./695349.js"),
  Chunk879463 = require("./879463.js"),
  Chunk104494 = require("./104494.js"),
  Chunk382791 = require("./382791.jsx"),
  Chunk987997 = require("./987997.jsx"),
  Chunk45474 = require("./45474.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk587277 = require("./587277.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let U = new Chunk710845.Z("SubscriptionHeader.tsx"),
  G = {
    page: Chunk981631.ZY5.USER_SETTINGS,
    section: Chunk981631.jXE.SETTINGS_PREMIUM,
    object: Chunk981631.qAy.CARD
  },
  B = [Chunk981631.O0b.PAUSED, Chunk981631.O0b.PAUSE_PENDING, Chunk981631.O0b.BILLING_RETRY];

function Z(e) {
  let {
    wordMark: t,
    subscriptionInfo: n,
    buttons: i,
    statusClasses: o,
    shouldUseDiscountMarketing: s,
    discountAmount: l
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(L.banner, o),
    children: [(0, r.jsx)("div", {
      className: L.bannerBackgroundImage
    }), (0, r.jsxs)("div", {
      className: L.detailsContainer,
      children: [(0, r.jsx)("div", {
        className: L.image
      }), (0, r.jsxs)("div", {
        className: L.details,
        children: [(0, r.jsxs)("div", {
          className: L.headerLabel,
          children: [t, s && null != l && (0, r.jsx)(C.Cy, {
            text: D.intl.formatToPlainString(D.t.iiLbvr, {
              percent: l
            }),
            className: L.discountPill,
            colorOptions: C.VE.PREMIUM_TIER_2_WHITE_FILL,
            isPillOnBorder: false
          })]
        }), n]
      })]
    }), (0, r.jsx)("div", {
      className: L.buttons,
      children: i
    })]
  })
}

function F(e) {
  let {
    wordMark: t,
    subscriptionInfo: n,
    buttons: i,
    statusClasses: o,
    shouldUseDiscountMarketing: s,
    discountAmount: l
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(L.banner, o, L.repositioned),
    children: [(0, r.jsx)("div", {
      className: L.bannerBackgroundImage
    }), (0, r.jsx)("div", {
      className: L.detailsContainer,
      children: (0, r.jsx)("div", {
        className: L.details,
        children: (0, r.jsxs)("div", {
          className: L.headerLabel,
          children: [(0, r.jsx)("div", {
            className: L.image
          }), (0, r.jsxs)("div", {
            className: L.headerColumnB,
            children: [t, s && null != l && (0, r.jsx)(C.Cy, {
              text: D.intl.formatToPlainString(D.t.iiLbvr, {
                percent: l
              }),
              className: L.discountPill,
              colorOptions: C.VE.PREMIUM_TIER_2_WHITE_FILL,
              isPillOnBorder: false
            }), n]
          })]
        })
      })
    }), (0, r.jsx)("div", {
      className: L.buttons,
      children: i
    })]
  })
}

function V() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk587277.wordMark,
    children: [(0, Chunk951288.jsx)(Chunk754347.Z, {
      className: Chunk587277.discordWordmark,
      "aria-label": Chunk388032.intl.string(Chunk388032.t["FSOz7+"])
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk587277.classicWordmark
    })]
  })
}

function H() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.ACCOUNT_CREDIT_BANNER);
  return (0, Chunk951288.jsx)(Z, {
    wordMark: (0, Chunk951288.jsx)(V, {}),
    subscriptionInfo: (0, Chunk951288.jsx)("div", {
      className: Chunk587277.planInfo,
      children: Chunk388032.intl.string(Chunk388032.t.R0GJLy)
    }),
    buttons: (0, Chunk951288.jsx)(Chunk987997.Z, {
      className: Chunk587277.toolsButton,
      onClick: () => (0, Chunk963249.Z)({
        subscriptionTier: Chunk474936.Si.TIER_1,
        analyticsLocations: module,
        analyticsObject: G
      }),
      text: Chunk388032.intl.string(Chunk388032.t["/ygMUV"])
    }),
    statusClasses: {
      [Chunk587277.tier1]: true
    }
  })
}
let Y = function(e) {
  var t;
  let {
    subscription: i,
    renewalInvoicePreview: o,
    paymentSource: _,
    busy: C,
    analyticsLocation: x
  } = e, j = "subscription_header", {
    analyticsLocations: H
  } = (0, d.ZP)(u.Z.SUBSCRIPTION_HEADER), {
    fractionalState: Y
  } = (0, f.Z)({
    forceFetch: false
  }), W = Y === P.a$.FP_SUB_PAUSED, {
    enabled: K
  } = (0, S.ZP)({
    location: j
  });
  P.pj.has(i.planId) && w.JwP.ALL_PAUSEABLE.has(i.status) && !W || (K = false);
  let z = (0, A.Ng)(),
    q = null == z || null == (t = z.discount) ? true : t.amount,
    X = (0, I.t7)(),
    Q = (0, I.lr)(),
    J = (0, T.W)(),
    $ = () => {
      (i.status === w.O0b.ACTIVE || i.status === w.O0b.PAST_DUE || i.status === w.O0b.PAUSED) && en(R.R.PAUSE_SELECT)
    },
    ee = () => {
      (i.status === w.O0b.ACTIVE || i.status === w.O0b.PAST_DUE || i.status === w.O0b.PAUSE_PENDING || W) && en()
    },
    et = () => {
      i.status === w.O0b.BILLING_RETRY && en(R.R.CONFIRM)
    },
    en = e => {
      (0, l.ZDy)(async () => {
        let {
          PremiumBrandRefreshSubscriptionCancellationModal: t
        } = await Promise.all([n.e("17938"), n.e("69432"), n.e("26526"), n.e("60088")]).then(n.bind(n, 48813));
        return n => (0, r.jsx)(t, k(M({}, n), {
          premiumSubscription: i,
          analyticsLocation: x,
          analyticsLocations: H,
          initialStep: e
        }))
      })
    },
    er = () => {
      if (null != i && null != i.premiumPlanIdFromItems) {
        let e = m.Z.get(i.premiumPlanIdFromItems);
        if (null == e) return void U.info("Plan not fetched for plan id: ".concat(i.premiumPlanIdFromItems));
        let t = (0, O.DE)(e, null == _ ? true : _.id, false),
          n = t.length > 0 ? t[0] : i.currency,
          r = false;
        1 === t.length && (null == _ ? true : _.id) === i.paymentSourceId && (0, O.tD)(e.id, n, null == _ ? true : _.id) && (r = true), r ? c.O5(i, H) : (0, p.Z)({
          initialPlanId: i.premiumPlanIdFromItems,
          analyticsLocations: H,
          analyticsLocation: x,
          analyticsObject: G,
          subscription: i
        })
      }
    },
    ei = () => {
      if (!B.includes(i.status) || null == i.pauseEndsAt) return void(0, b.q2)(Error("Invalid subscription to resume"), {
        extra: {
          subscriptionId: i.id,
          status: i.status,
          pauseEndsAt: i.pauseEndsAt
        }
      });
      i.status === w.O0b.PAUSED ? (0, p.Z)({
        initialPlanId: i.premiumPlanIdFromItems,
        analyticsLocations: H,
        analyticsLocation: x,
        analyticsObject: G,
        subscription: i,
        skipConfirm: true
      }) : c.v4(i, H)
    },
    ea = () => {
      i.status === w.O0b.PAUSED && en(R.R.PAUSE_SELECT)
    },
    eo = () => {
      en(R.R.WHAT_YOU_LOSE)
    },
    es = e => (s()(null != o, "Expected renewalInvoicePreview"), (0, r.jsx)("div", {
      className: L.planInfo,
      children: J ? D.intl.format(D.t["/SfHws"], {
        weeks: 1
      }) : (0, y.qV)({
        planId: e,
        subscription: i,
        renewalInvoicePreview: o,
        hasDiscountApplied: X,
        activeDiscountInfo: Q,
        hasFractionalPremiumWithSub: W
      })
    })),
    el = () => {
      let {
        status: e
      } = i;
      if (i.isPurchasedExternally) {
        let e = (0, y.JE)(i.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
        return (0, r.jsx)(l.eee, {
          href: e,
          useDefaultUnderlineStyles: false,
          children: (0, r.jsx)(l.zxk, {
            variant: "overlay-primary",
            size: "sm",
            loading: C,
            text: D.intl.string(D.t.obRG6e).toLocaleUpperCase()
          })
        })
      }

      function t() {
        let e = y.ZP.isSwitchingPlansDisabled(i),
          t = y.ZP.getSwitchingPlansDisabledMessage(i);
        return (0, r.jsxs)("div", {
          className: L.toolsButtons,
          children: [K ? (0, r.jsx)("div", {
            className: L.secondaryBannerTextButtonContainerWithPause,
            children: (0, r.jsx)(l.Avr, {
              variant: "always-white",
              disabled: C,
              onClick: $,
              size: "sm",
              text: D.intl.string(D.t.eFlYVF)
            })
          }) : (0, r.jsx)("div", {
            className: L.secondaryBannerTextButtonContainer,
            children: (0, r.jsx)(l.Avr, {
              variant: "always-white",
              onClick: ee,
              disabled: C,
              size: "sm",
              text: D.intl.string(D.t["ETE/oK"])
            })
          }), (0, r.jsx)(l.ua7, {
            text: t,
            children: t => (0, r.jsx)(N.Z, k(M({}, t), {
              className: a()(L.toolsButton, L.premiumSettingsPushButton),
              disabled: e,
              onClick: () => {
                (0, p.Z)({
                  analyticsLocations: H,
                  analyticsLocation: x,
                  analyticsObject: G,
                  subscription: i
                })
              },
              text: D.intl.string(D.t["dylp//"])
            }))
          })]
        })
      }
      if (y.ZP.isBaseSubscriptionCanceled(i)) return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: L.toolsButton,
        children: (0, r.jsx)(l.zxk, {
          variant: "overlay-primary",
          size: "sm",
          text: D.intl.string(D.t.iIvF29),
          loading: C,
          onClick: er
        })
      });
      switch (e) {
        case w.O0b.BILLING_RETRY:
          return (0, r.jsx)(l.zxk, {
            variant: "overlay-primary",
            size: "sm",
            onClick: et,
            loading: C,
            text: D.intl.string(D.t["ETE/oK"])
          });
        case w.O0b.PAUSE_PENDING:
          return (0, r.jsxs)("div", {
            className: L.toolsButtons,
            children: [(0, r.jsx)("div", {
              className: L.secondaryBannerTextButtonContainer,
              children: (0, r.jsx)(l.Avr, {
                variant: "always-white",
                disabled: C,
                onClick: ee,
                size: "sm",
                text: D.intl.string(D.t.cM1H0N)
              })
            }), (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: L.toolsButton,
              children: (0, r.jsx)(l.zxk, {
                variant: "overlay-primary",
                size: "sm",
                text: D.intl.string(D.t.TgV5QU),
                loading: C,
                onClick: ei
              })
            })]
          });
        case w.O0b.PAUSED:
          if (W) return t();
          let {
            durations: n
          } = (0, v.AT)(i);
          return (0, r.jsxs)("div", {
            className: L.toolsButtons,
            children: [(0, r.jsx)("div", {
              className: L.secondaryBannerTextButtonContainer,
              children: n.length > 0 ? (0, r.jsx)(l.Avr, {
                variant: "always-white",
                onClick: ea,
                disabled: C,
                size: "sm",
                text: D.intl.string(D.t.jNHWt7)
              }) : (0, r.jsx)(l.Avr, {
                variant: "always-white",
                onClick: eo,
                disabled: C,
                size: "sm",
                text: D.intl.string(D.t.cM1H0N)
              })
            }), (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: L.toolsButton,
              children: (0, r.jsx)(l.zxk, {
                variant: "overlay-primary",
                size: "sm",
                text: D.intl.string(D.t.zpi5pq),
                loading: C,
                onClick: ei
              })
            })]
          });
        case w.O0b.ACTIVE:
        case w.O0b.PAST_DUE:
          return t()
      }
    },
    ec = y.ZP.getPlanIdFromInvoice(i, o);
  if ((0, h.Q0)(ec)) return null;
  let eu = y.ZP.getStatusFromInvoice(i, o),
    ed = y.ZP.getPremiumType(ec),
    ef = {
      [L.tier0]: ed === P.p9.TIER_0,
      [L.tier1]: ed === P.p9.TIER_1,
      [L.tier2]: ed === P.p9.TIER_2,
      [L.canceled]: eu === w.O0b.CANCELED,
      [L.pausePending]: eu === w.O0b.PAUSE_PENDING,
      [L.paused]: eu === w.O0b.PAUSED && !W,
      [L.failedPayment]: (0, y.zV)(eu)
    },
    e_ = null;
  switch (ed) {
    case P.p9.TIER_0:
      e_ = (0, r.jsxs)("div", {
        className: L.wordMark,
        children: [(0, r.jsx)(E.Z, {
          className: L.discordWordmark,
          "aria-label": D.intl.string(D.t["t9uG/v"])
        }), (0, r.jsx)("div", {
          className: L.basicWordmark
        })]
      });
      break;
    case P.p9.TIER_1:
      e_ = (0, r.jsx)(V, {});
      break;
    case P.p9.TIER_2:
      e_ = (0, r.jsx)(g.Z, {
        className: L.planName,
        "aria-label": D.intl.string(D.t.lpNrPj)
      })
  }
  let ep = B.includes(i.status) && !W ? F : Z;
  return (0, r.jsx)(ep, {
    wordMark: e_,
    subscriptionInfo: es(ec),
    buttons: el(),
    statusClasses: ef,
    shouldUseDiscountMarketing: X,
    discountAmount: q
  })
}
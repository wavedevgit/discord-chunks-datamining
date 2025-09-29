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

function j(e) {
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

function M(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
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
      children: Chunk388032.intl.string(Chunk388032.t["/ygMUV"])
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
    renewalInvoicePreview: a,
    paymentSource: o,
    busy: _,
    analyticsLocation: C
  } = e, x = "subscription_header", {
    analyticsLocations: M
  } = (0, d.ZP)(u.Z.SUBSCRIPTION_HEADER), {
    fractionalState: H
  } = (0, f.Z)({
    forceFetch: false
  }), Y = H === P.a$.FP_SUB_PAUSED, {
    enabled: W
  } = (0, S.ZP)({
    location: x
  });
  P.pj.has(i.planId) && w.JwP.ALL_PAUSEABLE.has(i.status) && !Y || (W = false);
  let K = (0, A.Ng)(),
    z = null == K || null == (t = K.discount) ? true : t.amount,
    q = (0, I.t7)(),
    X = (0, I.lr)(),
    Q = (0, T.W)(),
    J = () => {
      (i.status === w.O0b.ACTIVE || i.status === w.O0b.PAST_DUE || i.status === w.O0b.PAUSED) && et(R.R.PAUSE_SELECT)
    },
    $ = () => {
      (i.status === w.O0b.ACTIVE || i.status === w.O0b.PAST_DUE || i.status === w.O0b.PAUSE_PENDING || Y) && et()
    },
    ee = () => {
      i.status === w.O0b.BILLING_RETRY && et(R.R.CONFIRM)
    },
    et = e => {
      (0, l.ZDy)(async () => {
        let {
          PremiumBrandRefreshSubscriptionCancellationModal: t
        } = await Promise.all([n.e("17938"), n.e("69432"), n.e("26526"), n.e("60088")]).then(n.bind(n, 48813));
        return n => (0, r.jsx)(t, k(j({}, n), {
          premiumSubscription: i,
          analyticsLocation: C,
          analyticsLocations: M,
          initialStep: e
        }))
      })
    },
    en = () => {
      if (null != i && null != i.premiumPlanIdFromItems) {
        let e = m.Z.get(i.premiumPlanIdFromItems);
        if (null == e) return void U.info("Plan not fetched for plan id: ".concat(i.premiumPlanIdFromItems));
        let t = (0, O.DE)(e, null == o ? true : o.id, false),
          n = t.length > 0 ? t[0] : i.currency,
          r = false;
        1 === t.length && (null == o ? true : o.id) === i.paymentSourceId && (0, O.tD)(e.id, n, null == o ? true : o.id) && (r = true), r ? c.O5(i, M) : (0, p.Z)({
          initialPlanId: i.premiumPlanIdFromItems,
          analyticsLocations: M,
          analyticsLocation: C,
          analyticsObject: G,
          subscription: i
        })
      }
    },
    er = () => {
      if (!B.includes(i.status) || null == i.pauseEndsAt) return void(0, b.q2)(Error("Invalid subscription to resume"), {
        extra: {
          subscriptionId: i.id,
          status: i.status,
          pauseEndsAt: i.pauseEndsAt
        }
      });
      i.status === w.O0b.PAUSED ? (0, p.Z)({
        initialPlanId: i.premiumPlanIdFromItems,
        analyticsLocations: M,
        analyticsLocation: C,
        analyticsObject: G,
        subscription: i,
        skipConfirm: true
      }) : c.v4(i, M)
    },
    ei = () => {
      i.status === w.O0b.PAUSED && et(R.R.PAUSE_SELECT)
    },
    ea = () => {
      et(R.R.WHAT_YOU_LOSE)
    },
    eo = e => (s()(null != a, "Expected renewalInvoicePreview"), (0, r.jsx)("div", {
      className: L.planInfo,
      children: Q ? D.intl.format(D.t["/SfHws"], {
        weeks: 1
      }) : (0, y.qV)({
        planId: e,
        subscription: i,
        renewalInvoicePreview: a,
        hasDiscountApplied: q,
        activeDiscountInfo: X,
        hasFractionalPremiumWithSub: Y
      })
    })),
    es = () => {
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
            loading: _,
            text: D.intl.string(D.t.obRG6e).toLocaleUpperCase()
          })
        })
      }

      function t() {
        let e = y.ZP.isSwitchingPlansDisabled(i),
          t = y.ZP.getSwitchingPlansDisabledMessage(i);
        return (0, r.jsxs)("div", {
          className: L.toolsButtons,
          children: [W ? (0, r.jsx)("div", {
            className: L.secondaryBannerTextButtonContainerWithPause,
            children: (0, r.jsx)(l.Avr, {
              variant: "always-white",
              disabled: _,
              onClick: J,
              size: "sm",
              text: D.intl.string(D.t.eFlYVF)
            })
          }) : (0, r.jsx)("div", {
            className: L.secondaryBannerTextButtonContainer,
            children: (0, r.jsx)(l.Avr, {
              variant: "always-white",
              onClick: $,
              disabled: _,
              size: "sm",
              text: D.intl.string(D.t["ETE/oK"])
            })
          }), (0, r.jsx)(l.ua7, {
            text: t,
            children: t => (0, r.jsx)(N.Z, k(j({}, t), {
              disabled: e,
              className: L.toolsButton,
              onClick: () => {
                (0, p.Z)({
                  analyticsLocations: M,
                  analyticsLocation: C,
                  analyticsObject: G,
                  subscription: i
                })
              },
              children: D.intl.string(D.t["dylp//"])
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
          loading: _,
          onClick: en
        })
      });
      switch (e) {
        case w.O0b.BILLING_RETRY:
          return (0, r.jsx)(l.zxk, {
            variant: "overlay-primary",
            size: "sm",
            onClick: ee,
            loading: _,
            text: D.intl.string(D.t["ETE/oK"])
          });
        case w.O0b.PAUSE_PENDING:
          return (0, r.jsxs)("div", {
            className: L.toolsButtons,
            children: [(0, r.jsx)("div", {
              className: L.secondaryBannerTextButtonContainer,
              children: (0, r.jsx)(l.Avr, {
                variant: "always-white",
                disabled: _,
                onClick: $,
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
                loading: _,
                onClick: er
              })
            })]
          });
        case w.O0b.PAUSED:
          if (Y) return t();
          let {
            durations: n
          } = (0, v.AT)(i);
          return (0, r.jsxs)("div", {
            className: L.toolsButtons,
            children: [(0, r.jsx)("div", {
              className: L.secondaryBannerTextButtonContainer,
              children: n.length > 0 ? (0, r.jsx)(l.Avr, {
                variant: "always-white",
                onClick: ei,
                disabled: _,
                size: "sm",
                text: D.intl.string(D.t.jNHWt7)
              }) : (0, r.jsx)(l.Avr, {
                variant: "always-white",
                onClick: ea,
                disabled: _,
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
                loading: _,
                onClick: er
              })
            })]
          });
        case w.O0b.ACTIVE:
        case w.O0b.PAST_DUE:
          return t()
      }
    },
    el = y.ZP.getPlanIdFromInvoice(i, a);
  if ((0, h.Q0)(el)) return null;
  let ec = y.ZP.getStatusFromInvoice(i, a),
    eu = y.ZP.getPremiumType(el),
    ed = {
      [L.tier0]: eu === P.p9.TIER_0,
      [L.tier1]: eu === P.p9.TIER_1,
      [L.tier2]: eu === P.p9.TIER_2,
      [L.canceled]: ec === w.O0b.CANCELED,
      [L.pausePending]: ec === w.O0b.PAUSE_PENDING,
      [L.paused]: ec === w.O0b.PAUSED && !Y,
      [L.failedPayment]: (0, y.zV)(ec)
    },
    ef = null;
  switch (eu) {
    case P.p9.TIER_0:
      ef = (0, r.jsxs)("div", {
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
      ef = (0, r.jsx)(V, {});
      break;
    case P.p9.TIER_2:
      ef = (0, r.jsx)(g.Z, {
        className: L.planName,
        "aria-label": D.intl.string(D.t.lpNrPj)
      })
  }
  let e_ = B.includes(i.status) && !Y ? F : Z;
  return (0, r.jsx)(e_, {
    wordMark: ef,
    subscriptionInfo: eo(el),
    buttons: es(),
    statusClasses: ed,
    shouldUseDiscountMarketing: q,
    discountAmount: z
  })
}
/** Chunk was on web.js **/
/** chunk id: 393411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => Y,
  Z: () => W
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk681715 = require("./681715.js"),
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

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
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

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let G = new Chunk710845.Z("SubscriptionHeader.tsx"),
  B = {
    page: Chunk981631.ZY5.USER_SETTINGS,
    section: Chunk981631.jXE.SETTINGS_PREMIUM,
    object: Chunk981631.qAy.CARD
  },
  Z = [Chunk981631.O0b.PAUSED, Chunk981631.O0b.PAUSE_PENDING, Chunk981631.O0b.BILLING_RETRY];

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
          children: [t, s && null != l && (0, r.jsx)(N.Cy, {
            text: x.intl.formatToPlainString(x.t.iiLbvu, {
              percent: l
            }),
            className: L.discountPill,
            colorOptions: N.VE.PREMIUM_TIER_2_WHITE_FILL,
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

function V(e) {
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
            children: [t, s && null != l && (0, r.jsx)(N.Cy, {
              text: x.intl.formatToPlainString(x.t.iiLbvu, {
                percent: l
              }),
              className: L.discountPill,
              colorOptions: N.VE.PREMIUM_TIER_2_WHITE_FILL,
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

function H() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk587277.wordMark,
    children: [(0, Chunk951288.jsx)(Chunk754347.Z, {
      className: Chunk587277.discordWordmark,
      "aria-label": Chunk388032.intl.string(Chunk388032.t.FSOz78)
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk587277.classicWordmark
    })]
  })
}

function Y() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.ACCOUNT_CREDIT_BANNER);
  return (0, Chunk951288.jsx)(F, {
    wordMark: (0, Chunk951288.jsx)(H, {}),
    subscriptionInfo: (0, Chunk951288.jsx)("div", {
      className: Chunk587277.planInfo,
      children: Chunk388032.intl.string(Chunk388032.t.R0GJL2)
    }),
    buttons: (0, Chunk951288.jsx)(Chunk987997.Z, {
      className: Chunk587277.toolsButton,
      onClick: () => (0, Chunk963249.Z)({
        subscriptionTier: Chunk474936.Si.TIER_1,
        analyticsLocations: module,
        analyticsObject: B
      }),
      text: Chunk388032.intl.string(Chunk388032.t["/ygMUY"])
    }),
    statusClasses: {
      [Chunk587277.tier1]: true
    }
  })
}
let W = function(e) {
  var t;
  let {
    subscription: i,
    renewalInvoicePreview: o,
    paymentSource: p,
    busy: N,
    analyticsLocation: M
  } = e, j = "subscription_header", {
    analyticsLocations: Y
  } = (0, f.ZP)(d.Z.SUBSCRIPTION_HEADER), {
    fractionalState: W
  } = (0, _.Z)({
    forceFetch: false
  }), K = W === w.a$.FP_SUB_PAUSED, {
    enabled: z
  } = (0, A.ZP)({
    location: j
  });
  w.pj.has(i.planId) && D.JwP.ALL_PAUSEABLE.has(i.status) && !K || (z = false);
  let q = (0, C.Ng)(),
    X = null == q || null == (t = q.discount) ? true : t.amount,
    Q = (0, T.t7)(),
    J = (0, T.lr)(),
    $ = (0, S.W)(),
    ee = () => {
      (i.status === D.O0b.ACTIVE || i.status === D.O0b.PAST_DUE || i.status === D.O0b.PAUSED) && er(P.R.PAUSE_SELECT)
    },
    et = () => {
      (i.status === D.O0b.ACTIVE || i.status === D.O0b.PAST_DUE || i.status === D.O0b.PAUSE_PENDING || K) && er()
    },
    en = () => {
      i.status === D.O0b.BILLING_RETRY && er(P.R.CONFIRM)
    },
    er = e => {
      (0, c.ZDy)(async () => {
        let {
          PremiumBrandRefreshSubscriptionCancellationModal: t
        } = await Promise.all([n.e("17938"), n.e("69432"), n.e("26526"), n.e("60088")]).then(n.bind(n, 48813));
        return n => (0, r.jsx)(t, U(k({}, n), {
          premiumSubscription: i,
          analyticsLocation: M,
          analyticsLocations: Y,
          initialStep: e
        }))
      })
    },
    ei = () => {
      if (null != i && null != i.premiumPlanIdFromItems) {
        let e = g.Z.get(i.premiumPlanIdFromItems);
        if (null == e) return void G.info("Plan not fetched for plan id: ".concat(i.premiumPlanIdFromItems));
        let t = (0, v.DE)(e, null == p ? true : p.id, false),
          n = t.length > 0 ? t[0] : i.currency,
          r = false;
        1 === t.length && (null == p ? true : p.id) === i.paymentSourceId && (0, v.tD)(e.id, n, null == p ? true : p.id) && (r = true), r ? u.O5(i, Y) : (0, h.Z)({
          initialPlanId: i.premiumPlanIdFromItems,
          analyticsLocations: Y,
          analyticsLocation: M,
          analyticsObject: B,
          subscription: i
        })
      }
    },
    ea = () => {
      if (!Z.includes(i.status) || null == i.pauseEndsAt) return void(0, y.q2)(Error("Invalid subscription to resume"), {
        extra: {
          subscriptionId: i.id,
          status: i.status,
          pauseEndsAt: i.pauseEndsAt
        }
      });
      i.status === D.O0b.PAUSED ? (0, h.Z)({
        initialPlanId: i.premiumPlanIdFromItems,
        analyticsLocations: Y,
        analyticsLocation: M,
        analyticsObject: B,
        subscription: i,
        skipConfirm: true
      }) : u.v4(i, Y)
    },
    eo = () => {
      i.status === D.O0b.PAUSED && er(P.R.PAUSE_SELECT)
    },
    es = () => {
      er(P.R.WHAT_YOU_LOSE)
    },
    el = e => (s()(null != o, "Expected renewalInvoicePreview"), (0, r.jsx)("div", {
      className: L.planInfo,
      children: $ ? x.intl.format(x.t["/SfHwl"], {
        weeks: 1
      }) : (0, O.qV)({
        planId: e,
        subscription: i,
        renewalInvoicePreview: o,
        hasDiscountApplied: Q,
        activeDiscountInfo: J,
        hasFractionalPremiumWithSub: K
      })
    })),
    ec = () => {
      let {
        status: e
      } = i;
      if (i.isPurchasedExternally) {
        let e = (0, O.JE)(i.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
        return (0, r.jsx)(c.Anchor, {
          href: e,
          useDefaultUnderlineStyles: false,
          children: (0, r.jsx)(c.Button, {
            variant: "overlay-primary",
            size: "sm",
            loading: N,
            text: x.intl.string(x.t.obRG6Y).toLocaleUpperCase()
          })
        })
      }

      function t() {
        let e = O.ZP.isSwitchingPlansDisabled(i),
          t = O.ZP.getSwitchingPlansDisabledMessage(i);
        return (0, r.jsxs)("div", {
          className: L.toolsButtons,
          children: [z ? (0, r.jsx)("div", {
            className: L.secondaryBannerTextButtonContainerWithPause,
            children: (0, r.jsx)(c.Avr, {
              variant: "always-white",
              disabled: N,
              onClick: ee,
              size: "sm",
              text: x.intl.string(x.t.eFlYVA)
            })
          }) : (0, r.jsx)("div", {
            className: L.secondaryBannerTextButtonContainer,
            children: (0, r.jsx)(c.Avr, {
              variant: "always-white",
              onClick: et,
              disabled: N,
              size: "sm",
              text: x.intl.string(x.t["ETE/oC"])
            })
          }), (0, r.jsx)(l.u, {
            text: t,
            asContainer: true,
            children: (0, r.jsx)(R.Z, {
              className: a()(L.toolsButton, L.premiumSettingsPushButton),
              disabled: e,
              onClick: () => {
                (0, h.Z)({
                  analyticsLocations: Y,
                  analyticsLocation: M,
                  analyticsObject: B,
                  subscription: i
                })
              },
              text: x.intl.string(x.t["dylp/7"])
            })
          })]
        })
      }
      if (O.ZP.isBaseSubscriptionCanceled(i)) return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: L.toolsButton,
        children: (0, r.jsx)(c.Button, {
          variant: "overlay-primary",
          size: "sm",
          text: x.intl.string(x.t.iIvF2z),
          loading: N,
          onClick: ei
        })
      });
      switch (e) {
        case D.O0b.BILLING_RETRY:
          return (0, r.jsx)(c.Button, {
            variant: "overlay-primary",
            size: "sm",
            onClick: en,
            loading: N,
            text: x.intl.string(x.t["ETE/oC"])
          });
        case D.O0b.PAUSE_PENDING:
          return (0, r.jsxs)("div", {
            className: L.toolsButtons,
            children: [(0, r.jsx)("div", {
              className: L.secondaryBannerTextButtonContainer,
              children: (0, r.jsx)(c.Avr, {
                variant: "always-white",
                disabled: N,
                onClick: et,
                size: "sm",
                text: x.intl.string(x.t.cM1H0K)
              })
            }), (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: L.toolsButton,
              children: (0, r.jsx)(c.Button, {
                variant: "overlay-primary",
                size: "sm",
                text: x.intl.string(x.t.TgV5Qf),
                loading: N,
                onClick: ea
              })
            })]
          });
        case D.O0b.PAUSED:
          if (K) return t();
          let {
            durations: n
          } = (0, I.AT)(i);
          return (0, r.jsxs)("div", {
            className: L.toolsButtons,
            children: [(0, r.jsx)("div", {
              className: L.secondaryBannerTextButtonContainer,
              children: n.length > 0 ? (0, r.jsx)(c.Avr, {
                variant: "always-white",
                onClick: eo,
                disabled: N,
                size: "sm",
                text: x.intl.string(x.t.jNHWt6)
              }) : (0, r.jsx)(c.Avr, {
                variant: "always-white",
                onClick: es,
                disabled: N,
                size: "sm",
                text: x.intl.string(x.t.cM1H0K)
              })
            }), (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: L.toolsButton,
              children: (0, r.jsx)(c.Button, {
                variant: "overlay-primary",
                size: "sm",
                text: x.intl.string(x.t.zpi5pg),
                loading: N,
                onClick: ea
              })
            })]
          });
        case D.O0b.ACTIVE:
        case D.O0b.PAST_DUE:
          return t()
      }
    },
    eu = O.ZP.getPlanIdFromInvoice(i, o);
  if ((0, m.Q0)(eu)) return null;
  let ed = O.ZP.getStatusFromInvoice(i, o),
    ef = O.ZP.getPremiumType(eu),
    e_ = {
      [L.tier0]: ef === w.PremiumTypes.TIER_0,
      [L.tier1]: ef === w.PremiumTypes.TIER_1,
      [L.tier2]: ef === w.PremiumTypes.TIER_2,
      [L.canceled]: ed === D.O0b.CANCELED,
      [L.pausePending]: ed === D.O0b.PAUSE_PENDING,
      [L.paused]: ed === D.O0b.PAUSED && !K,
      [L.failedPayment]: (0, O.zV)(ed)
    },
    ep = null;
  switch (ef) {
    case w.PremiumTypes.TIER_0:
      ep = (0, r.jsxs)("div", {
        className: L.wordMark,
        children: [(0, r.jsx)(b.Z, {
          className: L.discordWordmark,
          "aria-label": x.intl.string(x.t["t9uG/o"])
        }), (0, r.jsx)("div", {
          className: L.basicWordmark
        })]
      });
      break;
    case w.PremiumTypes.TIER_1:
      ep = (0, r.jsx)(H, {});
      break;
    case w.PremiumTypes.TIER_2:
      ep = (0, r.jsx)(E.Z, {
        className: L.planName,
        "aria-label": x.intl.string(x.t.lpNrPu)
      })
  }
  let eh = Z.includes(i.status) && !K ? V : F;
  return (0, r.jsx)(eh, {
    wordMark: ep,
    subscriptionInfo: el(eu),
    buttons: ec(),
    statusClasses: e_,
    shouldUseDiscountMarketing: Q,
    discountAmount: X
  })
}
/** Chunk was on web.js **/
/** chunk id: 393411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => Y,
  Z: () => K
}), require("./415506.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk622909 = require("./622909.js"),
  Chunk382791 = require("./382791.jsx"),
  Chunk987997 = require("./987997.jsx"),
  Chunk45474 = require("./45474.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk362786 = require("./362786.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk965406 = require("./965406.js");

function k(e, t, n) {
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
      k(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let B = new Chunk710845.Z("SubscriptionHeader.tsx"),
  Z = {
    page: Chunk981631.ZY5.USER_SETTINGS,
    section: Chunk981631.jXE.SETTINGS_PREMIUM,
    object: Chunk981631.qAy.CARD
  },
  F = [Chunk981631.O0b.PAUSED, Chunk981631.O0b.PAUSE_PENDING, Chunk981631.O0b.BILLING_RETRY];

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
    className: a()(M.banner, o),
    children: [(0, r.jsx)("div", {
      className: M.bannerBackgroundImage
    }), (0, r.jsxs)("div", {
      className: M.detailsContainer,
      children: [(0, r.jsx)("div", {
        className: M.image
      }), (0, r.jsxs)("div", {
        className: M.details,
        children: [(0, r.jsxs)("div", {
          className: M.headerLabel,
          children: [t, s && null != l && (0, r.jsx)(N.Cy, {
            text: x.intl.formatToPlainString(x.t.iiLbvu, {
              percent: l
            }),
            className: M.discountPill,
            colorOptions: N.VE.PREMIUM_TIER_2_WHITE_FILL,
            isPillOnBorder: false
          })]
        }), n]
      })]
    }), (0, r.jsx)("div", {
      className: M.buttons,
      children: i
    })]
  })
}

function H(e) {
  let {
    wordMark: t,
    subscriptionInfo: n,
    buttons: i,
    statusClasses: o,
    shouldUseDiscountMarketing: s,
    discountAmount: l
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(M.banner, o, M.repositioned),
    children: [(0, r.jsx)("div", {
      className: M.bannerBackgroundImage
    }), (0, r.jsx)("div", {
      className: M.detailsContainer,
      children: (0, r.jsx)("div", {
        className: M.details,
        children: (0, r.jsxs)("div", {
          className: M.headerLabel,
          children: [(0, r.jsx)("div", {
            className: M.image
          }), (0, r.jsxs)("div", {
            className: M.headerColumnB,
            children: [t, s && null != l && (0, r.jsx)(N.Cy, {
              text: x.intl.formatToPlainString(x.t.iiLbvu, {
                percent: l
              }),
              className: M.discountPill,
              colorOptions: N.VE.PREMIUM_TIER_2_WHITE_FILL,
              isPillOnBorder: false
            }), n]
          })]
        })
      })
    }), (0, r.jsx)("div", {
      className: M.buttons,
      children: i
    })]
  })
}

function W() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk965406.wordMark,
    children: [(0, Chunk54381.jsx)(Chunk754347.Z, {
      className: Chunk965406.discordWordmark,
      "aria-label": Chunk388032.intl.string(Chunk388032.t.FSOz78)
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk965406.classicWordmark
    })]
  })
}

function Y() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.ACCOUNT_CREDIT_BANNER);
  return (0, Chunk54381.jsx)(V, {
    wordMark: (0, Chunk54381.jsx)(W, {}),
    subscriptionInfo: (0, Chunk54381.jsx)("div", {
      className: Chunk965406.planInfo,
      children: Chunk388032.intl.string(Chunk388032.t.R0GJL2)
    }),
    buttons: (0, Chunk54381.jsx)(Chunk987997.Z, {
      className: Chunk965406.toolsButton,
      onClick: () => (0, Chunk963249.Z)({
        subscriptionTier: Chunk474936.Si.TIER_1,
        analyticsLocations: module,
        analyticsObject: Z
      }),
      text: Chunk388032.intl.string(Chunk388032.t["/ygMUY"])
    }),
    statusClasses: {
      [Chunk965406.tier1]: true
    }
  })
}
let K = function(e) {
  var t;
  let {
    subscription: i,
    renewalInvoicePreview: o,
    paymentSource: p,
    busy: N,
    analyticsLocation: k
  } = e, U = "subscription_header", {
    analyticsLocations: Y
  } = (0, f.ZP)(d.Z.SUBSCRIPTION_HEADER), {
    fractionalState: K
  } = (0, _.Z)({
    forceFetch: false
  }), z = K === D.a$.FP_SUB_PAUSED, {
    enabled: q
  } = (0, A.ZP)({
    location: U
  });
  D.pj.has(i.planId) && w.JwP.ALL_PAUSEABLE.has(i.status) && !z || (q = false);
  let X = (0, C.N)(),
    Q = null == X || null == (t = X.discount) ? true : t.amount,
    J = (0, T.t7)(),
    $ = (0, T.lr)(),
    ee = (0, S.W)(),
    et = () => {
      (i.status === w.O0b.ACTIVE || i.status === w.O0b.PAST_DUE || i.status === w.O0b.PAUSED) && ei(P.R.PAUSE_SELECT)
    },
    en = () => {
      (i.status === w.O0b.ACTIVE || i.status === w.O0b.PAST_DUE || i.status === w.O0b.PAUSE_PENDING || z) && ei()
    },
    er = () => {
      i.status === w.O0b.BILLING_RETRY && ei(P.R.CONFIRM)
    },
    ei = e => {
      (0, c.ZDy)(async () => {
        let {
          PremiumBrandRefreshSubscriptionCancellationModal: t
        } = await n.e("26526").then(n.bind(n, 48813));
        return n => (0, r.jsx)(t, G(j({}, n), {
          premiumSubscription: i,
          analyticsLocation: k,
          analyticsLocations: Y,
          initialStep: e
        }))
      })
    },
    ea = () => {
      if (null != i && null != i.premiumPlanIdFromItems) {
        let e = g.Z.get(i.premiumPlanIdFromItems);
        if (null == e) return void B.info("Plan not fetched for plan id: ".concat(i.premiumPlanIdFromItems));
        let t = (0, v.DE)(e, null == p ? true : p.id, false),
          n = t.length > 0 ? t[0] : i.currency,
          r = false;
        1 === t.length && (null == p ? true : p.id) === i.paymentSourceId && (0, v.tD)(e.id, n, null == p ? true : p.id) && (r = true), r ? u.O5(i, Y) : (0, h.Z)({
          initialPlanId: i.premiumPlanIdFromItems,
          analyticsLocations: Y,
          analyticsLocation: k,
          analyticsObject: Z,
          subscription: i
        })
      }
    },
    eo = () => {
      if (!F.includes(i.status) || null == i.pauseEndsAt) return void(0, y.q2)(Error("Invalid subscription to resume"), {
        extra: {
          subscriptionId: i.id,
          status: i.status,
          pauseEndsAt: i.pauseEndsAt
        }
      });
      i.status === w.O0b.PAUSED && i.pauseReason !== L.Id.USER_TEMPORARY_BAN ? (0, h.Z)({
        initialPlanId: i.premiumPlanIdFromItems,
        analyticsLocations: Y,
        analyticsLocation: k,
        analyticsObject: Z,
        subscription: i,
        skipConfirm: true
      }) : u.v4(i, Y)
    },
    es = () => {
      i.status === w.O0b.PAUSED && ei(P.R.PAUSE_SELECT)
    },
    el = () => {
      ei(P.R.WHAT_YOU_LOSE)
    },
    ec = e => (s()(null != o, "Expected renewalInvoicePreview"), (0, r.jsx)("div", {
      className: M.planInfo,
      children: ee ? x.intl.format(x.t["/SfHwl"], {
        weeks: 1
      }) : (0, O.qV)({
        planId: e,
        subscription: i,
        renewalInvoicePreview: o,
        hasDiscountApplied: J,
        activeDiscountInfo: $,
        hasFractionalPremiumWithSub: z
      })
    })),
    eu = () => {
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
          className: M.toolsButtons,
          children: [q ? (0, r.jsx)("div", {
            className: M.secondaryBannerTextButtonContainerWithPause,
            children: (0, r.jsx)(c.Avr, {
              variant: "always-white",
              disabled: N,
              onClick: et,
              size: "sm",
              text: x.intl.string(x.t.eFlYVA)
            })
          }) : (0, r.jsx)("div", {
            className: M.secondaryBannerTextButtonContainer,
            children: (0, r.jsx)(c.Avr, {
              variant: "always-white",
              onClick: en,
              disabled: N,
              size: "sm",
              text: x.intl.string(x.t["ETE/oC"])
            })
          }), (0, r.jsx)(l.u, {
            text: t,
            asContainer: true,
            children: (0, r.jsx)(R.Z, {
              className: a()(M.toolsButton, M.premiumSettingsPushButton),
              disabled: e,
              onClick: () => {
                (0, h.Z)({
                  analyticsLocations: Y,
                  analyticsLocation: k,
                  analyticsObject: Z,
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
        className: M.toolsButton,
        children: (0, r.jsx)(c.Button, {
          variant: "overlay-primary",
          size: "sm",
          text: x.intl.string(x.t.iIvF2z),
          loading: N,
          onClick: ea
        })
      });
      switch (e) {
        case w.O0b.BILLING_RETRY:
          return (0, r.jsx)(c.Button, {
            variant: "overlay-primary",
            size: "sm",
            onClick: er,
            loading: N,
            text: x.intl.string(x.t["ETE/oC"])
          });
        case w.O0b.PAUSE_PENDING:
          return (0, r.jsxs)("div", {
            className: M.toolsButtons,
            children: [(0, r.jsx)("div", {
              className: M.secondaryBannerTextButtonContainer,
              children: (0, r.jsx)(c.Avr, {
                variant: "always-white",
                disabled: N,
                onClick: en,
                size: "sm",
                text: x.intl.string(x.t.cM1H0K)
              })
            }), (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: M.toolsButton,
              children: (0, r.jsx)(c.Button, {
                variant: "overlay-primary",
                size: "sm",
                text: x.intl.string(x.t.TgV5Qf),
                loading: N,
                onClick: eo
              })
            })]
          });
        case w.O0b.PAUSED:
          if (z) return t();
          let {
            durations: n
          } = (0, I.AT)(i);
          return (0, r.jsxs)("div", {
            className: M.toolsButtons,
            children: [(0, r.jsx)("div", {
              className: M.secondaryBannerTextButtonContainer,
              children: n.length > 0 ? (0, r.jsx)(c.Avr, {
                variant: "always-white",
                onClick: es,
                disabled: N,
                size: "sm",
                text: x.intl.string(x.t.jNHWt6)
              }) : (0, r.jsx)(c.Avr, {
                variant: "always-white",
                onClick: el,
                disabled: N,
                size: "sm",
                text: x.intl.string(x.t.cM1H0K)
              })
            }), (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: M.toolsButton,
              children: (0, r.jsx)(c.Button, {
                variant: "overlay-primary",
                size: "sm",
                text: x.intl.string(x.t.zpi5pg),
                loading: N,
                onClick: eo
              })
            })]
          });
        case w.O0b.ACTIVE:
        case w.O0b.PAST_DUE:
          return t()
      }
    },
    ed = O.ZP.getPlanIdFromInvoice(i, o);
  if ((0, m.Q0)(ed)) return null;
  let ef = O.ZP.getStatusFromInvoice(i, o),
    e_ = O.ZP.getPremiumType(ed),
    ep = {
      [M.tier0]: e_ === D.PremiumTypes.TIER_0,
      [M.tier1]: e_ === D.PremiumTypes.TIER_1,
      [M.tier2]: e_ === D.PremiumTypes.TIER_2,
      [M.canceled]: ef === w.O0b.CANCELED,
      [M.pausePending]: ef === w.O0b.PAUSE_PENDING,
      [M.paused]: ef === w.O0b.PAUSED && !z,
      [M.failedPayment]: (0, O.zV)(ef)
    },
    eh = null;
  switch (e_) {
    case D.PremiumTypes.TIER_0:
      eh = (0, r.jsxs)("div", {
        className: M.wordMark,
        children: [(0, r.jsx)(b.Z, {
          className: M.discordWordmark,
          "aria-label": x.intl.string(x.t["t9uG/o"])
        }), (0, r.jsx)("div", {
          className: M.basicWordmark
        })]
      });
      break;
    case D.PremiumTypes.TIER_1:
      eh = (0, r.jsx)(W, {});
      break;
    case D.PremiumTypes.TIER_2:
      eh = (0, r.jsx)(E.Z, {
        className: M.planName,
        "aria-label": x.intl.string(x.t.lpNrPu)
      })
  }
  let em = F.includes(i.status) && !z ? H : V;
  return (0, r.jsx)(em, {
    wordMark: eh,
    subscriptionInfo: ec(ed),
    buttons: eu(),
    statusClasses: ep,
    shouldUseDiscountMarketing: J,
    discountAmount: Q
  })
}
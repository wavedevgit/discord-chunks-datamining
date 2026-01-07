/** Chunk was on web.js **/
/** chunk id: 393411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => K,
  Z: () => z
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
  Chunk765456 = require("./765456.js"),
  Chunk622909 = require("./622909.js"),
  Chunk382791 = require("./382791.jsx"),
  Chunk987997 = require("./987997.jsx"),
  Chunk45474 = require("./45474.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk362786 = require("./362786.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk423768 = require("./423768.js");

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

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let F = new Chunk710845.Z("SubscriptionHeader.tsx"),
  B = {
    page: Chunk981631.ZY5.USER_SETTINGS,
    section: Chunk981631.jXE.SETTINGS_PREMIUM,
    object: Chunk981631.qAy.CARD
  },
  V = [Chunk981631.O0b.PAUSED, Chunk981631.O0b.PAUSE_PENDING, Chunk981631.O0b.BILLING_RETRY];

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
          children: [t, s && null != l && (0, r.jsx)(P.Cy, {
            text: j.intl.formatToPlainString(j.t.iiLbvu, {
              percent: l
            }),
            className: M.discountPill,
            colorOptions: P.VE.PREMIUM_TIER_2_WHITE_FILL,
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

function Y(e) {
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
            children: [t, s && null != l && (0, r.jsx)(P.Cy, {
              text: j.intl.formatToPlainString(j.t.iiLbvu, {
                percent: l
              }),
              className: M.discountPill,
              colorOptions: P.VE.PREMIUM_TIER_2_WHITE_FILL,
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
    className: Chunk423768.wordMark,
    children: [(0, Chunk54381.jsx)(Chunk754347.Z, {
      className: Chunk423768.discordWordmark,
      "aria-label": Chunk388032.intl.string(Chunk388032.t.FSOz78)
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk423768.classicWordmark
    })]
  })
}

function K() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.ACCOUNT_CREDIT_BANNER);
  return (0, Chunk54381.jsx)(H, {
    wordMark: (0, Chunk54381.jsx)(W, {}),
    subscriptionInfo: (0, Chunk54381.jsx)("div", {
      className: Chunk423768.planInfo,
      children: Chunk388032.intl.string(Chunk388032.t.R0GJL2)
    }),
    buttons: (0, Chunk54381.jsx)(Chunk987997.Z, {
      className: Chunk423768.toolsButton,
      onClick: () => (0, Chunk963249.Z)({
        subscriptionTier: Chunk474936.Si.TIER_1,
        analyticsLocations: module,
        analyticsObject: B
      }),
      text: Chunk388032.intl.string(Chunk388032.t["/ygMUY"])
    }),
    statusClasses: {
      [Chunk423768.tier1]: true
    }
  })
}
let z = function(e) {
  var t;
  let {
    subscription: i,
    currentInvoicePreview: o,
    renewalInvoicePreview: _,
    paymentSource: P,
    busy: k,
    analyticsLocation: G
  } = e, K = "subscription_header", {
    analyticsLocations: z
  } = (0, f.ZP)(d.Z.SUBSCRIPTION_HEADER), q = (0, p.Z)({
    forceFetch: false
  }), {
    fractionalState: Q
  } = q, X = Q === D.a$.FP_SUB_PAUSED, {
    enabled: J
  } = (0, C.ZP)({
    location: K
  }), $ = (0, A.a)(K);
  D.pj.has(i.planId) && x.JwP.ALL_PAUSEABLE.has(i.status) && !X || (J = false);
  let ee = (0, N.N)(),
    et = null == ee || null == (t = ee.discount) ? true : t.amount,
    en = (0, I.t7)(),
    er = (0, I.lr)(),
    ei = (0, T.W)(),
    ea = () => {
      (i.status === x.O0b.ACTIVE || i.status === x.O0b.PAST_DUE || i.status === x.O0b.PAUSED) && el(w.R.PAUSE_SELECT)
    },
    eo = () => {
      (i.status === x.O0b.ACTIVE || i.status === x.O0b.PAST_DUE || i.status === x.O0b.PAUSE_PENDING || X) && el()
    },
    es = () => {
      i.status === x.O0b.BILLING_RETRY && el(w.R.CONFIRM)
    },
    el = e => {
      (0, c.ZDy)(async () => {
        let {
          PremiumBrandRefreshSubscriptionCancellationModal: t
        } = await n.e("26526").then(n.bind(n, 48813));
        return n => (0, r.jsx)(t, Z(U({}, n), {
          premiumSubscription: i,
          analyticsLocation: G,
          analyticsLocations: z,
          initialStep: e
        }))
      })
    },
    ec = () => {
      s()(null != _, "Expected renewalInvoicePreview"), (0, c.ZDy)(async () => {
        let {
          PremiumResubscribeModal: e
        } = await Promise.all([n.e("84992"), n.e("16"), n.e("23242"), n.e("31800")]).then(n.bind(n, 445968));
        return t => (0, r.jsx)(e, Z(U({}, t), {
          premiumSubscription: i,
          analyticsLocations: z,
          fractionalPremiumInfo: q,
          renewalInvoicePreview: _
        }))
      })
    },
    eu = () => {
      if (null != i && null != i.premiumPlanIdFromItems) {
        let e = g.Z.get(i.premiumPlanIdFromItems);
        if (null == e) return void F.info("Plan not fetched for plan id: ".concat(i.premiumPlanIdFromItems));
        let t = (0, v.DE)(e, null == P ? true : P.id, false),
          n = t.length > 0 ? t[0] : i.currency,
          r = true;
        1 === t.length && (null == P ? true : P.id) === i.paymentSourceId && (0, v.tD)(e.id, n, null == P ? true : P.id) && (r = false), r ? (0, m.Z)({
          initialPlanId: i.premiumPlanIdFromItems,
          analyticsLocations: z,
          analyticsLocation: G,
          analyticsObject: B,
          subscription: i
        }) : $ ? ec() : u.O5(i, z)
      }
    },
    ed = () => {
      if (!V.includes(i.status) || null == i.pauseEndsAt) return void(0, y.q2)(Error("Invalid subscription to resume"), {
        extra: {
          subscriptionId: i.id,
          status: i.status,
          pauseEndsAt: i.pauseEndsAt
        }
      });
      i.status === x.O0b.PAUSED && i.pauseReason !== L.Id.USER_TEMPORARY_BAN ? (0, m.Z)({
        initialPlanId: i.premiumPlanIdFromItems,
        analyticsLocations: z,
        analyticsLocation: G,
        analyticsObject: B,
        subscription: i,
        skipConfirm: true
      }) : u.v4(i, z)
    },
    ef = () => {
      i.status === x.O0b.PAUSED && el(w.R.PAUSE_SELECT)
    },
    ep = () => {
      el(w.R.WHAT_YOU_LOSE)
    },
    e_ = e => (s()(null != o, "Expected currentInvoicePreview"), (0, r.jsx)("div", {
      className: M.planInfo,
      children: ei ? j.intl.format(j.t["/SfHwl"], {
        weeks: 1
      }) : (0, O.qV)({
        planId: e,
        subscription: i,
        renewalInvoicePreview: o,
        hasDiscountApplied: en,
        activeDiscountInfo: er,
        hasFractionalPremiumWithSub: X
      })
    })),
    em = () => {
      let {
        status: e
      } = i;
      if (i.isPurchasedExternally) {
        let e = (0, O.JE)(i.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
        return (0, r.jsx)(c.eee, {
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
        let e = O.ZP.isSwitchingPlansDisabled(i),
          t = O.ZP.getSwitchingPlansDisabledMessage(i);
        return (0, r.jsxs)("div", {
          className: M.toolsButtons,
          children: [J ? (0, r.jsx)("div", {
            className: M.secondaryBannerTextButtonContainerWithPause,
            children: (0, r.jsx)(c.Avr, {
              variant: "always-white",
              disabled: k,
              onClick: ea,
              size: "sm",
              text: j.intl.string(j.t.eFlYVA)
            })
          }) : (0, r.jsx)("div", {
            className: M.secondaryBannerTextButtonContainer,
            children: (0, r.jsx)(c.Avr, {
              variant: "always-white",
              onClick: eo,
              disabled: k,
              size: "sm",
              text: j.intl.string(j.t["ETE/oC"])
            })
          }), (0, r.jsx)(l.u, {
            text: t,
            asContainer: true,
            children: (0, r.jsx)(R.Z, {
              className: a()(M.toolsButton, M.premiumSettingsPushButton),
              disabled: e,
              onClick: () => {
                (0, m.Z)({
                  analyticsLocations: z,
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
      if (O.ZP.isBaseSubscriptionCanceled(i)) return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: M.toolsButton,
        children: (0, r.jsx)(c.Button, {
          variant: "overlay-primary",
          size: "sm",
          text: j.intl.string(j.t.iIvF2z),
          loading: k,
          onClick: eu
        })
      });
      switch (e) {
        case x.O0b.BILLING_RETRY:
          return (0, r.jsx)(c.Button, {
            variant: "overlay-primary",
            size: "sm",
            onClick: es,
            loading: k,
            text: j.intl.string(j.t["ETE/oC"])
          });
        case x.O0b.PAUSE_PENDING:
          return (0, r.jsxs)("div", {
            className: M.toolsButtons,
            children: [(0, r.jsx)("div", {
              className: M.secondaryBannerTextButtonContainer,
              children: (0, r.jsx)(c.Avr, {
                variant: "always-white",
                disabled: k,
                onClick: eo,
                size: "sm",
                text: j.intl.string(j.t.cM1H0K)
              })
            }), (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: M.toolsButton,
              children: (0, r.jsx)(c.Button, {
                variant: "overlay-primary",
                size: "sm",
                text: j.intl.string(j.t.TgV5Qf),
                loading: k,
                onClick: ed
              })
            })]
          });
        case x.O0b.PAUSED:
          if (X) return t();
          let {
            durations: n
          } = (0, S.AT)(i);
          return (0, r.jsxs)("div", {
            className: M.toolsButtons,
            children: [(0, r.jsx)("div", {
              className: M.secondaryBannerTextButtonContainer,
              children: n.length > 0 ? (0, r.jsx)(c.Avr, {
                variant: "always-white",
                onClick: ef,
                disabled: k,
                size: "sm",
                text: j.intl.string(j.t.jNHWt6)
              }) : (0, r.jsx)(c.Avr, {
                variant: "always-white",
                onClick: ep,
                disabled: k,
                size: "sm",
                text: j.intl.string(j.t.cM1H0K)
              })
            }), (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: M.toolsButton,
              children: (0, r.jsx)(c.Button, {
                variant: "overlay-primary",
                size: "sm",
                text: j.intl.string(j.t.zpi5pg),
                loading: k,
                onClick: ed
              })
            })]
          });
        case x.O0b.ACTIVE:
        case x.O0b.PAST_DUE:
          return t()
      }
    },
    eh = O.ZP.getPlanIdFromInvoice(i, o);
  if ((0, h.Q0)(eh)) return null;
  let eg = O.ZP.getStatusFromInvoice(i, o),
    eE = O.ZP.getPremiumType(eh),
    eb = {
      [M.tier0]: eE === D.PremiumTypes.TIER_0,
      [M.tier1]: eE === D.PremiumTypes.TIER_1,
      [M.tier2]: eE === D.PremiumTypes.TIER_2,
      [M.canceled]: eg === x.O0b.CANCELED,
      [M.pausePending]: eg === x.O0b.PAUSE_PENDING,
      [M.paused]: eg === x.O0b.PAUSED && !X,
      [M.failedPayment]: (0, O.zV)(eg)
    },
    ey = null;
  switch (eE) {
    case D.PremiumTypes.TIER_0:
      ey = (0, r.jsxs)("div", {
        className: M.wordMark,
        children: [(0, r.jsx)(b.Z, {
          className: M.discordWordmark,
          "aria-label": j.intl.string(j.t["t9uG/o"])
        }), (0, r.jsx)("div", {
          className: M.basicWordmark
        })]
      });
      break;
    case D.PremiumTypes.TIER_1:
      ey = (0, r.jsx)(W, {});
      break;
    case D.PremiumTypes.TIER_2:
      ey = (0, r.jsx)(E.Z, {
        className: M.planName,
        "aria-label": j.intl.string(j.t.lpNrPu)
      })
  }
  let eO = V.includes(i.status) && !X ? Y : H;
  return (0, r.jsx)(eO, {
    wordMark: ey,
    subscriptionInfo: e_(eh),
    buttons: em(),
    statusClasses: eb,
    shouldUseDiscountMarketing: en,
    discountAmount: et
  })
}
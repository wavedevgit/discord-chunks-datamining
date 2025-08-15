/** Chunk was on 30202 **/
/** chunk id: 393411, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => F,
  Z: () => H
}), require("./415506.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk755721 = require("./755721.js"),
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
  Chunk965406 = require("./965406.js");

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let L = new Chunk710845.Z("SubscriptionHeader.tsx"),
  B = {
    page: Chunk981631.ZY5.USER_SETTINGS,
    section: Chunk981631.jXE.SETTINGS_PREMIUM,
    object: Chunk981631.qAy.CARD
  },
  M = [Chunk981631.O0b.PAUSED, Chunk981631.O0b.PAUSE_PENDING, Chunk981631.O0b.BILLING_RETRY];

function U(e) {
  let {
    wordMark: t,
    subscriptionInfo: n,
    buttons: r,
    statusClasses: a,
    shouldUseDiscountMarketing: l,
    discountAmount: o
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(Z.banner, a),
    children: [(0, i.jsx)("div", {
      className: Z.bannerBackgroundImage
    }), (0, i.jsxs)("div", {
      className: Z.detailsContainer,
      children: [(0, i.jsx)("div", {
        className: Z.image
      }), (0, i.jsxs)("div", {
        className: Z.details,
        children: [(0, i.jsxs)("div", {
          className: Z.headerLabel,
          children: [t, l && null != o && (0, i.jsx)(I.Cy, {
            text: D.intl.formatToPlainString(D.t.iiLbvr, {
              percent: o
            }),
            className: Z.discountPill,
            colorOptions: I.VE.PREMIUM_TIER_2_WHITE_FILL,
            isPillOnBorder: false
          })]
        }), n]
      })]
    }), (0, i.jsx)("div", {
      className: Z.buttons,
      children: r
    })]
  })
}

function V(e) {
  let {
    wordMark: t,
    subscriptionInfo: n,
    buttons: r,
    statusClasses: a,
    shouldUseDiscountMarketing: l,
    discountAmount: o
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(Z.banner, a, Z.repositioned),
    children: [(0, i.jsx)("div", {
      className: Z.bannerBackgroundImage
    }), (0, i.jsx)("div", {
      className: Z.detailsContainer,
      children: (0, i.jsx)("div", {
        className: Z.details,
        children: (0, i.jsxs)("div", {
          className: Z.headerLabel,
          children: [(0, i.jsx)("div", {
            className: Z.image
          }), (0, i.jsxs)("div", {
            className: Z.headerColumnB,
            children: [t, l && null != o && (0, i.jsx)(I.Cy, {
              text: D.intl.formatToPlainString(D.t.iiLbvr, {
                percent: o
              }),
              className: Z.discountPill,
              colorOptions: I.VE.PREMIUM_TIER_2_WHITE_FILL,
              isPillOnBorder: false
            }), n]
          })]
        })
      })
    }), (0, i.jsx)("div", {
      className: Z.buttons,
      children: r
    })]
  })
}

function G() {
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk965406.wordMark,
    children: [(0, Chunk255367.jsx)(Chunk754347.Z, {
      className: Chunk965406.discordWordmark,
      "aria-label": Chunk388032.intl.string(Chunk388032.t["FSOz7+"])
    }), (0, Chunk255367.jsx)("div", {
      className: Chunk965406.classicWordmark
    })]
  })
}

function F() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.ACCOUNT_CREDIT_BANNER);
  return (0, Chunk255367.jsx)(U, {
    wordMark: (0, Chunk255367.jsx)(G, {}),
    subscriptionInfo: (0, Chunk255367.jsx)("div", {
      className: Chunk965406.planInfo,
      children: Chunk388032.intl.string(Chunk388032.t.R0GJLy)
    }),
    buttons: (0, Chunk255367.jsx)(Chunk987997.Z, {
      className: Chunk965406.toolsButton,
      onClick: () => (0, Chunk963249.Z)({
        subscriptionTier: Chunk474936.Si.TIER_1,
        analyticsLocations: module,
        analyticsObject: B
      }),
      children: Chunk388032.intl.string(Chunk388032.t["/ygMUV"])
    }),
    statusClasses: {
      [Chunk965406.tier1]: true
    }
  })
}
let H = function(e) {
  var t;
  let {
    subscription: r,
    renewalInvoicePreview: a,
    paymentSource: g,
    busy: I,
    analyticsLocation: F
  } = e, {
    analyticsLocations: H
  } = (0, m.ZP)(u.Z.SUBSCRIPTION_HEADER), {
    fractionalState: z
  } = (0, p.Z)({
    forceFetch: false
  }), W = z === P.a$.FP_SUB_PAUSED, {
    enabled: Y
  } = (0, T.ZP)({
    location: "subscription_header"
  });
  P.pj.has(r.planId) && R.JwP.ALL_PAUSEABLE.has(r.status) && !W || (Y = false);
  let K = (0, N.Ng)(),
    q = null == K || null == (t = K.discount) ? true : t.amount,
    X = (0, v.t7)(),
    J = (0, v.lr)(),
    Q = (0, S.W)(),
    $ = () => {
      (r.status === R.O0b.ACTIVE || r.status === R.O0b.PAST_DUE || r.status === R.O0b.PAUSED) && en(A.R.PAUSE_SELECT)
    },
    ee = () => {
      (r.status === R.O0b.ACTIVE || r.status === R.O0b.PAST_DUE || r.status === R.O0b.PAUSE_PENDING || W) && en()
    },
    et = () => {
      r.status === R.O0b.BILLING_RETRY && en(A.R.CONFIRM)
    },
    en = e => {
      (0, c.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("58067"), n.e("81709")]).then(n.bind(n, 833569));
        return n => (0, i.jsx)(t, k(w({}, n), {
          premiumSubscription: r,
          analyticsLocation: F,
          analyticsLocations: H,
          initialStep: e
        }))
      })
    },
    ei = () => {
      if (null != r && null != r.premiumPlanIdFromItems) {
        let e = b.Z.get(r.premiumPlanIdFromItems);
        if (null == e) return void L.info("Plan not fetched for plan id: ".concat(r.premiumPlanIdFromItems));
        let t = (0, C.DE)(e, null == g ? true : g.id, false),
          n = t.length > 0 ? t[0] : r.currency,
          i = false;
        1 === t.length && (null == g ? true : g.id) === r.paymentSourceId && (0, C.tD)(e.id, n, null == g ? true : g.id) && (i = true), i ? d.O5(r, H) : (0, h.Z)({
          initialPlanId: r.premiumPlanIdFromItems,
          analyticsLocations: H,
          analyticsLocation: F,
          analyticsObject: B,
          subscription: r
        })
      }
    },
    er = () => {
      if (!M.includes(r.status) || null == r.pauseEndsAt) return void(0, j.q2)(Error("Invalid subscription to resume"), {
        extra: {
          subscriptionId: r.id,
          status: r.status,
          pauseEndsAt: r.pauseEndsAt
        }
      });
      r.status === R.O0b.PAUSED ? (0, h.Z)({
        initialPlanId: r.premiumPlanIdFromItems,
        analyticsLocations: H,
        analyticsLocation: F,
        analyticsObject: B,
        subscription: r,
        skipConfirm: true
      }) : d.v4(r, H)
    },
    es = () => {
      r.status === R.O0b.PAUSED && en(A.R.PAUSE_SELECT)
    },
    ea = () => {
      en(A.R.WHAT_YOU_LOSE)
    },
    el = E.ZP.getPlanIdFromInvoice(r, a);
  if ((0, f.Q0)(el)) return null;
  let eo = E.ZP.getStatusFromInvoice(r, a),
    ec = E.ZP.getPremiumType(el),
    ed = {
      [Z.tier0]: ec === P.p9.TIER_0,
      [Z.tier1]: ec === P.p9.TIER_1,
      [Z.tier2]: ec === P.p9.TIER_2,
      [Z.canceled]: eo === R.O0b.CANCELED,
      [Z.pausePending]: eo === R.O0b.PAUSE_PENDING,
      [Z.paused]: eo === R.O0b.PAUSED && !W,
      [Z.failedPayment]: (0, E.zV)(eo)
    },
    eu = null;
  switch (ec) {
    case P.p9.TIER_0:
      eu = (0, i.jsxs)("div", {
        className: Z.wordMark,
        children: [(0, i.jsx)(_.Z, {
          className: Z.discordWordmark,
          "aria-label": D.intl.string(D.t["t9uG/v"])
        }), (0, i.jsx)("div", {
          className: Z.basicWordmark
        })]
      });
      break;
    case P.p9.TIER_1:
      eu = (0, i.jsx)(G, {});
      break;
    case P.p9.TIER_2:
      eu = (0, i.jsx)(x.Z, {
        className: Z.planName,
        "aria-label": D.intl.string(D.t.lpNrPj)
      })
  }
  let em = M.includes(r.status) && !W ? V : U;
  return (0, i.jsx)(em, {
    wordMark: eu,
    subscriptionInfo: (l()(null != a, "Expected renewalInvoicePreview"), (0, i.jsx)("div", {
      className: Z.planInfo,
      children: Q ? D.intl.format(D.t["/SfHws"], {
        weeks: 1
      }) : (0, E.qV)({
        planId: el,
        subscription: r,
        renewalInvoicePreview: a,
        hasDiscountApplied: X,
        activeDiscountInfo: J,
        hasFractionalPremiumWithSub: W
      })
    })),
    buttons: (() => {
      let {
        status: e
      } = r;
      if (r.isPurchasedExternally) {
        let e = (0, E.JE)(r.paymentGateway, "SUBSCRIPTION_MANAGEMENT");
        return (0, i.jsx)(c.eee, {
          href: e,
          useDefaultUnderlineStyles: false,
          children: (0, i.jsx)(o.zx, {
            className: s()(Z.toolsButton, Z.externalButton),
            size: o.zx.Sizes.SMALL,
            look: o.iL.OUTLINED,
            color: o.Tt.WHITE,
            submitting: I,
            children: D.intl.string(D.t.obRG6e)
          })
        })
      }

      function t() {
        let e = E.ZP.isSwitchingPlansDisabled(r),
          t = E.ZP.getSwitchingPlansDisabledMessage(r);
        return (0, i.jsxs)("div", {
          className: Z.toolsButtons,
          children: [Y ? (0, i.jsx)(o.zx, {
            className: Z.toolsButton,
            size: o.zx.Sizes.SMALL,
            look: o.iL.LINK,
            color: o.Tt.WHITE,
            submitting: I,
            onClick: $,
            children: D.intl.string(D.t.eFlYVF)
          }) : (0, i.jsx)(o.zx, {
            className: Z.toolsButton,
            size: o.zx.Sizes.SMALL,
            look: o.iL.LINK,
            color: o.Tt.WHITE,
            submitting: I,
            onClick: ee,
            children: D.intl.string(D.t["ETE/oK"])
          }), (0, i.jsx)(c.ua7, {
            text: t,
            children: t => (0, i.jsx)(y.Z, k(w({}, t), {
              disabled: e,
              className: Z.toolsButton,
              onClick: () => {
                (0, h.Z)({
                  analyticsLocations: H,
                  analyticsLocation: F,
                  analyticsObject: B,
                  subscription: r
                })
              },
              children: D.intl.string(D.t["dylp//"])
            }))
          })]
        })
      }
      if (E.ZP.isBaseSubscriptionCanceled(r)) return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: Z.toolsButton,
        children: (0, i.jsx)(c.zxk, {
          variant: "overlay-primary",
          size: "sm",
          text: D.intl.string(D.t.iIvF29),
          loading: I,
          onClick: ei
        })
      });
      switch (e) {
        case R.O0b.BILLING_RETRY:
          return (0, i.jsx)(o.zx, {
            className: Z.billingRetryCancel,
            size: o.zx.Sizes.SMALL,
            color: o.Tt.CUSTOM,
            submitting: I,
            onClick: et,
            children: D.intl.string(D.t["ETE/oK"])
          });
        case R.O0b.PAUSE_PENDING:
          return (0, i.jsxs)("div", {
            className: Z.toolsButtons,
            children: [(0, i.jsx)(o.zx, {
              className: Z.toolsButton,
              size: o.zx.Sizes.SMALL,
              look: o.iL.LINK,
              color: o.Tt.WHITE,
              submitting: I,
              onClick: ee,
              children: D.intl.string(D.t.cM1H0N)
            }), (0, i.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: Z.toolsButton,
              children: (0, i.jsx)(c.zxk, {
                variant: "overlay-primary",
                size: "sm",
                text: D.intl.string(D.t.TgV5QU),
                loading: I,
                onClick: er
              })
            })]
          });
        case R.O0b.PAUSED:
          if (W) return t();
          let {
            durations: n
          } = (0, O.AT)(r);
          return (0, i.jsxs)("div", {
            className: Z.toolsButtons,
            children: [n.length > 0 ? (0, i.jsx)(o.zx, {
              className: Z.linkButton,
              size: o.zx.Sizes.SMALL,
              look: o.iL.LINK,
              color: o.Tt.WHITE,
              submitting: I,
              onClick: es,
              children: D.intl.string(D.t.jNHWt7)
            }) : (0, i.jsx)(o.zx, {
              className: Z.linkButton,
              size: o.zx.Sizes.SMALL,
              look: o.iL.LINK,
              color: o.Tt.WHITE,
              submitting: I,
              onClick: ea,
              children: D.intl.string(D.t.cM1H0N)
            }), (0, i.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: Z.toolsButton,
              children: (0, i.jsx)(c.zxk, {
                variant: "overlay-primary",
                size: "sm",
                text: D.intl.string(D.t.zpi5pq),
                loading: I,
                onClick: er
              })
            })]
          });
        case R.O0b.ACTIVE:
        case R.O0b.PAST_DUE:
          return t()
      }
    })(),
    statusClasses: ed,
    shouldUseDiscountMarketing: X,
    discountAmount: q
  })
}
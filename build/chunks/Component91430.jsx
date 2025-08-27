/** Chunk was on web.js **/
/** chunk id: 91430, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MM: () => X,
  Yn: () => $,
  ZP: () => ee,
  eS: () => J
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk17894 = require("./17894.js"),
  Chunk975298 = require("./975298.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk301766 = require("./301766.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk212895 = require("./212895.js"),
  Chunk374649 = require("./374649.js"),
  Chunk140465 = require("./140465.js"),
  Chunk160913 = require("./160913.js"),
  Chunk331972 = require("./331972.js"),
  Chunk757861 = require("./757861.js"),
  Chunk385251 = require("./385251.jsx"),
  Chunk987997 = require("./987997.jsx"),
  Chunk393411 = require("./393411.jsx"),
  Chunk908951 = require("./908951.jsx"),
  Chunk592889 = require("./592889.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk362786 = require("./362786.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk903163 = require("./903163.js");
let H = "app";

function Y(e) {
  let t, {
      subscription: n,
      renewalInvoicePreview: i,
      fractionalPremiumInfo: a,
      fromStandaloneBillingPage: s = true,
      className: c
    } = e,
    u = (0, d.e7)([T.default], () => {
      let e = T.default.getCurrentUser();
      return l()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
    });
  if (0 === (0, C.uV)(n.additionalPlans)) return null;
  let {
    status: f
  } = n, m = (0, C.v6)(n);
  if (m) t = V.guildBoostingSubscriptionRowCanceled;
  else switch (f) {
    case B.O0b.PAST_DUE:
    case B.O0b.ACCOUNT_HOLD:
    case B.O0b.BILLING_RETRY:
      t = V.guildBoostingSubscriptionRowFailedPayment;
      break;
    case B.O0b.PAUSE_PENDING:
    case B.O0b.PAUSED:
      t = n.pauseReason !== Z.Id.FRACTIONAL_PREMIUM ? V.guildBoostingSubscriptionRowPaused : V.guildBoostingSubscriptionRowActive;
      break;
    default:
      t = V.guildBoostingSubscriptionRowActive
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: o()(t, c),
      children: [(0, r.jsx)("div", {
        className: V.guildBoostingSubscriptionRowBackground
      }), (0, r.jsx)("div", {
        className: V.guildBoostingImage
      }), (0, r.jsxs)("div", {
        className: V.guildBoostingSubscriptionRowBody,
        children: [(0, r.jsx)("div", {
          className: o()(V.guildBoostingWordmark, {
            [V.canceled]: m
          })
        }), (0, r.jsx)("div", {
          children: (0, C.bt)({
            subscription: n,
            renewalInvoicePreview: i,
            user: u,
            fractionalPremiumInfo: a
          })
        })]
      }), s && (0, r.jsx)(j.Z, {
        color: _.zx.Colors.BRAND,
        onClick: () => h.Z.open(B.oAB.GUILD_BOOSTING),
        children: F.intl.string(F.t["NQ5g/f"])
      })]
    }), !s && (0, r.jsx)(p.Text, {
      className: V.boostingDesktopAppBlurb,
      variant: "text-sm/normal",
      children: F.intl.format(F.t.k6haR0, {
        openAppHook: () => (0, E.Z)(H)
      })
    })]
  })
}

function W() {
  return Chunk647438.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_missing_payment_method"
    })
  }, []), (0, Chunk951288.jsxs)("div", {
    className: Chunk903163.paymentBanner,
    children: [(0, Chunk951288.jsx)(Chunk481060.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      className: Chunk903163.paymentBannerIcon,
      color: Chunk692547.Z.unsafe_rawColors.YELLOW_260.css
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk903163.paymentBannerText,
      variant: "text-sm/normal",
      children: Chunk388032.intl.string(Chunk388032.t.xFHEMT)
    })]
  })
}

function K() {
  return Chunk647438.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, Chunk951288.jsxs)("div", {
    className: Chunk903163.paymentBanner,
    children: [(0, Chunk951288.jsx)(Chunk481060.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      className: Chunk903163.paymentBannerIcon,
      color: Chunk692547.Z.unsafe_rawColors.RED_360.css
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk903163.paymentBannerText,
      variant: "text-sm/normal",
      children: Chunk388032.intl.string(Chunk388032.t["j+nuQU"])
    })]
  })
}

function z(e) {
  let {
    daysPastDue: t,
    subscription: n,
    openInvoiceId: a
  } = e, {
    analyticsLocations: o
  } = (0, g.ZP)(m.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return i.useEffect(() => {
    S.default.track(B.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: V.paymentBanner,
    children: [(0, r.jsx)(p.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      className: V.paymentBannerIcon,
      color: f.Z.unsafe_rawColors.YELLOW_260.css
    }), (0, r.jsx)(p.Text, {
      className: V.paymentBannerText,
      variant: "text-sm/normal",
      children: F.intl.format(F.t["0nbf/P"], {
        daysPastDue: t,
        paymentModalRedirect: () => {
          (0, v.Z)({
            initialPlanId: n.planIdFromItems,
            openInvoiceId: a,
            analyticsLocations: o
          })
        }
      })
    })]
  })
}

function q(e) {
  let {
    subscription: t,
    renewalInvoicePreview: n,
    openInvoice: i,
    className: a,
    fractionalPremiumInfo: s
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(V.billingInformation, a),
    children: [(0, r.jsx)(p.vwX, {
      tag: "h3",
      className: V.detailBlockHeader,
      children: F.intl.string(F.t.KXQjfX)
    }), (0, r.jsx)("div", {
      children: C.ZP.getBillingInformationString(t, n, i, false, s)
    })]
  })
}

function X() {
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
      className: Chunk903163.sectionTitle,
      tag: "h1",
      children: Chunk388032.intl.string(Chunk388032.t["/gs+Pz"])
    }), (0, Chunk951288.jsx)("p", {
      className: Chunk903163.sectionDescription,
      children: Chunk388032.intl.string(Chunk388032.t.D8UpUl)
    }), (0, Chunk951288.jsx)(Chunk481060.Zbd, {
      className: Chunk903163.noItemsCard,
      type: Chunk481060.Zbd.Types.CUSTOM,
      children: (0, Chunk951288.jsxs)(Chunk600164.Z, {
        align: Chunk600164.Z.Align.CENTER,
        children: [(0, Chunk951288.jsx)(Chunk925329.Z, {
          game: null,
          size: Chunk925329.Z.Sizes.SMALL,
          className: Chunk903163.noItemsIcon
        }), (0, Chunk951288.jsx)("span", {
          className: Chunk903163.cardText,
          children: Chunk388032.intl.string(Chunk388032.t.xCRgr6)
        })]
      })
    })]
  })
}

function Q(e) {
  let {
    subscription: t,
    analyticsLocation: n,
    paymentSource: i,
    busy: a,
    fromStandaloneBillingPage: s,
    showInvalidPaymentMethod: l,
    showNoPaymentMethod: c,
    fetchedCurrentInvoicePreview: u,
    fetchedRenewalInvoicePreview: d,
    fetchedOpenInvoice: f
  } = e, {
    analyticsLocations: _
  } = (0, g.ZP)(m.Z.SUBSCRIPTION_DETAILS), h = null != u ? {} : {
    subscriptionId: t.id,
    renewal: true,
    analyticsLocations: _,
    analyticsLocation: n
  }, [E] = (0, R.ED)(h);
  E = null != u ? u : E;
  let y = null != d ? {} : {
      subscriptionId: t.id,
      renewal: true,
      applyEntitlements: true,
      analyticsLocations: _,
      analyticsLocation: n
    },
    [O] = (0, R.ED)(y);
  O = null != d ? d : O;
  let v = (0, b.Z)(),
    I = (0, D.$)("subscription_details"),
    T = (0, P.lr)(),
    S = C.ZP.isBaseSubscriptionCanceled(t),
    A = (0, x.P)(t, i);
  if (null == E || null == O) return (0, r.jsx)(p.$jN, {});
  let w = A ? (0, P.Yi)(O) : null,
    j = null != w || null != T && (T.discountId === G.dT || T.discountId === G.dB),
    U = A && (S && null != I || !S && j);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: V.subscriptionRows,
      children: [U ? (0, r.jsx)(L.Z, {
        subscription: t,
        invoicePreview: O,
        paymentSource: i,
        discountOffer: I,
        renewalChurnDiscountInfo: w,
        discountInfo: T,
        isLoading: a,
        analyticsLocation: n
      }) : (0, r.jsx)(M.Z, {
        subscription: t,
        renewalInvoicePreview: E,
        paymentSource: i,
        busy: a,
        analyticsLocation: n
      }), (0, r.jsx)(Y, {
        subscription: t,
        renewalInvoicePreview: E,
        fromStandaloneBillingPage: s,
        className: V.guildSubscriptionRow,
        fractionalPremiumInfo: v
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(p.y5t, {
        component: (0, r.jsx)(p.vwX, {
          tag: "h5",
          children: F.intl.string(F.t.Sb6wIy)
        }),
        children: (0, r.jsxs)("div", {
          className: V.details,
          children: [(0, r.jsx)(q, {
            subscription: t,
            renewalInvoicePreview: O,
            className: V.detailsBlock,
            fractionalPremiumInfo: v,
            openInvoice: f
          }), (0, r.jsxs)("div", {
            className: o()(V.detailsBlock, {
              [V.redBorder]: l
            }),
            children: [(0, r.jsx)(p.vwX, {
              tag: "h3",
              className: V.detailBlockHeader,
              children: t.isPurchasedExternally && null != t.paymentGateway ? F.intl.formatToPlainString(F.t.rTk9v7, {
                paymentGatewayName: B.Vzj[t.paymentGateway]
              }) : F.intl.string(F.t.iRzXKS)
            }), (0, r.jsx)(k.Z, {
              subscription: t,
              onPaymentSourceAdded: N.i1,
              highlightAddPaymentMethodButton: c || l,
              analyticsLocation: n,
              currentInvoicePreview: E,
              dropdownClassName: V.paymentDropdown
            })]
          })]
        })
      })
    })]
  })
}
let J = new Set([Chunk981631.O0b.ACTIVE, Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.CANCELED, Chunk981631.O0b.PAUSE_PENDING, Chunk981631.O0b.PAUSED]);

function $() {
  return Chunk647438.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_duplicate_subscriptions"
    })
  }, []), (0, Chunk951288.jsxs)("div", {
    className: Chunk903163.duplicateSubscriptionsBanner,
    children: [(0, Chunk951288.jsx)(Chunk481060.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: Chunk692547.Z.unsafe_rawColors.RED_360.css
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk903163.duplicateSubscriptionsBannerText,
      variant: "text-sm/normal",
      children: Chunk388032.intl.format(Chunk388032.t["6eXiiI"], {
        helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.NITRO)
      })
    })]
  })
}

function ee(e) {
  var t;
  let n, {
    subscription: i,
    subscriptions: a,
    paymentSource: o,
    busy: s,
    fromStandaloneBillingPage: l = true,
    analyticsLocation: c
  } = e;
  null != a && null != a[0] && (i = a[0]);
  let {
    analyticsLocations: f
  } = (0, g.ZP)(m.Z.SUBSCRIPTION_DETAILS), _ = (0, D.$)("subscription_details"), h = null != a ? a.slice(1) : [], [E] = (0, R.ED)({
    subscriptionId: i.id,
    renewal: true,
    analyticsLocations: f,
    analyticsLocation: c
  }), [b] = (0, R.ED)({
    subscriptionId: i.id,
    renewal: true,
    applyEntitlements: true,
    analyticsLocations: f,
    analyticsLocation: c,
    userDiscountOfferId: null == _ ? true : _.id
  }), y = null == o ? true : o.invalid, O = (0, d.e7)([T.default], () => {
    var e;
    return null == (e = T.default.getCurrentUser()) ? true : e.hasFreePremium()
  }), v = u()(i.currentPeriodEnd), S = null != i.paymentSourceId, A = null != (t = null == b ? true : b.total) ? t : 0, C = !S && A > 0 && (7 >= v.diff(u()(), "days") || i.status === B.O0b.PAST_DUE) && !O && !i.isPurchasedExternally, N = y && i.status === B.O0b.PAST_DUE && !O && !i.isPurchasedExternally, P = (0, w.U)(), x = !O && P, L = (null == i ? true : i.status) === B.O0b.PAST_DUE, j = L ? u()().diff(u()(i.currentPeriodStart), "days") : 0, [M] = (0, R.Ox)({
    subscriptionId: i.id,
    preventFetch: !(x || L)
  });
  return null == E || null == b ? (0, r.jsx)(p.$jN, {}) : (null != i.renewalMutations && (i.renewalMutations.planId !== i.planId && !(0, I.Q0)(i.renewalMutations.planId) || i.hasExternalPlanChange) && (n = (0, r.jsx)(U.Z, {
    subscription: i,
    renewalMutations: i.renewalMutations,
    className: V.renewalMutationNotice,
    analyticsLocation: c
  })), (0, r.jsx)("div", {
    children: (0, r.jsxs)(p.y5t, {
      component: (0, r.jsx)(p.vwX, {
        className: V.sectionTitle,
        tag: "h1",
        children: F.intl.string(F.t["/gs+Pz"])
      }),
      children: [C ? (0, r.jsx)(W, {}) : null, N ? (0, r.jsx)(K, {}) : null, x && null != M ? (0, r.jsx)(z, {
        daysPastDue: j,
        subscription: i,
        openInvoiceId: M.id
      }) : null, n, (0, r.jsx)("div", {
        children: (0, r.jsx)("p", {
          className: V.sectionDescription,
          children: F.intl.string(F.t.D8UpUl)
        })
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          className: h.length > 0 ? V.dupSubscriptionRow : V.__invalid_singleSubscription,
          children: (0, r.jsx)(Q, {
            subscription: i,
            analyticsLocation: c,
            paymentSource: o,
            busy: s,
            fromStandaloneBillingPage: l,
            showNoPaymentMethod: C,
            showInvalidPaymentMethod: N,
            fetchedCurrentInvoicePreview: E,
            fetchedRenewalInvoicePreview: b,
            fetchedOpenInvoice: M
          })
        }), h.map((e, t) => (0, r.jsxs)("div", {
          className: V.dupSubscriptionRow,
          children: [(0, r.jsx)(p.vwX, {
            tag: "h2",
            className: V.duplicateHeader,
            children: "Duplicate Subscriptions"
          }), (0, r.jsx)(Q, {
            subscription: e,
            analyticsLocation: c,
            paymentSource: o,
            busy: s,
            fromStandaloneBillingPage: l,
            showNoPaymentMethod: C,
            showInvalidPaymentMethod: N,
            fetchedCurrentInvoicePreview: null,
            fetchedRenewalInvoicePreview: null,
            fetchedOpenInvoice: null
          })]
        }, t))]
      })]
    })
  }))
}
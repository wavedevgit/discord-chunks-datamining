/** Chunk was on web.js **/
/** chunk id: 91430, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MM: () => J,
  Yn: () => et,
  ZP: () => en,
  eS: () => ee
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk17894 = require("./17894.js"),
  Chunk975298 = require("./975298.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
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
let W = "app";

function K(e) {
  let t, {
      subscription: n,
      renewalInvoicePreview: i,
      fractionalPremiumInfo: a,
      fromStandaloneBillingPage: s = true,
      className: c
    } = e,
    u = (0, f.e7)([A.default], () => {
      let e = A.default.getCurrentUser();
      return l()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
    });
  if (0 === (0, R.uV)(n.additionalPlans)) return null;
  let {
    status: _
  } = n, h = (0, R.v6)(n);
  if (h) t = Y.guildBoostingSubscriptionRowCanceled;
  else switch (_) {
    case F.O0b.PAST_DUE:
    case F.O0b.ACCOUNT_HOLD:
    case F.O0b.BILLING_RETRY:
      t = Y.guildBoostingSubscriptionRowFailedPayment;
      break;
    case F.O0b.PAUSE_PENDING:
    case F.O0b.PAUSED:
      t = n.pauseReason !== V.Id.FRACTIONAL_PREMIUM ? Y.guildBoostingSubscriptionRowPaused : Y.guildBoostingSubscriptionRowActive;
      break;
    default:
      t = Y.guildBoostingSubscriptionRowActive
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: o()(t, c),
      children: [(0, r.jsx)("div", {
        className: Y.guildBoostingSubscriptionRowBackground
      }), (0, r.jsx)("div", {
        className: Y.guildBoostingImage
      }), (0, r.jsxs)("div", {
        className: Y.guildBoostingSubscriptionRowBody,
        children: [(0, r.jsx)("div", {
          className: o()(Y.guildBoostingWordmark, {
            [Y.canceled]: h
          })
        }), (0, r.jsx)("div", {
          children: (0, R.bt)({
            subscription: n,
            renewalInvoicePreview: i,
            user: u,
            fractionalPremiumInfo: a
          })
        })]
      }), s && (0, r.jsx)(j.Z, {
        onClick: () => (0, T.openUserSettings)(I.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
          section: F.oAB.GUILD_BOOSTING
        }),
        text: H.intl.string(H.t["NQ5g/f"])
      })]
    }), !s && (0, r.jsx)(p.Text, {
      className: Y.boostingDesktopAppBlurb,
      variant: "text-sm/normal",
      children: H.intl.format(d.tq ? H.t.uxYBER : H.t.k6haR0, {
        openAppHook: () => (0, E.Z)(W)
      })
    })]
  })
}

function z() {
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

function q() {
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

function X(e) {
  let {
    daysPastDue: t,
    subscription: n,
    openInvoiceId: a
  } = e, {
    analyticsLocations: o
  } = (0, g.ZP)(m.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return i.useEffect(() => {
    C.default.track(F.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: Y.paymentBanner,
    children: [(0, r.jsx)(p.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      className: Y.paymentBannerIcon,
      color: _.Z.unsafe_rawColors.YELLOW_260.css
    }), (0, r.jsx)(p.Text, {
      className: Y.paymentBannerText,
      variant: "text-sm/normal",
      children: H.intl.format(H.t["0nbf/P"], {
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

function Q(e) {
  let {
    subscription: t,
    renewalInvoicePreview: n,
    openInvoice: i,
    className: a,
    fractionalPremiumInfo: s
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(Y.billingInformation, a),
    children: [(0, r.jsx)(p.X6q, {
      variant: "heading-md/semibold",
      className: Y.detailBlockHeader,
      children: H.intl.string(H.t.KXQjfX)
    }), (0, r.jsx)("div", {
      children: R.ZP.getBillingInformationString(t, n, i, false, s)
    })]
  })
}

function J() {
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/semibold",
      className: Chunk903163.sectionTitle,
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
          size: Chunk925329.A.SMALL,
          className: Chunk903163.noItemsIcon
        }), (0, Chunk951288.jsx)("span", {
          className: Chunk903163.cardText,
          children: Chunk388032.intl.string(Chunk388032.t.xCRgr6)
        })]
      })
    })]
  })
}

function $(e) {
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
  }, [E] = (0, w.ED)(h);
  E = null != u ? u : E;
  let y = null != d ? {} : {
      subscriptionId: t.id,
      renewal: true,
      applyEntitlements: true,
      analyticsLocations: _,
      analyticsLocation: n
    },
    [O] = (0, w.ED)(y);
  O = null != d ? d : O;
  let v = (0, b.Z)(),
    I = (0, L.$)(),
    T = (0, D.lr)(),
    S = R.ZP.isBaseSubscriptionCanceled(t),
    A = (0, M.P)(t, i);
  if (null == E || null == O) return (0, r.jsx)(p.$jN, {});
  let C = A ? (0, D.Yi)(O) : null,
    N = null != C || null != T && (T.discountId === Z.dT || T.discountId === Z.dB),
    x = A && (S && null != I || !S && N);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: Y.subscriptionRows,
      children: [x ? (0, r.jsx)(k.Z, {
        subscription: t,
        invoicePreview: O,
        paymentSource: i,
        discountOffer: I,
        renewalChurnDiscountInfo: C,
        discountInfo: T,
        isLoading: a,
        analyticsLocation: n
      }) : (0, r.jsx)(U.Z, {
        subscription: t,
        renewalInvoicePreview: E,
        paymentSource: i,
        busy: a,
        analyticsLocation: n
      }), (0, r.jsx)(K, {
        subscription: t,
        renewalInvoicePreview: E,
        fromStandaloneBillingPage: s,
        className: Y.guildSubscriptionRow,
        fractionalPremiumInfo: v
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(p.C3N, {
        label: H.intl.string(H.t.Sb6wIy),
        children: (0, r.jsxs)("div", {
          className: Y.details,
          children: [(0, r.jsx)(Q, {
            subscription: t,
            renewalInvoicePreview: O,
            className: Y.detailsBlock,
            fractionalPremiumInfo: v,
            openInvoice: f
          }), (0, r.jsx)("div", {
            className: o()(Y.detailsBlock, {
              [Y.redBorder]: l
            }),
            children: (0, r.jsx)(p.gNt, {
              label: t.isPurchasedExternally && null != t.paymentGateway ? H.intl.formatToPlainString(H.t.rTk9v7, {
                paymentGatewayName: F.Vzj[t.paymentGateway]
              }) : H.intl.string(H.t.iRzXKS),
              children: (0, r.jsx)(G.Z, {
                subscription: t,
                onPaymentSourceAdded: P.i1,
                highlightAddPaymentMethodButton: c || l,
                analyticsLocation: n,
                currentInvoicePreview: E,
                dropdownClassName: Y.paymentDropdown
              })
            })
          })]
        })
      })
    })]
  })
}
let ee = new Set([Chunk981631.O0b.ACTIVE, Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.CANCELED, Chunk981631.O0b.PAUSE_PENDING, Chunk981631.O0b.PAUSED]);

function et() {
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

function en(e) {
  var t;
  let n, {
    subscription: a,
    subscriptions: o,
    paymentSource: s,
    busy: l,
    fromStandaloneBillingPage: c = true,
    analyticsLocation: d,
    shouldRefetchInvoicesOnSubscriptionUpdate: _
  } = e;
  null != o && null != o[0] && (a = o[0]);
  let {
    analyticsLocations: E
  } = (0, g.ZP)(m.Z.SUBSCRIPTION_DETAILS), b = (0, L.$)(), y = null != o ? o.slice(1) : [], [O, v] = i.useState(0);
  i.useEffect(() => {
    if (!_) return;
    let e = e => {
      e.subscription.id === a.id && v(e => e + 1)
    };
    return h.Z.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e), () => {
      h.Z.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e)
    }
  }, [a.id, _]);
  let [I] = (0, w.ED)({
    subscriptionId: a.id,
    renewal: true,
    analyticsLocations: E,
    analyticsLocation: d,
    fetchKey: O
  }), [T] = (0, w.ED)({
    subscriptionId: a.id,
    renewal: true,
    applyEntitlements: true,
    analyticsLocations: E,
    analyticsLocation: d,
    userDiscountOfferId: null == b ? true : b.id,
    fetchKey: O
  }), C = null == s ? true : s.invalid, N = (0, f.e7)([A.default], () => {
    var e;
    return null == (e = A.default.getCurrentUser()) ? true : e.hasFreePremium()
  }), R = u()(a.currentPeriodEnd), P = null != a.paymentSourceId, D = null != (t = null == T ? true : T.total) ? t : 0, M = !P && D > 0 && (7 >= R.diff(u()(), "days") || a.status === F.O0b.PAST_DUE) && !N && !a.isPurchasedExternally, k = C && a.status === F.O0b.PAST_DUE && !N && !a.isPurchasedExternally, j = (0, x.U)(), U = !N && j, G = (null == a ? true : a.status) === F.O0b.PAST_DUE, Z = G ? u()().diff(u()(a.currentPeriodStart), "days") : 0, [V] = (0, w.Ox)({
    subscriptionId: a.id,
    preventFetch: !(U || G)
  });
  return null == I || null == T ? (0, r.jsx)(p.$jN, {}) : (null != a.renewalMutations && (a.renewalMutations.planId !== a.planId && !(0, S.Q0)(a.renewalMutations.planId) || a.hasExternalPlanChange) && (n = (0, r.jsx)(B.Z, {
    subscription: a,
    renewalMutations: a.renewalMutations,
    className: Y.renewalMutationNotice,
    analyticsLocation: d
  })), (0, r.jsxs)(p.C3N, {
    label: H.intl.string(H.t["/gs+Pz"]),
    description: H.intl.string(H.t.D8UpUl),
    children: [M ? (0, r.jsx)(z, {}) : null, k ? (0, r.jsx)(q, {}) : null, U && null != V ? (0, r.jsx)(X, {
      daysPastDue: Z,
      subscription: a,
      openInvoiceId: V.id
    }) : null, n, (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: y.length > 0 ? Y.dupSubscriptionRow : Y.__invalid_singleSubscription,
        children: (0, r.jsx)($, {
          subscription: a,
          analyticsLocation: d,
          paymentSource: s,
          busy: l,
          fromStandaloneBillingPage: c,
          showNoPaymentMethod: M,
          showInvalidPaymentMethod: k,
          fetchedCurrentInvoicePreview: I,
          fetchedRenewalInvoicePreview: T,
          fetchedOpenInvoice: V
        })
      }), y.map((e, t) => (0, r.jsxs)("div", {
        className: Y.dupSubscriptionRow,
        children: [(0, r.jsx)(p.X6q, {
          variant: "heading-md/semibold",
          className: Y.duplicateHeader,
          children: "Duplicate Subscriptions"
        }), (0, r.jsx)($, {
          subscription: e,
          analyticsLocation: d,
          paymentSource: s,
          busy: l,
          fromStandaloneBillingPage: c,
          showNoPaymentMethod: M,
          showInvalidPaymentMethod: k,
          fetchedCurrentInvoicePreview: null,
          fetchedRenewalInvoicePreview: null,
          fetchedOpenInvoice: null
        })]
      }, t))]
    })]
  }))
}
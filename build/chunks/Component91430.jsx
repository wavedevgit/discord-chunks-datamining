/** Chunk was on web.js **/
/** chunk id: 91430, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MM: () => $,
  Yn: () => en,
  ZP: () => er,
  eS: () => et
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
  Chunk755721 = require("./755721.js"),
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
let K = "app";

function z(e) {
  let t, {
      subscription: n,
      renewalInvoicePreview: i,
      fractionalPremiumInfo: a,
      fromStandaloneBillingPage: s = true,
      className: c
    } = e,
    u = (0, f.e7)([C.default], () => {
      let e = C.default.getCurrentUser();
      return l()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
    });
  if (0 === (0, P.uV)(n.additionalPlans)) return null;
  let {
    status: _
  } = n, m = (0, P.v6)(n);
  if (m) t = W.guildBoostingSubscriptionRowCanceled;
  else switch (_) {
    case V.O0b.PAST_DUE:
    case V.O0b.ACCOUNT_HOLD:
    case V.O0b.BILLING_RETRY:
      t = W.guildBoostingSubscriptionRowFailedPayment;
      break;
    case V.O0b.PAUSE_PENDING:
    case V.O0b.PAUSED:
      t = n.pauseReason !== H.Id.FRACTIONAL_PREMIUM ? W.guildBoostingSubscriptionRowPaused : W.guildBoostingSubscriptionRowActive;
      break;
    default:
      t = W.guildBoostingSubscriptionRowActive
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: o()(t, c),
      children: [(0, r.jsx)("div", {
        className: W.guildBoostingSubscriptionRowBackground
      }), (0, r.jsx)("div", {
        className: W.guildBoostingImage
      }), (0, r.jsxs)("div", {
        className: W.guildBoostingSubscriptionRowBody,
        children: [(0, r.jsx)("div", {
          className: o()(W.guildBoostingWordmark, {
            [W.canceled]: m
          })
        }), (0, r.jsx)("div", {
          children: (0, P.bt)({
            subscription: n,
            renewalInvoicePreview: i,
            user: u,
            fractionalPremiumInfo: a
          })
        })]
      }), s && (0, r.jsx)(U.Z, {
        color: p.zx.Colors.BRAND,
        onClick: () => (0, S.openUserSettings)(T.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
          section: V.oAB.GUILD_BOOSTING
        }),
        children: Y.intl.string(Y.t["NQ5g/f"])
      })]
    }), !s && (0, r.jsx)(h.Text, {
      className: W.boostingDesktopAppBlurb,
      variant: "text-sm/normal",
      children: Y.intl.format(d.tq ? Y.t.uxYBER : Y.t.k6haR0, {
        openAppHook: () => (0, b.Z)(K)
      })
    })]
  })
}

function q() {
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

function X() {
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

function Q(e) {
  let {
    daysPastDue: t,
    subscription: n,
    openInvoiceId: a
  } = e, {
    analyticsLocations: o
  } = (0, E.ZP)(g.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return i.useEffect(() => {
    N.default.track(V.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: W.paymentBanner,
    children: [(0, r.jsx)(h.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      className: W.paymentBannerIcon,
      color: _.Z.unsafe_rawColors.YELLOW_260.css
    }), (0, r.jsx)(h.Text, {
      className: W.paymentBannerText,
      variant: "text-sm/normal",
      children: Y.intl.format(Y.t["0nbf/P"], {
        daysPastDue: t,
        paymentModalRedirect: () => {
          (0, I.Z)({
            initialPlanId: n.planIdFromItems,
            openInvoiceId: a,
            analyticsLocations: o
          })
        }
      })
    })]
  })
}

function J(e) {
  let {
    subscription: t,
    renewalInvoicePreview: n,
    openInvoice: i,
    className: a,
    fractionalPremiumInfo: s
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(W.billingInformation, a),
    children: [(0, r.jsx)(h.vwX, {
      tag: "h3",
      className: W.detailBlockHeader,
      children: Y.intl.string(Y.t.KXQjfX)
    }), (0, r.jsx)("div", {
      children: P.ZP.getBillingInformationString(t, n, i, false, s)
    })]
  })
}

function $() {
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

function ee(e) {
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
  } = (0, E.ZP)(g.Z.SUBSCRIPTION_DETAILS), p = null != u ? {} : {
    subscriptionId: t.id,
    renewal: true,
    analyticsLocations: _,
    analyticsLocation: n
  }, [m] = (0, D.ED)(p);
  m = null != u ? u : m;
  let b = null != d ? {} : {
      subscriptionId: t.id,
      renewal: true,
      applyEntitlements: true,
      analyticsLocations: _,
      analyticsLocation: n
    },
    [O] = (0, D.ED)(b);
  O = null != d ? d : O;
  let v = (0, y.Z)(),
    I = (0, j.$)("subscription_details"),
    T = (0, x.lr)(),
    S = P.ZP.isBaseSubscriptionCanceled(t),
    A = (0, M.P)(t, i);
  if (null == m || null == O) return (0, r.jsx)(h.$jN, {});
  let C = A ? (0, x.Yi)(O) : null,
    N = null != C || null != T && (T.discountId === F.dT || T.discountId === F.dB),
    R = A && (S && null != I || !S && N);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: W.subscriptionRows,
      children: [R ? (0, r.jsx)(k.Z, {
        subscription: t,
        invoicePreview: O,
        paymentSource: i,
        discountOffer: I,
        renewalChurnDiscountInfo: C,
        discountInfo: T,
        isLoading: a,
        analyticsLocation: n
      }) : (0, r.jsx)(G.Z, {
        subscription: t,
        renewalInvoicePreview: m,
        paymentSource: i,
        busy: a,
        analyticsLocation: n
      }), (0, r.jsx)(z, {
        subscription: t,
        renewalInvoicePreview: m,
        fromStandaloneBillingPage: s,
        className: W.guildSubscriptionRow,
        fractionalPremiumInfo: v
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(h.y5t, {
        component: (0, r.jsx)(h.vwX, {
          tag: "h5",
          children: Y.intl.string(Y.t.Sb6wIy)
        }),
        children: (0, r.jsxs)("div", {
          className: W.details,
          children: [(0, r.jsx)(J, {
            subscription: t,
            renewalInvoicePreview: O,
            className: W.detailsBlock,
            fractionalPremiumInfo: v,
            openInvoice: f
          }), (0, r.jsxs)("div", {
            className: o()(W.detailsBlock, {
              [W.redBorder]: l
            }),
            children: [(0, r.jsx)(h.vwX, {
              tag: "h3",
              className: W.detailBlockHeader,
              children: t.isPurchasedExternally && null != t.paymentGateway ? Y.intl.formatToPlainString(Y.t.rTk9v7, {
                paymentGatewayName: V.Vzj[t.paymentGateway]
              }) : Y.intl.string(Y.t.iRzXKS)
            }), (0, r.jsx)(B.Z, {
              subscription: t,
              onPaymentSourceAdded: w.i1,
              highlightAddPaymentMethodButton: c || l,
              analyticsLocation: n,
              currentInvoicePreview: m,
              dropdownClassName: W.paymentDropdown
            })]
          })]
        })
      })
    })]
  })
}
let et = new Set([Chunk981631.O0b.ACTIVE, Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.CANCELED, Chunk981631.O0b.PAUSE_PENDING, Chunk981631.O0b.PAUSED]);

function en() {
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

function er(e) {
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
    analyticsLocations: p
  } = (0, E.ZP)(g.Z.SUBSCRIPTION_DETAILS), b = (0, j.$)("subscription_details"), y = null != o ? o.slice(1) : [], [O, v] = i.useState(0);
  i.useEffect(() => {
    if (!_) return;
    let e = e => {
      e.subscription.id === a.id && v(e => e + 1)
    };
    return m.Z.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e), () => {
      m.Z.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e)
    }
  }, [a.id, _]);
  let [I] = (0, D.ED)({
    subscriptionId: a.id,
    renewal: true,
    analyticsLocations: p,
    analyticsLocation: d,
    fetchKey: O
  }), [T] = (0, D.ED)({
    subscriptionId: a.id,
    renewal: true,
    applyEntitlements: true,
    analyticsLocations: p,
    analyticsLocation: d,
    userDiscountOfferId: null == b ? true : b.id,
    fetchKey: O
  }), S = null == s ? true : s.invalid, N = (0, f.e7)([C.default], () => {
    var e;
    return null == (e = C.default.getCurrentUser()) ? true : e.hasFreePremium()
  }), R = u()(a.currentPeriodEnd), P = null != a.paymentSourceId, w = null != (t = null == T ? true : T.total) ? t : 0, x = !P && w > 0 && (7 >= R.diff(u()(), "days") || a.status === V.O0b.PAST_DUE) && !N && !a.isPurchasedExternally, M = S && a.status === V.O0b.PAST_DUE && !N && !a.isPurchasedExternally, k = (0, L.U)(), U = !N && k, G = (null == a ? true : a.status) === V.O0b.PAST_DUE, B = G ? u()().diff(u()(a.currentPeriodStart), "days") : 0, [F] = (0, D.Ox)({
    subscriptionId: a.id,
    preventFetch: !(U || G)
  });
  return null == I || null == T ? (0, r.jsx)(h.$jN, {}) : (null != a.renewalMutations && (a.renewalMutations.planId !== a.planId && !(0, A.Q0)(a.renewalMutations.planId) || a.hasExternalPlanChange) && (n = (0, r.jsx)(Z.Z, {
    subscription: a,
    renewalMutations: a.renewalMutations,
    className: W.renewalMutationNotice,
    analyticsLocation: d
  })), (0, r.jsx)("div", {
    children: (0, r.jsxs)(h.y5t, {
      component: (0, r.jsx)(h.vwX, {
        className: W.sectionTitle,
        tag: "h1",
        children: Y.intl.string(Y.t["/gs+Pz"])
      }),
      children: [x ? (0, r.jsx)(q, {}) : null, M ? (0, r.jsx)(X, {}) : null, U && null != F ? (0, r.jsx)(Q, {
        daysPastDue: B,
        subscription: a,
        openInvoiceId: F.id
      }) : null, n, (0, r.jsx)("div", {
        children: (0, r.jsx)("p", {
          className: W.sectionDescription,
          children: Y.intl.string(Y.t.D8UpUl)
        })
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          className: y.length > 0 ? W.dupSubscriptionRow : W.__invalid_singleSubscription,
          children: (0, r.jsx)(ee, {
            subscription: a,
            analyticsLocation: d,
            paymentSource: s,
            busy: l,
            fromStandaloneBillingPage: c,
            showNoPaymentMethod: x,
            showInvalidPaymentMethod: M,
            fetchedCurrentInvoicePreview: I,
            fetchedRenewalInvoicePreview: T,
            fetchedOpenInvoice: F
          })
        }), y.map((e, t) => (0, r.jsxs)("div", {
          className: W.dupSubscriptionRow,
          children: [(0, r.jsx)(h.vwX, {
            tag: "h2",
            className: W.duplicateHeader,
            children: "Duplicate Subscriptions"
          }), (0, r.jsx)(ee, {
            subscription: e,
            analyticsLocation: d,
            paymentSource: s,
            busy: l,
            fromStandaloneBillingPage: c,
            showNoPaymentMethod: x,
            showInvalidPaymentMethod: M,
            fetchedCurrentInvoicePreview: null,
            fetchedRenewalInvoicePreview: null,
            fetchedOpenInvoice: null
          })]
        }, t))]
      })]
    })
  }))
}
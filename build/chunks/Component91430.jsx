/** Chunk was on web.js **/
/** chunk id: 91430, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MM: () => Q,
  Yn: () => ee,
  ZP: () => et,
  eS: () => $
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
let Y = "app";

function W(e) {
  let t, {
      subscription: n,
      renewalInvoicePreview: i,
      fractionalPremiumInfo: a,
      fromStandaloneBillingPage: s = true,
      className: c
    } = e,
    u = (0, f.e7)([S.default], () => {
      let e = S.default.getCurrentUser();
      return l()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
    });
  if (0 === (0, N.uV)(n.additionalPlans)) return null;
  let {
    status: _
  } = n, g = (0, N.v6)(n);
  if (g) t = H.guildBoostingSubscriptionRowCanceled;
  else switch (_) {
    case Z.O0b.PAST_DUE:
    case Z.O0b.ACCOUNT_HOLD:
    case Z.O0b.BILLING_RETRY:
      t = H.guildBoostingSubscriptionRowFailedPayment;
      break;
    case Z.O0b.PAUSE_PENDING:
    case Z.O0b.PAUSED:
      t = n.pauseReason !== F.Id.FRACTIONAL_PREMIUM ? H.guildBoostingSubscriptionRowPaused : H.guildBoostingSubscriptionRowActive;
      break;
    default:
      t = H.guildBoostingSubscriptionRowActive
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: o()(t, c),
      children: [(0, r.jsx)("div", {
        className: H.guildBoostingSubscriptionRowBackground
      }), (0, r.jsx)("div", {
        className: H.guildBoostingImage
      }), (0, r.jsxs)("div", {
        className: H.guildBoostingSubscriptionRowBody,
        children: [(0, r.jsx)("div", {
          className: o()(H.guildBoostingWordmark, {
            [H.canceled]: g
          })
        }), (0, r.jsx)("div", {
          children: (0, N.bt)({
            subscription: n,
            renewalInvoicePreview: i,
            user: u,
            fractionalPremiumInfo: a
          })
        })]
      }), s && (0, r.jsx)(k.Z, {
        color: p.zx.Colors.BRAND,
        onClick: () => m.Z.open(Z.oAB.GUILD_BOOSTING),
        children: V.intl.string(V.t["NQ5g/f"])
      })]
    }), !s && (0, r.jsx)(h.Text, {
      className: H.boostingDesktopAppBlurb,
      variant: "text-sm/normal",
      children: V.intl.format(d.tq ? V.t.uxYBER : V.t.k6haR0, {
        openAppHook: () => (0, b.Z)(Y)
      })
    })]
  })
}

function K() {
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

function z() {
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

function q(e) {
  let {
    daysPastDue: t,
    subscription: n,
    openInvoiceId: a
  } = e, {
    analyticsLocations: o
  } = (0, E.ZP)(g.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return i.useEffect(() => {
    A.default.track(Z.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: H.paymentBanner,
    children: [(0, r.jsx)(h.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      className: H.paymentBannerIcon,
      color: _.Z.unsafe_rawColors.YELLOW_260.css
    }), (0, r.jsx)(h.Text, {
      className: H.paymentBannerText,
      variant: "text-sm/normal",
      children: V.intl.format(V.t["0nbf/P"], {
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

function X(e) {
  let {
    subscription: t,
    renewalInvoicePreview: n,
    openInvoice: i,
    className: a,
    fractionalPremiumInfo: s
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(H.billingInformation, a),
    children: [(0, r.jsx)(h.vwX, {
      tag: "h3",
      className: H.detailBlockHeader,
      children: V.intl.string(V.t.KXQjfX)
    }), (0, r.jsx)("div", {
      children: N.ZP.getBillingInformationString(t, n, i, false, s)
    })]
  })
}

function Q() {
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

function J(e) {
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
  }, [m] = (0, P.ED)(p);
  m = null != u ? u : m;
  let b = null != d ? {} : {
      subscriptionId: t.id,
      renewal: true,
      applyEntitlements: true,
      analyticsLocations: _,
      analyticsLocation: n
    },
    [O] = (0, P.ED)(b);
  O = null != d ? d : O;
  let v = (0, y.Z)(),
    I = (0, x.$)("subscription_details"),
    T = (0, w.lr)(),
    S = N.ZP.isBaseSubscriptionCanceled(t),
    A = (0, L.P)(t, i);
  if (null == m || null == O) return (0, r.jsx)(h.$jN, {});
  let C = A ? (0, w.Yi)(O) : null,
    D = null != C || null != T && (T.discountId === B.dT || T.discountId === B.dB),
    k = A && (S && null != I || !S && D);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: H.subscriptionRows,
      children: [k ? (0, r.jsx)(j.Z, {
        subscription: t,
        invoicePreview: O,
        paymentSource: i,
        discountOffer: I,
        renewalChurnDiscountInfo: C,
        discountInfo: T,
        isLoading: a,
        analyticsLocation: n
      }) : (0, r.jsx)(M.Z, {
        subscription: t,
        renewalInvoicePreview: m,
        paymentSource: i,
        busy: a,
        analyticsLocation: n
      }), (0, r.jsx)(W, {
        subscription: t,
        renewalInvoicePreview: m,
        fromStandaloneBillingPage: s,
        className: H.guildSubscriptionRow,
        fractionalPremiumInfo: v
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(h.y5t, {
        component: (0, r.jsx)(h.vwX, {
          tag: "h5",
          children: V.intl.string(V.t.Sb6wIy)
        }),
        children: (0, r.jsxs)("div", {
          className: H.details,
          children: [(0, r.jsx)(X, {
            subscription: t,
            renewalInvoicePreview: O,
            className: H.detailsBlock,
            fractionalPremiumInfo: v,
            openInvoice: f
          }), (0, r.jsxs)("div", {
            className: o()(H.detailsBlock, {
              [H.redBorder]: l
            }),
            children: [(0, r.jsx)(h.vwX, {
              tag: "h3",
              className: H.detailBlockHeader,
              children: t.isPurchasedExternally && null != t.paymentGateway ? V.intl.formatToPlainString(V.t.rTk9v7, {
                paymentGatewayName: Z.Vzj[t.paymentGateway]
              }) : V.intl.string(V.t.iRzXKS)
            }), (0, r.jsx)(U.Z, {
              subscription: t,
              onPaymentSourceAdded: R.i1,
              highlightAddPaymentMethodButton: c || l,
              analyticsLocation: n,
              currentInvoicePreview: m,
              dropdownClassName: H.paymentDropdown
            })]
          })]
        })
      })
    })]
  })
}
let $ = new Set([Chunk981631.O0b.ACTIVE, Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.CANCELED, Chunk981631.O0b.PAUSE_PENDING, Chunk981631.O0b.PAUSED]);

function ee() {
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

function et(e) {
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
    analyticsLocations: d
  } = (0, E.ZP)(g.Z.SUBSCRIPTION_DETAILS), _ = (0, x.$)("subscription_details"), p = null != a ? a.slice(1) : [], [m] = (0, P.ED)({
    subscriptionId: i.id,
    renewal: true,
    analyticsLocations: d,
    analyticsLocation: c
  }), [b] = (0, P.ED)({
    subscriptionId: i.id,
    renewal: true,
    applyEntitlements: true,
    analyticsLocations: d,
    analyticsLocation: c,
    userDiscountOfferId: null == _ ? true : _.id
  }), y = null == o ? true : o.invalid, O = (0, f.e7)([S.default], () => {
    var e;
    return null == (e = S.default.getCurrentUser()) ? true : e.hasFreePremium()
  }), v = u()(i.currentPeriodEnd), I = null != i.paymentSourceId, A = null != (t = null == b ? true : b.total) ? t : 0, C = !I && A > 0 && (7 >= v.diff(u()(), "days") || i.status === Z.O0b.PAST_DUE) && !O && !i.isPurchasedExternally, N = y && i.status === Z.O0b.PAST_DUE && !O && !i.isPurchasedExternally, R = (0, D.U)(), w = !O && R, L = (null == i ? true : i.status) === Z.O0b.PAST_DUE, j = L ? u()().diff(u()(i.currentPeriodStart), "days") : 0, [k] = (0, P.Ox)({
    subscriptionId: i.id,
    preventFetch: !(w || L)
  });
  return null == m || null == b ? (0, r.jsx)(h.$jN, {}) : (null != i.renewalMutations && (i.renewalMutations.planId !== i.planId && !(0, T.Q0)(i.renewalMutations.planId) || i.hasExternalPlanChange) && (n = (0, r.jsx)(G.Z, {
    subscription: i,
    renewalMutations: i.renewalMutations,
    className: H.renewalMutationNotice,
    analyticsLocation: c
  })), (0, r.jsx)("div", {
    children: (0, r.jsxs)(h.y5t, {
      component: (0, r.jsx)(h.vwX, {
        className: H.sectionTitle,
        tag: "h1",
        children: V.intl.string(V.t["/gs+Pz"])
      }),
      children: [C ? (0, r.jsx)(K, {}) : null, N ? (0, r.jsx)(z, {}) : null, w && null != k ? (0, r.jsx)(q, {
        daysPastDue: j,
        subscription: i,
        openInvoiceId: k.id
      }) : null, n, (0, r.jsx)("div", {
        children: (0, r.jsx)("p", {
          className: H.sectionDescription,
          children: V.intl.string(V.t.D8UpUl)
        })
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          className: p.length > 0 ? H.dupSubscriptionRow : H.__invalid_singleSubscription,
          children: (0, r.jsx)(J, {
            subscription: i,
            analyticsLocation: c,
            paymentSource: o,
            busy: s,
            fromStandaloneBillingPage: l,
            showNoPaymentMethod: C,
            showInvalidPaymentMethod: N,
            fetchedCurrentInvoicePreview: m,
            fetchedRenewalInvoicePreview: b,
            fetchedOpenInvoice: k
          })
        }), p.map((e, t) => (0, r.jsxs)("div", {
          className: H.dupSubscriptionRow,
          children: [(0, r.jsx)(h.vwX, {
            tag: "h2",
            className: H.duplicateHeader,
            children: "Duplicate Subscriptions"
          }), (0, r.jsx)(J, {
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
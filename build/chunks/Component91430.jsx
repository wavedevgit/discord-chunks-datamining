/** Chunk was on web.js **/
/** chunk id: 91430, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MM: () => en,
  Yn: () => ea,
  ZP: () => eo,
  eS: () => ei
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
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk17894 = require("./17894.js"),
  Chunk975298 = require("./975298.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk266454 = require("./266454.js"),
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
  Chunk975772 = require("./975772.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk362786 = require("./362786.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk903163 = require("./903163.js");
let X = "app";

function Q(e) {
  let t, {
      subscription: n,
      renewalInvoicePreview: i,
      fractionalPremiumInfo: a,
      fromStandaloneBillingPage: s = true,
      className: c
    } = e,
    u = (0, f.e7)([N.default], () => {
      let e = N.default.getCurrentUser();
      return l()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
    });
  if (0 === (0, w.uV)(n.additionalPlans)) return null;
  let {
    status: _
  } = n, p = (0, w.v6)(n);
  if (p) t = q.guildBoostingSubscriptionRowCanceled;
  else switch (_) {
    case Y.O0b.PAST_DUE:
    case Y.O0b.ACCOUNT_HOLD:
    case Y.O0b.BILLING_RETRY:
      t = q.guildBoostingSubscriptionRowFailedPayment;
      break;
    case Y.O0b.PAUSE_PENDING:
    case Y.O0b.PAUSED:
      t = n.pauseReason !== W.Id.FRACTIONAL_PREMIUM ? q.guildBoostingSubscriptionRowPaused : q.guildBoostingSubscriptionRowActive;
      break;
    default:
      t = q.guildBoostingSubscriptionRowActive
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: o()(t, c),
      children: [(0, r.jsx)("div", {
        className: q.guildBoostingSubscriptionRowBackground
      }), (0, r.jsx)("div", {
        className: q.guildBoostingImage
      }), (0, r.jsxs)("div", {
        className: q.guildBoostingSubscriptionRowBody,
        children: [(0, r.jsx)("div", {
          className: o()(q.guildBoostingWordmark, {
            [q.canceled]: p
          })
        }), (0, r.jsx)("div", {
          children: (0, w.bt)({
            subscription: n,
            renewalInvoicePreview: i,
            user: u,
            fractionalPremiumInfo: a
          })
        })]
      }), s && (0, r.jsx)(G.Z, {
        onClick: () => (0, A.openUserSettings)(S.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
          section: Y.oAB.GUILD_BOOSTING
        }),
        text: z.intl.string(z.t["NQ5g/U"])
      })]
    }), !s && (0, r.jsx)(h.Text, {
      className: q.boostingDesktopAppBlurb,
      variant: "text-sm/normal",
      children: z.intl.format(d.tq ? z.t.uxYBEa : z.t.k6haR9, {
        openAppHook: () => (0, b.Z)(X)
      })
    })]
  })
}

function J() {
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
      children: Chunk388032.intl.string(Chunk388032.t.xFHEMa)
    })]
  })
}

function $() {
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
      children: Chunk388032.intl.string(Chunk388032.t["j+nuQZ"])
    })]
  })
}

function ee(e) {
  let {
    daysPastDue: t,
    subscription: n,
    openInvoiceId: a
  } = e, {
    analyticsLocations: o
  } = (0, E.ZP)(g.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return i.useEffect(() => {
    R.default.track(Y.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: q.paymentBanner,
    children: [(0, r.jsx)(h.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      className: q.paymentBannerIcon,
      color: p.Z.unsafe_rawColors.YELLOW_260.css
    }), (0, r.jsx)(h.Text, {
      className: q.paymentBannerText,
      variant: "text-sm/normal",
      children: z.intl.format(z.t["0nbf/G"], {
        daysPastDue: t,
        paymentModalRedirect: () => {
          (0, T.Z)({
            initialPlanId: n.planIdFromItems,
            openInvoiceId: a,
            analyticsLocations: o
          })
        }
      })
    })]
  })
}

function et(e) {
  let {
    subscription: t,
    renewalInvoicePreview: n,
    openInvoice: i,
    className: a,
    fractionalPremiumInfo: s
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(q.billingInformation, a),
    children: [(0, r.jsx)(h.Heading, {
      variant: "heading-md/semibold",
      className: q.detailBlockHeader,
      children: z.intl.string(z.t.KXQjfc)
    }), (0, r.jsx)("div", {
      children: w.ZP.getBillingInformationString(t, n, i, false, s)
    })]
  })
}

function en() {
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-lg/semibold",
      className: Chunk903163.sectionTitle,
      children: Chunk388032.intl.string(Chunk388032.t["/gs+Pz"])
    }), (0, Chunk951288.jsx)("p", {
      className: Chunk903163.sectionDescription,
      children: Chunk388032.intl.string(Chunk388032.t.D8UpUo)
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
          children: Chunk388032.intl.string(Chunk388032.t.xCRgr1)
        })]
      })
    })]
  })
}

function er(e) {
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
  }, [m] = (0, L.ED)(p);
  m = null != u ? u : m;
  let b = null != d ? {} : {
      subscriptionId: t.id,
      renewal: true,
      applyEntitlements: true,
      analyticsLocations: _,
      analyticsLocation: n
    },
    [O] = (0, L.ED)(b);
  O = null != d ? d : O;
  let v = (0, y.Z)(),
    I = (0, k.$)(),
    T = (0, x.lr)(),
    S = w.ZP.isBaseSubscriptionCanceled(t),
    A = (0, j.P)(t, i);
  if (null == m || null == O) return (0, r.jsx)(h.$jN, {});
  let C = A ? (0, x.Yi)(O) : null,
    N = null != C || null != T && (T.discountId === H.dT || T.discountId === H.dB),
    R = A && (S && null != I || !S && N);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: q.subscriptionRows,
      children: [R ? (0, r.jsx)(U.Z, {
        subscription: t,
        invoicePreview: O,
        paymentSource: i,
        discountOffer: I,
        renewalChurnDiscountInfo: C,
        discountInfo: T,
        isLoading: a,
        analyticsLocation: n
      }) : (0, r.jsx)(B.Z, {
        subscription: t,
        renewalInvoicePreview: m,
        paymentSource: i,
        busy: a,
        analyticsLocation: n
      }), (0, r.jsx)(Q, {
        subscription: t,
        renewalInvoicePreview: m,
        fromStandaloneBillingPage: s,
        className: q.guildSubscriptionRow,
        fractionalPremiumInfo: v
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(h.C3N, {
        label: z.intl.string(z.t.Sb6wI1),
        children: (0, r.jsxs)("div", {
          className: q.details,
          children: [(0, r.jsx)(et, {
            subscription: t,
            renewalInvoicePreview: O,
            className: q.detailsBlock,
            fractionalPremiumInfo: v,
            openInvoice: f
          }), (0, r.jsx)("div", {
            className: o()(q.detailsBlock, {
              [q.redBorder]: l
            }),
            children: (0, r.jsx)(h.gNt, {
              label: t.isPurchasedExternally && null != t.paymentGateway ? z.intl.formatToPlainString(z.t["rTk9v/"], {
                paymentGatewayName: Y.Vzj[t.paymentGateway]
              }) : z.intl.string(z.t.iRzXKd),
              children: (0, r.jsx)(Z.Z, {
                subscription: t,
                onPaymentSourceAdded: D.i1,
                highlightAddPaymentMethodButton: c || l,
                analyticsLocation: n,
                currentInvoicePreview: m,
                dropdownClassName: q.paymentDropdown
              })
            })
          })]
        })
      })
    })]
  })
}
let ei = new Set([Chunk981631.O0b.ACTIVE, Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.CANCELED, Chunk981631.O0b.PAUSE_PENDING, Chunk981631.O0b.PAUSED]);

function ea() {
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
      children: Chunk388032.intl.format(Chunk388032.t["6eXiiC"], {
        helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.NITRO)
      })
    })]
  })
}

function eo(e) {
  var t;
  let n, {
    subscription: a,
    subscriptions: o,
    paymentSource: s,
    busy: l,
    fromStandaloneBillingPage: c = true,
    analyticsLocation: d,
    shouldRefetchInvoicesOnSubscriptionUpdate: b
  } = e;
  null != o && null != o[0] && (a = o[0]);
  let {
    analyticsLocations: y
  } = (0, E.ZP)(g.Z.SUBSCRIPTION_DETAILS), O = (0, k.$)(), I = null != o ? o.slice(1) : [], [T, S] = i.useState(0);
  i.useEffect(() => {
    if (!b) return;
    let e = e => {
      e.subscription.id === a.id && S(e => e + 1)
    };
    return m.Z.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e), () => {
      m.Z.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e)
    }
  }, [a.id, b]);
  let [A] = (0, L.ED)({
    subscriptionId: a.id,
    renewal: true,
    analyticsLocations: y,
    analyticsLocation: d,
    fetchKey: T
  }), [R] = (0, L.ED)({
    subscriptionId: a.id,
    renewal: true,
    applyEntitlements: true,
    analyticsLocations: y,
    analyticsLocation: d,
    userDiscountOfferId: null == O ? true : O.id,
    fetchKey: T
  }), w = (0, V.x)(), D = null == s ? true : s.invalid, x = (0, f.e7)([N.default], () => {
    var e;
    return null == (e = N.default.getCurrentUser()) ? true : e.hasFreePremium()
  }), j = u()(a.currentPeriodEnd), U = null != a.paymentSourceId, G = null != (t = null == R ? true : R.total) ? t : 0, B = !U && G > 0 && (7 >= j.diff(u()(), "days") || a.status === Y.O0b.PAST_DUE) && !x && !a.isPurchasedExternally, Z = D && a.status === Y.O0b.PAST_DUE && !x && !a.isPurchasedExternally, H = (0, M.U)(), W = !x && H, X = (null == a ? true : a.status) === Y.O0b.PAST_DUE, Q = X ? u()().diff(u()(a.currentPeriodStart), "days") : 0, [et] = (0, L.Ox)({
    subscriptionId: a.id,
    preventFetch: !(W || X)
  });
  return null == A || null == R ? (0, r.jsx)(h.$jN, {}) : (null != a.renewalMutations && (a.renewalMutations.planId !== a.planId && !(0, C.Q0)(a.renewalMutations.planId) || a.hasExternalPlanChange) && (n = (0, r.jsx)(F.Z, {
    subscription: a,
    renewalMutations: a.renewalMutations,
    className: q.renewalMutationNotice,
    analyticsLocation: d
  })), (0, r.jsxs)(h.C3N, {
    label: z.intl.string(z.t["/gs+Pz"]),
    description: z.intl.string(z.t.D8UpUo),
    children: [B ? (0, r.jsx)(J, {}) : null, Z ? (0, r.jsx)($, {}) : null, W && null != et ? (0, r.jsx)(ee, {
      daysPastDue: Q,
      subscription: a,
      openInvoiceId: et.id
    }) : null, n, w && (0, r.jsx)(h.Wn, {
      messageType: h.QYI.INFO,
      action: (0, r.jsx)(h.P3F, {
        onClick: () => {
          (0, v.Q3)(_.z.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
            dismissAction: K.L.USER_DISMISS
          })
        },
        className: q.helpNoticeDismissIcon,
        children: (0, r.jsx)(h.Dio, {
          size: "sm",
          color: p.Z.colors.ICON_PRIMARY
        })
      }),
      children: z.intl.format(z.t.K4QorK, {
        helpdeskArticle: P.Z.getArticleURL(Y.BhN.BILLING)
      })
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: I.length > 0 ? q.dupSubscriptionRow : q.__invalid_singleSubscription,
        children: (0, r.jsx)(er, {
          subscription: a,
          analyticsLocation: d,
          paymentSource: s,
          busy: l,
          fromStandaloneBillingPage: c,
          showNoPaymentMethod: B,
          showInvalidPaymentMethod: Z,
          fetchedCurrentInvoicePreview: A,
          fetchedRenewalInvoicePreview: R,
          fetchedOpenInvoice: et
        })
      }), I.map((e, t) => (0, r.jsxs)("div", {
        className: q.dupSubscriptionRow,
        children: [(0, r.jsx)(h.Heading, {
          variant: "heading-md/semibold",
          className: q.duplicateHeader,
          children: "Duplicate Subscriptions"
        }), (0, r.jsx)(er, {
          subscription: e,
          analyticsLocation: d,
          paymentSource: s,
          busy: l,
          fromStandaloneBillingPage: c,
          showNoPaymentMethod: B,
          showInvalidPaymentMethod: Z,
          fetchedCurrentInvoicePreview: null,
          fetchedRenewalInvoicePreview: null,
          fetchedOpenInvoice: null
        })]
      }, t))]
    })]
  }))
}
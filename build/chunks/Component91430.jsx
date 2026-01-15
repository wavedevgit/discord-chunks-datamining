/** Chunk was on web.js **/
/** chunk id: 91430, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MM: () => er,
  Yn: () => eo,
  ZP: () => es,
  eS: () => ea
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk146761 = require("./146761.jsx"),
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
  Chunk703361 = require("./703361.js");
let X = "app";

function J(e) {
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
  if (0 === (0, R.uV)(n.additionalPlans)) return null;
  let {
    status: p
  } = n, _ = (0, R.v6)(n);
  if (_) t = Q.guildBoostingSubscriptionRowCanceled;
  else switch (p) {
    case W.O0b.PAST_DUE:
    case W.O0b.ACCOUNT_HOLD:
    case W.O0b.BILLING_RETRY:
      t = Q.guildBoostingSubscriptionRowFailedPayment;
      break;
    case W.O0b.PAUSE_PENDING:
    case W.O0b.PAUSED:
      t = n.pauseReason !== K.Id.FRACTIONAL_PREMIUM ? Q.guildBoostingSubscriptionRowPaused : Q.guildBoostingSubscriptionRowActive;
      break;
    default:
      t = Q.guildBoostingSubscriptionRowActive
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: o()(t, c),
      children: [(0, r.jsx)("div", {
        className: Q.guildBoostingSubscriptionRowBackground
      }), (0, r.jsx)("div", {
        className: Q.guildBoostingImage
      }), (0, r.jsxs)("div", {
        className: Q.guildBoostingSubscriptionRowBody,
        children: [(0, r.jsx)("div", {
          className: o()(Q.guildBoostingWordmark, {
            [Q.canceled]: _
          })
        }), (0, r.jsx)("div", {
          children: (0, R.bt)({
            subscription: n,
            renewalInvoicePreview: i,
            user: u,
            fractionalPremiumInfo: a
          })
        })]
      }), s && (0, r.jsx)(Z.Z, {
        onClick: () => (0, C.openUserSettings)(T.n.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
          section: W.oAB.GUILD_BOOSTING
        }),
        text: q.intl.string(q.t["NQ5g/U"])
      })]
    }), !s && (0, r.jsx)(h.Text, {
      className: Q.boostingDesktopAppBlurb,
      variant: "text-sm/normal",
      children: q.intl.format(d.tq ? q.t.uxYBEa : q.t.k6haR9, {
        openAppHook: () => (0, b.Z)(X)
      })
    })]
  })
}

function $() {
  return i.useEffect(() => {
    P.default.track(W.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_missing_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: Q.paymentBanner,
    children: [(0, r.jsx)(h.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      className: Q.paymentBannerIcon,
      color: _.Z.unsafe_rawColors.YELLOW_260.css
    }), (0, r.jsx)(h.Text, {
      className: Q.paymentBannerText,
      variant: "text-sm/normal",
      children: q.intl.string(q.t.xFHEMa)
    })]
  })
}

function ee() {
  return i.useEffect(() => {
    P.default.track(W.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: Q.paymentBanner,
    children: [(0, r.jsx)(h.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      className: Q.paymentBannerIcon,
      color: _.Z.unsafe_rawColors.RED_360.css
    }), (0, r.jsx)(h.Text, {
      className: Q.paymentBannerText,
      variant: "text-sm/normal",
      children: q.intl.string(q.t["j+nuQZ"])
    })]
  })
}

function et(e) {
  let {
    daysPastDue: t,
    subscription: n,
    openInvoiceId: a
  } = e, {
    analyticsLocations: o
  } = (0, E.ZP)(g.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return i.useEffect(() => {
    P.default.track(W.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: Q.paymentBanner,
    children: [(0, r.jsx)(h.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      className: Q.paymentBannerIcon,
      color: _.Z.unsafe_rawColors.YELLOW_260.css
    }), (0, r.jsx)(h.Text, {
      className: Q.paymentBannerText,
      variant: "text-sm/normal",
      children: q.intl.format(q.t["0nbf/G"], {
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

function en(e) {
  let {
    subscription: t,
    renewalInvoicePreview: n,
    openInvoice: i,
    className: a,
    fractionalPremiumInfo: s
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(Q.billingInformation, a),
    children: [(0, r.jsx)(h.Heading, {
      variant: "heading-md/semibold",
      className: Q.detailBlockHeader,
      children: q.intl.string(q.t.KXQjfc)
    }), (0, r.jsx)("div", {
      children: R.ZP.getBillingInformationString(t, n, i, false, s)
    })]
  })
}

function er() {
  let e = (0, f.e7)([N.default], () => N.default.getCurrentUser()),
    t = null != e && e.isPremiumGroupMember();
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(h.Heading, {
      variant: "heading-lg/semibold",
      className: Q.sectionTitle,
      children: q.intl.string(q.t["/gs+Pz"])
    }), (0, r.jsx)("p", {
      className: Q.sectionDescription,
      children: q.intl.string(q.t.D8UpUo)
    }), !t && (0, r.jsx)(h.Zbd, {
      className: Q.noItemsCard,
      type: h.Zbd.Types.CUSTOM,
      children: (0, r.jsxs)(O.Z, {
        align: O.Z.Align.CENTER,
        children: [(0, r.jsx)(S.Z, {
          game: null,
          size: S.A.SMALL,
          className: Q.noItemsIcon
        }), (0, r.jsx)("span", {
          className: Q.cardText,
          children: q.intl.string(q.t.xCRgr1)
        })]
      })
    }), t && (0, r.jsx)(k.d, {
      currentUser: e
    })]
  })
}

function ei(e) {
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
    fetchedOpenInvoice: f,
    isPremiumGroup: p
  } = e, {
    analyticsLocations: _
  } = (0, E.ZP)(g.Z.SUBSCRIPTION_DETAILS), m = null != u ? {} : {
    subscriptionId: t.id,
    renewal: true,
    analyticsLocations: _,
    analyticsLocation: n
  }, [b] = (0, x.ED)(m);
  b = null != u ? u : b;
  let O = null != d ? {} : {
      subscriptionId: t.id,
      renewal: true,
      applyEntitlements: true,
      analyticsLocations: _,
      analyticsLocation: n
    },
    [v] = (0, x.ED)(O);
  v = null != d ? d : v;
  let S = (0, y.Z)(),
    I = (0, M.$)(),
    T = (0, L.lr)(),
    C = R.ZP.isBaseSubscriptionCanceled(t),
    A = (0, U.P)(t, i);
  if (null == b || null == v) return (0, r.jsx)(h.$jN, {});
  let N = A ? (0, L.Yi)(v) : null,
    P = null != N || null != T && (T.discountId === Y.dT || T.discountId === Y.dB),
    w = A && (C && null != I || !C && P) ? (0, r.jsx)(G.Z, {
      subscription: t,
      invoicePreview: v,
      paymentSource: i,
      discountOffer: I,
      renewalChurnDiscountInfo: N,
      discountInfo: T,
      isLoading: a,
      analyticsLocation: n
    }) : (0, r.jsx)(F.Z, {
      subscription: t,
      currentInvoicePreview: b,
      renewalInvoicePreview: v,
      paymentSource: i,
      busy: a,
      analyticsLocation: n
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: Q.subscriptionRows,
      children: [!p && w, (0, r.jsx)(J, {
        subscription: t,
        renewalInvoicePreview: b,
        fromStandaloneBillingPage: s,
        className: Q.guildSubscriptionRow,
        fractionalPremiumInfo: S
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(h.C3N, {
        label: q.intl.string(q.t.Sb6wI1),
        children: (0, r.jsxs)("div", {
          className: Q.details,
          children: [(0, r.jsx)(en, {
            subscription: t,
            renewalInvoicePreview: v,
            className: Q.detailsBlock,
            fractionalPremiumInfo: S,
            openInvoice: f
          }), (0, r.jsx)("div", {
            className: o()(Q.detailsBlock, {
              [Q.redBorder]: l
            }),
            children: (0, r.jsx)(h.gNt, {
              label: t.isPurchasedExternally && null != t.paymentGateway ? q.intl.formatToPlainString(q.t["rTk9v/"], {
                paymentGatewayName: W.Vzj[t.paymentGateway]
              }) : q.intl.string(q.t.iRzXKd),
              children: (0, r.jsx)(B.Z, {
                subscription: t,
                onPaymentSourceAdded: D.i1,
                highlightAddPaymentMethodButton: c || l,
                analyticsLocation: n,
                currentInvoicePreview: b,
                dropdownClassName: Q.paymentDropdown
              })
            })
          })]
        })
      })
    })]
  })
}
let ea = new Set([Chunk981631.O0b.ACTIVE, Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.CANCELED, Chunk981631.O0b.PAUSE_PENDING, Chunk981631.O0b.PAUSED]);

function eo() {
  return i.useEffect(() => {
    P.default.track(W.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_duplicate_subscriptions"
    })
  }, []), (0, r.jsxs)("div", {
    className: Q.duplicateSubscriptionsBanner,
    children: [(0, r.jsx)(h.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: _.Z.unsafe_rawColors.RED_360.css
    }), (0, r.jsx)(h.Text, {
      className: Q.duplicateSubscriptionsBannerText,
      variant: "text-sm/normal",
      children: q.intl.format(q.t["6eXiiC"], {
        helpCenterLink: w.Z.getArticleURL(W.BhN.NITRO)
      })
    })]
  })
}

function es(e) {
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
  let y = (0, f.e7)([N.default], () => N.default.getCurrentUser()),
    {
      analyticsLocations: O
    } = (0, E.ZP)(g.Z.SUBSCRIPTION_DETAILS),
    S = (0, M.$)(),
    I = null != o ? o.slice(1) : [],
    [T, C] = i.useState(0);
  i.useEffect(() => {
    if (!b) return;
    let e = e => {
      e.subscription.id === a.id && C(e => e + 1)
    };
    return m.Z.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e), () => {
      m.Z.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e)
    }
  }, [a.id, b]);
  let [P] = (0, x.ED)({
    subscriptionId: a.id,
    renewal: true,
    analyticsLocations: O,
    analyticsLocation: d,
    fetchKey: T
  }), [R] = (0, x.ED)({
    subscriptionId: a.id,
    renewal: true,
    applyEntitlements: true,
    analyticsLocations: O,
    analyticsLocation: d,
    userDiscountOfferId: null == S ? true : S.id,
    fetchKey: T
  }), D = (0, H.x)(), L = null == s ? true : s.invalid, U = (0, f.e7)([N.default], () => {
    var e;
    return null == (e = N.default.getCurrentUser()) ? true : e.hasFreePremium()
  }), G = u()(a.currentPeriodEnd), Z = null != a.paymentSourceId, F = null != (t = null == R ? true : R.total) ? t : 0, B = !Z && F > 0 && (7 >= G.diff(u()(), "days") || a.status === W.O0b.PAST_DUE) && !U && !a.isPurchasedExternally, Y = L && a.status === W.O0b.PAST_DUE && !U && !a.isPurchasedExternally, K = (0, j.U)(), X = !U && K, J = (null == a ? true : a.status) === W.O0b.PAST_DUE, en = J ? u()().diff(u()(a.currentPeriodStart), "days") : 0, er = null != y && y.isPremiumGroupPrimary(), ea = a.hasAnyPremiumGroup, [eo] = (0, x.Ox)({
    subscriptionId: a.id,
    preventFetch: !(X || J)
  });
  return null == P || null == R ? (0, r.jsx)(h.$jN, {}) : (null != a.renewalMutations && (a.renewalMutations.planId !== a.planId && !(0, A.Q0)(a.renewalMutations.planId) || a.hasExternalPlanChange) && (n = (0, r.jsx)(V.Z, {
    subscription: a,
    renewalMutations: a.renewalMutations,
    className: Q.renewalMutationNotice,
    analyticsLocation: d
  })), (0, r.jsxs)(h.C3N, {
    label: q.intl.string(q.t["/gs+Pz"]),
    description: q.intl.string(q.t.D8UpUo),
    children: [B ? (0, r.jsx)($, {}) : null, Y ? (0, r.jsx)(ee, {}) : null, X && null != eo ? (0, r.jsx)(et, {
      daysPastDue: en,
      subscription: a,
      openInvoiceId: eo.id
    }) : null, er && ea && (0, r.jsx)(k.L, {
      subscription: a,
      analyticsLocations: O
    }), n, D && (0, r.jsx)(h.Wn, {
      messageType: h.QYI.INFO,
      action: (0, r.jsx)(h.P3F, {
        onClick: () => {
          (0, v.Q3)(p.z.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
            dismissAction: z.L.USER_DISMISS
          })
        },
        className: Q.helpNoticeDismissIcon,
        children: (0, r.jsx)(h.Dio, {
          size: "sm",
          color: _.Z.colors.ICON_STRONG
        })
      }),
      children: q.intl.format(q.t.K4QorK, {
        helpdeskArticle: w.Z.getArticleURL(W.BhN.BILLING)
      })
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: I.length > 0 ? Q.dupSubscriptionRow : Q.__invalid_singleSubscription,
        children: (0, r.jsx)(ei, {
          subscription: a,
          analyticsLocation: d,
          paymentSource: s,
          busy: l,
          fromStandaloneBillingPage: c,
          showNoPaymentMethod: B,
          showInvalidPaymentMethod: Y,
          fetchedCurrentInvoicePreview: P,
          fetchedRenewalInvoicePreview: R,
          fetchedOpenInvoice: eo,
          isPremiumGroup: er
        })
      }), I.map((e, t) => (0, r.jsxs)("div", {
        className: Q.dupSubscriptionRow,
        children: [(0, r.jsx)(h.Heading, {
          variant: "heading-md/semibold",
          className: Q.duplicateHeader,
          children: "Duplicate Subscriptions"
        }), (0, r.jsx)(ei, {
          subscription: e,
          analyticsLocation: d,
          paymentSource: s,
          busy: l,
          fromStandaloneBillingPage: c,
          showNoPaymentMethod: B,
          showInvalidPaymentMethod: Y,
          fetchedCurrentInvoicePreview: null,
          fetchedRenewalInvoicePreview: null,
          fetchedOpenInvoice: null,
          isPremiumGroup: false
        })]
      }, t))]
    })]
  }))
}
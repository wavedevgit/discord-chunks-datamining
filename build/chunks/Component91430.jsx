/** Chunk was on 20501 **/
/** chunk id: 91430, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  MM: () => q,
  Yn: () => Q,
  ZP: () => $,
  eS: () => J
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  d = require.n(Chunk913527),
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
  Chunk693569 = require("./693569.js");

function H(e) {
  let t, {
      subscription: n,
      renewalInvoicePreview: r,
      fractionalPremiumInfo: s,
      fromStandaloneBillingPage: l = true,
      className: c
    } = e,
    d = (0, u.e7)([v.default], () => {
      let e = v.default.getCurrentUser();
      return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
    });
  if (0 === (0, I.uV)(n.additionalPlans)) return null;
  let {
    status: m
  } = n, f = (0, I.v6)(n);
  if (f) t = F.guildBoostingSubscriptionRowCanceled;
  else switch (m) {
    case U.O0b.PAST_DUE:
    case U.O0b.ACCOUNT_HOLD:
    case U.O0b.BILLING_RETRY:
      t = F.guildBoostingSubscriptionRowFailedPayment;
      break;
    case U.O0b.PAUSE_PENDING:
    case U.O0b.PAUSED:
      t = n.pauseReason !== V.Id.FRACTIONAL_PREMIUM ? F.guildBoostingSubscriptionRowPaused : F.guildBoostingSubscriptionRowActive;
      break;
    default:
      t = F.guildBoostingSubscriptionRowActive
  }
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: a()(t, c),
      children: [(0, i.jsx)("div", {
        className: F.guildBoostingSubscriptionRowBackground
      }), (0, i.jsx)("div", {
        className: F.guildBoostingImage
      }), (0, i.jsxs)("div", {
        className: F.guildBoostingSubscriptionRowBody,
        children: [(0, i.jsx)("div", {
          className: a()(F.guildBoostingWordmark, {
            [F.canceled]: f
          })
        }), (0, i.jsx)("div", {
          children: (0, I.bt)({
            subscription: n,
            renewalInvoicePreview: r,
            user: d,
            fractionalPremiumInfo: s
          })
        })]
      }), l && (0, i.jsx)(w.Z, {
        color: p.zx.Colors.BRAND,
        onClick: () => h.Z.open(U.oAB.GUILD_BOOSTING),
        children: G.intl.string(G.t["NQ5g/f"])
      })]
    }), !l && (0, i.jsx)(g.Text, {
      className: F.boostingDesktopAppBlurb,
      variant: "text-sm/normal",
      children: G.intl.format(G.t.k6haR0, {
        openAppHook: () => (0, x.Z)("app")
      })
    })]
  })
}

function z() {
  return Chunk73800.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_missing_payment_method"
    })
  }, []), (0, Chunk255367.jsxs)("div", {
    className: Chunk693569.paymentBanner,
    children: [(0, Chunk255367.jsx)(Chunk481060.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      className: Chunk693569.paymentBannerIcon,
      color: Chunk692547.Z.unsafe_rawColors.YELLOW_260.css
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      className: Chunk693569.paymentBannerText,
      variant: "text-sm/normal",
      children: Chunk388032.intl.string(Chunk388032.t.xFHEMT)
    })]
  })
}

function W() {
  return Chunk73800.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, Chunk255367.jsxs)("div", {
    className: Chunk693569.paymentBanner,
    children: [(0, Chunk255367.jsx)(Chunk481060.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      className: Chunk693569.paymentBannerIcon,
      color: Chunk692547.Z.unsafe_rawColors.RED_360.css
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      className: Chunk693569.paymentBannerText,
      variant: "text-sm/normal",
      children: Chunk388032.intl.string(Chunk388032.t["j+nuQU"])
    })]
  })
}

function Y(e) {
  let {
    daysPastDue: t,
    subscription: n,
    openInvoiceId: s
  } = e, {
    analyticsLocations: a
  } = (0, b.ZP)(f.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return r.useEffect(() => {
    S.default.track(U.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, i.jsxs)("div", {
    className: F.paymentBanner,
    children: [(0, i.jsx)(g.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      className: F.paymentBannerIcon,
      color: m.Z.unsafe_rawColors.YELLOW_260.css
    }), (0, i.jsx)(g.Text, {
      className: F.paymentBannerText,
      variant: "text-sm/normal",
      children: G.intl.format(G.t["0nbf/P"], {
        daysPastDue: t,
        paymentModalRedirect: () => {
          (0, C.Z)({
            initialPlanId: n.planIdFromItems,
            openInvoiceId: s,
            analyticsLocations: a
          })
        }
      })
    })]
  })
}

function K(e) {
  let {
    subscription: t,
    renewalInvoicePreview: n,
    openInvoice: r,
    className: s,
    fractionalPremiumInfo: l
  } = e;
  return (0, i.jsxs)("div", {
    className: a()(F.billingInformation, s),
    children: [(0, i.jsx)(g.vwX, {
      tag: "h3",
      className: F.detailBlockHeader,
      children: G.intl.string(G.t.KXQjfX)
    }), (0, i.jsx)("div", {
      children: I.ZP.getBillingInformationString(t, n, r, false, l)
    })]
  })
}

function q() {
  return (0, Chunk255367.jsxs)("div", {
    children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
      className: Chunk693569.sectionTitle,
      tag: "h1",
      children: Chunk388032.intl.string(Chunk388032.t["/gs+Pz"])
    }), (0, Chunk255367.jsx)("p", {
      className: Chunk693569.sectionDescription,
      children: Chunk388032.intl.string(Chunk388032.t.D8UpUl)
    }), (0, Chunk255367.jsx)(Chunk481060.Zbd, {
      className: Chunk693569.noItemsCard,
      type: Chunk481060.Zbd.Types.CUSTOM,
      children: (0, Chunk255367.jsxs)(Chunk600164.Z, {
        align: Chunk600164.Z.Align.CENTER,
        children: [(0, Chunk255367.jsx)(Chunk925329.Z, {
          game: null,
          size: Chunk925329.Z.Sizes.SMALL,
          className: Chunk693569.noItemsIcon
        }), (0, Chunk255367.jsx)("span", {
          className: Chunk693569.cardText,
          children: Chunk388032.intl.string(Chunk388032.t.xCRgr6)
        })]
      })
    })]
  })
}

function X(e) {
  let {
    subscription: t,
    analyticsLocation: n,
    paymentSource: r,
    busy: s,
    fromStandaloneBillingPage: l,
    showInvalidPaymentMethod: o,
    showNoPaymentMethod: c,
    fetchedCurrentInvoicePreview: d,
    fetchedRenewalInvoicePreview: u,
    fetchedOpenInvoice: m
  } = e, {
    analyticsLocations: p
  } = (0, b.ZP)(f.Z.SUBSCRIPTION_DETAILS), h = null != d ? {} : {
    subscriptionId: t.id,
    renewal: true,
    analyticsLocations: p,
    analyticsLocation: n
  }, [x] = (0, y.ED)(h);
  x = null != d ? d : x;
  let j = null != u ? {} : {
      subscriptionId: t.id,
      renewal: true,
      applyEntitlements: true,
      analyticsLocations: p,
      analyticsLocation: n
    },
    [E] = (0, y.ED)(j);
  E = null != u ? u : E;
  let C = (0, _.Z)(),
    O = (0, R.$)(),
    v = (0, A.lr)(),
    S = I.ZP.isBaseSubscriptionCanceled(t),
    T = (0, D.P)(t, r);
  if (null == x || null == E) return (0, i.jsx)(g.$jN, {});
  let P = T ? (0, A.Yi)(E) : null,
    w = null != P || null != v && (v.discountId === B.dT || v.discountId === B.dB),
    M = T && (S && null != O || !S && w);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: F.subscriptionRows,
      children: [M ? (0, i.jsx)(Z.Z, {
        subscription: t,
        currentInvoicePreview: x,
        renewalInvoicePreview: E,
        paymentSource: r,
        discountOffer: O,
        renewalChurnDiscountInfo: P,
        discountInfo: v,
        isLoading: s,
        analyticsLocation: n
      }) : (0, i.jsx)(k.Z, {
        subscription: t,
        renewalInvoicePreview: x,
        paymentSource: r,
        busy: s,
        analyticsLocation: n
      }), (0, i.jsx)(H, {
        subscription: t,
        renewalInvoicePreview: x,
        fromStandaloneBillingPage: l,
        className: F.guildSubscriptionRow,
        fractionalPremiumInfo: C
      })]
    }), (0, i.jsx)("div", {
      children: (0, i.jsx)(g.y5t, {
        component: (0, i.jsx)(g.vwX, {
          tag: "h5",
          children: G.intl.string(G.t.Sb6wIy)
        }),
        children: (0, i.jsxs)("div", {
          className: F.details,
          children: [(0, i.jsx)(K, {
            subscription: t,
            renewalInvoicePreview: E,
            className: F.detailsBlock,
            fractionalPremiumInfo: C,
            openInvoice: m
          }), (0, i.jsxs)("div", {
            className: a()(F.detailsBlock, {
              [F.redBorder]: o
            }),
            children: [(0, i.jsx)(g.vwX, {
              tag: "h3",
              className: F.detailBlockHeader,
              children: t.isPurchasedExternally && null != t.paymentGateway ? G.intl.formatToPlainString(G.t.rTk9v7, {
                paymentGatewayName: U.Vzj[t.paymentGateway]
              }) : G.intl.string(G.t.iRzXKS)
            }), (0, i.jsx)(L.Z, {
              subscription: t,
              onPaymentSourceAdded: N.i1,
              highlightAddPaymentMethodButton: c || o,
              analyticsLocation: n,
              currentInvoicePreview: x,
              dropdownClassName: F.paymentDropdown
            })]
          })]
        })
      })
    })]
  })
}
let J = new Set([Chunk981631.O0b.ACTIVE, Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.CANCELED, Chunk981631.O0b.PAUSE_PENDING, Chunk981631.O0b.PAUSED]);

function Q() {
  return Chunk73800.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_duplicate_subscriptions"
    })
  }, []), (0, Chunk255367.jsxs)("div", {
    className: Chunk693569.duplicateSubscriptionsBanner,
    children: [(0, Chunk255367.jsx)(Chunk481060.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: Chunk692547.Z.unsafe_rawColors.RED_360.css
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      className: Chunk693569.duplicateSubscriptionsBannerText,
      variant: "text-sm/normal",
      children: Chunk388032.intl.format(Chunk388032.t["6eXiiI"], {
        helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.NITRO)
      })
    })]
  })
}

function $(e) {
  var t;
  let n, {
    subscription: r,
    subscriptions: s,
    paymentSource: a,
    busy: l,
    fromStandaloneBillingPage: o = true,
    analyticsLocation: c
  } = e;
  null != s && null != s[0] && (r = s[0]);
  let {
    analyticsLocations: m
  } = (0, b.ZP)(f.Z.SUBSCRIPTION_DETAILS), p = null != s ? s.slice(1) : [], [h] = (0, y.ED)({
    subscriptionId: r.id,
    renewal: true,
    analyticsLocations: m,
    analyticsLocation: c
  }), [x] = (0, y.ED)({
    subscriptionId: r.id,
    renewal: true,
    applyEntitlements: true,
    analyticsLocations: m,
    analyticsLocation: c
  }), _ = null == a ? true : a.invalid, j = (0, u.e7)([v.default], () => {
    var e;
    return null == (e = v.default.getCurrentUser()) ? true : e.hasFreePremium()
  }), E = d()(r.currentPeriodEnd), C = null != r.paymentSourceId, S = null != (t = null == x ? true : x.total) ? t : 0, T = !C && S > 0 && (7 >= E.diff(d()(), "days") || r.status === U.O0b.PAST_DUE) && !j && !r.isPurchasedExternally, I = _ && r.status === U.O0b.PAST_DUE && !j && !r.isPurchasedExternally, N = (0, P.U)(), A = !j && N, R = (null == r ? true : r.status) === U.O0b.PAST_DUE, D = R ? d()().diff(d()(r.currentPeriodStart), "days") : 0, [Z] = (0, y.Ox)({
    subscriptionId: r.id,
    preventFetch: !(A || R)
  });
  return null == h || null == x ? (0, i.jsx)(g.$jN, {}) : (null != r.renewalMutations && (r.renewalMutations.planId !== r.planId && !(0, O.Q0)(r.renewalMutations.planId) || r.hasExternalPlanChange) && (n = (0, i.jsx)(M.Z, {
    subscription: r,
    renewalMutations: r.renewalMutations,
    className: F.renewalMutationNotice,
    analyticsLocation: c
  })), (0, i.jsx)("div", {
    children: (0, i.jsxs)(g.y5t, {
      component: (0, i.jsx)(g.vwX, {
        className: F.sectionTitle,
        tag: "h1",
        children: G.intl.string(G.t["/gs+Pz"])
      }),
      children: [T ? (0, i.jsx)(z, {}) : null, I ? (0, i.jsx)(W, {}) : null, A && null != Z ? (0, i.jsx)(Y, {
        daysPastDue: D,
        subscription: r,
        openInvoiceId: Z.id
      }) : null, n, (0, i.jsx)("div", {
        children: (0, i.jsx)("p", {
          className: F.sectionDescription,
          children: G.intl.string(G.t.D8UpUl)
        })
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)("div", {
          className: p.length > 0 ? F.dupSubscriptionRow : F.__invalid_singleSubscription,
          children: (0, i.jsx)(X, {
            subscription: r,
            analyticsLocation: c,
            paymentSource: a,
            busy: l,
            fromStandaloneBillingPage: o,
            showNoPaymentMethod: T,
            showInvalidPaymentMethod: I,
            fetchedCurrentInvoicePreview: h,
            fetchedRenewalInvoicePreview: x,
            fetchedOpenInvoice: Z
          })
        }), p.map((e, t) => (0, i.jsxs)("div", {
          className: F.dupSubscriptionRow,
          children: [(0, i.jsx)(g.vwX, {
            tag: "h2",
            className: F.duplicateHeader,
            children: "Duplicate Subscriptions"
          }), (0, i.jsx)(X, {
            subscription: e,
            analyticsLocation: c,
            paymentSource: a,
            busy: l,
            fromStandaloneBillingPage: o,
            showNoPaymentMethod: T,
            showInvalidPaymentMethod: I,
            fetchedCurrentInvoicePreview: null,
            fetchedRenewalInvoicePreview: null,
            fetchedOpenInvoice: null
          })]
        }, t))]
      })]
    })
  }))
}
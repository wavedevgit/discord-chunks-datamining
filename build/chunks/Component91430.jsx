/** Chunk was on 75708 **/
/** chunk id: 91430, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  MM: () => H,
  Yn: () => Y,
  ZP: () => K,
  eS: () => W
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
  Chunk160913 = require("./160913.js"),
  Chunk987997 = require("./987997.jsx"),
  Chunk393411 = require("./393411.jsx"),
  Chunk908951 = require("./908951.jsx"),
  Chunk592889 = require("./592889.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk362786 = require("./362786.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk772526 = require("./772526.js");

function B(e) {
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
  if (f) t = M.guildBoostingSubscriptionRowCanceled;
  else switch (m) {
    case w.O0b.PAST_DUE:
    case w.O0b.ACCOUNT_HOLD:
    case w.O0b.BILLING_RETRY:
      t = M.guildBoostingSubscriptionRowFailedPayment;
      break;
    case w.O0b.PAUSE_PENDING:
    case w.O0b.PAUSED:
      t = n.pauseReason !== k.Id.FRACTIONAL_PREMIUM ? M.guildBoostingSubscriptionRowPaused : M.guildBoostingSubscriptionRowActive;
      break;
    default:
      t = M.guildBoostingSubscriptionRowActive
  }
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: a()(t, c),
      children: [(0, i.jsx)("div", {
        className: M.guildBoostingSubscriptionRowBackground
      }), (0, i.jsx)("div", {
        className: M.guildBoostingImage
      }), (0, i.jsxs)("div", {
        className: M.guildBoostingSubscriptionRowBody,
        children: [(0, i.jsx)("div", {
          className: a()(M.guildBoostingWordmark, {
            [M.canceled]: f
          })
        }), (0, i.jsx)("div", {
          children: (0, I.bt)({
            subscription: n,
            renewalInvoicePreview: r,
            user: d,
            fractionalPremiumInfo: s
          })
        })]
      }), l && (0, i.jsx)(P.Z, {
        color: p.zx.Colors.BRAND,
        onClick: () => h.Z.open(w.oAB.GUILD_BOOSTING),
        children: L.intl.string(L.t["NQ5g/f"])
      })]
    }), !l && (0, i.jsx)(g.Text, {
      className: M.boostingDesktopAppBlurb,
      variant: "text-sm/normal",
      children: L.intl.format(L.t.k6haR0, {
        openAppHook: () => (0, x.Z)("app")
      })
    })]
  })
}

function U() {
  return Chunk73800.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_missing_payment_method"
    })
  }, []), (0, Chunk255367.jsxs)("div", {
    className: Chunk772526.paymentBanner,
    children: [(0, Chunk255367.jsx)(Chunk481060.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      className: Chunk772526.paymentBannerIcon,
      color: Chunk692547.Z.unsafe_rawColors.YELLOW_260.css
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      className: Chunk772526.paymentBannerText,
      variant: "text-sm/normal",
      children: Chunk388032.intl.string(Chunk388032.t.xFHEMT)
    })]
  })
}

function V() {
  return Chunk73800.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, Chunk255367.jsxs)("div", {
    className: Chunk772526.paymentBanner,
    children: [(0, Chunk255367.jsx)(Chunk481060.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      className: Chunk772526.paymentBannerIcon,
      color: Chunk692547.Z.unsafe_rawColors.RED_360.css
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      className: Chunk772526.paymentBannerText,
      variant: "text-sm/normal",
      children: Chunk388032.intl.string(Chunk388032.t["j+nuQU"])
    })]
  })
}

function G(e) {
  let {
    daysPastDue: t,
    subscription: n,
    openInvoiceId: s
  } = e, {
    analyticsLocations: a
  } = (0, b.ZP)(f.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return r.useEffect(() => {
    S.default.track(w.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, i.jsxs)("div", {
    className: M.paymentBanner,
    children: [(0, i.jsx)(g.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      className: M.paymentBannerIcon,
      color: m.Z.unsafe_rawColors.YELLOW_260.css
    }), (0, i.jsx)(g.Text, {
      className: M.paymentBannerText,
      variant: "text-sm/normal",
      children: L.intl.format(L.t["0nbf/P"], {
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

function F(e) {
  let {
    subscription: t,
    renewalInvoicePreview: n,
    openInvoice: r,
    className: s,
    fractionalPremiumInfo: l
  } = e;
  return (0, i.jsxs)("div", {
    className: a()(M.billingInformation, s),
    children: [(0, i.jsx)(g.vwX, {
      tag: "h3",
      className: M.detailBlockHeader,
      children: L.intl.string(L.t.KXQjfX)
    }), (0, i.jsx)("div", {
      children: I.ZP.getBillingInformationString(t, n, r, false, l)
    })]
  })
}

function H() {
  return (0, Chunk255367.jsxs)("div", {
    children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
      className: Chunk772526.sectionTitle,
      tag: "h1",
      children: Chunk388032.intl.string(Chunk388032.t["/gs+Pz"])
    }), (0, Chunk255367.jsx)("p", {
      className: Chunk772526.sectionDescription,
      children: Chunk388032.intl.string(Chunk388032.t.D8UpUl)
    }), (0, Chunk255367.jsx)(Chunk481060.Zbd, {
      className: Chunk772526.noItemsCard,
      type: Chunk481060.Zbd.Types.CUSTOM,
      children: (0, Chunk255367.jsxs)(Chunk600164.Z, {
        align: Chunk600164.Z.Align.CENTER,
        children: [(0, Chunk255367.jsx)(Chunk925329.Z, {
          game: null,
          size: Chunk925329.Z.Sizes.SMALL,
          className: Chunk772526.noItemsIcon
        }), (0, Chunk255367.jsx)("span", {
          className: Chunk772526.cardText,
          children: Chunk388032.intl.string(Chunk388032.t.xCRgr6)
        })]
      })
    })]
  })
}

function z(e) {
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
  let C = (0, _.Z)();
  return null == x || null == E ? (0, i.jsx)(g.$jN, {}) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: M.subscriptionRows,
      children: [(0, i.jsx)(R.Z, {
        subscription: t,
        renewalInvoicePreview: x,
        paymentSource: r,
        busy: s,
        analyticsLocation: n
      }), (0, i.jsx)(B, {
        subscription: t,
        renewalInvoicePreview: x,
        fromStandaloneBillingPage: l,
        className: M.guildSubscriptionRow,
        fractionalPremiumInfo: C
      })]
    }), (0, i.jsx)("div", {
      children: (0, i.jsx)(g.y5t, {
        component: (0, i.jsx)(g.vwX, {
          tag: "h5",
          children: L.intl.string(L.t.Sb6wIy)
        }),
        children: (0, i.jsxs)("div", {
          className: M.details,
          children: [(0, i.jsx)(F, {
            subscription: t,
            renewalInvoicePreview: E,
            className: M.detailsBlock,
            fractionalPremiumInfo: C,
            openInvoice: m
          }), (0, i.jsxs)("div", {
            className: a()(M.detailsBlock, {
              [M.redBorder]: o
            }),
            children: [(0, i.jsx)(g.vwX, {
              tag: "h3",
              className: M.detailBlockHeader,
              children: t.isPurchasedExternally && null != t.paymentGateway ? L.intl.formatToPlainString(L.t.rTk9v7, {
                paymentGatewayName: w.Vzj[t.paymentGateway]
              }) : L.intl.string(L.t.iRzXKS)
            }), (0, i.jsx)(D.Z, {
              subscription: t,
              onPaymentSourceAdded: N.i1,
              highlightAddPaymentMethodButton: c || o,
              analyticsLocation: n,
              currentInvoicePreview: x,
              dropdownClassName: M.paymentDropdown
            })]
          })]
        })
      })
    })]
  })
}
let W = new Set([Chunk981631.O0b.ACTIVE, Chunk981631.O0b.PAST_DUE, Chunk981631.O0b.CANCELED, Chunk981631.O0b.PAUSE_PENDING, Chunk981631.O0b.PAUSED]);

function Y() {
  return Chunk73800.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.TOOLTIP_VIEWED, {
      type: "subscription_settings_duplicate_subscriptions"
    })
  }, []), (0, Chunk255367.jsxs)("div", {
    className: Chunk772526.duplicateSubscriptionsBanner,
    children: [(0, Chunk255367.jsx)(Chunk481060.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: Chunk692547.Z.unsafe_rawColors.RED_360.css
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      className: Chunk772526.duplicateSubscriptionsBannerText,
      variant: "text-sm/normal",
      children: Chunk388032.intl.format(Chunk388032.t["6eXiiI"], {
        helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.NITRO)
      })
    })]
  })
}

function K(e) {
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
  }), E = d()(r.currentPeriodEnd), C = null != r.paymentSourceId, S = null != (t = null == x ? true : x.total) ? t : 0, T = !C && S > 0 && (7 >= E.diff(d()(), "days") || r.status === w.O0b.PAST_DUE) && !j && !r.isPurchasedExternally, I = _ && r.status === w.O0b.PAST_DUE && !j && !r.isPurchasedExternally, N = (0, A.U)(), P = !j && N, R = (null == r ? true : r.status) === w.O0b.PAST_DUE, D = R ? d()().diff(d()(r.currentPeriodStart), "days") : 0, [k] = (0, y.Ox)({
    subscriptionId: r.id,
    preventFetch: !(P || R)
  });
  return null == h || null == x ? (0, i.jsx)(g.$jN, {}) : (null != r.renewalMutations && (r.renewalMutations.planId !== r.planId && !(0, O.Q0)(r.renewalMutations.planId) || r.hasExternalPlanChange) && (n = (0, i.jsx)(Z.Z, {
    subscription: r,
    renewalMutations: r.renewalMutations,
    className: M.renewalMutationNotice,
    analyticsLocation: c
  })), (0, i.jsx)("div", {
    children: (0, i.jsxs)(g.y5t, {
      component: (0, i.jsx)(g.vwX, {
        className: M.sectionTitle,
        tag: "h1",
        children: L.intl.string(L.t["/gs+Pz"])
      }),
      children: [T ? (0, i.jsx)(U, {}) : null, I ? (0, i.jsx)(V, {}) : null, P && null != k ? (0, i.jsx)(G, {
        daysPastDue: D,
        subscription: r,
        openInvoiceId: k.id
      }) : null, n, (0, i.jsx)("div", {
        children: (0, i.jsx)("p", {
          className: M.sectionDescription,
          children: L.intl.string(L.t.D8UpUl)
        })
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)("div", {
          className: p.length > 0 ? M.dupSubscriptionRow : M.__invalid_singleSubscription,
          children: (0, i.jsx)(z, {
            subscription: r,
            analyticsLocation: c,
            paymentSource: a,
            busy: l,
            fromStandaloneBillingPage: o,
            showNoPaymentMethod: T,
            showInvalidPaymentMethod: I,
            fetchedCurrentInvoicePreview: h,
            fetchedRenewalInvoicePreview: x,
            fetchedOpenInvoice: k
          })
        }), p.map((e, t) => (0, i.jsxs)("div", {
          className: M.dupSubscriptionRow,
          children: [(0, i.jsx)(g.vwX, {
            tag: "h2",
            className: M.duplicateHeader,
            children: "Duplicate Subscriptions"
          }), (0, i.jsx)(z, {
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
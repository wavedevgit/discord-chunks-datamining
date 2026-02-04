/** Chunk was on 9207 **/
/** chunk id: 758400, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => en,
  Hy: () => ee,
  Sb: () => et,
  TC: () => Q
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk989349 = require("./989349.js"),
  d = require.n(Chunk989349),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk701273 = require("./701273.js"),
  Chunk531260 = require("./531260.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk769015 = require("./769015.jsx"),
  Chunk532794 = require("./532794.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk832946 = require("./832946.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk83617 = require("./83617.js"),
  Chunk543767 = require("./543767.js"),
  Chunk526292 = require("./526292.js"),
  Chunk155984 = require("./155984.js"),
  Chunk131168 = require("./131168.js"),
  Chunk726532 = require("./726532.jsx"),
  Chunk947418 = require("./947418.js"),
  Chunk687944 = require("./687944.jsx"),
  Chunk327479 = require("./327479.jsx"),
  Chunk538511 = require("./538511.jsx"),
  Chunk420139 = require("./420139.jsx"),
  Chunk434395 = require("./434395.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk601107 = require("./601107.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk595654 = require("./595654.js");

function z(e) {
  let t, {
      subscription: n,
      renewalInvoicePreview: i,
      fractionalPremiumInfo: l,
      fromStandaloneBillingPage: a = true,
      className: c
    } = e,
    d = (0, _.bG)([I.default], () => {
      let e = I.default.getCurrentUser();
      return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
    });
  if (0 === (0, v.bx)(n.additionalPlans)) return null;
  let {
    status: p
  } = n, g = (0, v.$k)(n);
  if (g) t = K.v2;
  else switch (p) {
    case F.Dmq.PAST_DUE:
    case F.Dmq.ACCOUNT_HOLD:
    case F.Dmq.BILLING_RETRY:
      t = K.P7;
      break;
    case F.Dmq.PAUSE_PENDING:
    case F.Dmq.PAUSED:
      t = n.pauseReason !== Y.qf.FRACTIONAL_PREMIUM ? K.C7 : K.wG;
      break;
    default:
      t = K.wG
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()(t, c),
      children: [(0, r.jsx)("div", {
        className: K.Kq
      }), (0, r.jsx)("div", {
        className: K.OL
      }), (0, r.jsxs)("div", {
        className: K.eC,
        children: [(0, r.jsx)("div", {
          className: s()(K.Ab, {
            [K.aD]: g
          })
        }), (0, r.jsx)("div", {
          children: (0, v.Uf)({
            subscription: n,
            renewalInvoicePreview: i,
            user: d,
            fractionalPremiumInfo: l
          })
        })]
      }), a && (0, r.jsx)(U.A, {
        onClick: () => (0, S.openUserSettings)(C.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
          section: F.nc_.GUILD_BOOSTING
        }),
        text: W.intl.string(W.t["NQ5g/U"])
      })]
    }), !a && (0, r.jsx)(m.Text, {
      className: K.yW,
      variant: "text-sm/normal",
      children: W.intl.format(u.Fr ? W.t.uxYBEa : W.t.k6haR9, {
        openAppHook: () => (0, b.A)("app")
      })
    })]
  })
}

function Z() {
  return i.useEffect(() => {
    N.default.track(F.HAw.TOOLTIP_VIEWED, {
      type: "subscription_settings_missing_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: K.Zz,
    children: [(0, r.jsx)(m.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      className: K.Sh,
      color: p.A.unsafe_rawColors.YELLOW_260.css
    }), (0, r.jsx)(m.Text, {
      className: K.Cy,
      variant: "text-sm/normal",
      children: W.intl.string(W.t.xFHEMa)
    })]
  })
}

function X() {
  return i.useEffect(() => {
    N.default.track(F.HAw.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: K.Zz,
    children: [(0, r.jsx)(m.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      className: K.Sh,
      color: p.A.unsafe_rawColors.RED_360.css
    }), (0, r.jsx)(m.Text, {
      className: K.Cy,
      variant: "text-sm/normal",
      children: W.intl.string(W.t["j+nuQZ"])
    })]
  })
}

function q(e) {
  let {
    daysPastDue: t,
    subscription: n,
    openInvoiceId: l
  } = e, {
    analyticsLocations: s
  } = (0, f.Ay)(A.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return i.useEffect(() => {
    N.default.track(F.HAw.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: K.Zz,
    children: [(0, r.jsx)(m.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      className: K.Sh,
      color: p.A.unsafe_rawColors.YELLOW_260.css
    }), (0, r.jsx)(m.Text, {
      className: K.Cy,
      variant: "text-sm/normal",
      children: W.intl.format(W.t["0nbf/G"], {
        daysPastDue: t,
        paymentModalRedirect: () => {
          (0, x.A)({
            initialPlanId: n.planIdFromItems,
            openInvoiceId: l,
            analyticsLocations: s
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
    className: l,
    fractionalPremiumInfo: a
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(K.KF, l),
    children: [(0, r.jsx)(m.Heading, {
      variant: "heading-md/semibold",
      className: K.QL,
      children: W.intl.string(W.t.KXQjfc)
    }), (0, r.jsx)("div", {
      children: v.Ay.getBillingInformationString(t, n, i, false, a)
    })]
  })
}

function Q() {
  let e = (0, _.bG)([I.default], () => I.default.getCurrentUser()),
    t = null != e && e.isPremiumGroupMember();
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(m.Heading, {
      variant: "heading-lg/semibold",
      className: K.Gf,
      children: W.intl.string(W.t["/gs+Pz"])
    }), (0, r.jsx)("p", {
      className: K.yV,
      children: W.intl.string(W.t.D8UpUo)
    }), !t && (0, r.jsx)(m.ZpM, {
      className: K.wb,
      type: m.ZpM.Types.CUSTOM,
      children: (0, r.jsxs)(E.A, {
        align: E.A.Align.CENTER,
        children: [(0, r.jsx)(O.A, {
          game: null,
          size: O.M.SMALL,
          className: K.pV
        }), (0, r.jsx)("span", {
          className: K.O,
          children: W.intl.string(W.t.xCRgr1)
        })]
      })
    }), t && (0, r.jsx)(w.i, {
      currentUser: e
    })]
  })
}

function $(e) {
  let {
    subscription: t,
    analyticsLocation: n,
    paymentSource: i,
    busy: l,
    fromStandaloneBillingPage: a,
    showInvalidPaymentMethod: o,
    showNoPaymentMethod: c,
    fetchedCurrentInvoicePreview: d,
    fetchedRenewalInvoicePreview: u,
    fetchedOpenInvoice: _,
    isPremiumGroup: p
  } = e, {
    analyticsLocations: g
  } = (0, f.Ay)(A.A.SUBSCRIPTION_DETAILS), b = null != d ? {} : {
    subscriptionId: t.id,
    renewal: true,
    analyticsLocations: g,
    analyticsLocation: n
  }, [E] = (0, P.Kq)(b);
  E = null != d ? d : E;
  let O = null != u ? {} : {
      subscriptionId: t.id,
      renewal: true,
      applyEntitlements: true,
      analyticsLocations: g,
      analyticsLocation: n
    },
    [x] = (0, P.Kq)(O);
  x = null != u ? u : x;
  let C = (0, h.A)(),
    S = (0, L.p)(),
    T = (0, R.nf)(),
    I = v.Ay.isBaseSubscriptionCanceled(t),
    N = (0, M.v)(t, i);
  if (null == E || null == x) return (0, r.jsx)(m.y$y, {});
  let y = N ? (0, R.Bv)(x) : null,
    D = null != y || null != T && (T.discountId === V.q || T.discountId === V.EG),
    w = N && (I && null != S || !I && D) ? (0, r.jsx)(G.A, {
      subscription: t,
      invoicePreview: x,
      paymentSource: i,
      discountOffer: S,
      renewalChurnDiscountInfo: y,
      discountInfo: T,
      isLoading: l,
      analyticsLocation: n
    }) : (0, r.jsx)(k.A, {
      subscription: t,
      currentInvoicePreview: E,
      renewalInvoicePreview: x,
      paymentSource: i,
      busy: l,
      analyticsLocation: n
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: K.fj,
      children: [!p && w, (0, r.jsx)(z, {
        subscription: t,
        renewalInvoicePreview: E,
        fromStandaloneBillingPage: a,
        className: K.td,
        fractionalPremiumInfo: C
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(m.nVY, {
        label: W.intl.string(W.t.Sb6wI1),
        children: (0, r.jsxs)("div", {
          className: K.zH,
          children: [(0, r.jsx)(J, {
            subscription: t,
            renewalInvoicePreview: x,
            className: K.g4,
            fractionalPremiumInfo: C,
            openInvoice: _
          }), (0, r.jsx)("div", {
            className: s()(K.g4, {
              [K.sE]: o
            }),
            children: (0, r.jsx)(m.D0$, {
              label: t.isPurchasedExternally && null != t.paymentGateway ? W.intl.formatToPlainString(W.t["rTk9v/"], {
                paymentGatewayName: F.qmC[t.paymentGateway]
              }) : W.intl.string(W.t.iRzXKd),
              children: (0, r.jsx)(B.A, {
                subscription: t,
                onPaymentSourceAdded: j.c_,
                highlightAddPaymentMethodButton: c || o,
                analyticsLocation: n,
                currentInvoicePreview: E,
                dropdownClassName: K.sp
              })
            })
          })]
        })
      })
    })]
  })
}
let ee = new Set([Chunk652215.Dmq.ACTIVE, Chunk652215.Dmq.PAST_DUE, Chunk652215.Dmq.CANCELED, Chunk652215.Dmq.PAUSE_PENDING, Chunk652215.Dmq.PAUSED]);

function et() {
  return i.useEffect(() => {
    N.default.track(F.HAw.TOOLTIP_VIEWED, {
      type: "subscription_settings_duplicate_subscriptions"
    })
  }, []), (0, r.jsxs)("div", {
    className: K.oU,
    children: [(0, r.jsx)(m.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      color: p.A.unsafe_rawColors.RED_360.css
    }), (0, r.jsx)(m.Text, {
      className: K.dk,
      variant: "text-sm/normal",
      children: W.intl.format(W.t["6eXiiC"], {
        helpCenterLink: y.A.getArticleURL(F.MVz.NITRO)
      })
    })]
  })
}

function en(e) {
  var t;
  let n, {
    subscription: l,
    subscriptions: s,
    paymentSource: a,
    busy: o,
    fromStandaloneBillingPage: c = true,
    analyticsLocation: u,
    shouldRefetchInvoicesOnSubscriptionUpdate: p
  } = e;
  null != s && null != s[0] && (l = s[0]);
  let b = (0, _.bG)([I.default], () => I.default.getCurrentUser()),
    {
      analyticsLocations: h
    } = (0, f.Ay)(A.A.SUBSCRIPTION_DETAILS),
    E = (0, L.p)(),
    O = null != s ? s.slice(1) : [],
    [x, C] = i.useState(0);
  i.useEffect(() => {
    if (!p) return;
    let e = e => {
      e.subscription.id === l.id && C(e => e + 1)
    };
    return g.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e), () => {
      g.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e)
    }
  }, [l.id, p]);
  let [S] = (0, P.Kq)({
    subscriptionId: l.id,
    renewal: true,
    analyticsLocations: h,
    analyticsLocation: u,
    fetchKey: x
  }), [N] = (0, P.Kq)({
    subscriptionId: l.id,
    renewal: true,
    applyEntitlements: true,
    analyticsLocations: h,
    analyticsLocation: u,
    userDiscountOfferId: null == E ? true : E.id,
    fetchKey: x
  }), y = null == a ? true : a.invalid, v = (0, _.bG)([I.default], () => {
    var e;
    return null == (e = I.default.getCurrentUser()) ? true : e.hasFreePremium()
  }), j = d()(l.currentPeriodEnd), R = null != l.paymentSourceId, M = null != (t = null == N ? true : N.total) ? t : 0, G = !R && M > 0 && (7 >= j.diff(d()(), "days") || l.status === F.Dmq.PAST_DUE) && !v && !l.isPurchasedExternally, U = y && l.status === F.Dmq.PAST_DUE && !v && !l.isPurchasedExternally, k = (0, D.l)(), B = !v && k, V = (null == l ? true : l.status) === F.Dmq.PAST_DUE, Y = V ? d()().diff(d()(l.currentPeriodStart), "days") : 0, z = null != b && b.isPremiumGroupPrimary(), J = l.hasAnyPremiumGroup, [Q] = (0, P.C8)({
    subscriptionId: l.id,
    preventFetch: !(B || V)
  });
  return null == S || null == N ? (0, r.jsx)(m.y$y, {}) : (null != l.renewalMutations && (l.renewalMutations.planId !== l.planId && !(0, T.m1)(l.renewalMutations.planId) || l.hasExternalPlanChange) && (n = (0, r.jsx)(H.A, {
    subscription: l,
    renewalMutations: l.renewalMutations,
    className: K.Il,
    analyticsLocation: u
  })), (0, r.jsxs)(m.nVY, {
    label: W.intl.string(W.t["/gs+Pz"]),
    description: W.intl.string(W.t.D8UpUo),
    children: [G ? (0, r.jsx)(Z, {}) : null, U ? (0, r.jsx)(X, {}) : null, B && null != Q ? (0, r.jsx)(q, {
      daysPastDue: Y,
      subscription: l,
      openInvoiceId: Q.id
    }) : null, z && J && (0, r.jsx)(w.j, {
      subscription: l,
      analyticsLocations: h
    }), n, (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: O.length > 0 ? K.HZ : K.__invalid_singleSubscription,
        children: (0, r.jsx)($, {
          subscription: l,
          analyticsLocation: u,
          paymentSource: a,
          busy: o,
          fromStandaloneBillingPage: c,
          showNoPaymentMethod: G,
          showInvalidPaymentMethod: U,
          fetchedCurrentInvoicePreview: S,
          fetchedRenewalInvoicePreview: N,
          fetchedOpenInvoice: Q,
          isPremiumGroup: z
        })
      }), O.map((e, t) => (0, r.jsxs)("div", {
        className: K.HZ,
        children: [(0, r.jsx)(m.Heading, {
          variant: "heading-md/semibold",
          className: K.dd,
          children: "Duplicate Subscriptions"
        }), (0, r.jsx)($, {
          subscription: e,
          analyticsLocation: u,
          paymentSource: a,
          busy: o,
          fromStandaloneBillingPage: c,
          showNoPaymentMethod: G,
          showInvalidPaymentMethod: U,
          fetchedCurrentInvoicePreview: null,
          fetchedRenewalInvoicePreview: null,
          fetchedOpenInvoice: null,
          isPremiumGroup: false
        })]
      }, t))]
    })]
  }))
}
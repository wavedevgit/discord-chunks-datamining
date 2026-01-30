/** Chunk was on 78376 **/
/** chunk id: 758400, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => es,
  Hy: () => ei,
  Sb: () => el,
  TC: () => en
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
  Chunk554146 = require("./554146.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk701273 = require("./701273.js"),
  Chunk531260 = require("./531260.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk826673 = require("./826673.js"),
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
  Chunk136787 = require("./136787.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk601107 = require("./601107.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk595654 = require("./595654.js");

function J(e) {
  let t, {
      subscription: n,
      renewalInvoicePreview: i,
      fractionalPremiumInfo: l,
      fromStandaloneBillingPage: a = true,
      className: c
    } = e,
    d = (0, _.bG)([N.default], () => {
      let e = N.default.getCurrentUser();
      return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
    });
  if (0 === (0, P.bx)(n.additionalPlans)) return null;
  let {
    status: p
  } = n, m = (0, P.$k)(n);
  if (m) t = q.v2;
  else switch (p) {
    case K.Dmq.PAST_DUE:
    case K.Dmq.ACCOUNT_HOLD:
    case K.Dmq.BILLING_RETRY:
      t = q.P7;
      break;
    case K.Dmq.PAUSE_PENDING:
    case K.Dmq.PAUSED:
      t = n.pauseReason !== z.qf.FRACTIONAL_PREMIUM ? q.C7 : q.wG;
      break;
    default:
      t = q.wG
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()(t, c),
      children: [(0, r.jsx)("div", {
        className: q.Kq
      }), (0, r.jsx)("div", {
        className: q.OL
      }), (0, r.jsxs)("div", {
        className: q.eC,
        children: [(0, r.jsx)("div", {
          className: s()(q.Ab, {
            [q.aD]: m
          })
        }), (0, r.jsx)("div", {
          children: (0, P.Uf)({
            subscription: n,
            renewalInvoicePreview: i,
            user: d,
            fractionalPremiumInfo: l
          })
        })]
      }), a && (0, r.jsx)(B.A, {
        onClick: () => (0, I.openUserSettings)(T.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
          section: K.nc_.GUILD_BOOSTING
        }),
        text: X.intl.string(X.t["NQ5g/U"])
      })]
    }), !a && (0, r.jsx)(g.Text, {
      className: q.yW,
      variant: "text-sm/normal",
      children: X.intl.format(u.Fr ? X.t.uxYBEa : X.t.k6haR9, {
        openAppHook: () => (0, h.A)("app")
      })
    })]
  })
}

function Q() {
  return i.useEffect(() => {
    j.default.track(K.HAw.TOOLTIP_VIEWED, {
      type: "subscription_settings_missing_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: q.Zz,
    children: [(0, r.jsx)(g.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      className: q.Sh,
      color: m.A.unsafe_rawColors.YELLOW_260.css
    }), (0, r.jsx)(g.Text, {
      className: q.Cy,
      variant: "text-sm/normal",
      children: X.intl.string(X.t.xFHEMa)
    })]
  })
}

function $() {
  return i.useEffect(() => {
    j.default.track(K.HAw.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: q.Zz,
    children: [(0, r.jsx)(g.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      className: q.Sh,
      color: m.A.unsafe_rawColors.RED_360.css
    }), (0, r.jsx)(g.Text, {
      className: q.Cy,
      variant: "text-sm/normal",
      children: X.intl.string(X.t["j+nuQZ"])
    })]
  })
}

function ee(e) {
  let {
    daysPastDue: t,
    subscription: n,
    openInvoiceId: l
  } = e, {
    analyticsLocations: s
  } = (0, b.Ay)(f.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return i.useEffect(() => {
    j.default.track(K.HAw.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: q.Zz,
    children: [(0, r.jsx)(g.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      className: q.Sh,
      color: m.A.unsafe_rawColors.YELLOW_260.css
    }), (0, r.jsx)(g.Text, {
      className: q.Cy,
      variant: "text-sm/normal",
      children: X.intl.format(X.t["0nbf/G"], {
        daysPastDue: t,
        paymentModalRedirect: () => {
          (0, S.A)({
            initialPlanId: n.planIdFromItems,
            openInvoiceId: l,
            analyticsLocations: s
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
    className: l,
    fractionalPremiumInfo: a
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(q.KF, l),
    children: [(0, r.jsx)(g.Heading, {
      variant: "heading-md/semibold",
      className: q.QL,
      children: X.intl.string(X.t.KXQjfc)
    }), (0, r.jsx)("div", {
      children: P.Ay.getBillingInformationString(t, n, i, false, a)
    })]
  })
}

function en() {
  let e = (0, _.bG)([N.default], () => N.default.getCurrentUser()),
    t = null != e && e.isPremiumGroupMember();
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(g.Heading, {
      variant: "heading-lg/semibold",
      className: q.Gf,
      children: X.intl.string(X.t["/gs+Pz"])
    }), (0, r.jsx)("p", {
      className: q.yV,
      children: X.intl.string(X.t.D8UpUo)
    }), !t && (0, r.jsx)(g.ZpM, {
      className: q.wb,
      type: g.ZpM.Types.CUSTOM,
      children: (0, r.jsxs)(O.A, {
        align: O.A.Align.CENTER,
        children: [(0, r.jsx)(x.A, {
          game: null,
          size: x.M.SMALL,
          className: q.pV
        }), (0, r.jsx)("span", {
          className: q.O,
          children: X.intl.string(X.t.xCRgr1)
        })]
      })
    }), t && (0, r.jsx)(G.i, {
      currentUser: e
    })]
  })
}

function er(e) {
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
    analyticsLocations: m
  } = (0, b.Ay)(f.A.SUBSCRIPTION_DETAILS), A = null != d ? {} : {
    subscriptionId: t.id,
    renewal: true,
    analyticsLocations: m,
    analyticsLocation: n
  }, [h] = (0, D.Kq)(A);
  h = null != d ? d : h;
  let O = null != u ? {} : {
      subscriptionId: t.id,
      renewal: true,
      applyEntitlements: true,
      analyticsLocations: m,
      analyticsLocation: n
    },
    [C] = (0, D.Kq)(O);
  C = null != u ? u : C;
  let x = (0, E.A)(),
    S = (0, M.p)(),
    T = (0, L.nf)(),
    I = P.Ay.isBaseSubscriptionCanceled(t),
    y = (0, U.v)(t, i);
  if (null == h || null == C) return (0, r.jsx)(g.y$y, {});
  let N = y ? (0, L.Bv)(C) : null,
    j = null != N || null != T && (T.discountId === W.q || T.discountId === W.EG),
    v = y && (I && null != S || !I && j) ? (0, r.jsx)(k.A, {
      subscription: t,
      invoicePreview: C,
      paymentSource: i,
      discountOffer: S,
      renewalChurnDiscountInfo: N,
      discountInfo: T,
      isLoading: l,
      analyticsLocation: n
    }) : (0, r.jsx)(H.A, {
      subscription: t,
      currentInvoicePreview: h,
      renewalInvoicePreview: C,
      paymentSource: i,
      busy: l,
      analyticsLocation: n
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: q.fj,
      children: [!p && v, (0, r.jsx)(J, {
        subscription: t,
        renewalInvoicePreview: h,
        fromStandaloneBillingPage: a,
        className: q.td,
        fractionalPremiumInfo: x
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(g.nVY, {
        label: X.intl.string(X.t.Sb6wI1),
        children: (0, r.jsxs)("div", {
          className: q.zH,
          children: [(0, r.jsx)(et, {
            subscription: t,
            renewalInvoicePreview: C,
            className: q.g4,
            fractionalPremiumInfo: x,
            openInvoice: _
          }), (0, r.jsx)("div", {
            className: s()(q.g4, {
              [q.sE]: o
            }),
            children: (0, r.jsx)(g.D0$, {
              label: t.isPurchasedExternally && null != t.paymentGateway ? X.intl.formatToPlainString(X.t["rTk9v/"], {
                paymentGatewayName: K.qmC[t.paymentGateway]
              }) : X.intl.string(X.t.iRzXKd),
              children: (0, r.jsx)(V.A, {
                subscription: t,
                onPaymentSourceAdded: R.c_,
                highlightAddPaymentMethodButton: c || o,
                analyticsLocation: n,
                currentInvoicePreview: h,
                dropdownClassName: q.sp
              })
            })
          })]
        })
      })
    })]
  })
}
let ei = new Set([Chunk652215.Dmq.ACTIVE, Chunk652215.Dmq.PAST_DUE, Chunk652215.Dmq.CANCELED, Chunk652215.Dmq.PAUSE_PENDING, Chunk652215.Dmq.PAUSED]);

function el() {
  return i.useEffect(() => {
    j.default.track(K.HAw.TOOLTIP_VIEWED, {
      type: "subscription_settings_duplicate_subscriptions"
    })
  }, []), (0, r.jsxs)("div", {
    className: q.oU,
    children: [(0, r.jsx)(g.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      color: m.A.unsafe_rawColors.RED_360.css
    }), (0, r.jsx)(g.Text, {
      className: q.dk,
      variant: "text-sm/normal",
      children: X.intl.format(X.t["6eXiiC"], {
        helpCenterLink: v.A.getArticleURL(K.MVz.NITRO)
      })
    })]
  })
}

function es(e) {
  var t;
  let n, {
    subscription: l,
    subscriptions: s,
    paymentSource: a,
    busy: o,
    fromStandaloneBillingPage: c = true,
    analyticsLocation: u,
    shouldRefetchInvoicesOnSubscriptionUpdate: h
  } = e;
  null != s && null != s[0] && (l = s[0]);
  let E = (0, _.bG)([N.default], () => N.default.getCurrentUser()),
    {
      analyticsLocations: O
    } = (0, b.Ay)(f.A.SUBSCRIPTION_DETAILS),
    x = (0, M.p)(),
    S = null != s ? s.slice(1) : [],
    [T, I] = i.useState(0);
  i.useEffect(() => {
    if (!h) return;
    let e = e => {
      e.subscription.id === l.id && I(e => e + 1)
    };
    return A.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e), () => {
      A.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e)
    }
  }, [l.id, h]);
  let [j] = (0, D.Kq)({
    subscriptionId: l.id,
    renewal: true,
    analyticsLocations: O,
    analyticsLocation: u,
    fetchKey: T
  }), [P] = (0, D.Kq)({
    subscriptionId: l.id,
    renewal: true,
    applyEntitlements: true,
    analyticsLocations: O,
    analyticsLocation: u,
    userDiscountOfferId: null == x ? true : x.id,
    fetchKey: T
  }), R = (0, Y.V)(), L = null == a ? true : a.invalid, U = (0, _.bG)([N.default], () => {
    var e;
    return null == (e = N.default.getCurrentUser()) ? true : e.hasFreePremium()
  }), k = d()(l.currentPeriodEnd), B = null != l.paymentSourceId, H = null != (t = null == P ? true : P.total) ? t : 0, V = !B && H > 0 && (7 >= k.diff(d()(), "days") || l.status === K.Dmq.PAST_DUE) && !U && !l.isPurchasedExternally, W = L && l.status === K.Dmq.PAST_DUE && !U && !l.isPurchasedExternally, z = (0, w.l)(), J = !U && z, et = (null == l ? true : l.status) === K.Dmq.PAST_DUE, en = et ? d()().diff(d()(l.currentPeriodStart), "days") : 0, ei = null != E && E.isPremiumGroupPrimary(), el = l.hasAnyPremiumGroup, [es] = (0, D.C8)({
    subscriptionId: l.id,
    preventFetch: !(J || et)
  });
  return null == j || null == P ? (0, r.jsx)(g.y$y, {}) : (null != l.renewalMutations && (l.renewalMutations.planId !== l.planId && !(0, y.m1)(l.renewalMutations.planId) || l.hasExternalPlanChange) && (n = (0, r.jsx)(F.A, {
    subscription: l,
    renewalMutations: l.renewalMutations,
    className: q.Il,
    analyticsLocation: u
  })), (0, r.jsxs)(g.nVY, {
    label: X.intl.string(X.t["/gs+Pz"]),
    description: X.intl.string(X.t.D8UpUo),
    children: [V ? (0, r.jsx)(Q, {}) : null, W ? (0, r.jsx)($, {}) : null, J && null != es ? (0, r.jsx)(ee, {
      daysPastDue: en,
      subscription: l,
      openInvoiceId: es.id
    }) : null, ei && el && (0, r.jsx)(G.j, {
      subscription: l,
      analyticsLocations: O
    }), n, R && (0, r.jsx)(g.po8, {
      messageType: g.YCn.INFO,
      action: (0, r.jsx)(g.DUT, {
        onClick: () => {
          (0, C.Dr)(p.M.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
            dismissAction: Z.i.USER_DISMISS
          })
        },
        className: q.dn,
        children: (0, r.jsx)(g.PGe, {
          size: "sm",
          color: m.A.colors.ICON_STRONG
        })
      }),
      children: X.intl.format(X.t.K4QorK, {
        helpdeskArticle: v.A.getArticleURL(K.MVz.BILLING)
      })
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: S.length > 0 ? q.HZ : q.__invalid_singleSubscription,
        children: (0, r.jsx)(er, {
          subscription: l,
          analyticsLocation: u,
          paymentSource: a,
          busy: o,
          fromStandaloneBillingPage: c,
          showNoPaymentMethod: V,
          showInvalidPaymentMethod: W,
          fetchedCurrentInvoicePreview: j,
          fetchedRenewalInvoicePreview: P,
          fetchedOpenInvoice: es,
          isPremiumGroup: ei
        })
      }), S.map((e, t) => (0, r.jsxs)("div", {
        className: q.HZ,
        children: [(0, r.jsx)(g.Heading, {
          variant: "heading-md/semibold",
          className: q.dd,
          children: "Duplicate Subscriptions"
        }), (0, r.jsx)(er, {
          subscription: e,
          analyticsLocation: u,
          paymentSource: a,
          busy: o,
          fromStandaloneBillingPage: c,
          showNoPaymentMethod: V,
          showInvalidPaymentMethod: W,
          fetchedCurrentInvoicePreview: null,
          fetchedRenewalInvoicePreview: null,
          fetchedOpenInvoice: null,
          isPremiumGroup: false
        })]
      }, t))]
    })]
  }))
}
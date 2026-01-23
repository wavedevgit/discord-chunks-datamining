/** Chunk was on web.js **/
/** chunk id: 758400, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => eo,
  Hy: () => ea,
  Sb: () => es,
  TC: () => er
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk989349 = require("./989349.js"),
  u = require.n(Chunk989349),
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
let Q = "app";

function $(e) {
  let t, {
      subscription: n,
      renewalInvoicePreview: i,
      fractionalPremiumInfo: a,
      fromStandaloneBillingPage: o = true,
      className: c
    } = e,
    u = (0, f.bG)([N.default], () => {
      let e = N.default.getCurrentUser();
      return l()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
    });
  if (0 === (0, P.bx)(n.additionalPlans)) return null;
  let {
    status: p
  } = n, _ = (0, P.$k)(n);
  if (_) t = Z.v2;
  else switch (p) {
    case K.Dmq.PAST_DUE:
    case K.Dmq.ACCOUNT_HOLD:
    case K.Dmq.BILLING_RETRY:
      t = Z.P7;
      break;
    case K.Dmq.PAUSE_PENDING:
    case K.Dmq.PAUSED:
      t = n.pauseReason !== z.qf.FRACTIONAL_PREMIUM ? Z.C7 : Z.wG;
      break;
    default:
      t = Z.wG
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()(t, c),
      children: [(0, r.jsx)("div", {
        className: Z.Kq
      }), (0, r.jsx)("div", {
        className: Z.OL
      }), (0, r.jsxs)("div", {
        className: Z.eC,
        children: [(0, r.jsx)("div", {
          className: s()(Z.Ab, {
            [Z.aD]: _
          })
        }), (0, r.jsx)("div", {
          children: (0, P.Uf)({
            subscription: n,
            renewalInvoicePreview: i,
            user: u,
            fractionalPremiumInfo: a
          })
        })]
      }), o && (0, r.jsx)(V.A, {
        onClick: () => (0, T.openUserSettings)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
          section: K.nc_.GUILD_BOOSTING
        }),
        text: X.intl.string(X.t["NQ5g/U"])
      })]
    }), !o && (0, r.jsx)(h.Text, {
      className: Z.yW,
      variant: "text-sm/normal",
      children: X.intl.format(d.Fr ? X.t.uxYBEa : X.t.k6haR9, {
        openAppHook: () => (0, y.A)(Q)
      })
    })]
  })
}

function J() {
  return i.useEffect(() => {
    R.default.track(K.HAw.TOOLTIP_VIEWED, {
      type: "subscription_settings_missing_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: Z.Zz,
    children: [(0, r.jsx)(h.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      className: Z.Sh,
      color: _.A.unsafe_rawColors.YELLOW_260.css
    }), (0, r.jsx)(h.Text, {
      className: Z.Cy,
      variant: "text-sm/normal",
      children: X.intl.string(X.t.xFHEMa)
    })]
  })
}

function ee() {
  return i.useEffect(() => {
    R.default.track(K.HAw.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: Z.Zz,
    children: [(0, r.jsx)(h.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      className: Z.Sh,
      color: _.A.unsafe_rawColors.RED_360.css
    }), (0, r.jsx)(h.Text, {
      className: Z.Cy,
      variant: "text-sm/normal",
      children: X.intl.string(X.t["j+nuQZ"])
    })]
  })
}

function et(e) {
  let {
    daysPastDue: t,
    subscription: n,
    openInvoiceId: a
  } = e, {
    analyticsLocations: s
  } = (0, E.Ay)(g.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return i.useEffect(() => {
    R.default.track(K.HAw.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: Z.Zz,
    children: [(0, r.jsx)(h.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      className: Z.Sh,
      color: _.A.unsafe_rawColors.YELLOW_260.css
    }), (0, r.jsx)(h.Text, {
      className: Z.Cy,
      variant: "text-sm/normal",
      children: X.intl.format(X.t["0nbf/G"], {
        daysPastDue: t,
        paymentModalRedirect: () => {
          (0, I.A)({
            initialPlanId: n.planIdFromItems,
            openInvoiceId: a,
            analyticsLocations: s
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
    fractionalPremiumInfo: o
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(Z.KF, a),
    children: [(0, r.jsx)(h.Heading, {
      variant: "heading-md/semibold",
      className: Z.QL,
      children: X.intl.string(X.t.KXQjfc)
    }), (0, r.jsx)("div", {
      children: P.Ay.getBillingInformationString(t, n, i, false, o)
    })]
  })
}

function er() {
  let e = (0, f.bG)([N.default], () => N.default.getCurrentUser()),
    t = null != e && e.isPremiumGroupMember();
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(h.Heading, {
      variant: "heading-lg/semibold",
      className: Z.Gf,
      children: X.intl.string(X.t["/gs+Pz"])
    }), (0, r.jsx)("p", {
      className: Z.yV,
      children: X.intl.string(X.t.D8UpUo)
    }), !t && (0, r.jsx)(h.ZpM, {
      className: Z.wb,
      type: h.ZpM.Types.CUSTOM,
      children: (0, r.jsxs)(O.A, {
        align: O.A.Align.CENTER,
        children: [(0, r.jsx)(A.A, {
          game: null,
          size: A.M.SMALL,
          className: Z.pV
        }), (0, r.jsx)("span", {
          className: Z.O,
          children: X.intl.string(X.t.xCRgr1)
        })]
      })
    }), t && (0, r.jsx)(k.i, {
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
    fromStandaloneBillingPage: o,
    showInvalidPaymentMethod: l,
    showNoPaymentMethod: c,
    fetchedCurrentInvoicePreview: u,
    fetchedRenewalInvoicePreview: d,
    fetchedOpenInvoice: f,
    isPremiumGroup: p
  } = e, {
    analyticsLocations: _
  } = (0, E.Ay)(g.A.SUBSCRIPTION_DETAILS), m = null != u ? {} : {
    subscriptionId: t.id,
    renewal: true,
    analyticsLocations: _,
    analyticsLocation: n
  }, [y] = (0, x.Kq)(m);
  y = null != u ? u : y;
  let O = null != d ? {} : {
      subscriptionId: t.id,
      renewal: true,
      applyEntitlements: true,
      analyticsLocations: _,
      analyticsLocation: n
    },
    [v] = (0, x.Kq)(O);
  v = null != d ? d : v;
  let A = (0, b.A)(),
    I = (0, M.p)(),
    S = (0, L.nf)(),
    T = P.Ay.isBaseSubscriptionCanceled(t),
    C = (0, U.v)(t, i);
  if (null == y || null == v) return (0, r.jsx)(h.y$y, {});
  let N = C ? (0, L.Bv)(v) : null,
    R = null != N || null != S && (S.discountId === W.q || S.discountId === W.EG),
    w = C && (T && null != I || !T && R) ? (0, r.jsx)(G.A, {
      subscription: t,
      invoicePreview: v,
      paymentSource: i,
      discountOffer: I,
      renewalChurnDiscountInfo: N,
      discountInfo: S,
      isLoading: a,
      analyticsLocation: n
    }) : (0, r.jsx)(F.A, {
      subscription: t,
      currentInvoicePreview: y,
      renewalInvoicePreview: v,
      paymentSource: i,
      busy: a,
      analyticsLocation: n
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: Z.fj,
      children: [!p && w, (0, r.jsx)($, {
        subscription: t,
        renewalInvoicePreview: y,
        fromStandaloneBillingPage: o,
        className: Z.td,
        fractionalPremiumInfo: A
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(h.nVY, {
        label: X.intl.string(X.t.Sb6wI1),
        children: (0, r.jsxs)("div", {
          className: Z.zH,
          children: [(0, r.jsx)(en, {
            subscription: t,
            renewalInvoicePreview: v,
            className: Z.g4,
            fractionalPremiumInfo: A,
            openInvoice: f
          }), (0, r.jsx)("div", {
            className: s()(Z.g4, {
              [Z.sE]: l
            }),
            children: (0, r.jsx)(h.D0$, {
              label: t.isPurchasedExternally && null != t.paymentGateway ? X.intl.formatToPlainString(X.t["rTk9v/"], {
                paymentGatewayName: K.qmC[t.paymentGateway]
              }) : X.intl.string(X.t.iRzXKd),
              children: (0, r.jsx)(B.A, {
                subscription: t,
                onPaymentSourceAdded: D.c_,
                highlightAddPaymentMethodButton: c || l,
                analyticsLocation: n,
                currentInvoicePreview: y,
                dropdownClassName: Z.sp
              })
            })
          })]
        })
      })
    })]
  })
}
let ea = new Set([Chunk652215.Dmq.ACTIVE, Chunk652215.Dmq.PAST_DUE, Chunk652215.Dmq.CANCELED, Chunk652215.Dmq.PAUSE_PENDING, Chunk652215.Dmq.PAUSED]);

function es() {
  return i.useEffect(() => {
    R.default.track(K.HAw.TOOLTIP_VIEWED, {
      type: "subscription_settings_duplicate_subscriptions"
    })
  }, []), (0, r.jsxs)("div", {
    className: Z.oU,
    children: [(0, r.jsx)(h.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      color: _.A.unsafe_rawColors.RED_360.css
    }), (0, r.jsx)(h.Text, {
      className: Z.dk,
      variant: "text-sm/normal",
      children: X.intl.format(X.t["6eXiiC"], {
        helpCenterLink: w.A.getArticleURL(K.MVz.NITRO)
      })
    })]
  })
}

function eo(e) {
  var t;
  let n, {
    subscription: a,
    subscriptions: s,
    paymentSource: o,
    busy: l,
    fromStandaloneBillingPage: c = true,
    analyticsLocation: d,
    shouldRefetchInvoicesOnSubscriptionUpdate: y
  } = e;
  null != s && null != s[0] && (a = s[0]);
  let b = (0, f.bG)([N.default], () => N.default.getCurrentUser()),
    {
      analyticsLocations: O
    } = (0, E.Ay)(g.A.SUBSCRIPTION_DETAILS),
    A = (0, M.p)(),
    I = null != s ? s.slice(1) : [],
    [S, T] = i.useState(0);
  i.useEffect(() => {
    if (!y) return;
    let e = e => {
      e.subscription.id === a.id && T(e => e + 1)
    };
    return m.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e), () => {
      m.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e)
    }
  }, [a.id, y]);
  let [R] = (0, x.Kq)({
    subscriptionId: a.id,
    renewal: true,
    analyticsLocations: O,
    analyticsLocation: d,
    fetchKey: S
  }), [P] = (0, x.Kq)({
    subscriptionId: a.id,
    renewal: true,
    applyEntitlements: true,
    analyticsLocations: O,
    analyticsLocation: d,
    userDiscountOfferId: null == A ? true : A.id,
    fetchKey: S
  }), D = (0, Y.V)(), L = null == o ? true : o.invalid, U = (0, f.bG)([N.default], () => {
    var e;
    return null == (e = N.default.getCurrentUser()) ? true : e.hasFreePremium()
  }), G = u()(a.currentPeriodEnd), V = null != a.paymentSourceId, F = null != (t = null == P ? true : P.total) ? t : 0, B = !V && F > 0 && (7 >= G.diff(u()(), "days") || a.status === K.Dmq.PAST_DUE) && !U && !a.isPurchasedExternally, W = L && a.status === K.Dmq.PAST_DUE && !U && !a.isPurchasedExternally, z = (0, j.l)(), Q = !U && z, $ = (null == a ? true : a.status) === K.Dmq.PAST_DUE, en = $ ? u()().diff(u()(a.currentPeriodStart), "days") : 0, er = null != b && b.isPremiumGroupPrimary(), ea = a.hasAnyPremiumGroup, [es] = (0, x.C8)({
    subscriptionId: a.id,
    preventFetch: !(Q || $)
  });
  return null == R || null == P ? (0, r.jsx)(h.y$y, {}) : (null != a.renewalMutations && (a.renewalMutations.planId !== a.planId && !(0, C.m1)(a.renewalMutations.planId) || a.hasExternalPlanChange) && (n = (0, r.jsx)(H.A, {
    subscription: a,
    renewalMutations: a.renewalMutations,
    className: Z.Il,
    analyticsLocation: d
  })), (0, r.jsxs)(h.nVY, {
    label: X.intl.string(X.t["/gs+Pz"]),
    description: X.intl.string(X.t.D8UpUo),
    children: [B ? (0, r.jsx)(J, {}) : null, W ? (0, r.jsx)(ee, {}) : null, Q && null != es ? (0, r.jsx)(et, {
      daysPastDue: en,
      subscription: a,
      openInvoiceId: es.id
    }) : null, er && ea && (0, r.jsx)(k.j, {
      subscription: a,
      analyticsLocations: O
    }), n, D && (0, r.jsx)(h.po8, {
      messageType: h.YCn.INFO,
      action: (0, r.jsx)(h.DUT, {
        onClick: () => {
          (0, v.Dr)(p.M.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
            dismissAction: q.i.USER_DISMISS
          })
        },
        className: Z.dn,
        children: (0, r.jsx)(h.PGe, {
          size: "sm",
          color: _.A.colors.ICON_STRONG
        })
      }),
      children: X.intl.format(X.t.K4QorK, {
        helpdeskArticle: w.A.getArticleURL(K.MVz.BILLING)
      })
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: I.length > 0 ? Z.HZ : Z.__invalid_singleSubscription,
        children: (0, r.jsx)(ei, {
          subscription: a,
          analyticsLocation: d,
          paymentSource: o,
          busy: l,
          fromStandaloneBillingPage: c,
          showNoPaymentMethod: B,
          showInvalidPaymentMethod: W,
          fetchedCurrentInvoicePreview: R,
          fetchedRenewalInvoicePreview: P,
          fetchedOpenInvoice: es,
          isPremiumGroup: er
        })
      }), I.map((e, t) => (0, r.jsxs)("div", {
        className: Z.HZ,
        children: [(0, r.jsx)(h.Heading, {
          variant: "heading-md/semibold",
          className: Z.dd,
          children: "Duplicate Subscriptions"
        }), (0, r.jsx)(ei, {
          subscription: e,
          analyticsLocation: d,
          paymentSource: o,
          busy: l,
          fromStandaloneBillingPage: c,
          showNoPaymentMethod: B,
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
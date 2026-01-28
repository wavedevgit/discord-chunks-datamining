/** Chunk was on 5606 **/
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
    d = (0, p.bG)([S.default], () => {
      let e = S.default.getCurrentUser();
      return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
    });
  if (0 === (0, P.bx)(n.additionalPlans)) return null;
  let {
    status: _
  } = n, m = (0, P.$k)(n);
  if (m) t = X.v2;
  else switch (_) {
    case z.Dmq.PAST_DUE:
    case z.Dmq.ACCOUNT_HOLD:
    case z.Dmq.BILLING_RETRY:
      t = X.P7;
      break;
    case z.Dmq.PAUSE_PENDING:
    case z.Dmq.PAUSED:
      t = n.pauseReason !== K.qf.FRACTIONAL_PREMIUM ? X.C7 : X.wG;
      break;
    default:
      t = X.wG
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()(t, c),
      children: [(0, r.jsx)("div", {
        className: X.Kq
      }), (0, r.jsx)("div", {
        className: X.OL
      }), (0, r.jsxs)("div", {
        className: X.eC,
        children: [(0, r.jsx)("div", {
          className: s()(X.Ab, {
            [X.aD]: m
          })
        }), (0, r.jsx)("div", {
          children: (0, P.Uf)({
            subscription: n,
            renewalInvoicePreview: i,
            user: d,
            fractionalPremiumInfo: l
          })
        })]
      }), a && (0, r.jsx)(H.A, {
        onClick: () => (0, T.openUserSettings)(j.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
          section: z.nc_.GUILD_BOOSTING
        }),
        text: q.intl.string(q.t["NQ5g/U"])
      })]
    }), !a && (0, r.jsx)(g.Text, {
      className: X.yW,
      variant: "text-sm/normal",
      children: q.intl.format(u.Fr ? q.t.uxYBEa : q.t.k6haR9, {
        openAppHook: () => (0, A.A)("app")
      })
    })]
  })
}

function Q() {
  return i.useEffect(() => {
    I.default.track(z.HAw.TOOLTIP_VIEWED, {
      type: "subscription_settings_missing_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: X.Zz,
    children: [(0, r.jsx)(g.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      className: X.Sh,
      color: m.A.unsafe_rawColors.YELLOW_260.css
    }), (0, r.jsx)(g.Text, {
      className: X.Cy,
      variant: "text-sm/normal",
      children: q.intl.string(q.t.xFHEMa)
    })]
  })
}

function $() {
  return i.useEffect(() => {
    I.default.track(z.HAw.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: X.Zz,
    children: [(0, r.jsx)(g.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      className: X.Sh,
      color: m.A.unsafe_rawColors.RED_360.css
    }), (0, r.jsx)(g.Text, {
      className: X.Cy,
      variant: "text-sm/normal",
      children: q.intl.string(q.t["j+nuQZ"])
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
  } = (0, h.Ay)(b.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return i.useEffect(() => {
    I.default.track(z.HAw.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, r.jsxs)("div", {
    className: X.Zz,
    children: [(0, r.jsx)(g.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      className: X.Sh,
      color: m.A.unsafe_rawColors.YELLOW_260.css
    }), (0, r.jsx)(g.Text, {
      className: X.Cy,
      variant: "text-sm/normal",
      children: q.intl.format(q.t["0nbf/G"], {
        daysPastDue: t,
        paymentModalRedirect: () => {
          (0, y.A)({
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
    className: s()(X.KF, l),
    children: [(0, r.jsx)(g.Heading, {
      variant: "heading-md/semibold",
      className: X.QL,
      children: q.intl.string(q.t.KXQjfc)
    }), (0, r.jsx)("div", {
      children: P.Ay.getBillingInformationString(t, n, i, false, a)
    })]
  })
}

function en() {
  let e = (0, p.bG)([S.default], () => S.default.getCurrentUser()),
    t = null != e && e.isPremiumGroupMember();
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(g.Heading, {
      variant: "heading-lg/semibold",
      className: X.Gf,
      children: q.intl.string(q.t["/gs+Pz"])
    }), (0, r.jsx)("p", {
      className: X.yV,
      children: q.intl.string(q.t.D8UpUo)
    }), !t && (0, r.jsx)(g.ZpM, {
      className: X.wb,
      type: g.ZpM.Types.CUSTOM,
      children: (0, r.jsxs)(x.A, {
        align: x.A.Align.CENTER,
        children: [(0, r.jsx)(C.A, {
          game: null,
          size: C.M.SMALL,
          className: X.pV
        }), (0, r.jsx)("span", {
          className: X.O,
          children: q.intl.string(q.t.xCRgr1)
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
    fetchedOpenInvoice: p,
    isPremiumGroup: _
  } = e, {
    analyticsLocations: m
  } = (0, h.Ay)(b.A.SUBSCRIPTION_DETAILS), f = null != d ? {} : {
    subscriptionId: t.id,
    renewal: true,
    analyticsLocations: m,
    analyticsLocation: n
  }, [A] = (0, D.Kq)(f);
  A = null != d ? d : A;
  let x = null != u ? {} : {
      subscriptionId: t.id,
      renewal: true,
      applyEntitlements: true,
      analyticsLocations: m,
      analyticsLocation: n
    },
    [O] = (0, D.Kq)(x);
  O = null != u ? u : O;
  let C = (0, E.A)(),
    y = (0, M.p)(),
    j = (0, w.nf)(),
    T = P.Ay.isBaseSubscriptionCanceled(t),
    v = (0, U.v)(t, i);
  if (null == A || null == O) return (0, r.jsx)(g.y$y, {});
  let S = v ? (0, w.Bv)(O) : null,
    I = null != S || null != j && (j.discountId === W.q || j.discountId === W.EG),
    N = v && (T && null != y || !T && I) ? (0, r.jsx)(k.A, {
      subscription: t,
      invoicePreview: O,
      paymentSource: i,
      discountOffer: y,
      renewalChurnDiscountInfo: S,
      discountInfo: j,
      isLoading: l,
      analyticsLocation: n
    }) : (0, r.jsx)(B.A, {
      subscription: t,
      currentInvoicePreview: A,
      renewalInvoicePreview: O,
      paymentSource: i,
      busy: l,
      analyticsLocation: n
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: X.fj,
      children: [!_ && N, (0, r.jsx)(J, {
        subscription: t,
        renewalInvoicePreview: A,
        fromStandaloneBillingPage: a,
        className: X.td,
        fractionalPremiumInfo: C
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(g.nVY, {
        label: q.intl.string(q.t.Sb6wI1),
        children: (0, r.jsxs)("div", {
          className: X.zH,
          children: [(0, r.jsx)(et, {
            subscription: t,
            renewalInvoicePreview: O,
            className: X.g4,
            fractionalPremiumInfo: C,
            openInvoice: p
          }), (0, r.jsx)("div", {
            className: s()(X.g4, {
              [X.sE]: o
            }),
            children: (0, r.jsx)(g.D0$, {
              label: t.isPurchasedExternally && null != t.paymentGateway ? q.intl.formatToPlainString(q.t["rTk9v/"], {
                paymentGatewayName: z.qmC[t.paymentGateway]
              }) : q.intl.string(q.t.iRzXKd),
              children: (0, r.jsx)(V.A, {
                subscription: t,
                onPaymentSourceAdded: R.c_,
                highlightAddPaymentMethodButton: c || o,
                analyticsLocation: n,
                currentInvoicePreview: A,
                dropdownClassName: X.sp
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
    I.default.track(z.HAw.TOOLTIP_VIEWED, {
      type: "subscription_settings_duplicate_subscriptions"
    })
  }, []), (0, r.jsxs)("div", {
    className: X.oU,
    children: [(0, r.jsx)(g.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      color: m.A.unsafe_rawColors.RED_360.css
    }), (0, r.jsx)(g.Text, {
      className: X.dk,
      variant: "text-sm/normal",
      children: q.intl.format(q.t["6eXiiC"], {
        helpCenterLink: N.A.getArticleURL(z.MVz.NITRO)
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
    shouldRefetchInvoicesOnSubscriptionUpdate: A
  } = e;
  null != s && null != s[0] && (l = s[0]);
  let E = (0, p.bG)([S.default], () => S.default.getCurrentUser()),
    {
      analyticsLocations: x
    } = (0, h.Ay)(b.A.SUBSCRIPTION_DETAILS),
    C = (0, M.p)(),
    y = null != s ? s.slice(1) : [],
    [j, T] = i.useState(0);
  i.useEffect(() => {
    if (!A) return;
    let e = e => {
      e.subscription.id === l.id && T(e => e + 1)
    };
    return f.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e), () => {
      f.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e)
    }
  }, [l.id, A]);
  let [I] = (0, D.Kq)({
    subscriptionId: l.id,
    renewal: true,
    analyticsLocations: x,
    analyticsLocation: u,
    fetchKey: j
  }), [P] = (0, D.Kq)({
    subscriptionId: l.id,
    renewal: true,
    applyEntitlements: true,
    analyticsLocations: x,
    analyticsLocation: u,
    userDiscountOfferId: null == C ? true : C.id,
    fetchKey: j
  }), R = (0, Y.V)(), w = null == a ? true : a.invalid, U = (0, p.bG)([S.default], () => {
    var e;
    return null == (e = S.default.getCurrentUser()) ? true : e.hasFreePremium()
  }), k = d()(l.currentPeriodEnd), H = null != l.paymentSourceId, B = null != (t = null == P ? true : P.total) ? t : 0, V = !H && B > 0 && (7 >= k.diff(d()(), "days") || l.status === z.Dmq.PAST_DUE) && !U && !l.isPurchasedExternally, W = w && l.status === z.Dmq.PAST_DUE && !U && !l.isPurchasedExternally, K = (0, L.l)(), J = !U && K, et = (null == l ? true : l.status) === z.Dmq.PAST_DUE, en = et ? d()().diff(d()(l.currentPeriodStart), "days") : 0, ei = null != E && E.isPremiumGroupPrimary(), el = l.hasAnyPremiumGroup, [es] = (0, D.C8)({
    subscriptionId: l.id,
    preventFetch: !(J || et)
  });
  return null == I || null == P ? (0, r.jsx)(g.y$y, {}) : (null != l.renewalMutations && (l.renewalMutations.planId !== l.planId && !(0, v.m1)(l.renewalMutations.planId) || l.hasExternalPlanChange) && (n = (0, r.jsx)(F.A, {
    subscription: l,
    renewalMutations: l.renewalMutations,
    className: X.Il,
    analyticsLocation: u
  })), (0, r.jsxs)(g.nVY, {
    label: q.intl.string(q.t["/gs+Pz"]),
    description: q.intl.string(q.t.D8UpUo),
    children: [V ? (0, r.jsx)(Q, {}) : null, W ? (0, r.jsx)($, {}) : null, J && null != es ? (0, r.jsx)(ee, {
      daysPastDue: en,
      subscription: l,
      openInvoiceId: es.id
    }) : null, ei && el && (0, r.jsx)(G.j, {
      subscription: l,
      analyticsLocations: x
    }), n, R && (0, r.jsx)(g.po8, {
      messageType: g.YCn.INFO,
      action: (0, r.jsx)(g.DUT, {
        onClick: () => {
          (0, O.Dr)(_.M.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
            dismissAction: Z.i.USER_DISMISS
          })
        },
        className: X.dn,
        children: (0, r.jsx)(g.PGe, {
          size: "sm",
          color: m.A.colors.ICON_STRONG
        })
      }),
      children: q.intl.format(q.t.K4QorK, {
        helpdeskArticle: N.A.getArticleURL(z.MVz.BILLING)
      })
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)("div", {
        className: y.length > 0 ? X.HZ : X.__invalid_singleSubscription,
        children: (0, r.jsx)(er, {
          subscription: l,
          analyticsLocation: u,
          paymentSource: a,
          busy: o,
          fromStandaloneBillingPage: c,
          showNoPaymentMethod: V,
          showInvalidPaymentMethod: W,
          fetchedCurrentInvoicePreview: I,
          fetchedRenewalInvoicePreview: P,
          fetchedOpenInvoice: es,
          isPremiumGroup: ei
        })
      }), y.map((e, t) => (0, r.jsxs)("div", {
        className: X.HZ,
        children: [(0, r.jsx)(g.Heading, {
          variant: "heading-md/semibold",
          className: X.dd,
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
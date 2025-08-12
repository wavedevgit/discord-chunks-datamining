/** Chunk was on 81709 **/
/** chunk id: 833569, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => $
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk505266 = require("./505266.js"),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk211242 = require("./211242.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk509545 = require("./509545.js"),
  Chunk626135 = require("./626135.js"),
  Chunk122289 = require("./122289.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk374649 = require("./374649.js"),
  Chunk140465 = require("./140465.js"),
  Chunk414642 = require("./414642.js"),
  Chunk140447 = require("./140447.js"),
  Chunk847903 = require("./847903.js"),
  Chunk811334 = require("./811334.jsx"),
  Chunk48813 = require("./48813.jsx"),
  Chunk625881 = require("./625881.jsx"),
  Chunk440984 = require("./440984.jsx"),
  Chunk398775 = require("./398775.jsx"),
  Chunk807163 = require("./807163.jsx"),
  Chunk311821 = require("./311821.jsx"),
  Chunk42818 = require("./42818.jsx"),
  Chunk798769 = require("./798769.jsx"),
  Chunk459965 = require("./459965.js"),
  Chunk45474 = require("./45474.js"),
  Chunk501090 = require("./501090.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk35795 = require("./35795.js");

function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}
async function V(e) {
  let {
    premiumSubscription: t,
    onClose: n,
    setHasError: i,
    setIsCancelling: r,
    analyticsLocations: a,
    analyticsLocation: s
  } = e;
  try {
    if (r(true), i(false), [H.O0b.PAST_DUE, H.O0b.PAUSED, H.O0b.BILLING_RETRY].includes(t.status)) await (0, _.EO)(t.id, a, s);
    else {
      var o, l;
      let e = null != (l = null == (o = t.renewalMutations) ? true : o.items) ? l : t.items,
        n = (0, O.Ue)(e);
      await (0, _.Mg)(t, {
        items: n
      }, {
        amount: 0,
        currency: t.currency
      }, (0, O.UX)(n, t.currency, t.paymentSourceId), a, s)
    }
    n()
  } catch (e) {
    i(true), r(false)
  }
}

function G(e) {
  var t;
  let {
    premiumSubscription: n,
    premiumType: a,
    setStep: s,
    onClose: o,
    whatYouLoseExperienceEnabled: l,
    analyticsLocation: c
  } = e, u = (0, y.Q)(), [_, b] = r.useState(false), [g, C] = r.useState(false), j = (0, f.ZP)(), {
    analyticsLocations: P
  } = (0, x.ZP)(), v = null;
  switch (n.status) {
    case H.O0b.PAST_DUE:
    case H.O0b.PAUSED:
    case H.O0b.BILLING_RETRY:
      v = W.intl.string(W.t.FClXh4);
      break;
    default:
      switch (a) {
        case Y.p9.TIER_0:
          v = u ? W.intl.format(W.t["l+A50N"], {
            date: n.currentPeriodEnd,
            helpdeskArticle: E.Z.getArticleURL(H.BhN.BLOCKED_PAYMENTS)
          }) : W.intl.format(W.t.Y6Wfa2, {
            date: n.currentPeriodEnd
          });
          break;
        case Y.p9.TIER_1:
          v = u ? W.intl.format(W.t.QN7eIi, {
            date: n.currentPeriodEnd,
            helpdeskArticle: E.Z.getArticleURL(H.BhN.BLOCKED_PAYMENTS)
          }) : W.intl.format(W.t.X7i9Dw, {
            date: n.currentPeriodEnd
          });
          break;
        default:
          v = u ? W.intl.format(W.t.vuSNho, {
            date: n.currentPeriodEnd,
            helpdeskArticle: E.Z.getArticleURL(H.BhN.BLOCKED_PAYMENTS)
          }) : W.intl.format(W.t.fCdmNj, {
            date: n.currentPeriodEnd
          })
      }
  }
  let N = n.items.some(e => {
      let {
        planId: t
      } = e;
      return !Y.dJ.has(t)
    }) && null == n.renewalMutations || (null == (t = n.renewalMutations) ? true : t.items.find(e => {
      let {
        planId: t
      } = e;
      return !Y.dJ.has(t)
    })) != null ? (0, i.jsx)(p.zxk, {
      variant: "primary",
      text: W.intl.string(W.t.PDTjLC),
      onClick: () => s(z.R.PREVIEW)
    }) : (0, i.jsx)(p.zxk, {
      variant: "critical-primary",
      text: l ? W.intl.string(W.t["cY+Ooa"]) : W.intl.formatToPlainString(W.t["V3+Rpa"], {
        planPremiumType: O.ZP.getDisplayPremiumType(n.planId)
      }),
      disabled: _,
      onClick: async () => {
        await V({
          setHasError: C,
          onClose: o,
          premiumSubscription: n,
          setIsCancelling: b,
          analyticsLocations: P,
          analyticsLocation: c
        })
      }
    }),
    I = (0, i.jsx)(m.zx, {
      "data-migration-pending": true,
      look: m.zx.Looks.LINK,
      color: (0, d.ap)(j) ? m.zx.Colors.PRIMARY : m.zx.Colors.WHITE,
      onClick: o,
      children: l ? W.intl.string(W.t.h9tkAA) : W.intl.string(W.t["ETE/oK"])
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [l ? (0, i.jsx)(B.Z, {
      premiumType: a,
      className: X.cancellationHeader,
      onClose: o
    }) : (0, i.jsxs)(p.xBx, {
      "data-migration-pending": true,
      separator: false,
      children: [(0, i.jsx)(p.vwX, {
        tag: p.RB0.H4,
        children: W.intl.format(W.t.ZpiGy8, {
          planPremiumType: O.ZP.getDisplayPremiumType(n.planId)
        })
      }), (0, i.jsx)(p.olH, {
        "data-migration-pending": true,
        onClick: o
      })]
    }), (0, i.jsxs)(p.hzk, {
      "data-migration-pending": true,
      className: X.body,
      children: [g ? (0, i.jsx)(p.kzN, {
        className: X.errorBlock,
        children: W.intl.string(W.t["5mlOCQ"])
      }) : null, (0, i.jsx)("div", {
        className: X.cancelImage
      }), (0, i.jsx)("div", {
        children: v
      })]
    }), (0, i.jsxs)(p.mzw, {
      "data-migration-pending": true,
      justify: h.Z.Justify.START,
      children: [N, I]
    })]
  })
}

function K(e) {
  var t, n;
  let {
    premiumSubscription: r
  } = e, {
    analyticsLocations: a
  } = (0, x.ZP)(), [s] = (0, v.ED)({
    subscriptionId: r.id,
    items: (0, O.Ue)(null != (n = null == (t = r.renewalMutations) ? true : t.items) ? n : r.items),
    renewal: true,
    analyticsLocations: a,
    analyticsLocation: b.Z.CANCEL_INVOICE_PREVIEW
  }), o = (0, u.e7)([g.Z], () => g.Z.get(r.planId));
  if (null == s || null == o) return (0, i.jsx)(p.$jN, {
    className: X.loading
  });
  let {
    intervalType: l,
    intervalCount: c
  } = O.ZP.getIntervalForInvoice(s);
  return (0, i.jsxs)("div", {
    className: X.__invalid_bodyText,
    children: [(0, i.jsx)("div", {
      className: X.renewalInvoiceDate,
      children: 0 !== s.total ? W.intl.format(W.t.ycyeBw, {
        renewalDate: s.subscriptionPeriodStart,
        rate: (0, P.og)((0, P.T4)(s.total, s.currency), l, c)
      }) : W.intl.format(W.t["+y0Tj4"], {
        renewalDate: s.subscriptionPeriodStart
      })
    }), (0, i.jsxs)(R.aO, {
      children: [(0, i.jsx)(R.Z9, {
        children: W.intl.string(W.t.iqhIp6)
      }), (0, i.jsx)(R.B1, {
        label: W.intl.formatToPlainString(W.t.r3jVZm, {
          planName: O.ZP.getDisplayName(o.id)
        }),
        value: (0, O.PK)(o),
        className: X.invoiceCancelRow
      }), (0, i.jsx)(R.UN, {}), (0, i.jsx)(U.nd, {
        premiumSubscription: r,
        renewalInvoice: s,
        isUpdate: true
      })]
    })]
  })
}

function J(e) {
  let {
    premiumSubscription: t,
    premiumType: n,
    onBack: a,
    onClose: o,
    analyticsLocation: l
  } = e, [c, u] = r.useState(false), [d, m] = r.useState(false), {
    analyticsLocations: _
  } = (0, x.ZP)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(B.Z, {
      premiumType: n,
      onClose: o
    }), (0, i.jsxs)(p.hzk, {
      "data-migration-pending": true,
      className: s()(X.previewStep, X.body),
      children: [d ? (0, i.jsx)(p.kzN, {
        className: X.errorBlock,
        children: W.intl.string(W.t["5mlOCQ"])
      }) : null, (0, i.jsx)(K, {
        premiumSubscription: t
      })]
    }), (0, i.jsxs)(p.mzw, {
      "data-migration-pending": true,
      align: h.Z.Align.CENTER,
      justify: h.Z.Justify.BETWEEN,
      children: [(0, i.jsx)(p.zxk, {
        variant: "critical-primary",
        text: W.intl.format(W.t["V3+Rpa"], {
          planPremiumType: O.ZP.getDisplayPremiumType(t.planId)
        }),
        disabled: c,
        onClick: async () => {
          await V({
            setHasError: m,
            onClose: o,
            premiumSubscription: t,
            setIsCancelling: u,
            analyticsLocations: _,
            analyticsLocation: l
          })
        }
      }), (0, i.jsx)(L.Z, {
        onClick: a
      })]
    })]
  })
}

function Q(e) {
  var t;
  return {
    subscription_id: e.id,
    subscription_type: e.type,
    subscription_plan_id: null == (t = (0, O.Af)(e)) ? true : t.id,
    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
    subscription_status: e.status
  }
}

function $(e) {
  var t, n, r;
  let {
    premiumSubscription: a
  } = e, s = a.items.some(e => {
    let {
      planId: t
    } = e;
    return !Y.dJ.has(t)
  }) && null == a.renewalMutations || (null == (t = a.renewalMutations) ? true : t.items.find(e => {
    let {
      planId: t
    } = e;
    return !Y.dJ.has(t)
  })) != null, {
    enabled: o,
    discountPrimary: l
  } = (0, I.S)({
    location: "Churn Modal"
  }), {
    enabled: c
  } = (0, T.P)({
    location: "Churn Modal"
  });
  return (!s || c) && o ? (0, i.jsx)(w.I, (n = q({}, e), r = r = {
    discountPrimary: l
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
  }), n)) : (0, i.jsx)(ee, q({}, e))
}
let ee = e => {
  var t;
  let n, {
      premiumSubscription: a,
      transitionState: s,
      onClose: l,
      analyticsLocations: u,
      analyticsLocation: _
    } = e,
    {
      initialStep: y
    } = e,
    h = r.useRef(new o.qA),
    [g, E] = r.useState(null),
    P = null == (t = (0, O.Af)(a)) ? true : t.planId,
    v = null != P ? O.ZP.getPremiumType(P) : null;
  c()(null != v, "Should not be cancelling Nitro without premiumType");
  let I = (0, f.ZP)();
  r.useEffect(() => {
    C.default.track(H.rMx.CANCELLATION_FLOW_STARTED, Q(a))
  }, [a]);
  let T = v === Y.p9.TIER_0 || v === Y.p9.TIER_1 || v === Y.p9.TIER_2;
  null == y && (y = T ? z.R.WHAT_YOU_LOSE : z.R.CONFIRM);
  let {
    analyticsLocations: R
  } = (0, x.ZP)(u, b.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL), [w, L, U, B] = (0, F.q)(y, a, u), [V, K] = r.useState(null);
  (0, Z.w)(a, l, false);
  let $ = e => {
      l(), C.default.track(H.rMx.CANCELLATION_FLOW_STEP, q({
        from_step: z.O[e],
        to_step: null,
        step_duration_ms: Date.now() - U,
        flow_duration_ms: Date.now() - B,
        location_stack: u
      }, Q(a)))
    },
    ee = (0, N.UV)(),
    {
      churnUserDiscountOffer: et,
      isFetchingChurnDiscountOffer: en
    } = (0, N.WR)(!ee || null != a.canceledAt && w !== z.R.CONFIRM_DISCOUNT),
    ei = (0, S.Z)(),
    er = "US" === ei.ipCountryCode && "CA" === ei.ipSubdivisionCode;
  switch (w) {
    case z.R.PAUSE_SELECT:
      n = (0, i.jsx)(A.of, {
        premiumSubscription: a,
        premiumType: v,
        setStep: L,
        onClose: () => $(w),
        pauseDuration: V,
        setPauseDuration: K,
        footer: (0, i.jsxs)("div", {
          className: X.whatYouLoseButtonContainer,
          children: [(0, i.jsx)(p.zxk, {
            variant: "primary",
            text: W.intl.string(W.t["3PatS0"]),
            disabled: null === V,
            onClick: () => {
              0 === V ? L(z.R.WHAT_YOU_LOSE) : L(z.R.PAUSE_CONFIRM)
            }
          }), (0, i.jsx)(m.zx, {
            "data-migration-pending": true,
            look: m.zx.Looks.LINK,
            color: (0, d.wj)(I) ? m.zx.Colors.WHITE : m.zx.Colors.PRIMARY,
            onClick: l,
            children: W.intl.string(W.t.h9tkAA)
          })]
        }),
        analyticsLocation: _
      });
      break;
    case z.R.PAUSE_CONFIRM:
      if (null == V) {
        let e = Error("No pause duration to set");
        throw (0, j.q2)(e, {
          extra: {
            subscriptionId: a.id,
            status: a.status
          }
        }), e
      }
      n = (0, i.jsx)(A.Sz, {
        premiumSubscription: a,
        premiumType: v,
        setStep: L,
        onClose: () => $(w),
        analyticsLocation: _,
        pauseDuration: V
      });
      break;
    case z.R.WHAT_YOU_LOSE:
      n = (0, i.jsx)(M.Z, {
        premiumType: v,
        titleText: W.intl.string(W.t.PWq8TE),
        subtitleText: W.intl.format(W.t.nsGVzs, {}),
        subtitleClassName: true,
        footer: (0, i.jsxs)("div", {
          className: X.whatYouLoseButtonContainer,
          children: [(0, i.jsx)(p.zxk, {
            variant: "primary",
            text: er ? W.intl.string(W.t.PfnxqK) : W.intl.string(W.t["3PatS0"]),
            onClick: () => L(z.R.CONFIRM)
          }), (0, i.jsx)(m.zx, {
            "data-migration-pending": true,
            look: m.zx.Looks.LINK,
            color: (0, d.wj)(I) ? m.zx.Colors.WHITE : m.zx.Colors.PRIMARY,
            onClick: () => $(w),
            children: W.intl.string(W.t.h9tkAA)
          })]
        }),
        onClose: () => $(w),
        onDiscountClaim: () => L(z.R.CONFIRM_DISCOUNT),
        onContinue: () => L(z.R.CONFIRM),
        isLoading: ee && en,
        churnUserDiscountOffer: et,
        analyticsLocations: R
      });
      break;
    case z.R.CONFIRM:
      n = (0, i.jsx)(G, {
        premiumSubscription: a,
        premiumType: v,
        setStep: L,
        onClose: () => $(w),
        whatYouLoseExperienceEnabled: T,
        analyticsLocation: _
      });
      break;
    case z.R.PREVIEW:
      n = (0, i.jsx)(J, {
        premiumSubscription: a,
        premiumType: v,
        onBack: () => L(z.R.CONFIRM),
        onClose: () => $(w),
        analyticsLocation: _
      });
      break;
    case z.R.CONFIRM_DISCOUNT:
      n = (0, i.jsx)(D.Z, {
        premiumSubscription: a,
        premiumType: v,
        onClose: () => $(w),
        onConfirm: () => L(z.R.DISCOUNT_APPLIED),
        userDiscountOffer: et
      });
      break;
    case z.R.DISCOUNT_APPLIED:
      n = (0, i.jsx)(k.D, {
        premiumSubscription: a,
        premiumType: v,
        onClose: () => $(w),
        confettiCanvas: g,
        userDiscountOffer: et
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(w))
  }
  return (0, i.jsxs)(x.Gt, {
    value: R,
    children: [(0, i.jsx)(o.O_, {
      ref: E,
      className: X.confettiCanvas,
      environment: h.current
    }), (0, i.jsx)(p.Y0X, {
      "data-migration-pending": true,
      transitionState: s,
      parentComponent: "PremiumSubscriptionCancellationModal",
      children: n
    })]
  })
}
/** Chunk was on 81709 **/
/** chunk id: 833569, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => Q
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk238651 = require("./238651.js"),
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
  Chunk959032 = require("./959032.js");

function X(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), i.forEach(function(e) {
      var i;
      i = n[e], e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = i
    })
  }
  return t
}
async function q(t) {
  let {
    premiumSubscription: e,
    onClose: n,
    setHasError: i,
    setIsCancelling: a,
    analyticsLocations: r,
    analyticsLocation: s
  } = t;
  try {
    if (a(true), i(false), [W.O0b.PAST_DUE, W.O0b.PAUSED, W.O0b.BILLING_RETRY].includes(e.status)) await (0, x.EO)(e.id, r, s);
    else {
      var l, o;
      let t = null != (o = null == (l = e.renewalMutations) ? true : l.items) ? o : e.items,
        n = (0, N.Ue)(t);
      await (0, x.Mg)(e, {
        items: n
      }, {
        amount: 0,
        currency: e.currency
      }, (0, N.UX)(n, e.currency, e.paymentSourceId), r, s)
    }
    n()
  } catch (t) {
    i(true), a(false)
  }
}

function V(t) {
  var e;
  let {
    premiumSubscription: n,
    premiumType: r,
    setStep: s,
    onClose: l,
    whatYouLoseExperienceEnabled: o,
    analyticsLocation: c
  } = t, u = (0, h.Q)(), [x, _] = a.useState(false), [E, g] = a.useState(false), C = (0, f.ZP)(), {
    analyticsLocations: O
  } = (0, y.ZP)(), P = null;
  switch (n.status) {
    case W.O0b.PAST_DUE:
    case W.O0b.PAUSED:
    case W.O0b.BILLING_RETRY:
      P = Y.intl.string(Y.t.FClXh4);
      break;
    default:
      switch (r) {
        case B.p9.TIER_0:
          P = u ? Y.intl.format(Y.t["l+A50N"], {
            date: n.currentPeriodEnd,
            helpdeskArticle: b.Z.getArticleURL(W.BhN.BLOCKED_PAYMENTS)
          }) : Y.intl.format(Y.t.Y6Wfa2, {
            date: n.currentPeriodEnd
          });
          break;
        case B.p9.TIER_1:
          P = u ? Y.intl.format(Y.t.QN7eIi, {
            date: n.currentPeriodEnd,
            helpdeskArticle: b.Z.getArticleURL(W.BhN.BLOCKED_PAYMENTS)
          }) : Y.intl.format(Y.t.X7i9Dw, {
            date: n.currentPeriodEnd
          });
          break;
        default:
          P = u ? Y.intl.format(Y.t.vuSNho, {
            date: n.currentPeriodEnd,
            helpdeskArticle: b.Z.getArticleURL(W.BhN.BLOCKED_PAYMENTS)
          }) : Y.intl.format(Y.t.fCdmNj, {
            date: n.currentPeriodEnd
          })
      }
  }
  let I = n.items.some(t => {
      let {
        planId: e
      } = t;
      return !B.dJ.has(e)
    }) && null == n.renewalMutations || (null == (e = n.renewalMutations) ? true : e.items.find(t => {
      let {
        planId: e
      } = t;
      return !B.dJ.has(e)
    })) != null ? (0, i.jsx)(p.zxk, {
      variant: "primary",
      text: Y.intl.string(Y.t.PDTjLC),
      onClick: () => s(z.R.PREVIEW)
    }) : (0, i.jsx)(p.zxk, {
      variant: "critical-primary",
      text: o ? Y.intl.string(Y.t["cY+Ooa"]) : Y.intl.formatToPlainString(Y.t["V3+Rpa"], {
        planPremiumType: N.ZP.getDisplayPremiumType(n.planId)
      }),
      disabled: x,
      onClick: async () => {
        await q({
          setHasError: g,
          onClose: l,
          premiumSubscription: n,
          setIsCancelling: _,
          analyticsLocations: O,
          analyticsLocation: c
        })
      }
    }),
    T = (0, i.jsx)(m.zx, {
      "data-migration-pending": true,
      look: m.zx.Looks.LINK,
      color: (0, d.ap)(C) ? m.zx.Colors.PRIMARY : m.zx.Colors.WHITE,
      onClick: l,
      children: o ? Y.intl.string(Y.t.h9tkAA) : Y.intl.string(Y.t["ETE/oK"])
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [o ? (0, i.jsx)(U.Z, {
      premiumType: r,
      className: H.cancellationHeader,
      onClose: l
    }) : (0, i.jsxs)(p.xBx, {
      "data-migration-pending": true,
      separator: false,
      children: [(0, i.jsx)(p.vwX, {
        tag: p.RB0.H4,
        children: Y.intl.format(Y.t.ZpiGy8, {
          planPremiumType: N.ZP.getDisplayPremiumType(n.planId)
        })
      }), (0, i.jsx)(p.olH, {
        "data-migration-pending": true,
        onClick: l
      })]
    }), (0, i.jsxs)(p.hzk, {
      "data-migration-pending": true,
      className: H.body,
      children: [E ? (0, i.jsx)(p.kzN, {
        className: H.errorBlock,
        children: Y.intl.string(Y.t["5mlOCQ"])
      }) : null, (0, i.jsx)("div", {
        className: H.cancelImage
      }), (0, i.jsx)("div", {
        children: P
      })]
    }), (0, i.jsxs)(p.mzw, {
      "data-migration-pending": true,
      justify: j.Z.Justify.START,
      children: [I, T]
    })]
  })
}

function G(t) {
  var e, n;
  let {
    premiumSubscription: a
  } = t, {
    analyticsLocations: r
  } = (0, y.ZP)(), [s] = (0, P.ED)({
    subscriptionId: a.id,
    items: (0, N.Ue)(null != (n = null == (e = a.renewalMutations) ? true : e.items) ? n : a.items),
    renewal: true,
    analyticsLocations: r,
    analyticsLocation: _.Z.CANCEL_INVOICE_PREVIEW
  }), l = (0, u.e7)([E.Z], () => E.Z.get(a.planId));
  if (null == s || null == l) return (0, i.jsx)(p.$jN, {
    className: H.loading
  });
  let {
    intervalType: o,
    intervalCount: c
  } = N.ZP.getIntervalForInvoice(s);
  return (0, i.jsxs)("div", {
    className: H.__invalid_bodyText,
    children: [(0, i.jsx)("div", {
      className: H.renewalInvoiceDate,
      children: 0 !== s.total ? Y.intl.format(Y.t.ycyeBw, {
        renewalDate: s.subscriptionPeriodStart,
        rate: (0, O.og)((0, O.T4)(s.total, s.currency), o, c)
      }) : Y.intl.format(Y.t["+y0Tj4"], {
        renewalDate: s.subscriptionPeriodStart
      })
    }), (0, i.jsxs)(v.aO, {
      children: [(0, i.jsx)(v.Z9, {
        children: Y.intl.string(Y.t.iqhIp6)
      }), (0, i.jsx)(v.B1, {
        label: Y.intl.formatToPlainString(Y.t.r3jVZm, {
          planName: N.ZP.getDisplayName(l.id)
        }),
        value: (0, N.PK)(l),
        className: H.invoiceCancelRow
      }), (0, i.jsx)(v.UN, {}), (0, i.jsx)(L.nd, {
        premiumSubscription: a,
        renewalInvoice: s,
        isUpdate: true
      })]
    })]
  })
}

function K(t) {
  let {
    premiumSubscription: e,
    premiumType: n,
    onBack: r,
    onClose: l,
    analyticsLocation: o
  } = t, [c, u] = a.useState(false), [d, m] = a.useState(false), {
    analyticsLocations: x
  } = (0, y.ZP)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(U.Z, {
      premiumType: n,
      onClose: l
    }), (0, i.jsxs)(p.hzk, {
      "data-migration-pending": true,
      className: s()(H.previewStep, H.body),
      children: [d ? (0, i.jsx)(p.kzN, {
        className: H.errorBlock,
        children: Y.intl.string(Y.t["5mlOCQ"])
      }) : null, (0, i.jsx)(G, {
        premiumSubscription: e
      })]
    }), (0, i.jsxs)(p.mzw, {
      "data-migration-pending": true,
      align: j.Z.Align.CENTER,
      justify: j.Z.Justify.BETWEEN,
      children: [(0, i.jsx)(p.zxk, {
        variant: "critical-primary",
        text: Y.intl.format(Y.t["V3+Rpa"], {
          planPremiumType: N.ZP.getDisplayPremiumType(e.planId)
        }),
        disabled: c,
        onClick: async () => {
          await q({
            setHasError: m,
            onClose: l,
            premiumSubscription: e,
            setIsCancelling: u,
            analyticsLocations: x,
            analyticsLocation: o
          })
        }
      }), (0, i.jsx)(M.Z, {
        onClick: r
      })]
    })]
  })
}

function J(t) {
  var e;
  return {
    subscription_id: t.id,
    subscription_type: t.type,
    subscription_plan_id: null == (e = (0, N.Af)(t)) ? true : e.id,
    subscription_plan_gateway_plan_id: t.paymentGatewayPlanId,
    subscription_status: t.status
  }
}

function Q(t) {
  var e;
  let {
    premiumSubscription: n
  } = t, a = n.items.some(t => {
    let {
      planId: e
    } = t;
    return !B.dJ.has(e)
  }) && null == n.renewalMutations || (null == (e = n.renewalMutations) ? true : e.items.find(t => {
    let {
      planId: e
    } = t;
    return !B.dJ.has(e)
  })) != null, {
    enabled: r
  } = (0, T.P)({
    location: "Churn Modal"
  });
  return !a || r ? (0, i.jsx)(S.I, X({}, t)) : (0, i.jsx)($, X({}, t))
}
let $ = t => {
  var e;
  let n, {
      premiumSubscription: r,
      transitionState: s,
      onClose: o,
      analyticsLocations: u,
      analyticsLocation: x
    } = t,
    {
      initialStep: h
    } = t,
    j = a.useRef(new l.qA),
    [E, b] = a.useState(null),
    O = null == (e = (0, N.Af)(r)) ? true : e.planId,
    P = null != O ? N.ZP.getPremiumType(O) : null;
  c()(null != P, "Should not be cancelling Nitro without premiumType");
  let T = (0, f.ZP)();
  a.useEffect(() => {
    g.default.track(W.rMx.CANCELLATION_FLOW_STARTED, J(r))
  }, [r]);
  let v = P === B.p9.TIER_0 || P === B.p9.TIER_1 || P === B.p9.TIER_2;
  null == h && (h = v ? z.R.WHAT_YOU_LOSE : z.R.CONFIRM);
  let {
    analyticsLocations: S
  } = (0, y.ZP)(u, _.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL), [M, L, U, q] = (0, F.q)(h, r, u), [G, Q] = a.useState(null);
  (0, Z.w)(r, o, false);
  let $ = t => {
      o(), g.default.track(W.rMx.CANCELLATION_FLOW_STEP, X({
        from_step: z.O[t],
        to_step: null,
        step_duration_ms: Date.now() - U,
        flow_duration_ms: Date.now() - q,
        location_stack: u
      }, J(r)))
    },
    tt = (0, I.UV)(),
    {
      churnUserDiscountOffer: te,
      isFetchingChurnDiscountOffer: tn
    } = (0, I.WR)(!tt || r.status === W.O0b.CANCELED && M !== z.R.CONFIRM_DISCOUNT),
    ti = (0, R.Z)(),
    ta = "US" === ti.ipCountryCode && "CA" === ti.ipSubdivisionCode;
  switch (M) {
    case z.R.PAUSE_SELECT:
      n = (0, i.jsx)(k.of, {
        premiumSubscription: r,
        premiumType: P,
        setStep: L,
        onClose: () => $(M),
        pauseDuration: G,
        setPauseDuration: Q,
        footer: (0, i.jsxs)("div", {
          className: H.whatYouLoseButtonContainer,
          children: [(0, i.jsx)(p.zxk, {
            variant: "primary",
            text: Y.intl.string(Y.t["3PatS0"]),
            disabled: null === G,
            onClick: () => {
              0 === G ? L(z.R.WHAT_YOU_LOSE) : L(z.R.PAUSE_CONFIRM)
            }
          }), (0, i.jsx)(m.zx, {
            "data-migration-pending": true,
            look: m.zx.Looks.LINK,
            color: (0, d.wj)(T) ? m.zx.Colors.WHITE : m.zx.Colors.PRIMARY,
            onClick: o,
            children: Y.intl.string(Y.t.h9tkAA)
          })]
        }),
        analyticsLocation: x
      });
      break;
    case z.R.PAUSE_CONFIRM:
      if (null == G) {
        let t = Error("No pause duration to set");
        throw (0, C.q2)(t, {
          extra: {
            subscriptionId: r.id,
            status: r.status
          }
        }), t
      }
      n = (0, i.jsx)(k.Sz, {
        premiumSubscription: r,
        premiumType: P,
        setStep: L,
        onClose: () => $(M),
        analyticsLocation: x,
        pauseDuration: G
      });
      break;
    case z.R.WHAT_YOU_LOSE:
      n = (0, i.jsx)(A.Z, {
        premiumType: P,
        titleText: Y.intl.string(Y.t.PWq8TE),
        subtitleText: Y.intl.format(Y.t.nsGVzs, {}),
        subtitleClassName: true,
        footer: (0, i.jsxs)("div", {
          className: H.whatYouLoseButtonContainer,
          children: [(0, i.jsx)(p.zxk, {
            variant: "primary",
            text: ta ? Y.intl.string(Y.t.PfnxqK) : Y.intl.string(Y.t["3PatS0"]),
            onClick: () => L(z.R.CONFIRM)
          }), (0, i.jsx)(m.zx, {
            "data-migration-pending": true,
            look: m.zx.Looks.LINK,
            color: (0, d.wj)(T) ? m.zx.Colors.WHITE : m.zx.Colors.PRIMARY,
            onClick: () => $(M),
            children: Y.intl.string(Y.t.h9tkAA)
          })]
        }),
        onClose: () => $(M),
        onDiscountClaim: () => L(z.R.CONFIRM_DISCOUNT),
        onContinue: () => L(z.R.CONFIRM),
        isLoading: tt && tn,
        churnUserDiscountOffer: te,
        analyticsLocations: S
      });
      break;
    case z.R.CONFIRM:
      n = (0, i.jsx)(V, {
        premiumSubscription: r,
        premiumType: P,
        setStep: L,
        onClose: () => $(M),
        whatYouLoseExperienceEnabled: v,
        analyticsLocation: x
      });
      break;
    case z.R.PREVIEW:
      n = (0, i.jsx)(K, {
        premiumSubscription: r,
        premiumType: P,
        onBack: () => L(z.R.CONFIRM),
        onClose: () => $(M),
        analyticsLocation: x
      });
      break;
    case z.R.CONFIRM_DISCOUNT:
      n = (0, i.jsx)(w.Z, {
        premiumSubscription: r,
        premiumType: P,
        onClose: () => $(M),
        onConfirm: () => L(z.R.DISCOUNT_APPLIED),
        userDiscountOffer: te
      });
      break;
    case z.R.DISCOUNT_APPLIED:
      n = (0, i.jsx)(D.D, {
        premiumSubscription: r,
        premiumType: P,
        onClose: () => $(M),
        confettiCanvas: E,
        userDiscountOffer: te
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(M))
  }
  return (0, i.jsxs)(y.Gt, {
    value: S,
    children: [(0, i.jsx)(l.O_, {
      ref: b,
      className: H.confettiCanvas,
      environment: j.current
    }), (0, i.jsx)(p.Y0X, {
      "data-migration-pending": true,
      transitionState: s,
      parentComponent: "PremiumSubscriptionCancellationModal",
      children: n
    })]
  })
}
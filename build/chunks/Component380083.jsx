/** Chunk was on 14704 **/
/** chunk id: 380083, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  Ay: () => v,
  Rs: () => b,
  fw: () => j
}), require("./896048.js"), require("./65821.js");
var l, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  r = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk830382 = require("./830382.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk972607 = require("./972607.jsx"),
  Chunk419212 = require("./419212.js"),
  Chunk97352 = require("./97352.js"),
  Chunk67480 = require("./67480.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk615396 = require("./615396.js"),
  Chunk135088 = require("./135088.jsx"),
  Chunk659746 = require("./659746.jsx"),
  Chunk4471 = require("./4471.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js"),
  Chunk26279 = require("./26279.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk344524 = require("./344524.js");

function Z(e) {
  let t, {
      planId: s,
      startingPremiumSubscriptionPlanId: l,
      paymentSourceType: i
    } = e,
    [a, c] = (0, C.yK)([M.A], () => [M.A.get(l), M.A.get(s)]);
  if (r()(null != a && null != c, "Missing startingPlan or newPlan"), f.LE.indexOf(l) < f.LE.indexOf(s)) switch (s) {
      case f.gD.PREMIUM_MONTH_TIER_1:
        t = P.intl.string(P.t.knvOVz), x.NcF.has(null != i ? i : x.hes.UNKNOWN) && (t = P.intl.format(P.t.o6hBiR, {}));
        break;
      case f.gD.PREMIUM_MONTH_TIER_2:
        t = P.intl.string(P.t.f8Dquh), x.NcF.has(null != i ? i : x.hes.UNKNOWN) && (t = P.intl.format(P.t.A4THYt, {}));
        break;
      case f.gD.PREMIUM_YEAR_TIER_1:
        t = P.intl.string(P.t.YZd5rw), x.NcF.has(null != i ? i : x.hes.UNKNOWN) && (t = P.intl.format(P.t.MHAxpE, {}));
        break;
      case f.gD.PREMIUM_YEAR_TIER_2:
        t = P.intl.formatToPlainString(P.t["M/Lknl"], {
          numFreeGuildSubscriptions: f.M4
        }), x.NcF.has(null != i ? i : x.hes.UNKNOWN) && (t = P.intl.format(P.t.mULxLW, {
          numFreeGuildSubscriptions: f.M4
        }));
        break;
      case f.gD.PREMIUM_3_MONTH_TIER_2:
      case f.gD.PREMIUM_6_MONTH_TIER_2:
        t = P.intl.string(P.t.aaCoW6);
        break;
      case f.gD.PREMIUM_MONTH_TIER_0:
      case f.gD.PREMIUM_YEAR_TIER_0:
        t = P.intl.string(P.t["XEoQ7+"]);
        break;
      case f.gD.PREMIUM_GROUP_MONTH:
        t = P.intl.formatToPlainString(T.default.pDiwHe, {
          premiumGroupProductName: (0, _.DP)(),
          totalSeats: _.LM
        });
        break;
      default:
        throw Error("Unexpected planId: ".concat(s))
    } else if (a.skuId === f.pe.TIER_2 && c.skuId === f.pe.TIER_1) t = P.intl.string(P.t.PNX4NM);
    else switch (c.skuId) {
      case f.pe.TIER_0:
        t = P.intl.string(P.t["XEoQ7+"]);
        break;
      case f.pe.TIER_1:
        t = P.intl.string(P.t.nLI1Kr);
        break;
      case f.pe.TIER_2:
        t = 1 !== a.intervalCount ? P.intl.string(P.t.qSZZVA) : P.intl.string(P.t.RNjcNg);
        break;
      default:
        throw Error("Unexpected skuId: ".concat(c.skuId))
    }
  return (0, n.jsx)("div", {
    className: R.Qq,
    children: t
  })
}
var b = ((l = {}).DEEPLINK_TO_DESKTOP_APP = "deeplink_to_desktop_app", l);

function v(e) {
  let t, s, {
      planId: l,
      enableNoPaymentTrial: a,
      startingPremiumSubscriptionPlanId: L,
      onClose: H,
      followupSKUInfo: o,
      isDowngrade: b,
      hideClose: v,
      postSuccessGuild: j,
      paymentSourceType: k,
      startingFractionalPremiumEndsAt: U,
      customCTAType: w
    } = e,
    {
      isDisplayingWowMomentConfirmation: O,
      customCheckoutFlow: D,
      isPremiumGroupPurchase: y
    } = (0, u.P5)(),
    {
      theme: S
    } = (0, c.wRf)(),
    F = (0, C.bG)([g.A], () => null != o ? g.A.get(o.id) : null),
    q = (0, N.b2)(U);
  i.useEffect(() => {
    if (null == o || null != F) return;
    let {
      applicationId: e,
      id: t
    } = o;
    (0, d.EX)(e, t).catch(x.FXj)
  }, [o, F]);
  let G = e => y ? P.intl.formatToPlainString(T.default.pDiwHe, {
    premiumGroupProductName: (0, _.DP)(),
    totalSeats: _.LM
  }) : e.skuId === f.pe.TIER_0 ? x.NcF.has(null != k ? k : x.hes.UNKNOWN) ? P.intl.format(P.t.o6hBiR, {}) : P.intl.string(P.t["AGf/ye"]) : e.skuId === f.pe.TIER_1 ? x.NcF.has(null != k ? k : x.hes.UNKNOWN) ? P.intl.format(P.t.o6hBiR, {}) : P.intl.string(P.t.knvOVz) : x.NcF.has(null != k ? k : x.hes.UNKNOWN) ? P.intl.format(P.t.A4THYt, {}) : a ? P.intl.string(P.t["g52y/r"]) : P.intl.string(P.t.aTUr3Z);
  if ("deeplink_to_desktop_app" === w) t = (0, n.jsx)("div", {
    className: R.Qq,
    children: (0, n.jsxs)("p", {
      children: [P.intl.string(P.t.bIVRSQ), " ", P.intl.string(P.t["0UJqOy"])]
    })
  });
  else if (null != F) t = (0, n.jsx)("div", {
    className: R.Qq,
    children: P.intl.format(P.t["tsQOs+"], {
      skuName: F.name
    })
  });
  else if (q && !b) {
    let e = M.A.get(l);
    r()(null != e, "Missing plan"), e.skuId === f.pe.TIER_0 ? t = (0, n.jsxs)("div", {
      className: R.Qq,
      children: [(0, n.jsx)("p", {
        children: P.intl.string(P.t["L9lcG/"])
      }), (0, n.jsx)("p", {
        children: P.intl.format(P.t.EoDFuN, {
          helpCenterLink: p.A.getArticleURL(x.MVz.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }) : (e.skuId === f.pe.TIER_1 || e.skuId === f.pe.TIER_2) && (t = (0, n.jsxs)("div", {
      className: R.Qq,
      children: [(0, n.jsx)("p", {
        children: P.intl.string(P.t.UPpbP3)
      }), (0, n.jsx)("p", {
        children: P.intl.format(P.t.EoDFuN, {
          helpCenterLink: p.A.getArticleURL(x.MVz.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }))
  } else if (null != L) t = (0, n.jsx)(Z, {
    planId: l,
    startingPremiumSubscriptionPlanId: L
  });
  else if (null != j) {
    let e = M.A.get(l);
    r()(null != e, "Missing plan"), t = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: R.Qq,
        children: G(e)
      }), (0, n.jsx)("div", {
        className: R.Qq,
        children: P.intl.format(P.t["6aZ0NR"], {
          guildName: j.name
        })
      })]
    })
  } else {
    let e = M.A.get(l);
    r()(null != e, "Missing plan"), t = (0, n.jsx)("div", {
      className: R.Qq,
      children: G(e)
    })
  }
  let K = h.Ay.getPremiumType(l);
  r()(null != K, "premium type should not be null in purchase confirmation");
  let [Q, W] = i.useState(false), Y = i.useCallback(() => {
    null != H && (H(), D === I.uH.APPLE_PAYMENT_LINK && W(true))
  }, [H, D]);
  s = y ? P.intl.string(T.default.clIveA) : "deeplink_to_desktop_app" === w || D === I.uH.APPLE_PAYMENT_LINK ? P.intl.string(P.t.qXV2XU) : null != F ? P.intl.formatToPlainString(P.t["1qGgm4"], {
    skuName: F.name
  }) : b ? P.intl.string(P.t.QJ9EyM) : null != j ? P.intl.string(P.t.ta3cXY) : P.intl.string(P.t.TkTvBz);
  let B = () => x.NcF.has(null != k ? k : x.hes.UNKNOWN) ? A.Ay.Types.PREMIUM_PAYMENT_STARTED : null != L ? A.Ay.Types.PREMIUM_UPDATED : A.Ay.Types.PREMIUM_ACTIVATED;
  return O ? (0, n.jsx)(E.A, {
    type: B(),
    text: t,
    buttonText: s,
    hideClose: v,
    onClose: Y,
    buttonLoading: Q
  }) : (0, n.jsxs)("div", {
    className: R.EL,
    children: [(0, n.jsx)(m.A, {
      type: B(),
      theme: S
    }), t, v ? null : (0, n.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: R.x6,
      children: (0, n.jsx)(c.Button, {
        variant: "primary",
        text: s,
        onClick: Y,
        loading: Q
      })
    })]
  })
}

function j(e) {
  let {
    planId: t,
    onClose: s
  } = e, {
    giftRecipient: l,
    selectedGiftStyle: i,
    hasSentMessage: a,
    giftMessageError: c,
    isSendingMessage: d
  } = (0, L.Pv)(), u = (0, C.bG)([M.A], () => M.A.get(t));
  r()(null != u, "Missing plan");
  let g = (0, C.bG)([o.A], () => o.A.getGiftCode(u.skuId));
  return (0, n.jsx)(H.A, {
    giftCode: g,
    subscriptionPlan: u,
    onClose: s,
    selectedGiftStyle: i,
    hasSentMessage: a,
    giftRecipient: l,
    giftMessageError: c,
    isSendingMessage: d
  })
}
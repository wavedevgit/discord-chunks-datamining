/** Chunk was on 84992 **/
/** chunk id: 317269, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PI: () => R,
  TB: () => v,
  ZP: () => k
}), require("./388685.js"), require("./415506.js");
var s, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk16084 = require("./16084.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk179118 = require("./179118.jsx"),
  Chunk912788 = require("./912788.js"),
  Chunk509545 = require("./509545.js"),
  Chunk55563 = require("./55563.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk296848 = require("./296848.js"),
  Chunk335105 = require("./335105.jsx"),
  Chunk741245 = require("./741245.jsx"),
  Chunk783017 = require("./783017.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk283307 = require("./283307.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk694760 = require("./694760.js");

function P(e) {
  let t, {
      planId: n,
      startingPremiumSubscriptionPlanId: s,
      paymentSourceType: i
    } = e,
    [a, c] = (0, C.Wu)([M.Z], () => [M.Z.get(s), M.Z.get(n)]);
  if (r()(null != a && null != c, "Missing startingPlan or newPlan"), x.Y1.indexOf(s) < x.Y1.indexOf(n)) switch (n) {
      case x.Xh.PREMIUM_MONTH_TIER_1:
        t = I.intl.string(I.t.knvOVz), E.X7u.has(null != i ? i : E.HeQ.UNKNOWN) && (t = I.intl.format(I.t.o6hBiR, {}));
        break;
      case x.Xh.PREMIUM_MONTH_TIER_2:
        t = I.intl.string(I.t.f8Dquh), E.X7u.has(null != i ? i : E.HeQ.UNKNOWN) && (t = I.intl.format(I.t.A4THYt, {}));
        break;
      case x.Xh.PREMIUM_YEAR_TIER_1:
        t = I.intl.string(I.t.YZd5rw), E.X7u.has(null != i ? i : E.HeQ.UNKNOWN) && (t = I.intl.format(I.t.MHAxpE, {}));
        break;
      case x.Xh.PREMIUM_YEAR_TIER_2:
        t = I.intl.formatToPlainString(I.t["M/Lknl"], {
          numFreeGuildSubscriptions: x.cb
        }), E.X7u.has(null != i ? i : E.HeQ.UNKNOWN) && (t = I.intl.format(I.t.mULxLW, {
          numFreeGuildSubscriptions: x.cb
        }));
        break;
      case x.Xh.PREMIUM_3_MONTH_TIER_2:
      case x.Xh.PREMIUM_6_MONTH_TIER_2:
        t = I.intl.string(I.t.aaCoW6);
        break;
      case x.Xh.PREMIUM_MONTH_TIER_0:
      case x.Xh.PREMIUM_YEAR_TIER_0:
        t = I.intl.string(I.t["XEoQ7+"]);
        break;
      default:
        throw Error("Unexpected planId: ".concat(n))
    } else if (a.skuId === x.Si.TIER_2 && c.skuId === x.Si.TIER_1) t = I.intl.string(I.t.PNX4NM);
    else switch (c.skuId) {
      case x.Si.TIER_0:
        t = I.intl.string(I.t["XEoQ7+"]);
        break;
      case x.Si.TIER_1:
        t = I.intl.string(I.t.nLI1Kr);
        break;
      case x.Si.TIER_2:
        t = 1 !== a.intervalCount ? I.intl.string(I.t.qSZZVA) : I.intl.string(I.t.RNjcNg);
        break;
      default:
        throw Error("Unexpected skuId: ".concat(c.skuId))
    }
  return (0, l.jsx)("div", {
    className: T.text,
    children: t
  })
}
var R = ((s = {}).DEEPLINK_TO_DESKTOP_APP = "deeplink_to_desktop_app", s);

function k(e) {
  let t, n, {
      planId: s,
      enableNoPaymentTrial: a,
      startingPremiumSubscriptionPlanId: u,
      onClose: o,
      followupSKUInfo: H,
      isDowngrade: R,
      hideClose: k,
      postSuccessGuild: v,
      paymentSourceType: j,
      startingFractionalPremiumEndsAt: b,
      customCTAType: U
    } = e,
    {
      enablePremiumBrandRefresh: w,
      isDisplayingWowMomentConfirmation: A,
      customCheckoutFlow: O
    } = (0, L.JL)(),
    {
      theme: S
    } = (0, c.TCT)(),
    X = (0, C.e7)([h.Z], () => null != H ? h.Z.get(H.id) : null),
    y = (0, m.qH)(b);
  i.useEffect(() => {
    if (null == H || null != X) return;
    let {
      applicationId: e,
      id: t
    } = H;
    (0, d.$N)(e, t).catch(E.VqG)
  }, [H, X]);
  let D = e => e.skuId === x.Si.TIER_0 ? E.X7u.has(null != j ? j : E.HeQ.UNKNOWN) ? I.intl.format(I.t.o6hBiR, {}) : I.intl.string(I.t["AGf/ye"]) : e.skuId === x.Si.TIER_1 ? E.X7u.has(null != j ? j : E.HeQ.UNKNOWN) ? I.intl.format(I.t.o6hBiR, {}) : I.intl.string(I.t.knvOVz) : E.X7u.has(null != j ? j : E.HeQ.UNKNOWN) ? I.intl.format(I.t.A4THYt, {}) : a ? I.intl.string(I.t["g52y/r"]) : I.intl.string(I.t.aTUr3Z);
  if ("deeplink_to_desktop_app" === U) t = (0, l.jsx)("div", {
    className: T.text,
    children: (0, l.jsxs)("p", {
      children: [I.intl.string(I.t.bIVRSQ), " ", I.intl.string(I.t["0UJqOy"])]
    })
  });
  else if (null != X) t = (0, l.jsx)("div", {
    className: T.text,
    children: I.intl.format(I.t["tsQOs+"], {
      skuName: X.name
    })
  });
  else if (y && !R) {
    let e = M.Z.get(s);
    r()(null != e, "Missing plan"), e.skuId === x.Si.TIER_0 ? t = (0, l.jsxs)("div", {
      className: T.text,
      children: [(0, l.jsx)("p", {
        children: I.intl.string(I.t["L9lcG/"])
      }), (0, l.jsx)("p", {
        children: I.intl.format(I.t.EoDFuN, {
          helpCenterLink: Z.Z.getArticleURL(E.BhN.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }) : (e.skuId === x.Si.TIER_1 || e.skuId === x.Si.TIER_2) && (t = (0, l.jsxs)("div", {
      className: T.text,
      children: [(0, l.jsx)("p", {
        children: I.intl.string(I.t.UPpbP3)
      }), (0, l.jsx)("p", {
        children: I.intl.format(I.t.EoDFuN, {
          helpCenterLink: Z.Z.getArticleURL(E.BhN.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }))
  } else if (null != u) t = (0, l.jsx)(P, {
    planId: s,
    startingPremiumSubscriptionPlanId: u
  });
  else if (null != v) {
    let e = M.Z.get(s);
    r()(null != e, "Missing plan"), t = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: T.text,
        children: D(e)
      }), (0, l.jsx)("div", {
        className: T.text,
        children: I.intl.format(I.t["6aZ0NR"], {
          guildName: v.name
        })
      })]
    })
  } else {
    let e = M.Z.get(s);
    r()(null != e, "Missing plan"), t = (0, l.jsx)("div", {
      className: T.text,
      children: D(e)
    })
  }
  let Y = p.ZP.getPremiumType(s);
  r()(null != Y, "premium type should not be null in purchase confirmation");
  let [B, Q] = i.useState(false), W = i.useCallback(() => {
    null != o && (o(), O === _.cL.APPLE_PAYMENT_LINK && Q(true))
  }, [o, O]);
  n = "deeplink_to_desktop_app" === U || O === _.cL.APPLE_PAYMENT_LINK ? I.intl.string(I.t.qXV2XU) : null != X ? I.intl.formatToPlainString(I.t["1qGgm4"], {
    skuName: X.name
  }) : R ? I.intl.string(I.t.QJ9EyM) : null != v ? I.intl.string(I.t.ta3cXY) : I.intl.string(I.t.TkTvBz);
  let K = () => E.X7u.has(null != j ? j : E.HeQ.UNKNOWN) ? N.ZP.Types.PREMIUM_PAYMENT_STARTED : null != u ? N.ZP.Types.PREMIUM_UPDATED : N.ZP.Types.PREMIUM_ACTIVATED;
  return A ? (0, l.jsx)(f.Z, {
    type: K(),
    text: t,
    buttonText: n,
    hideClose: k,
    onClose: W,
    buttonLoading: B
  }) : (0, l.jsxs)("div", {
    className: T.confirmation,
    children: [w ? (0, l.jsx)(g.Z, {
      type: K(),
      theme: S
    }) : (0, l.jsx)(N.ZP, {
      className: T.banner,
      theme: S,
      premiumType: Y,
      type: K()
    }), t, k ? null : (0, l.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: T.button,
      children: (0, l.jsx)(c.Button, {
        variant: "primary",
        text: n,
        onClick: W,
        loading: B
      })
    })]
  })
}

function v(e) {
  let {
    planId: t,
    onClose: n
  } = e, {
    giftRecipient: s,
    selectedGiftStyle: i,
    hasSentMessage: a,
    giftMessageError: c,
    isSendingMessage: d
  } = (0, u.wD)(), L = (0, C.e7)([M.Z], () => M.Z.get(t));
  r()(null != L, "Missing plan");
  let h = (0, C.e7)([H.Z], () => H.Z.getGiftCode(L.skuId));
  return (0, l.jsx)(o.Z, {
    giftCode: h,
    subscriptionPlan: L,
    onClose: n,
    selectedGiftStyle: i,
    hasSentMessage: a,
    giftRecipient: s,
    giftMessageError: c,
    isSendingMessage: d
  })
}
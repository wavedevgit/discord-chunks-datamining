/** Chunk was on 84992 **/
/** chunk id: 317269, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PI: () => k,
  TB: () => R,
  ZP: () => v
}), require("./388685.js"), require("./415506.js");
var s, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk24921 = require("./24921.js");

function P(e) {
  let t, {
      planId: n,
      startingPremiumSubscriptionPlanId: s,
      paymentSourceType: i
    } = e,
    [a, c] = (0, C.Wu)([M.Z], () => [M.Z.get(s), M.Z.get(n)]);
  if (r()(null != a && null != c, "Missing startingPlan or newPlan"), x.Y1.indexOf(s) < x.Y1.indexOf(n)) switch (n) {
      case x.Xh.PREMIUM_MONTH_TIER_1:
        t = I.intl.string(I.t.knvOV1), _.X7u.has(null != i ? i : _.HeQ.UNKNOWN) && (t = I.intl.format(I.t.o6hBiY, {}));
        break;
      case x.Xh.PREMIUM_MONTH_TIER_2:
        t = I.intl.string(I.t.f8Dqur), _.X7u.has(null != i ? i : _.HeQ.UNKNOWN) && (t = I.intl.format(I.t.A4THYm, {}));
        break;
      case x.Xh.PREMIUM_YEAR_TIER_1:
        t = I.intl.string(I.t.YZd5r6), _.X7u.has(null != i ? i : _.HeQ.UNKNOWN) && (t = I.intl.format(I.t.MHAxpK, {}));
        break;
      case x.Xh.PREMIUM_YEAR_TIER_2:
        t = I.intl.formatToPlainString(I.t["M/Lknp"], {
          numFreeGuildSubscriptions: x.cb
        }), _.X7u.has(null != i ? i : _.HeQ.UNKNOWN) && (t = I.intl.format(I.t.mULxLS, {
          numFreeGuildSubscriptions: x.cb
        }));
        break;
      case x.Xh.PREMIUM_3_MONTH_TIER_2:
      case x.Xh.PREMIUM_6_MONTH_TIER_2:
        t = I.intl.string(I.t.aaCoW1);
        break;
      case x.Xh.PREMIUM_MONTH_TIER_0:
      case x.Xh.PREMIUM_YEAR_TIER_0:
        t = I.intl.string(I.t["XEoQ7+"]);
        break;
      default:
        throw Error("Unexpected planId: ".concat(n))
    } else if (a.skuId === x.Si.TIER_2 && c.skuId === x.Si.TIER_1) t = I.intl.string(I.t.PNX4ND);
    else switch (c.skuId) {
      case x.Si.TIER_0:
        t = I.intl.string(I.t["XEoQ7+"]);
        break;
      case x.Si.TIER_1:
        t = I.intl.string(I.t.nLI1Ki);
        break;
      case x.Si.TIER_2:
        t = 1 !== a.intervalCount ? I.intl.string(I.t.qSZZVF) : I.intl.string(I.t.RNjcNj);
        break;
      default:
        throw Error("Unexpected skuId: ".concat(c.skuId))
    }
  return (0, l.jsx)("div", {
    className: T.text,
    children: t
  })
}
var k = ((s = {}).DEEPLINK_TO_DESKTOP_APP = "deeplink_to_desktop_app", s);

function v(e) {
  let t, n, {
      planId: s,
      enableNoPaymentTrial: a,
      startingPremiumSubscriptionPlanId: L,
      onClose: o,
      followupSKUInfo: H,
      isDowngrade: k,
      hideClose: v,
      postSuccessGuild: R,
      paymentSourceType: j,
      startingFractionalPremiumEndsAt: b,
      customCTAType: U
    } = e,
    {
      enablePremiumBrandRefresh: w,
      isDisplayingWowMomentConfirmation: A,
      customCheckoutFlow: O
    } = (0, u.JL)(),
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
    (0, d.$N)(e, t).catch(_.VqG)
  }, [H, X]);
  let Y = e => e.skuId === x.Si.TIER_0 ? _.X7u.has(null != j ? j : _.HeQ.UNKNOWN) ? I.intl.format(I.t.o6hBiY, {}) : I.intl.string(I.t["AGf/yc"]) : e.skuId === x.Si.TIER_1 ? _.X7u.has(null != j ? j : _.HeQ.UNKNOWN) ? I.intl.format(I.t.o6hBiY, {}) : I.intl.string(I.t.knvOV1) : _.X7u.has(null != j ? j : _.HeQ.UNKNOWN) ? I.intl.format(I.t.A4THYm, {}) : a ? I.intl.string(I.t["g52y/v"]) : I.intl.string(I.t.aTUr3d);
  if ("deeplink_to_desktop_app" === U) t = (0, l.jsx)("div", {
    className: T.text,
    children: (0, l.jsxs)("p", {
      children: [I.intl.string(I.t.bIVRSU), " ", I.intl.string(I.t["0UJqOz"])]
    })
  });
  else if (null != X) t = (0, l.jsx)("div", {
    className: T.text,
    children: I.intl.format(I.t.tsQOs7, {
      skuName: X.name
    })
  });
  else if (y && !k) {
    let e = M.Z.get(s);
    r()(null != e, "Missing plan"), e.skuId === x.Si.TIER_0 ? t = (0, l.jsxs)("div", {
      className: T.text,
      children: [(0, l.jsx)("p", {
        children: I.intl.string(I.t.L9lcGx)
      }), (0, l.jsx)("p", {
        children: I.intl.format(I.t.EoDFuL, {
          helpCenterLink: p.Z.getArticleURL(_.BhN.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }) : (e.skuId === x.Si.TIER_1 || e.skuId === x.Si.TIER_2) && (t = (0, l.jsxs)("div", {
      className: T.text,
      children: [(0, l.jsx)("p", {
        children: I.intl.string(I.t.UPpbPz)
      }), (0, l.jsx)("p", {
        children: I.intl.format(I.t.EoDFuL, {
          helpCenterLink: p.Z.getArticleURL(_.BhN.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }))
  } else if (null != L) t = (0, l.jsx)(P, {
    planId: s,
    startingPremiumSubscriptionPlanId: L
  });
  else if (null != R) {
    let e = M.Z.get(s);
    r()(null != e, "Missing plan"), t = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: T.text,
        children: Y(e)
      }), (0, l.jsx)("div", {
        className: T.text,
        children: I.intl.format(I.t["6aZ0NT"], {
          guildName: R.name
        })
      })]
    })
  } else {
    let e = M.Z.get(s);
    r()(null != e, "Missing plan"), t = (0, l.jsx)("div", {
      className: T.text,
      children: Y(e)
    })
  }
  let D = Z.ZP.getPremiumType(s);
  r()(null != D, "premium type should not be null in purchase confirmation");
  let [B, K] = i.useState(false), Q = i.useCallback(() => {
    null != o && (o(), O === E.cL.APPLE_PAYMENT_LINK && K(true))
  }, [o, O]);
  n = "deeplink_to_desktop_app" === U || O === E.cL.APPLE_PAYMENT_LINK ? I.intl.string(I.t.qXV2XV) : null != X ? I.intl.formatToPlainString(I.t["1qGgm5"], {
    skuName: X.name
  }) : k ? I.intl.string(I.t.QJ9EyM) : null != R ? I.intl.string(I.t.ta3cXV) : I.intl.string(I.t.TkTvBw);
  let W = () => _.X7u.has(null != j ? j : _.HeQ.UNKNOWN) ? N.ZP.Types.PREMIUM_PAYMENT_STARTED : null != L ? N.ZP.Types.PREMIUM_UPDATED : N.ZP.Types.PREMIUM_ACTIVATED;
  return A ? (0, l.jsx)(f.Z, {
    type: W(),
    text: t,
    buttonText: n,
    hideClose: v,
    onClose: Q,
    buttonLoading: B
  }) : (0, l.jsxs)("div", {
    className: T.confirmation,
    children: [w ? (0, l.jsx)(g.Z, {
      type: W(),
      theme: S
    }) : (0, l.jsx)(N.ZP, {
      className: T.banner,
      theme: S,
      premiumType: D,
      type: W()
    }), t, v ? null : (0, l.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: T.button,
      children: (0, l.jsx)(c.zxk, {
        variant: "primary",
        text: n,
        onClick: Q,
        loading: B
      })
    })]
  })
}

function R(e) {
  let {
    planId: t,
    onClose: n
  } = e, {
    giftRecipient: s,
    selectedGiftStyle: i,
    hasSentMessage: a,
    giftMessageError: c,
    isSendingMessage: d
  } = (0, L.wD)(), u = (0, C.e7)([M.Z], () => M.Z.get(t));
  r()(null != u, "Missing plan");
  let h = (0, C.e7)([H.Z], () => H.Z.getGiftCode(u.skuId));
  return (0, l.jsx)(o.Z, {
    giftCode: h,
    subscriptionPlan: u,
    onClose: n,
    selectedGiftStyle: i,
    hasSentMessage: a,
    giftRecipient: s,
    giftMessageError: c,
    isSendingMessage: d
  })
}
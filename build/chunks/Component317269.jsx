/** Chunk was on 84992 **/
/** chunk id: 317269, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  TB: () => j,
  VY: () => P,
  ZP: () => v
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
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

function _(t) {
  let e, {
      planId: n,
      startingPremiumSubscriptionPlanId: i,
      paymentSourceType: l
    } = t,
    [C, c] = (0, r.Wu)([H.Z], () => [H.Z.get(i), H.Z.get(n)]);
  if (a()(null != C && null != c, "Missing startingPlan or newPlan"), f.Y1.indexOf(i) < f.Y1.indexOf(n)) switch (n) {
      case f.Xh.PREMIUM_MONTH_TIER_1:
        e = E.intl.string(E.t.knvOV1), p.X7u.has(null != l ? l : p.HeQ.UNKNOWN) && (e = E.intl.format(E.t.o6hBiY, {}));
        break;
      case f.Xh.PREMIUM_MONTH_TIER_2:
        e = E.intl.string(E.t.f8Dqur), p.X7u.has(null != l ? l : p.HeQ.UNKNOWN) && (e = E.intl.format(E.t.A4THYm, {}));
        break;
      case f.Xh.PREMIUM_YEAR_TIER_1:
        e = E.intl.string(E.t.YZd5r6), p.X7u.has(null != l ? l : p.HeQ.UNKNOWN) && (e = E.intl.format(E.t.MHAxpK, {}));
        break;
      case f.Xh.PREMIUM_YEAR_TIER_2:
        e = E.intl.formatToPlainString(E.t["M/Lknp"], {
          numFreeGuildSubscriptions: f.cb
        }), p.X7u.has(null != l ? l : p.HeQ.UNKNOWN) && (e = E.intl.format(E.t.mULxLS, {
          numFreeGuildSubscriptions: f.cb
        }));
        break;
      case f.Xh.PREMIUM_3_MONTH_TIER_2:
      case f.Xh.PREMIUM_6_MONTH_TIER_2:
        e = E.intl.string(E.t.aaCoW1);
        break;
      case f.Xh.PREMIUM_MONTH_TIER_0:
      case f.Xh.PREMIUM_YEAR_TIER_0:
        e = E.intl.string(E.t["XEoQ7+"]);
        break;
      default:
        throw Error("Unexpected planId: ".concat(n))
    } else if (C.skuId === f.Si.TIER_2 && c.skuId === f.Si.TIER_1) e = E.intl.string(E.t.PNX4ND);
    else switch (c.skuId) {
      case f.Si.TIER_0:
        e = E.intl.string(E.t["XEoQ7+"]);
        break;
      case f.Si.TIER_1:
        e = E.intl.string(E.t.nLI1Ki);
        break;
      case f.Si.TIER_2:
        e = 1 !== C.intervalCount ? E.intl.string(E.t.qSZZVF) : E.intl.string(E.t.RNjcNj);
        break;
      default:
        throw Error("Unexpected skuId: ".concat(c.skuId))
    }
  return (0, s.jsx)("div", {
    className: I.text,
    children: e
  })
}

function v(t) {
  let e, n, {
      planId: l,
      enableNoPaymentTrial: d,
      startingPremiumSubscriptionPlanId: L,
      onClose: o,
      followupSKUInfo: v,
      isDowngrade: j,
      hideClose: P,
      postSuccessGuild: R,
      paymentSourceType: b,
      startingFractionalPremiumEndsAt: k
    } = t,
    {
      enablePremiumBrandRefresh: w,
      isDisplayingWowMomentConfirmation: U,
      customCheckoutFlow: A
    } = (0, u.JL)(),
    {
      theme: S
    } = (0, C.TCT)(),
    X = (0, r.e7)([M.Z], () => null != v ? M.Z.get(v.id) : null),
    O = (0, Z.qH)(k);
  i.useEffect(() => {
    if (null == v || null != X) return;
    let {
      applicationId: t,
      id: e
    } = v;
    (0, c.$N)(t, e).catch(p.VqG)
  }, [v, X]);
  let y = t => t.skuId === f.Si.TIER_0 ? p.X7u.has(null != b ? b : p.HeQ.UNKNOWN) ? E.intl.format(E.t.o6hBiY, {}) : E.intl.string(E.t["AGf/yc"]) : t.skuId === f.Si.TIER_1 ? p.X7u.has(null != b ? b : p.HeQ.UNKNOWN) ? E.intl.format(E.t.o6hBiY, {}) : E.intl.string(E.t.knvOV1) : p.X7u.has(null != b ? b : p.HeQ.UNKNOWN) ? E.intl.format(E.t.A4THYm, {}) : d ? E.intl.string(E.t["g52y/v"]) : E.intl.string(E.t.aTUr3d);
  if (null != X) e = (0, s.jsx)("div", {
    className: I.text,
    children: E.intl.format(E.t.tsQOs7, {
      skuName: X.name
    })
  });
  else if (O && !j) {
    let t = H.Z.get(l);
    a()(null != t, "Missing plan"), t.skuId === f.Si.TIER_0 ? e = (0, s.jsxs)("div", {
      className: I.text,
      children: [(0, s.jsx)("p", {
        children: E.intl.string(E.t.L9lcGx)
      }), (0, s.jsx)("p", {
        children: E.intl.format(E.t.EoDFuL, {
          helpCenterLink: h.Z.getArticleURL(p.BhN.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }) : (t.skuId === f.Si.TIER_1 || t.skuId === f.Si.TIER_2) && (e = (0, s.jsxs)("div", {
      className: I.text,
      children: [(0, s.jsx)("p", {
        children: E.intl.string(E.t.UPpbPz)
      }), (0, s.jsx)("p", {
        children: E.intl.format(E.t.EoDFuL, {
          helpCenterLink: h.Z.getArticleURL(p.BhN.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }))
  } else if (null != L) e = (0, s.jsx)(_, {
    planId: l,
    startingPremiumSubscriptionPlanId: L
  });
  else if (null != R) {
    let t = H.Z.get(l);
    a()(null != t, "Missing plan"), e = (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        className: I.text,
        children: y(t)
      }), (0, s.jsx)("div", {
        className: I.text,
        children: E.intl.format(E.t["6aZ0NT"], {
          guildName: R.name
        })
      })]
    })
  } else {
    let t = H.Z.get(l);
    a()(null != t, "Missing plan"), e = (0, s.jsx)("div", {
      className: I.text,
      children: y(t)
    })
  }
  let Y = m.ZP.getPremiumType(l);
  a()(null != Y, "premium type should not be null in purchase confirmation");
  let [D, B] = i.useState(false), Q = i.useCallback(() => {
    null != o && (o(), A === T.cL.APPLE_PAYMENT_LINK && B(true))
  }, [o, A]);
  n = A === T.cL.APPLE_PAYMENT_LINK ? E.intl.string(E.t.qXV2XV) : null != X ? E.intl.formatToPlainString(E.t["1qGgm5"], {
    skuName: X.name
  }) : j ? E.intl.string(E.t.QJ9EyM) : null != R ? E.intl.string(E.t.ta3cXV) : E.intl.string(E.t.TkTvBw);
  let W = () => p.X7u.has(null != b ? b : p.HeQ.UNKNOWN) ? x.ZP.Types.PREMIUM_PAYMENT_STARTED : null != L ? x.ZP.Types.PREMIUM_UPDATED : x.ZP.Types.PREMIUM_ACTIVATED;
  return U ? (0, s.jsx)(N.Z, {
    type: W(),
    text: e,
    buttonText: n,
    hideClose: P,
    onClose: Q,
    buttonLoading: D
  }) : (0, s.jsxs)("div", {
    className: I.confirmation,
    children: [w ? (0, s.jsx)(g.Z, {
      type: W(),
      theme: S
    }) : (0, s.jsx)(x.ZP, {
      className: I.banner,
      theme: S,
      premiumType: Y,
      type: W()
    }), e, P ? null : (0, s.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: I.button,
      children: (0, s.jsx)(C.zxk, {
        variant: "primary",
        text: n,
        onClick: Q,
        loading: D
      })
    })]
  })
}

function j(t) {
  let {
    planId: e,
    onClose: n
  } = t, {
    giftRecipient: i,
    selectedGiftStyle: l,
    hasSentMessage: C,
    giftMessageError: c,
    isSendingMessage: u
  } = (0, d.wD)(), M = (0, r.e7)([H.Z], () => H.Z.get(e));
  a()(null != M, "Missing plan");
  let h = (0, r.e7)([o.Z], () => o.Z.getGiftCode(M.skuId));
  return (0, s.jsx)(L.Z, {
    giftCode: h,
    subscriptionPlan: M,
    onClose: n,
    selectedGiftStyle: l,
    hasSentMessage: C,
    giftRecipient: i,
    giftMessageError: c,
    isSendingMessage: u
  })
}

function P() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk694760.redirectConfirmation,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/bold",
      children: Chunk388032.intl.string(Chunk388032.t.Xtf9wM)
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk694760.redirectBody,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: Chunk388032.intl.string(Chunk388032.t.bIVRSU)
      }), (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: Chunk388032.intl.string(Chunk388032.t["0UJqOz"])
      })]
    })]
  })
}
/** Chunk was on 85334 **/
r.d(t, {
  TB: () => P,
  VY: () => O,
  ZP: () => E
}), r(388685), r(415506);
var n = r(200651),
  o = r(192379),
  i = r(512722),
  l = r.n(i),
  a = r(442837),
  s = r(481060),
  c = r(16084),
  u = r(975298),
  d = r(987209),
  _ = r(179118),
  m = r(912788),
  f = r(509545),
  p = r(55563),
  N = r(63063),
  h = r(74538),
  I = r(296848),
  C = r(741245),
  b = r(474936),
  T = r(981631),
  g = r(388032),
  y = r(106772);

function x(e) {
  let t, {
      planId: r,
      startingPremiumSubscriptionPlanId: o,
      paymentSourceType: i
    } = e,
    [s, c] = (0, a.Wu)([f.Z], () => [f.Z.get(o), f.Z.get(r)]);
  if (l()(null != s && null != c, "Missing startingPlan or newPlan"), b.Y1.indexOf(o) < b.Y1.indexOf(r)) switch (r) {
      case b.Xh.PREMIUM_MONTH_TIER_1:
        t = g.NW.string(g.t.knvOV1), T.X7u.has(null != i ? i : T.HeQ.UNKNOWN) && (t = g.NW.format(g.t.o6hBiY, {}));
        break;
      case b.Xh.PREMIUM_MONTH_TIER_2:
        t = g.NW.string(g.t.f8Dqur), T.X7u.has(null != i ? i : T.HeQ.UNKNOWN) && (t = g.NW.format(g.t.A4THYm, {}));
        break;
      case b.Xh.PREMIUM_YEAR_TIER_1:
        t = g.NW.string(g.t.YZd5r6), T.X7u.has(null != i ? i : T.HeQ.UNKNOWN) && (t = g.NW.format(g.t.MHAxpK, {}));
        break;
      case b.Xh.PREMIUM_YEAR_TIER_2:
        t = g.NW.formatToPlainString(g.t["M/Lknp"], {
          numFreeGuildSubscriptions: b.cb
        }), T.X7u.has(null != i ? i : T.HeQ.UNKNOWN) && (t = g.NW.format(g.t.mULxLS, {
          numFreeGuildSubscriptions: b.cb
        }));
        break;
      case b.Xh.PREMIUM_3_MONTH_TIER_2:
      case b.Xh.PREMIUM_6_MONTH_TIER_2:
        t = g.NW.string(g.t.aaCoW1);
        break;
      case b.Xh.PREMIUM_MONTH_TIER_0:
      case b.Xh.PREMIUM_YEAR_TIER_0:
        t = g.NW.string(g.t["XEoQ7+"]);
        break;
      default:
        throw Error("Unexpected planId: ".concat(r))
    } else if (s.skuId === b.Si.TIER_2 && c.skuId === b.Si.TIER_1) t = g.NW.string(g.t.PNX4ND);
    else switch (c.skuId) {
      case b.Si.TIER_0:
        t = g.NW.string(g.t["XEoQ7+"]);
        break;
      case b.Si.TIER_1:
        t = g.NW.string(g.t.nLI1Ki);
        break;
      case b.Si.TIER_2:
        t = 1 !== s.intervalCount ? g.NW.string(g.t.qSZZVF) : g.NW.string(g.t.RNjcNj);
        break;
      default:
        throw Error("Unexpected skuId: ".concat(c.skuId))
    }
  return (0, n.jsx)("div", {
    className: y.text,
    children: t
  })
}

function E(e) {
  let t, r, {
      planId: i,
      enableNoPaymentTrial: d,
      startingPremiumSubscriptionPlanId: _,
      onClose: m,
      followupSKUInfo: E,
      isDowngrade: P,
      hideClose: O,
      postSuccessGuild: W,
      paymentSourceType: M,
      startingFractionalPremiumEndsAt: j
    } = e,
    {
      theme: R
    } = (0, s.TCT)(),
    S = (0, a.e7)([p.Z], () => null != E ? p.Z.get(E.id) : null),
    k = (0, u.Z)(),
    L = (0, I.qH)(j);
  o.useEffect(() => {
    if (null == E || null != S) return;
    let {
      applicationId: e,
      id: t
    } = E;
    (0, c.$N)(e, t).catch(T.VqG)
  }, [E, S]);
  let U = e => e.skuId === b.Si.TIER_0 ? T.X7u.has(null != M ? M : T.HeQ.UNKNOWN) ? g.NW.format(g.t.o6hBiY, {}) : g.NW.string(g.t["AGf/yc"]) : e.skuId === b.Si.TIER_1 ? T.X7u.has(null != M ? M : T.HeQ.UNKNOWN) ? g.NW.format(g.t.o6hBiY, {}) : g.NW.string(g.t.knvOV1) : T.X7u.has(null != M ? M : T.HeQ.UNKNOWN) ? g.NW.format(g.t.A4THYm, {}) : d ? g.NW.string(g.t["g52y/v"]) : g.NW.string(g.t.aTUr3d);
  if (null != S) t = (0, n.jsx)("div", {
    className: y.text,
    children: g.NW.format(g.t.tsQOs7, {
      skuName: S.name
    })
  });
  else if (L) {
    let e = f.Z.get(i);
    l()(null != e, "Missing plan"), e.skuId === b.Si.TIER_0 ? t = (0, n.jsxs)("div", {
      className: y.text,
      children: [(0, n.jsx)("p", {
        children: g.NW.string(g.t.L9lcGx)
      }), (0, n.jsx)("p", {
        children: g.NW.format(g.t.EoDFuL, {
          helpCenterLink: N.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }) : (e.skuId === b.Si.TIER_1 || e.skuId === b.Si.TIER_2) && (t = (0, n.jsxs)("div", {
      className: y.text,
      children: [(0, n.jsx)("p", {
        children: g.NW.string(g.t.UPpbPz)
      }), (0, n.jsx)("p", {
        children: g.NW.format(g.t.EoDFuL, {
          helpCenterLink: N.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }))
  } else if (k.fractionalState === b.a$.NONE || P)
    if (null != _) t = (0, n.jsx)(x, {
      planId: i,
      startingPremiumSubscriptionPlanId: _
    });
    else if (null != W) {
    let e = f.Z.get(i);
    l()(null != e, "Missing plan"), t = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: y.text,
        children: U(e)
      }), (0, n.jsx)("div", {
        className: y.text,
        children: g.NW.format(g.t["6aZ0NT"], {
          guildName: W.name
        })
      })]
    })
  } else {
    let e = f.Z.get(i);
    l()(null != e, "Missing plan"), t = (0, n.jsx)("div", {
      className: y.text,
      children: U(e)
    })
  } else t = (0, n.jsx)("div", {
    className: y.text,
    children: g.NW.format(g.t.PLXpCw, {
      helpCenterLink: N.Z.getArticleURL(T.BhN.FRACTIONAL_PREMIUM_ABOUT)
    })
  });
  let A = h.ZP.getPremiumType(i);
  return l()(null != A, "premium type should not be null in purchase confirmation"), r = null != S ? g.NW.formatToPlainString(g.t["1qGgm5"], {
    skuName: S.name
  }) : P ? g.NW.string(g.t.QJ9EyM) : null != W ? g.NW.string(g.t.ta3cXV) : g.NW.string(g.t.TkTvBw), (0, n.jsxs)("div", {
    className: y.confirmation,
    children: [(0, n.jsx)(C.C, {
      className: y.banner,
      theme: R,
      premiumType: A,
      type: T.X7u.has(null != M ? M : T.HeQ.UNKNOWN) ? C.C.Types.PREMIUM_PAYMENT_STARTED : null != _ ? C.C.Types.PREMIUM_UPDATED : C.C.Types.PREMIUM_ACTIVATED
    }), t, O ? null : (0, n.jsx)(s.zxk, {
      className: y.button,
      onClick: m,
      children: r
    })]
  })
}

function P(e) {
  let {
    planId: t,
    onClose: r
  } = e, {
    giftRecipient: o,
    selectedGiftStyle: i,
    hasSentMessage: s,
    giftMessageError: c,
    isSendingMessage: u
  } = (0, d.wD)(), p = (0, a.e7)([f.Z], () => f.Z.get(t));
  l()(null != p, "Missing plan");
  let N = (0, a.e7)([m.Z], () => m.Z.getGiftCode(p.skuId));
  return (0, n.jsx)(_.Z, {
    giftCode: N,
    subscriptionPlan: p,
    onClose: r,
    selectedGiftStyle: i,
    hasSentMessage: s,
    giftRecipient: o,
    giftMessageError: c,
    isSendingMessage: u
  })
}

function O() {
  return (0, n.jsxs)("div", {
    className: y.redirectConfirmation,
    children: [(0, n.jsx)(s.X6q, {
      variant: "heading-xl/bold",
      children: g.NW.string(g.t.Xtf9wM)
    }), (0, n.jsxs)("div", {
      className: y.redirectBody,
      children: [(0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        children: g.NW.string(g.t.bIVRSU)
      }), (0, n.jsx)("br", {}), (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        children: g.NW.string(g.t["0UJqOz"])
      })]
    })]
  })
}
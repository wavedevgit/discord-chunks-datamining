/** Chunk was on 85334 **/
r.d(t, {
  TB: () => x,
  VY: () => E,
  ZP: () => P
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
  C = r(74538),
  h = r(741245),
  I = r(474936),
  b = r(981631),
  T = r(388032),
  g = r(106772);

function y(e) {
  let t, {
      planId: r,
      startingPremiumSubscriptionPlanId: o,
      paymentSourceType: i
    } = e,
    [s, c] = (0, a.Wu)([f.Z], () => [f.Z.get(o), f.Z.get(r)]);
  if (l()(null != s && null != c, "Missing startingPlan or newPlan"), I.Y1.indexOf(o) < I.Y1.indexOf(r)) switch (r) {
      case I.Xh.PREMIUM_MONTH_TIER_1:
        t = T.NW.string(T.t.knvOV1), b.X7u.has(null != i ? i : b.HeQ.UNKNOWN) && (t = T.NW.format(T.t.o6hBiY, {}));
        break;
      case I.Xh.PREMIUM_MONTH_TIER_2:
        t = T.NW.string(T.t.f8Dqur), b.X7u.has(null != i ? i : b.HeQ.UNKNOWN) && (t = T.NW.format(T.t.A4THYm, {}));
        break;
      case I.Xh.PREMIUM_YEAR_TIER_1:
        t = T.NW.string(T.t.YZd5r6), b.X7u.has(null != i ? i : b.HeQ.UNKNOWN) && (t = T.NW.format(T.t.MHAxpK, {}));
        break;
      case I.Xh.PREMIUM_YEAR_TIER_2:
        t = T.NW.formatToPlainString(T.t["M/Lknp"], {
          numFreeGuildSubscriptions: I.cb
        }), b.X7u.has(null != i ? i : b.HeQ.UNKNOWN) && (t = T.NW.format(T.t.mULxLS, {
          numFreeGuildSubscriptions: I.cb
        }));
        break;
      case I.Xh.PREMIUM_3_MONTH_TIER_2:
      case I.Xh.PREMIUM_6_MONTH_TIER_2:
        t = T.NW.string(T.t.aaCoW1);
        break;
      case I.Xh.PREMIUM_MONTH_TIER_0:
      case I.Xh.PREMIUM_YEAR_TIER_0:
        t = T.NW.string(T.t["XEoQ7+"]);
        break;
      default:
        throw Error("Unexpected planId: ".concat(r))
    } else if (s.skuId === I.Si.TIER_2 && c.skuId === I.Si.TIER_1) t = T.NW.string(T.t.PNX4ND);
    else switch (c.skuId) {
      case I.Si.TIER_0:
        t = T.NW.string(T.t["XEoQ7+"]);
        break;
      case I.Si.TIER_1:
        t = T.NW.string(T.t.nLI1Ki);
        break;
      case I.Si.TIER_2:
        t = 1 !== s.intervalCount ? T.NW.string(T.t.qSZZVF) : T.NW.string(T.t.RNjcNj);
        break;
      default:
        throw Error("Unexpected skuId: ".concat(c.skuId))
    }
  return (0, n.jsx)("div", {
    className: g.text,
    children: t
  })
}

function P(e) {
  let t, r, {
      planId: i,
      enableNoPaymentTrial: d,
      startingPremiumSubscriptionPlanId: _,
      onClose: m,
      followupSKUInfo: P,
      isDowngrade: x,
      hideClose: E,
      postSuccessGuild: O,
      paymentSourceType: W
    } = e,
    {
      theme: M
    } = (0, s.TCT)(),
    S = (0, a.e7)([p.Z], () => null != P ? p.Z.get(P.id) : null),
    j = (0, u.Z)();
  o.useEffect(() => {
    if (null == P || null != S) return;
    let {
      applicationId: e,
      id: t
    } = P;
    (0, c.$N)(e, t).catch(b.VqG)
  }, [P, S]);
  let R = e => e.skuId === I.Si.TIER_0 ? b.X7u.has(null != W ? W : b.HeQ.UNKNOWN) ? T.NW.format(T.t.o6hBiY, {}) : T.NW.string(T.t["AGf/yc"]) : e.skuId === I.Si.TIER_1 ? b.X7u.has(null != W ? W : b.HeQ.UNKNOWN) ? T.NW.format(T.t.o6hBiY, {}) : T.NW.string(T.t.knvOV1) : b.X7u.has(null != W ? W : b.HeQ.UNKNOWN) ? T.NW.format(T.t.A4THYm, {}) : d ? T.NW.string(T.t["g52y/v"]) : T.NW.string(T.t.aTUr3d);
  if (null != S) t = (0, n.jsx)("div", {
    className: g.text,
    children: T.NW.format(T.t.tsQOs7, {
      skuName: S.name
    })
  });
  else if (j.fractionalState === I.a$.NONE || x)
    if (null != _) t = (0, n.jsx)(y, {
      planId: i,
      startingPremiumSubscriptionPlanId: _
    });
    else if (null != O) {
    let e = f.Z.get(i);
    l()(null != e, "Missing plan"), t = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: g.text,
        children: R(e)
      }), (0, n.jsx)("div", {
        className: g.text,
        children: T.NW.format(T.t["6aZ0NT"], {
          guildName: O.name
        })
      })]
    })
  } else {
    let e = f.Z.get(i);
    l()(null != e, "Missing plan"), t = (0, n.jsx)("div", {
      className: g.text,
      children: R(e)
    })
  } else t = (0, n.jsx)("div", {
    className: g.text,
    children: T.NW.format(T.t.PLXpCw, {
      helpCenterLink: N.Z.getArticleURL(b.BhN.FRACTIONAL_PREMIUM_ABOUT)
    })
  });
  let k = C.ZP.getPremiumType(i);
  return l()(null != k, "premium type should not be null in purchase confirmation"), r = null != S ? T.NW.formatToPlainString(T.t["1qGgm5"], {
    skuName: S.name
  }) : x ? T.NW.string(T.t.QJ9EyM) : null != O ? T.NW.string(T.t.ta3cXV) : T.NW.string(T.t.TkTvBw), (0, n.jsxs)("div", {
    className: g.confirmation,
    children: [(0, n.jsx)(h.C, {
      className: g.banner,
      theme: M,
      premiumType: k,
      type: b.X7u.has(null != W ? W : b.HeQ.UNKNOWN) ? h.C.Types.PREMIUM_PAYMENT_STARTED : null != _ ? h.C.Types.PREMIUM_UPDATED : h.C.Types.PREMIUM_ACTIVATED
    }), t, E ? null : (0, n.jsx)(s.zxk, {
      className: g.button,
      onClick: m,
      children: r
    })]
  })
}

function x(e) {
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

function E() {
  return (0, n.jsxs)("div", {
    className: g.redirectConfirmation,
    children: [(0, n.jsx)(s.X6q, {
      variant: "heading-xl/bold",
      children: T.NW.string(T.t.Xtf9wM)
    }), (0, n.jsxs)("div", {
      className: g.redirectBody,
      children: [(0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        children: T.NW.string(T.t.bIVRSU)
      }), (0, n.jsx)("br", {}), (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        children: T.NW.string(T.t["0UJqOz"])
      })]
    })]
  })
}
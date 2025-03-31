/** Chunk was on 57301 **/
n.d(t, {
  TB: () => E,
  VY: () => b,
  ZP: () => y
}), n(47120), n(411104);
var r = n(200651),
  i = n(192379),
  l = n(512722),
  s = n.n(l),
  o = n(442837),
  a = n(481060),
  C = n(16084),
  d = n(975298),
  c = n(987209),
  u = n(179118),
  p = n(912788),
  _ = n(509545),
  x = n(55563),
  f = n(74538),
  h = n(741245),
  m = n(474936),
  j = n(981631),
  L = n(388032),
  g = n(616444);

function S(e) {
  let t, {
      planId: n,
      startingPremiumSubscriptionPlanId: i,
      paymentSourceType: l
    } = e,
    [a, C] = (0, o.Wu)([_.Z], () => [_.Z.get(i), _.Z.get(n)]);
  if (s()(null != a && null != C, "Missing startingPlan or newPlan"), m.Y1.indexOf(i) < m.Y1.indexOf(n)) switch (n) {
      case m.Xh.PREMIUM_MONTH_TIER_1:
        t = L.NW.string(L.t.knvOV1), j.X7u.has(null != l ? l : j.HeQ.UNKNOWN) && (t = L.NW.format(L.t.o6hBiY, {}));
        break;
      case m.Xh.PREMIUM_MONTH_TIER_2:
        t = L.NW.string(L.t.f8Dqur), j.X7u.has(null != l ? l : j.HeQ.UNKNOWN) && (t = L.NW.format(L.t.A4THYm, {}));
        break;
      case m.Xh.PREMIUM_YEAR_TIER_1:
        t = L.NW.string(L.t.YZd5r6), j.X7u.has(null != l ? l : j.HeQ.UNKNOWN) && (t = L.NW.format(L.t.MHAxpK, {}));
        break;
      case m.Xh.PREMIUM_YEAR_TIER_2:
        t = L.NW.formatToPlainString(L.t["M/Lknp"], {
          numFreeGuildSubscriptions: m.cb
        }), j.X7u.has(null != l ? l : j.HeQ.UNKNOWN) && (t = L.NW.format(L.t.mULxLS, {
          numFreeGuildSubscriptions: m.cb
        }));
        break;
      case m.Xh.PREMIUM_3_MONTH_TIER_2:
      case m.Xh.PREMIUM_6_MONTH_TIER_2:
        t = L.NW.string(L.t.aaCoW1);
        break;
      case m.Xh.PREMIUM_MONTH_TIER_0:
      case m.Xh.PREMIUM_YEAR_TIER_0:
        t = L.NW.string(L.t["XEoQ7+"]);
        break;
      default:
        throw Error("Unexpected planId: ".concat(n))
    } else if (a.skuId === m.Si.TIER_2 && C.skuId === m.Si.TIER_1) t = L.NW.string(L.t.PNX4ND);
    else switch (C.skuId) {
      case m.Si.TIER_0:
        t = L.NW.string(L.t["XEoQ7+"]);
        break;
      case m.Si.TIER_1:
        t = L.NW.string(L.t.nLI1Ki);
        break;
      case m.Si.TIER_2:
        t = 1 !== a.intervalCount ? L.NW.string(L.t.qSZZVF) : L.NW.string(L.t.RNjcNj);
        break;
      default:
        throw Error("Unexpected skuId: ".concat(C.skuId))
    }
  return (0, r.jsx)("div", {
    className: g.text,
    children: t
  })
}

function y(e) {
  let t, n, {
      planId: l,
      enableNoPaymentTrial: c,
      startingPremiumSubscriptionPlanId: u,
      onClose: p,
      followupSKUInfo: y,
      isDowngrade: E,
      hideClose: b,
      postSuccessGuild: I,
      paymentSourceType: N
    } = e,
    {
      theme: T
    } = (0, a.TCT)(),
    M = (0, o.e7)([x.Z], () => null != y ? x.Z.get(y.id) : null),
    P = (0, d.Z)();
  i.useEffect(() => {
    if (null == y || null != M) return;
    let {
      applicationId: e,
      id: t
    } = y;
    (0, C.$N)(e, t).catch(j.VqG)
  }, [y, M]);
  let v = e => e.skuId === m.Si.TIER_0 ? j.X7u.has(null != N ? N : j.HeQ.UNKNOWN) ? L.NW.format(L.t.o6hBiY, {}) : L.NW.string(L.t["AGf/yc"]) : e.skuId === m.Si.TIER_1 ? j.X7u.has(null != N ? N : j.HeQ.UNKNOWN) ? L.NW.format(L.t.o6hBiY, {}) : L.NW.string(L.t.knvOV1) : j.X7u.has(null != N ? N : j.HeQ.UNKNOWN) ? L.NW.format(L.t.A4THYm, {}) : c ? L.NW.string(L.t["g52y/v"]) : L.NW.string(L.t.aTUr3d);
  if (null != M) t = (0, r.jsx)("div", {
    className: g.text,
    children: L.NW.format(L.t.tsQOs7, {
      skuName: M.name
    })
  });
  else if (P.fractionalState !== m.a$.NONE) t = (0, r.jsx)("div", {
    className: g.text,
    children: L.NW.format(L.t["X4Fr+f"], {
      expirationDate: P.endsAt.toDate()
    })
  });
  else if (null != u) t = (0, r.jsx)(S, {
    planId: l,
    startingPremiumSubscriptionPlanId: u
  });
  else if (null != I) {
    let e = _.Z.get(l);
    s()(null != e, "Missing plan"), t = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: g.text,
        children: v(e)
      }), (0, r.jsx)("div", {
        className: g.text,
        children: L.NW.format(L.t["6aZ0NT"], {
          guildName: I.name
        })
      })]
    })
  } else {
    let e = _.Z.get(l);
    s()(null != e, "Missing plan"), t = (0, r.jsx)("div", {
      className: g.text,
      children: v(e)
    })
  }
  let O = f.ZP.getPremiumType(l);
  return s()(null != O, "premium type should not be null in purchase confirmation"), n = null != M ? L.NW.formatToPlainString(L.t["1qGgm5"], {
    skuName: M.name
  }) : E ? L.NW.string(L.t.QJ9EyM) : null != I ? L.NW.string(L.t.ta3cXV) : L.NW.string(L.t.TkTvBw), (0, r.jsxs)("div", {
    className: g.confirmation,
    children: [(0, r.jsx)(h.C, {
      className: g.banner,
      theme: T,
      premiumType: O,
      type: j.X7u.has(null != N ? N : j.HeQ.UNKNOWN) ? h.C.Types.PREMIUM_PAYMENT_STARTED : null != u ? h.C.Types.PREMIUM_UPDATED : h.C.Types.PREMIUM_ACTIVATED
    }), t, b ? null : (0, r.jsx)(a.zxk, {
      className: g.button,
      onClick: p,
      children: n
    })]
  })
}

function E(e) {
  let {
    planId: t,
    onClose: n
  } = e, {
    giftRecipient: i,
    selectedGiftStyle: l,
    hasSentMessage: a,
    giftMessageError: C,
    isSendingMessage: d
  } = (0, c.wD)(), x = (0, o.e7)([_.Z], () => _.Z.get(t));
  s()(null != x, "Missing plan");
  let f = (0, o.e7)([p.Z], () => p.Z.getGiftCode(x.skuId));
  return (0, r.jsx)(u.Z, {
    giftCode: f,
    subscriptionPlan: x,
    onClose: n,
    selectedGiftStyle: l,
    hasSentMessage: a,
    giftRecipient: i,
    giftMessageError: C,
    isSendingMessage: d
  })
}

function b() {
  return (0, r.jsxs)("div", {
    className: g.redirectConfirmation,
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-xl/bold",
      children: L.NW.string(L.t.Xtf9wM)
    }), (0, r.jsxs)("div", {
      className: g.redirectBody,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        children: L.NW.string(L.t.bIVRSU)
      }), (0, r.jsx)("br", {}), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        children: L.NW.string(L.t["0UJqOz"])
      })]
    })]
  })
}
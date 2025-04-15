/** Chunk was on 85334 **/
r.d(t, {
  TB: () => O,
  VY: () => M,
  ZP: () => P
}), r(388685), r(415506);
var n = r(200651),
  o = r(192379),
  i = r(512722),
  l = r.n(i),
  a = r(913527),
  s = r.n(a),
  c = r(442837),
  u = r(481060),
  d = r(16084),
  _ = r(975298),
  m = r(987209),
  f = r(179118),
  p = r(912788),
  N = r(509545),
  h = r(55563),
  I = r(63063),
  C = r(74538),
  b = r(741245),
  T = r(474936),
  g = r(981631),
  y = r(388032),
  x = r(106772);

function E(e) {
  let t, {
      planId: r,
      startingPremiumSubscriptionPlanId: o,
      paymentSourceType: i
    } = e,
    [a, s] = (0, c.Wu)([N.Z], () => [N.Z.get(o), N.Z.get(r)]);
  if (l()(null != a && null != s, "Missing startingPlan or newPlan"), T.Y1.indexOf(o) < T.Y1.indexOf(r)) switch (r) {
      case T.Xh.PREMIUM_MONTH_TIER_1:
        t = y.NW.string(y.t.knvOV1), g.X7u.has(null != i ? i : g.HeQ.UNKNOWN) && (t = y.NW.format(y.t.o6hBiY, {}));
        break;
      case T.Xh.PREMIUM_MONTH_TIER_2:
        t = y.NW.string(y.t.f8Dqur), g.X7u.has(null != i ? i : g.HeQ.UNKNOWN) && (t = y.NW.format(y.t.A4THYm, {}));
        break;
      case T.Xh.PREMIUM_YEAR_TIER_1:
        t = y.NW.string(y.t.YZd5r6), g.X7u.has(null != i ? i : g.HeQ.UNKNOWN) && (t = y.NW.format(y.t.MHAxpK, {}));
        break;
      case T.Xh.PREMIUM_YEAR_TIER_2:
        t = y.NW.formatToPlainString(y.t["M/Lknp"], {
          numFreeGuildSubscriptions: T.cb
        }), g.X7u.has(null != i ? i : g.HeQ.UNKNOWN) && (t = y.NW.format(y.t.mULxLS, {
          numFreeGuildSubscriptions: T.cb
        }));
        break;
      case T.Xh.PREMIUM_3_MONTH_TIER_2:
      case T.Xh.PREMIUM_6_MONTH_TIER_2:
        t = y.NW.string(y.t.aaCoW1);
        break;
      case T.Xh.PREMIUM_MONTH_TIER_0:
      case T.Xh.PREMIUM_YEAR_TIER_0:
        t = y.NW.string(y.t["XEoQ7+"]);
        break;
      default:
        throw Error("Unexpected planId: ".concat(r))
    } else if (a.skuId === T.Si.TIER_2 && s.skuId === T.Si.TIER_1) t = y.NW.string(y.t.PNX4ND);
    else switch (s.skuId) {
      case T.Si.TIER_0:
        t = y.NW.string(y.t["XEoQ7+"]);
        break;
      case T.Si.TIER_1:
        t = y.NW.string(y.t.nLI1Ki);
        break;
      case T.Si.TIER_2:
        t = 1 !== a.intervalCount ? y.NW.string(y.t.qSZZVF) : y.NW.string(y.t.RNjcNj);
        break;
      default:
        throw Error("Unexpected skuId: ".concat(s.skuId))
    }
  return (0, n.jsx)("div", {
    className: x.text,
    children: t
  })
}

function P(e) {
  let t, r, {
      planId: i,
      enableNoPaymentTrial: a,
      startingPremiumSubscriptionPlanId: m,
      onClose: f,
      followupSKUInfo: p,
      isDowngrade: P,
      hideClose: O,
      postSuccessGuild: M,
      paymentSourceType: W,
      startingFractionalPremiumEndsAt: j
    } = e,
    {
      theme: S
    } = (0, u.TCT)(),
    R = (0, c.e7)([h.Z], () => null != p ? h.Z.get(p.id) : null),
    k = (0, _.Z)(),
    A = null != j && s().isMoment(j) && j.isSameOrAfter(s()());
  o.useEffect(() => {
    if (null == p || null != R) return;
    let {
      applicationId: e,
      id: t
    } = p;
    (0, d.$N)(e, t).catch(g.VqG)
  }, [p, R]);
  let L = e => e.skuId === T.Si.TIER_0 ? g.X7u.has(null != W ? W : g.HeQ.UNKNOWN) ? y.NW.format(y.t.o6hBiY, {}) : y.NW.string(y.t["AGf/yc"]) : e.skuId === T.Si.TIER_1 ? g.X7u.has(null != W ? W : g.HeQ.UNKNOWN) ? y.NW.format(y.t.o6hBiY, {}) : y.NW.string(y.t.knvOV1) : g.X7u.has(null != W ? W : g.HeQ.UNKNOWN) ? y.NW.format(y.t.A4THYm, {}) : a ? y.NW.string(y.t["g52y/v"]) : y.NW.string(y.t.aTUr3d);
  if (null != R) t = (0, n.jsx)("div", {
    className: x.text,
    children: y.NW.format(y.t.tsQOs7, {
      skuName: R.name
    })
  });
  else if (A) {
    let e = N.Z.get(i);
    l()(null != e, "Missing plan"), e.skuId === T.Si.TIER_0 ? t = (0, n.jsxs)("div", {
      className: x.text,
      children: [(0, n.jsx)("p", {
        children: y.NW.string(y.t.L9lcGx)
      }), (0, n.jsx)("p", {
        children: y.NW.format(y.t.EoDFuL, {
          helpCenterLink: I.Z.getArticleURL(g.BhN.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }) : (e.skuId === T.Si.TIER_1 || e.skuId === T.Si.TIER_2) && (t = (0, n.jsxs)("div", {
      className: x.text,
      children: [(0, n.jsx)("p", {
        children: y.NW.string(y.t.UPpbPz)
      }), (0, n.jsx)("p", {
        children: y.NW.format(y.t.EoDFuL, {
          helpCenterLink: I.Z.getArticleURL(g.BhN.FRACTIONAL_PREMIUM_ABOUT)
        })
      })]
    }))
  } else if (k.fractionalState === T.a$.NONE || P)
    if (null != m) t = (0, n.jsx)(E, {
      planId: i,
      startingPremiumSubscriptionPlanId: m
    });
    else if (null != M) {
    let e = N.Z.get(i);
    l()(null != e, "Missing plan"), t = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: x.text,
        children: L(e)
      }), (0, n.jsx)("div", {
        className: x.text,
        children: y.NW.format(y.t["6aZ0NT"], {
          guildName: M.name
        })
      })]
    })
  } else {
    let e = N.Z.get(i);
    l()(null != e, "Missing plan"), t = (0, n.jsx)("div", {
      className: x.text,
      children: L(e)
    })
  } else t = (0, n.jsx)("div", {
    className: x.text,
    children: y.NW.format(y.t.PLXpCw, {
      helpCenterLink: I.Z.getArticleURL(g.BhN.FRACTIONAL_PREMIUM_ABOUT)
    })
  });
  let U = C.ZP.getPremiumType(i);
  return l()(null != U, "premium type should not be null in purchase confirmation"), r = null != R ? y.NW.formatToPlainString(y.t["1qGgm5"], {
    skuName: R.name
  }) : P ? y.NW.string(y.t.QJ9EyM) : null != M ? y.NW.string(y.t.ta3cXV) : y.NW.string(y.t.TkTvBw), (0, n.jsxs)("div", {
    className: x.confirmation,
    children: [(0, n.jsx)(b.C, {
      className: x.banner,
      theme: S,
      premiumType: U,
      type: g.X7u.has(null != W ? W : g.HeQ.UNKNOWN) ? b.C.Types.PREMIUM_PAYMENT_STARTED : null != m ? b.C.Types.PREMIUM_UPDATED : b.C.Types.PREMIUM_ACTIVATED
    }), t, O ? null : (0, n.jsx)(u.zxk, {
      className: x.button,
      onClick: f,
      children: r
    })]
  })
}

function O(e) {
  let {
    planId: t,
    onClose: r
  } = e, {
    giftRecipient: o,
    selectedGiftStyle: i,
    hasSentMessage: a,
    giftMessageError: s,
    isSendingMessage: u
  } = (0, m.wD)(), d = (0, c.e7)([N.Z], () => N.Z.get(t));
  l()(null != d, "Missing plan");
  let _ = (0, c.e7)([p.Z], () => p.Z.getGiftCode(d.skuId));
  return (0, n.jsx)(f.Z, {
    giftCode: _,
    subscriptionPlan: d,
    onClose: r,
    selectedGiftStyle: i,
    hasSentMessage: a,
    giftRecipient: o,
    giftMessageError: s,
    isSendingMessage: u
  })
}

function M() {
  return (0, n.jsxs)("div", {
    className: x.redirectConfirmation,
    children: [(0, n.jsx)(u.X6q, {
      variant: "heading-xl/bold",
      children: y.NW.string(y.t.Xtf9wM)
    }), (0, n.jsxs)("div", {
      className: x.redirectBody,
      children: [(0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        children: y.NW.string(y.t.bIVRSU)
      }), (0, n.jsx)("br", {}), (0, n.jsx)(u.Text, {
        variant: "text-md/normal",
        children: y.NW.string(y.t["0UJqOz"])
      })]
    })]
  })
}
/** Chunk was on 95617 **/
n.d(t, {
  Z: () => c
});
var r = n(200651),
  i = n(786628),
  o = n(755007),
  l = n(231338),
  s = n(224302);

function a(e) {
  let {
    price: t,
    isPremiumUser: n,
    showInsufficientOrbBalanceTooltip: s
  } = e;
  return t.currency === l.pK.DISCORD_ORB ? (0, r.jsx)(o.Z, {
    orbAmount: t.amount,
    showInsufficientOrbBalanceTooltip: s
  }) : (0, r.jsx)(i.Z, {
    price: t,
    isPremiumUser: n
  })
}

function c(e) {
  let {
    displayPrices: t,
    isPremiumUser: n,
    showInsufficientOrbBalanceTooltip: i = !1
  } = e;
  return (0, r.jsx)("div", {
    className: s.priceLine,
    children: t.map((e, t) => (0, r.jsx)(a, {
      price: e,
      isPremiumUser: n,
      showInsufficientOrbBalanceTooltip: i
    }, t))
  })
}
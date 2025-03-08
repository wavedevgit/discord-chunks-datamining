/** Chunk was on 74329 **/
n.d(t, {
  Z: () => c
});
var r = n(200651),
  i = n(786628),
  o = n(755007),
  l = n(231338),
  a = n(592561);

function s(e) {
  let {
    price: t,
    isPremiumUser: n,
    showInsufficientOrbBalanceTooltip: a
  } = e;
  return t.currency === l.pK.DISCORD_ORB ? (0, r.jsx)(o.Z, {
    orbAmount: t.amount,
    showInsufficientOrbBalanceTooltip: a
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
    className: a.priceLine,
    children: t.map((e, t) => (0, r.jsx)(s, {
      price: e,
      isPremiumUser: n,
      showInsufficientOrbBalanceTooltip: i
    }, t))
  })
}
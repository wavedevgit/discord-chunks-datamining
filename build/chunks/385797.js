/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => c
});
var n = r(200651),
  l = r(786628),
  i = r(755007),
  o = r(231338),
  s = r(592561);

function a(e) {
  let {
    price: t,
    isPremiumUser: r,
    showInsufficientOrbBalanceTooltip: s
  } = e;
  return t.currency === o.pK.DISCORD_ORB ? (0, n.jsx)(i.Z, {
    orbAmount: t.amount,
    showInsufficientOrbBalanceTooltip: s
  }) : (0, n.jsx)(l.Z, {
    price: t,
    isPremiumUser: r
  })
}

function c(e) {
  let {
    displayPrices: t,
    isPremiumUser: r,
    showInsufficientOrbBalanceTooltip: l = !1
  } = e;
  return (0, n.jsx)("div", {
    className: s.priceLine,
    children: t.map((e, t) => (0, n.jsx)(a, {
      price: e,
      isPremiumUser: r,
      showInsufficientOrbBalanceTooltip: l
    }, t))
  })
}
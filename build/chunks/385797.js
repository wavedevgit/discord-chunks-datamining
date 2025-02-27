/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => c
});
var n = r(200651),
  l = r(786628),
  i = r(755007),
  a = r(231338),
  o = r(592561);

function s(e) {
  let {
    price: t,
    isPremiumUser: r,
    showInsufficientOrbBalanceTooltip: o
  } = e;
  return t.currency === a.pK.DISCORD_ORB ? (0, n.jsx)(i.Z, {
    orbAmount: t.amount,
    showInsufficientOrbBalanceTooltip: o
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
    className: o.priceLine,
    children: t.map((e, t) => (0, n.jsx)(s, {
      price: e,
      isPremiumUser: r,
      showInsufficientOrbBalanceTooltip: l
    }, t))
  })
}
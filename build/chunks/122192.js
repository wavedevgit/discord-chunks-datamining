/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  j: () => u
});
var r = n(200651),
  i = n(192379),
  o = n(481060),
  a = n(462566);
n(600164);
var s = n(603421),
  l = n(388032),
  c = n(793207);
let u = e => {
  let {
    billingError: t,
    onCardInfoChange: n
  } = e, u = null != t && (null == t.code || (0, s.ly)(t) === s.Rg.CREDIT_CARD_INFORMATION);
  return (0, r.jsxs)(i.Fragment, {
    children: [u ? (0, r.jsx)(o.kzN, {
      className: c.errorBlock,
      children: l.NW.string(l.t["4vnhKS"])
    }) : null, (0, r.jsx)(a.Z, {
      onCardInfoChange: n,
      error: t
    })]
  })
}
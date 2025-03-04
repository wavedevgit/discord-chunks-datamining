/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  F: () => u
});
var n = r(200651),
  l = r(192379),
  i = r(481060),
  o = r(906732),
  s = r(963249),
  a = r(474936),
  c = r(504589);
let u = e => {
  let {
    text: t
  } = e, {
    analyticsLocations: r
  } = (0, o.ZP)(), u = l.useRef(null);
  return (0, n.jsx)(i.P3F, {
    className: c.subscribeNow,
    innerRef: u,
    onClick: () => {
      (0, s.Z)({
        subscriptionTier: a.Si.TIER_2,
        analyticsLocations: r,
        returnRef: u
      })
    },
    children: t
  })
}
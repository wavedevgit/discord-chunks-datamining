/** Chunk was on 71459 **/
"use strict";
r.d(t, {
  F: () => u
});
var n = r(200651),
  i = r(192379),
  o = r(481060),
  l = r(906732),
  a = r(963249),
  s = r(474936),
  c = r(504589);
let u = e => {
  let {
    text: t
  } = e, {
    analyticsLocations: r
  } = (0, l.ZP)(), u = i.useRef(null);
  return (0, n.jsx)(o.P3F, {
    className: c.subscribeNow,
    innerRef: u,
    onClick: () => {
      (0, a.Z)({
        subscriptionTier: s.Si.TIER_2,
        analyticsLocations: r,
        returnRef: u
      })
    },
    children: t
  })
}
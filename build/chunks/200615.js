/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  F: () => d
});
var n = r(200651),
  i = r(192379),
  l = r(481060),
  o = r(906732),
  a = r(963249),
  s = r(474936),
  c = r(923250);
let d = e => {
  let {
    text: t
  } = e, {
    analyticsLocations: r
  } = (0, o.ZP)(), d = i.useRef(null);
  return (0, n.jsx)(l.P3F, {
    className: c.subscribeNow,
    innerRef: d,
    onClick: () => {
      (0, a.Z)({
        subscriptionTier: s.Si.TIER_2,
        analyticsLocations: r,
        returnRef: d
      })
    },
    children: t
  })
}
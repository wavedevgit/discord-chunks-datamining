/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  F: () => d
});
var n = r(200651),
  l = r(192379),
  i = r(481060),
  o = r(906732),
  a = r(963249),
  s = r(474936),
  c = r(504589);
let d = e => {
  let {
    text: t
  } = e, {
    analyticsLocations: r
  } = (0, o.ZP)(), d = l.useRef(null);
  return (0, n.jsx)(i.P3F, {
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
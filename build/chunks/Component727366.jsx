/** Chunk was on 77033 **/
/** chunk id: 727366, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  t: () => r
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk840724 = require("./840724.jsx"),
  Chunk180165 = require("./180165.js");

function r(e) {
  let {
    applicationId: n,
    skuIds: t,
    variant: i = o.Zp.SMALL,
    guildId: r,
    analyticsLocations: d
  } = e;
  return null == t || 0 === t.length ? null : (0, l.jsx)("div", {
    className: a()(s.container, s.cardGrid, {
      [s.mediumCardGrid]: i === o.Zp.MEDIUM
    }),
    children: t.map((e, t) => (0, l.jsx)(o.ZP, {
      positionInSection: t,
      applicationId: n,
      skuId: e,
      variant: i,
      guildId: r,
      analyticsLocations: d
    }, "".concat(e, "-").concat(t)))
  })
}
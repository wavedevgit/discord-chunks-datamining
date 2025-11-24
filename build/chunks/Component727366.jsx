/** Chunk was on 77033 **/
/** chunk id: 727366, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  t: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk840724 = require("./840724.jsx"),
  Chunk180165 = require("./180165.js");

function s(e) {
  let {
    applicationId: n,
    skuIds: t,
    variant: i = o.Z.SMALL,
    guildId: s,
    analyticsLocations: d
  } = e;
  return null == t || 0 === t.length ? null : (0, l.jsx)("div", {
    className: a()(r.container, r.cardGrid, {
      [r.mediumCardGrid]: i === o.Z.MEDIUM
    }),
    children: t.map((e, t) => (0, l.jsx)(o.C, {
      positionInSection: t,
      applicationId: n,
      skuId: e,
      variant: i,
      guildId: s,
      analyticsLocations: d
    }, "".concat(e, "-").concat(t)))
  })
}
/** Chunk was on 77033 **/
/** chunk id: 727366, original params: n,e,l (module,exports,require) **/
require.d(exports, {
  t: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk840724 = require("./840724.jsx"),
  Chunk180165 = require("./180165.js");

function o(n) {
  let {
    applicationId: e,
    skuIds: l,
    variant: i = d.Z.SMALL,
    guildId: o
  } = n;
  return null == l || 0 === l.length ? null : (0, t.jsx)("div", {
    className: a()(r.container, r.cardGrid, {
      [r.mediumCardGrid]: i === d.Z.MEDIUM
    }),
    children: l.map((n, l) => (0, t.jsx)(d.C, {
      applicationId: e,
      skuId: n,
      variant: i,
      guildId: o
    }, "".concat(n, "-").concat(l)))
  })
}
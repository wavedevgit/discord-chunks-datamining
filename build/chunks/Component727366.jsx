/** Chunk was on 77033 **/
/** chunk id: 727366, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  t: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk840724 = require("./840724.jsx"),
  Chunk180165 = require("./180165.js");

function d(e) {
  let {
    applicationId: n,
    skuIds: l,
    variant: i = r.Z.SMALL,
    guildId: d
  } = e;
  return null == l || 0 === l.length ? null : (0, t.jsx)("div", {
    className: a()(o.container, o.cardGrid, {
      [o.mediumCardGrid]: i === r.Z.MEDIUM
    }),
    children: l.map((e, l) => (0, t.jsx)(r.C, {
      applicationId: n,
      skuId: e,
      variant: i,
      guildId: d
    }, "".concat(e, "-").concat(l)))
  })
}
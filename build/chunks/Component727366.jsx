/** Chunk was on 77033 **/
/** chunk id: 727366, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  t: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk840724 = require("./840724.jsx"),
  Chunk180165 = require("./180165.js");

function o(n) {
  let {
    applicationId: e,
    skuIds: t,
    variant: i = r.Z.SMALL,
    guildId: o
  } = n;
  return null == t || 0 === t.length ? null : (0, l.jsx)("div", {
    className: a()(d.container, d.cardGrid, {
      [d.mediumCardGrid]: i === r.Z.MEDIUM
    }),
    children: t.map((n, t) => (0, l.jsx)(r.C, {
      applicationId: e,
      skuId: n,
      variant: i,
      guildId: o
    }, "".concat(n, "-").concat(t)))
  })
}
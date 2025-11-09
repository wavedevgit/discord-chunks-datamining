/** Chunk was on 77033 **/
/** chunk id: 727366, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  t: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk840724 = require("./840724.jsx"),
  Chunk301790 = require("./301790.js");

function o(e) {
  let {
    applicationId: n,
    skuIds: t,
    variant: i = r.Z.SMALL,
    guildId: o
  } = e;
  return null == t || 0 === t.length ? null : (0, l.jsx)("div", {
    className: a()(d.container, d.cardGrid, {
      [d.mediumCardGrid]: i === r.Z.MEDIUM
    }),
    children: t.map((e, t) => (0, l.jsx)(r.C, {
      applicationId: n,
      skuId: e,
      variant: i,
      guildId: o
    }, "".concat(e, "-").concat(t)))
  })
}
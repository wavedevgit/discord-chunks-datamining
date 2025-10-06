/** Chunk was on 77033 **/
/** chunk id: 727366, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk840724 = require("./840724.jsx"),
  Chunk180165 = require("./180165.js");

function o(e) {
  let {
    applicationId: t,
    skuIds: n,
    isWide: r,
    guildId: o
  } = e;
  return null == n || 0 === n.length ? null : (0, a.jsx)("div", {
    className: l()(d.container, d.cardGrid, {
      [d.wideCardGrid]: r
    }),
    children: n.map((e, n) => (0, a.jsx)(i.Z, {
      applicationId: t,
      skuId: e,
      isWide: r,
      guildId: o
    }, "".concat(e, "-").concat(n)))
  })
}
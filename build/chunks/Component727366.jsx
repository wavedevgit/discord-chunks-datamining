/** Chunk was on 77033 **/
/** chunk id: 727366, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk840724 = require("./840724.jsx"),
  Chunk301790 = require("./301790.js");

function d(e) {
  let {
    applicationId: t,
    skuIds: n,
    variant: r = i.Z.SMALL,
    guildId: d
  } = e;
  return null == n || 0 === n.length ? null : (0, a.jsx)("div", {
    className: l()(o.container, o.cardGrid, {
      [o.mediumCardGrid]: r === i.Z.MEDIUM,
      [o.largeCardGrid]: r === i.Z.LARGE
    }),
    children: n.map((e, n) => (0, a.jsx)(i.C, {
      applicationId: t,
      skuId: e,
      variant: r,
      guildId: d
    }, "".concat(e, "-").concat(n)))
  })
}
/** Chunk was on 77033 **/
/** chunk id: 727366, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  t: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk840724 = require("./840724.jsx"),
  Chunk180165 = require("./180165.js");

function o(e) {
  let {
    applicationId: n,
    skuIds: t,
    isWide: l
  } = e;
  return null == t || 0 === t.length ? null : (0, a.jsx)("div", {
    className: r()(d.container, d.cardGrid, {
      [d.wideCardGrid]: l
    }),
    children: t.map((e, t) => (0, a.jsx)(i.Z, {
      applicationId: n,
      skuId: e,
      isWide: l
    }, "".concat(e, "-").concat(t)))
  })
}
/** Chunk was on 77033 **/
/** chunk id: 174260, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk727366 = require("./727366.jsx"),
  Chunk650750 = require("./650750.js");

function d(e) {
  let {
    applicationId: n,
    sectionTitle: t,
    skuIds: d,
    isWide: o
  } = e;
  return null == d || 0 === d.length ? null : (0, a.jsxs)("div", {
    className: i.sectionContainer,
    children: [null != t && (0, a.jsx)(l.X6q, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      lineClamp: 1,
      className: i.sectionTitle,
      children: t
    }), (0, a.jsx)(r.t, {
      applicationId: n,
      skuIds: d,
      isWide: o
    })]
  })
}
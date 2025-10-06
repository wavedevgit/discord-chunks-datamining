/** Chunk was on 77033 **/
/** chunk id: 174260, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk727366 = require("./727366.jsx"),
  Chunk693965 = require("./693965.js");

function d(e) {
  let {
    applicationId: t,
    guildId: n,
    sectionTitle: d,
    skuIds: o,
    isWide: c
  } = e;
  return null == o || 0 === o.length ? null : (0, a.jsxs)("div", {
    className: i.sectionContainer,
    children: [null != d && (0, a.jsx)(r.X6q, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      lineClamp: 1,
      className: i.sectionTitle,
      children: d
    }), (0, a.jsx)(l.t, {
      applicationId: t,
      skuIds: o,
      isWide: c,
      guildId: n
    })]
  })
}
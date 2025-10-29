/** Chunk was on 77033 **/
/** chunk id: 822458, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk840724 = require("./840724.jsx"),
  Chunk727366 = require("./727366.jsx"),
  Chunk693965 = require("./693965.js");

function d(e) {
  let {
    applicationId: t,
    guildId: n,
    sectionTitle: d,
    skuIds: c,
    variant: s = r.Z.SMALL
  } = e;
  return null == c || 0 === c.length ? null : (0, a.jsxs)("div", {
    className: o.sectionContainer,
    children: [null != d && (0, a.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      lineClamp: 1,
      className: o.sectionTitle,
      children: d
    }), (0, a.jsx)(i.t, {
      applicationId: t,
      skuIds: c,
      variant: s,
      guildId: n
    })]
  })
}
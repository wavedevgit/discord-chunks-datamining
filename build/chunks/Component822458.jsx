/** Chunk was on 77033 **/
/** chunk id: 822458, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk840724 = require("./840724.jsx"),
  Chunk727366 = require("./727366.jsx"),
  Chunk693965 = require("./693965.js");

function o(n) {
  let {
    applicationId: e,
    guildId: t,
    sectionTitle: o,
    skuIds: s,
    variant: c = a.Z.SMALL
  } = n;
  return null == s || 0 === s.length ? null : (0, l.jsxs)("div", {
    className: d.sectionContainer,
    children: [null != o && (0, l.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      lineClamp: 1,
      className: d.sectionTitle,
      children: o
    }), (0, l.jsx)(r.t, {
      applicationId: e,
      skuIds: s,
      variant: c,
      guildId: t
    })]
  })
}
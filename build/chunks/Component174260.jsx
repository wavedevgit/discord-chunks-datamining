/** Chunk was on 77033 **/
/** chunk id: 174260, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk840724 = require("./840724.jsx"),
  Chunk727366 = require("./727366.jsx"),
  Chunk650750 = require("./650750.js");

function o(e) {
  let {
    applicationId: n,
    guildId: t,
    sectionTitle: o,
    skuIds: s,
    variant: c = a.Z.SMALL
  } = e;
  return null == s || 0 === s.length ? null : (0, l.jsxs)("div", {
    className: d.sectionContainer,
    children: [null != o && (0, l.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      lineClamp: 1,
      className: d.sectionTitle,
      children: o
    }), (0, l.jsx)(r.t, {
      applicationId: n,
      skuIds: s,
      variant: c,
      guildId: t
    })]
  })
}
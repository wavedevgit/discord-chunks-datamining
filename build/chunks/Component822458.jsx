/** Chunk was on 77033 **/
/** chunk id: 822458, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk840724 = require("./840724.jsx"),
  Chunk727366 = require("./727366.jsx"),
  Chunk693965 = require("./693965.js");

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
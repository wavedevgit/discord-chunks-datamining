/** Chunk was on 77033 **/
/** chunk id: 822458, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk840724 = require("./840724.jsx"),
  Chunk727366 = require("./727366.jsx"),
  Chunk693965 = require("./693965.js");

function d(e) {
  let {
    applicationId: n,
    guildId: l,
    sectionTitle: d,
    skuIds: s,
    variant: c = a.Z.SMALL
  } = e;
  return null == s || 0 === s.length ? null : (0, t.jsxs)("div", {
    className: r.sectionContainer,
    children: [null != d && (0, t.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      lineClamp: 1,
      className: r.sectionTitle,
      children: d
    }), (0, t.jsx)(o.t, {
      applicationId: n,
      skuIds: s,
      variant: c,
      guildId: l
    })]
  })
}
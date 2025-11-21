/** Chunk was on 77033 **/
/** chunk id: 822458, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk590961 = require("./590961.jsx"),
  Chunk840724 = require("./840724.jsx"),
  Chunk727366 = require("./727366.jsx"),
  Chunk693965 = require("./693965.js");

function c(e) {
  let {
    analyticsSectionId: n,
    applicationId: l,
    guildId: c,
    sectionTitle: u,
    skuIds: g,
    variant: p = r.Z.SMALL
  } = e, f = i.useMemo(() => ({
    section: n,
    sectionTitle: u
  }), [n, u]);
  return null == g || 0 === g.length ? null : (0, t.jsx)(o.hL, {
    newValue: f,
    children: (0, t.jsxs)("div", {
      className: d.sectionContainer,
      children: [null != u && (0, t.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        lineClamp: 1,
        className: d.sectionTitle,
        children: u
      }), (0, t.jsx)(s.t, {
        applicationId: l,
        skuIds: g,
        variant: p,
        guildId: c
      })]
    })
  })
}
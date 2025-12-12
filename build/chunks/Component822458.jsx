/** Chunk was on 77033 **/
/** chunk id: 822458, original params: e,n,t (module,exports,require) **/
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
    applicationId: t,
    guildId: c,
    sectionTitle: u,
    skuIds: g,
    variant: p = s.Zp.SMALL
  } = e, _ = i.useMemo(() => ({
    pageSection: n,
    pageSectionTitle: u
  }), [n, u]);
  return null == g || 0 === g.length ? null : (0, l.jsx)(o.hL, {
    newValue: _,
    children: (0, l.jsxs)("div", {
      className: d.sectionContainer,
      children: [null != u && u.length > 0 && (0, l.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        lineClamp: 1,
        className: d.sectionTitle,
        children: u
      }), (0, l.jsx)(r.t, {
        applicationId: t,
        skuIds: g,
        variant: p,
        guildId: c
      })]
    })
  })
}
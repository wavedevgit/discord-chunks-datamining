/** Chunk was on 77033 **/
/** chunk id: 174260, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk590961 = require("./590961.jsx"),
  Chunk840724 = require("./840724.jsx"),
  Chunk727366 = require("./727366.jsx"),
  Chunk389901 = require("./389901.js");

function c(e) {
  let {
    analyticsSectionId: n,
    applicationId: t,
    guildId: c,
    sectionTitle: u,
    skuIds: f,
    variant: g = s.Zp.SMALL
  } = e, p = i.useMemo(() => ({
    pageSection: n,
    pageSectionTitle: u
  }), [n, u]);
  return null == f || 0 === f.length ? null : (0, l.jsx)(o.hL, {
    newValue: p,
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
        skuIds: f,
        variant: g,
        guildId: c
      })]
    })
  })
}
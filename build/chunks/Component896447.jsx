/** Chunk was on 14078 **/
/** chunk id: 896447, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk439303 = require("./439303.jsx"),
  Chunk183802 = require("./183802.jsx"),
  Chunk205830 = require("./205830.jsx"),
  Chunk770887 = require("./770887.js");

function c(e) {
  let {
    analyticsSectionId: l,
    applicationId: t,
    guildId: c,
    sectionTitle: u,
    skuIds: g,
    variant: _ = d.s.SMALL
  } = e, p = s.useMemo(() => ({
    pageSection: l,
    pageSectionTitle: u
  }), [l, u]);
  return null == g || 0 === g.length ? null : (0, n.jsx)(i.E9, {
    newValue: p,
    children: (0, n.jsxs)("div", {
      className: o.h,
      children: [null != u && u.length > 0 && (0, n.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        lineClamp: 1,
        className: o.G,
        children: u
      }), (0, n.jsx)(r.$, {
        applicationId: t,
        skuIds: g,
        variant: _,
        guildId: c
      })]
    })
  })
}
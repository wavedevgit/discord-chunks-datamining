/** Chunk was on 14078 **/
/** chunk id: 205830, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  $: () => r
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk183802 = require("./183802.jsx"),
  Chunk660592 = require("./660592.js");

function r(e) {
  let {
    applicationId: l,
    skuIds: t,
    variant: a = i.s.SMALL,
    guildId: r,
    analyticsLocations: o
  } = e;
  return null == t || 0 === t.length ? null : (0, n.jsx)("div", {
    className: s()(d.kL, d.$2, {
      [d.Wc]: a === i.s.MEDIUM
    }),
    children: t.map((e, t) => (0, n.jsx)(i.A, {
      positionInSection: t,
      applicationId: l,
      skuId: e,
      variant: a,
      guildId: r,
      analyticsLocations: o
    }, "".concat(e, "-").concat(t)))
  })
}
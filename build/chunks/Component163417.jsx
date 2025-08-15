/** Chunk was on 1272 **/
/** chunk id: 163417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk145641 = require("./145641.jsx"),
  Chunk322701 = require("./322701.jsx");

function a(e) {
  let {
    rows: t,
    renderRow: n,
    renderSection: a,
    isVirtualizedList: o,
    hasSearchQuery: s,
    sectionFilter: c,
    footer: u
  } = e;
  return o ? (0, r.jsx)(i.Z, {
    rows: t,
    renderRow: n,
    renderSection: a,
    footer: u
  }) : (0, r.jsx)(l.Z, {
    rows: t,
    renderRow: n,
    renderSection: a,
    sectionFilter: c,
    hasSearchQuery: s,
    footer: u
  })
}
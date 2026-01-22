/** Chunk was on 21738 **/
/** chunk id: 979282, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk518620 = require("./518620.jsx"),
  Chunk901319 = require("./901319.jsx");

function a(e) {
  let {
    rows: t,
    renderRow: n,
    renderSection: a,
    isVirtualizedList: s,
    hasSearchQuery: o,
    sectionFilter: c,
    footer: u,
    renderSectionFooter: d
  } = e;
  return s ? (0, r.jsx)(i.A, {
    rows: t,
    renderRow: n,
    renderSection: a,
    footer: u,
    sectionFilter: c,
    renderSectionFooter: d
  }) : (0, r.jsx)(l.A, {
    rows: t,
    renderRow: n,
    renderSection: a,
    sectionFilter: c,
    hasSearchQuery: o,
    footer: u,
    renderSectionFooter: d
  })
}
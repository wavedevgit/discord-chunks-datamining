/** Chunk was on 1272 (46194273c01318d9.js) **/
n.d(t, {
  Z: () => o
});
var r = n(200651);
n(192379);
var i = n(145641),
  l = n(322701);

function o(e) {
  let {
    rows: t,
    renderRow: n,
    renderSection: o,
    isVirtualizedList: a,
    hasSearchQuery: s,
    sectionFilter: c,
    footer: u
  } = e;
  return a ? (0, r.jsx)(i.Z, {
    rows: t,
    renderRow: n,
    renderSection: o,
    footer: u
  }) : (0, r.jsx)(l.Z, {
    rows: t,
    renderRow: n,
    renderSection: o,
    sectionFilter: c,
    hasSearchQuery: s,
    footer: u
  })
}
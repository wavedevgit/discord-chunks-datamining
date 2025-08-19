/** Chunk was on 12630 **/
/** chunk id: 101695, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk254610 = require("./254610.js");

function s(A) {
  let {
    onPageChange: e,
    offset: t,
    totalCount: s,
    pageSize: a,
    renderPageWrapper: o
  } = A, g = Math.floor(t / a) + 1, c = r.useCallback(A => {
    e(A - 1)
  }, [e]);
  return (0, n.jsx)("div", {
    className: i.container,
    children: (0, n.jsx)(l.DsT, {
      currentPage: g,
      totalCount: s,
      pageSize: a,
      onPageChange: c,
      maxVisiblePages: 5,
      renderPageWrapper: o
    })
  })
}
/** Chunk was on 10576 **/
/** chunk id: 101695, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk254610 = require("./254610.js");

function s(e) {
  let {
    onPageChange: t,
    offset: n,
    totalCount: s,
    pageSize: o,
    renderPageWrapper: u
  } = e, c = Math.floor(n / o) + 1, d = l.useCallback(e => {
    t(e - 1)
  }, [t]);
  return (0, r.jsx)("div", {
    className: a.container,
    children: (0, r.jsx)(i.DsT, {
      currentPage: c,
      totalCount: s,
      pageSize: o,
      onPageChange: d,
      maxVisiblePages: 5,
      renderPageWrapper: u
    })
  })
}
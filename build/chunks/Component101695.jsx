/** Chunk was on 873 **/
/** chunk id: 101695, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk58922 = require("./58922.js");

function a(e) {
  let {
    onPageChange: t,
    offset: n,
    totalCount: a,
    pageSize: o,
    renderPageWrapper: u
  } = e, c = Math.floor(n / o) + 1, E = l.useCallback(e => {
    t(e - 1)
  }, [t]);
  return (0, r.jsx)("div", {
    className: i.container,
    children: (0, r.jsx)(s.DsT, {
      currentPage: c,
      totalCount: a,
      pageSize: o,
      onPageChange: E,
      maxVisiblePages: 5,
      renderPageWrapper: u
    })
  })
}
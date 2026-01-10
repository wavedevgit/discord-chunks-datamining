/** Chunk was on 69937 **/
/** chunk id: 16846, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk126208 = require("./126208.js");

function s(e) {
  let {
    onPageChange: t,
    offset: n,
    totalCount: s,
    pageSize: o,
    renderPageWrapper: c
  } = e, u = Math.floor(n / o) + 1, d = l.useCallback(e => {
    t(e - 1)
  }, [t]);
  return (0, r.jsx)("div", {
    className: a.container,
    children: (0, r.jsx)(i.DsT, {
      currentPage: u,
      totalCount: s,
      pageSize: o,
      onPageChange: d,
      maxVisiblePages: 5,
      renderPageWrapper: c
    })
  })
}
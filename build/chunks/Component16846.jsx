/** Chunk was on 15718 **/
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
    renderPageWrapper: u
  } = e, c = Math.floor(n / o) + 1, E = l.useCallback(e => {
    t(e - 1)
  }, [t]);
  return (0, r.jsx)("div", {
    className: a.container,
    children: (0, r.jsx)(i.DsT, {
      currentPage: c,
      totalCount: s,
      pageSize: o,
      onPageChange: E,
      maxVisiblePages: 5,
      renderPageWrapper: u
    })
  })
}
/** Chunk was on 2155 **/
/** chunk id: 876689, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk876989 = require("./876989.js");

function s(e) {
  let {
    onPageChange: t,
    offset: n,
    totalCount: s,
    pageSize: o,
    renderPageWrapper: u
  } = e, c = Math.floor(n / o) + 1, E = r.useCallback(e => {
    t(e - 1)
  }, [t]);
  return (0, l.jsx)("div", {
    className: i.k,
    children: (0, l.jsx)(a.mgR, {
      currentPage: c,
      totalCount: s,
      pageSize: o,
      onPageChange: E,
      maxVisiblePages: 5,
      renderPageWrapper: u
    })
  })
}
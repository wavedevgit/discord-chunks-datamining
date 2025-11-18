/** Chunk was on 66201 **/
/** chunk id: 101695, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk800641 = require("./800641.js");

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
    className: s.container,
    children: (0, r.jsx)(i.DsT, {
      currentPage: c,
      totalCount: a,
      pageSize: o,
      onPageChange: E,
      maxVisiblePages: 5,
      renderPageWrapper: u
    })
  })
}
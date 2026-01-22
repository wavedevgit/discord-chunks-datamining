/** Chunk was on 35894 **/
/** chunk id: 809617, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk159083 = require("./159083.jsx"),
  Chunk189552 = require("./189552.js"),
  Chunk636670 = require("./636670.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk6561 = require("./6561.js");

function u(e) {
  let {
    searchState: t
  } = e, n = l.useMemo(() => ({
    [a.IY.LOADING]: null,
    [a.IY.SUCCESS_STILL_INDEXING]: {
      icon: (0, r.jsx)(o.A, {}),
      message: c.intl.string(c.t.AXPbZr)
    },
    [a.IY.SUCCESS_EMPTY]: {
      icon: (0, r.jsx)(s.A, {}),
      message: c.intl.string(c.t.wdyR52)
    },
    [a.IY.SUCCESS_FULL]: null
  }), [])[t];
  return null == n ? null : (0, r.jsxs)("div", {
    className: d.p,
    children: [(0, r.jsx)("div", {
      className: d.__invalid_noResultsIconContainer,
      children: n.icon
    }), (0, r.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: n.message
    })]
  })
}
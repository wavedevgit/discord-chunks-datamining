/** Chunk was on 37997 **/
/** chunk id: 761546, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk172218 = require("./172218.js"),
  Chunk397927 = require("./397927.js"),
  Chunk437290 = require("./437290.jsx"),
  Chunk892448 = require("./892448.js");

function c(e) {
  let {
    users: t,
    isUserSelected: r,
    onSelectionChange: c,
    isFetching: o,
    onFetchMore: d,
    isUserDisabled: u,
    searchQuery: b = "",
    emptySearchContent: x,
    className: m,
    tooltipConfig: h
  } = e, _ = (0, a.K)(e => {
    e && !o && (null == d || d())
  });
  return b.length > 0 && 0 === t.length && null != x ? (0, n.jsxs)("div", {
    className: i.t,
    children: [(0, n.jsx)(s.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: x.header
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children: x.body
    })]
  }) : (0, n.jsxs)(s.d_W, {
    className: m,
    children: [t.map(e => (0, n.jsx)(l.A, {
      user: e,
      checked: r(e),
      disabled: !!(null == u ? true : u(e)),
      onChange: c,
      tooltipConfig: h
    }, e.id)), o && (0, n.jsx)(s.y$y, {}), (0, n.jsx)("div", {
      ref: _
    })]
  })
}
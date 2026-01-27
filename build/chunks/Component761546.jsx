/** Chunk was on 92917 **/
/** chunk id: 761546, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk172218 = require("./172218.js"),
  Chunk397927 = require("./397927.js"),
  Chunk437290 = require("./437290.jsx"),
  Chunk892448 = require("./892448.js");

function o(e) {
  let {
    users: t,
    isUserSelected: n,
    onSelectionChange: o,
    isFetching: c,
    onFetchMore: u,
    isUserDisabled: d,
    searchQuery: p = "",
    emptySearchContent: m,
    className: f,
    tooltipConfig: g
  } = e, h = (0, i.K)(e => {
    e && !c && (null == u || u())
  });
  return p.length > 0 && 0 === t.length && null != m ? (0, r.jsxs)("div", {
    className: s.t,
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: m.header
    }), (0, r.jsx)(l.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children: m.body
    })]
  }) : (0, r.jsxs)(l.d_W, {
    className: f,
    children: [t.map(e => (0, r.jsx)(a.A, {
      user: e,
      checked: n(e),
      disabled: !!(null == d ? true : d(e)),
      onChange: o,
      tooltipConfig: g
    }, e.id)), c && (0, r.jsx)(l.y$y, {}), (0, r.jsx)("div", {
      ref: h
    })]
  })
}
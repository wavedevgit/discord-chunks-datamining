/** Chunk was on web.js **/
/** chunk id: 761546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk172218 = require("./172218.js"),
  Chunk397927 = require("./397927.js"),
  Chunk437290 = require("./437290.jsx"),
  Chunk892448 = require("./892448.js");

function l(e) {
  let {
    users: t,
    isUserSelected: n,
    onSelectionChange: l,
    isFetching: c,
    onFetchMore: u,
    isUserDisabled: d,
    searchQuery: f = "",
    emptySearchContent: p,
    className: _,
    tooltipConfig: h
  } = e, m = (0, i.K)(e => {
    e && !c && (null == u || u())
  });
  return f.length > 0 && 0 === t.length && null != p ? (0, r.jsxs)("div", {
    className: o.t,
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: p.header
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "text-subtle",
      children: p.body
    })]
  }) : (0, r.jsxs)(a.d_W, {
    className: _,
    children: [t.map(e => (0, r.jsx)(s.A, {
      user: e,
      checked: n(e),
      disabled: !!(null == d ? true : d(e)),
      onChange: l,
      tooltipConfig: h
    }, e.id)), c && (0, r.jsx)(a.y$y, {}), (0, r.jsx)("div", {
      ref: m
    })]
  })
}
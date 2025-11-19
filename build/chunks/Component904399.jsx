/** Chunk was on web.js **/
/** chunk id: 904399, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk907331 = require("./907331.js"),
  Chunk481060 = require("./481060.js"),
  Chunk530612 = require("./530612.jsx"),
  Chunk41856 = require("./41856.js");

function l(e) {
  let {
    users: t,
    selectedUsers: n,
    onSelectionChange: l,
    isFetching: c,
    onFetchMore: u,
    isUserDisabled: d,
    searchQuery: f = "",
    emptySearchContent: _,
    className: p
  } = e, h = (0, i.O)(e => {
    e && !c && (null == u || u())
  });
  return f.length > 0 && 0 === t.size && null != _ ? (0, r.jsxs)("div", {
    className: s.emptySearchResultsContainer,
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: _.header
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "text-secondary",
      children: _.body
    })]
  }) : (0, r.jsxs)(a.u2D, {
    className: p,
    children: [Array.from(t.values()).map(e => (0, r.jsx)(o.Z, {
      user: e,
      checked: n.has(e.id),
      disabled: !!(null == d ? true : d(e)),
      onChange: (e, t) => {
        l(e, t)
      }
    }, e.id)), c && (0, r.jsx)(a.$jN, {}), (0, r.jsx)("div", {
      ref: h
    })]
  })
}
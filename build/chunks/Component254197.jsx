/** Chunk was on web.js **/
/** chunk id: 254197, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk361730 = require("./361730.js");

function l(e) {
  let {
    applications: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.Text, {
      variant: "text-xs/semibold",
      color: "text-default",
      className: s.header,
      children: a.intl.string(a.t["Uv/eT0"])
    }), (0, r.jsx)("div", {
      className: s.list,
      children: t.map(e => {
        if (null != e) return (0, r.jsxs)("div", {
          className: s.row,
          children: [(0, r.jsx)(o.Z, {
            game: e,
            size: o.Z.Sizes.XXSMALL
          }), (0, r.jsx)(i.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: e.name
          })]
        }, e.id)
      })
    })]
  })
}
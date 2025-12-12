/** Chunk was on web.js **/
/** chunk id: 254197, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk523626 = require("./523626.js");

function l(e) {
  let {
    applications: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.Text, {
      variant: "text-xs/semibold",
      color: "text-default",
      className: s.header,
      children: a.intl.string(a.t["Uv/eTx"])
    }), (0, r.jsx)("div", {
      className: s.list,
      children: t.map(e => {
        if (null != e) return (0, r.jsxs)("div", {
          className: s.row,
          children: [(0, r.jsx)(o.Z, {
            game: e,
            size: o.A.XXSMALL
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
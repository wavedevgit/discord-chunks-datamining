/** Chunk was on web.js **/
/** chunk id: 648304, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk365282 = require("./365282.js");

function l(e) {
  let {
    applications: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.Text, {
      variant: "text-xs/semibold",
      color: "text-default",
      className: s.wx,
      children: o.intl.string(o.t["Uv/eTx"])
    }), (0, r.jsx)("div", {
      className: s.p_,
      children: t.map(e => {
        if (null != e) return (0, r.jsxs)("div", {
          className: s.nM,
          children: [(0, r.jsx)(a.A, {
            game: e,
            size: a.M.XXSMALL
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
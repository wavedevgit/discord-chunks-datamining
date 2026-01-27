/** Chunk was on web.js **/
/** chunk id: 603538, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk206418 = require("./206418.jsx"),
  Chunk224016 = require("./224016.jsx"),
  Chunk149757 = require("./149757.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk916000 = require("./916000.js");
let u = e => {
  let {
    profileBadge: t,
    tenureBadge: n
  } = e, u = (0, s.I)(n.id);
  return (0, r.jsxs)(a.A, {
    assetComponent: (0, r.jsx)("img", {
      src: u,
      alt: ""
    }),
    tooltipWordmarkComponent: (0, r.jsx)(o.A, {
      width: 56,
      className: c.R
    }),
    children: [(0, r.jsx)(i.DZT, {
      variant: "heading-xl/extrabold",
      children: l.intl.string(n.nameUnformatted)
    }), (0, r.jsx)(i.EYj, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: c.K,
      children: t.description
    })]
  })
}
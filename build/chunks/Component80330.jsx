/** Chunk was on web.js **/
/** chunk id: 80330, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk946356 = require("./946356.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk598808 = require("./598808.js");

function d(e) {
  let {
    renderCards: t,
    heading: n,
    onExpand: a
  } = e, d = i.useId(), f = i.useMemo(() => t({
    className: u.Nr
  }), [t]), [p] = f;
  return 0 === f.length ? null : (0, r.jsxs)("section", {
    "aria-labelledby": null != n ? d : true,
    className: u.kL,
    children: [null != n && (0, r.jsx)(s.AC4, {
      children: (0, r.jsx)(s.H, {
        id: d,
        children: n
      })
    }), (0, r.jsxs)("ul", {
      className: o()(u.ML, f.length > 1 && u.Kr),
      "aria-labelledby": null != n ? d : true,
      tabIndex: false,
      children: [(0, r.jsx)("li", {
        className: u.Us,
        children: p
      }), f.length > 1 && (0, r.jsx)(s.DUT, {
        tag: "li",
        className: u.Ee,
        onClick: a,
        "aria-label": c.intl.string(c.t["OBCR+p"]),
        children: (0, r.jsx)(l.A.Overlay, {
          className: u.h9,
          children: null
        })
      })]
    })]
  })
}
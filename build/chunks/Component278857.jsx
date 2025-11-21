/** Chunk was on web.js **/
/** chunk id: 278857, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk588472 = require("./588472.js");

function d(e) {
  let {
    renderCards: t,
    heading: n,
    onExpand: a
  } = e, d = i.useId(), f = i.useMemo(() => t({
    className: u.card
  }), [t]), [_] = f;
  return 0 === f.length ? null : (0, r.jsxs)("section", {
    "aria-labelledby": null != n ? d : true,
    className: u.container,
    children: [null != n && (0, r.jsx)(s.nn4, {
      children: (0, r.jsx)(s.H, {
        id: d,
        children: n
      })
    }), (0, r.jsxs)("ul", {
      className: o()(u.cardsList, f.length > 1 && u.hasMultipleCards),
      "aria-labelledby": null != n ? d : true,
      tabIndex: false,
      children: [(0, r.jsx)("li", {
        className: u.firstCardContainer,
        children: _
      }), f.length > 1 && (0, r.jsx)(s.P3F, {
        tag: "li",
        className: u.backgroundCardContainer,
        onClick: a,
        "aria-label": c.intl.string(c.t["OBCR+p"]),
        children: (0, r.jsx)(l.Z.Overlay, {
          className: u.backgroundCard,
          children: null
        })
      })]
    })]
  })
}
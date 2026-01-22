/** Chunk was on web.js **/
/** chunk id: 363476, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk580630 = require("./580630.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk709246 = require("./709246.js");

function u(e) {
  let {
    price: t,
    currency: n,
    intervalType: i,
    className: u,
    intervalCount: d = 1,
    isPrepaidPaymentSource: f = false
  } = e, p = (0, s.$g)(t, n), _ = null;
  return i === o.WT.YEAR ? _ = l.intl.format(l.t["3U719t"], {
    price: p
  }) : i === o.WT.MONTH && 1 === d ? _ = l.intl.format(l.t.NkR7BU, {
    price: p
  }) : i === o.WT.MONTH && d > 1 && (_ = l.intl.format(l.t.CNAGg4, {
    price: p,
    intervalCount: d
  })), (0, r.jsx)("div", {
    className: a()(c.S, u),
    "data-testid": "PricePerInterval-".concat(n),
    children: null == i || f ? (0, r.jsx)("strong", {
      children: p
    }) : _
  })
}
/** Chunk was on web.js **/
/** chunk id: 553797, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk937615 = require("./937615.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk201608 = require("./201608.js");

function u(e) {
  let {
    price: t,
    currency: n,
    intervalType: i,
    className: u,
    intervalCount: d = 1,
    isPrepaidPaymentSource: f = false
  } = e, _ = (0, o.T4)(t, n), p = null;
  return i === s.rV.YEAR ? p = l.intl.format(l.t["3U719t"], {
    price: _
  }) : i === s.rV.MONTH && 1 === d ? p = l.intl.format(l.t.NkR7BU, {
    price: _
  }) : i === s.rV.MONTH && d > 1 && (p = l.intl.format(l.t.CNAGg4, {
    price: _,
    intervalCount: d
  })), (0, r.jsx)("div", {
    className: a()(c.pricePerInterval, u),
    "data-testid": "PricePerInterval-".concat(n),
    children: null == i || f ? (0, r.jsx)("strong", {
      children: _
    }) : p
  })
}
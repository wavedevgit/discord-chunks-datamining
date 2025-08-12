/** Chunk was on web.js **/
/** chunk id: 473188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk997359 = require("./997359.js");

function l(e) {
  let {
    rank: t,
    hideInnerBorder: n = false
  } = e, i = t <= 3 ? "text-xs/semibold" : "text-xs/medium";
  return (0, r.jsx)("div", {
    className: o()(s.rankContainer, {
      [s.goldBorder]: 1 === t,
      [s.silverBorder]: 2 === t,
      [s.bronzeBorder]: 3 === t,
      [s.defaultBorder]: t > 3
    }),
    children: (0, r.jsx)(a.Text, {
      tabularNumbers: true,
      variant: i,
      className: o()(s.rank, {
        [s.rankWithBorder]: !n,
        [s.goldText]: 1 === t,
        [s.silverText]: 2 === t,
        [s.bronzeText]: 3 === t,
        [s.rankNoBorder]: n
      }),
      children: t
    })
  })
}
/** Chunk was on web.js **/
/** chunk id: 947390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk722838 = require("./722838.js");

function l(e) {
  let {
    text: t,
    className: n
  } = e;
  return (0, r.jsx)("div", {
    className: o()(s.pill, s.pillGradient, n),
    children: (0, r.jsx)(a.Text, {
      variant: "text-xxs/bold",
      color: "text-primary",
      className: s.pillText,
      children: t
    })
  })
}
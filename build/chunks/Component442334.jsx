/** Chunk was on web.js **/
/** chunk id: 442334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk441849 = require("./441849.js");

function c(e) {
  let {
    options: t,
    value: n,
    select: a,
    selectClassName: c,
    title: u,
    note: d
  } = e, f = i.useId();
  return (0, r.jsx)(s.PhF, {
    label: u,
    description: d,
    layout: "horizontal",
    "aria-labelledby": f,
    className: o()(l.selectControl, c),
    options: t,
    isSelected: e => e === n,
    select: a,
    serialize: e => String(e)
  })
}
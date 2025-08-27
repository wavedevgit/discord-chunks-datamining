/** Chunk was on web.js **/
/** chunk id: 395041, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => d,
  w: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk819439 = require("./819439.js"),
  Chunk624595 = require("./624595.js");

function c(e, t) {
  let {
    children: n
  } = e;
  return (0, r.jsx)(o.Text, {
    variant: "text-sm/medium",
    className: t,
    children: n
  })
}
let u = e => {
    let t = (0, s.$V)({
      location: "SearchTokens"
    });
    return c(e, a()(l.searchFilter, {
      [l.searchTokenTopLevel]: t
    }))
  },
  d = e => {
    let t = (0, s.$V)({
      location: "SearchTokens"
    });
    return c(e, a()(l.searchAnswer, {
      [l.searchTokenTopLevel]: t
    }))
  }
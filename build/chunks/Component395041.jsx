/** Chunk was on 54157 **/
/** chunk id: 395041, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => d,
  w: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk819439 = require("./819439.js"),
  Chunk624595 = require("./624595.js");

function c(e, t) {
  let {
    children: n
  } = e;
  return (0, r.jsx)(a.Text, {
    variant: "text-sm/medium",
    className: t,
    children: n
  })
}
let u = e => {
    let t = (0, i.$)({
      location: "SearchTokens"
    });
    return c(e, l()(o.searchFilter, {
      [o.searchTokenTopLevel]: t
    }))
  },
  d = e => {
    let t = (0, i.$)({
      location: "SearchTokens"
    });
    return c(e, l()(o.searchAnswer, {
      [o.searchTokenTopLevel]: t
    }))
  }
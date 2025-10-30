/** Chunk was on 39297 **/
/** chunk id: 11075, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk699867 = require("./699867.jsx");
let o = e => {
  let {
    className: t
  } = e, n = Object.keys(r.z).find(e => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
  return null == n ? null : (0, a.jsxs)("div", {
    className: t,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-md/semibold",
      children: "Shop Marketing"
    }), (0, a.jsx)("div", {
      style: {
        zIndex: 1
      },
      children: (0, a.jsx)(i.Z, {
        items: [n]
      })
    })]
  })
}
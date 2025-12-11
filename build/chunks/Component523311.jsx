/** Chunk was on 92504 **/
/** chunk id: 523311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk813290 = require("./813290.js");

function o(e) {
  let {
    loading: t,
    children: n
  } = e;
  return (0, a.jsxs)("div", {
    className: s.container,
    children: [t ? (0, a.jsx)("div", {
      className: s.spinnerContainer,
      children: (0, a.jsx)(l.$jN, {
        className: s.spinner,
        type: l.$jN.Type.SPINNING_CIRCLE
      })
    }) : null, (0, a.jsx)("div", {
      className: i()({
        [s.loading]: t
      }),
      children: n
    })]
  })
}
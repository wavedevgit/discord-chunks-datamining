/** Chunk was on 69844 **/
/** chunk id: 523311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk390082 = require("./390082.js");

function o(e) {
  let {
    loading: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: s.container,
    children: [t ? (0, r.jsx)("div", {
      className: s.spinnerContainer,
      children: (0, r.jsx)(l.$jN, {
        className: s.spinner,
        type: l.$jN.Type.SPINNING_CIRCLE
      })
    }) : null, (0, r.jsx)("div", {
      className: i()({
        [s.loading]: t
      }),
      children: n
    })]
  })
}
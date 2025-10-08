/** Chunk was on 85683 **/
/** chunk id: 450403, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk951288 = require("./951288.js"),
  Chunk522259 = require("./522259.js");

function i(e) {
  let {
    children: n,
    actions: t
  } = e;
  return (0, r.jsx)("div", {
    className: a.card,
    children: (0, r.jsxs)("div", {
      className: a.contentWrapper,
      children: [n, null != t && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: a.divider
        }), (0, r.jsx)("div", {
          className: a.serverActions,
          children: t
        })]
      })]
    })
  })
}
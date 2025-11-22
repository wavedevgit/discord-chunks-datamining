/** Chunk was on 62934 **/
/** chunk id: 204002, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk54381 = require("./54381.js"),
  Chunk8561 = require("./8561.js");

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
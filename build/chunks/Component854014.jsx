/** Chunk was on 36878 **/
/** chunk id: 854014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk422833 = require("./422833.js");

function r(e) {
  let {
    icon: t,
    title: n,
    onClick: l,
    active: r
  } = e;
  return (0, i.jsxs)(o.P3F, {
    className: s()(a.item, r && a.active),
    onClick: l,
    children: [(0, i.jsx)(t, {
      color: "currentColor",
      size: "refresh_sm"
    }), n]
  })
}
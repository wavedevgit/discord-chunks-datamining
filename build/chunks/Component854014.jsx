/** Chunk was on 36878 **/
/** chunk id: 854014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk873395 = require("./873395.js");

function a(e) {
  let {
    icon: t,
    title: n,
    onClick: l,
    active: a
  } = e;
  return (0, i.jsxs)(o.P3F, {
    className: r()(s.item, a && s.active),
    onClick: l,
    children: [(0, i.jsx)(t, {
      color: "currentColor",
      size: "refresh_sm"
    }), n]
  })
}
/** Chunk was on 76210 **/
/** chunk id: 854014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk873395 = require("./873395.js");

function u(e) {
  let {
    icon: t,
    title: n,
    onClick: i,
    active: u
  } = e;
  return (0, l.jsxs)(s.P3F, {
    className: r()(o.item, u && o.active),
    onClick: i,
    children: [(0, l.jsx)(t, {
      color: "currentColor",
      size: "refresh_sm"
    }), n]
  })
}
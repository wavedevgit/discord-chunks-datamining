/** Chunk was on 51235 **/
/** chunk id: 280102, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk570291 = require("./570291.js");

function s(e) {
  let {
    total: t,
    users: n,
    videoLimit: i
  } = e;
  return (0, r.jsxs)("div", {
    className: o.wrapper,
    children: [(0, r.jsxs)("span", {
      className: l()(o.users, {
        [o.video]: i,
        [o.extraLong]: n >= 100
      }),
      children: [i ? (0, r.jsx)(a.Odl, {
        size: "md",
        color: "currentColor",
        className: o.videoIcon
      }) : null, n.toString().padStart(2, "0")]
    }), (0, r.jsx)("span", {
      className: l()(o.total, {
        [o.extraLong]: t >= 100
      }),
      children: t.toString().padStart(2, "0")
    })]
  })
}
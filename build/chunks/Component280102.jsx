/** Chunk was on 31899 **/
/** chunk id: 280102, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk21265 = require("./21265.js");

function s(e) {
  let {
    total: t,
    users: n,
    videoLimit: i
  } = e;
  return (0, r.jsxs)("div", {
    className: a.wrapper,
    children: [(0, r.jsxs)("span", {
      className: l()(a.users, {
        [a.video]: i,
        [a.extraLong]: n >= 100
      }),
      children: [i ? (0, r.jsx)(o.Odl, {
        size: "md",
        color: "currentColor",
        className: a.videoIcon
      }) : null, n.toString().padStart(2, "0")]
    }), (0, r.jsx)("span", {
      className: l()(a.total, {
        [a.extraLong]: t >= 100
      }),
      children: t.toString().padStart(2, "0")
    })]
  })
}
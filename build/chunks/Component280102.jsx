/** Chunk was on 34779 **/
/** chunk id: 280102, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk656855 = require("./656855.js");

function a(e) {
  let {
    total: t,
    users: n,
    videoLimit: i
  } = e;
  return (0, r.jsxs)("div", {
    className: s.wrapper,
    children: [(0, r.jsxs)("span", {
      className: l()(s.users, {
        [s.video]: i,
        [s.extraLong]: n >= 100
      }),
      children: [i ? (0, r.jsx)(o.Odl, {
        size: "md",
        color: "currentColor",
        className: s.videoIcon
      }) : null, n.toString().padStart(2, "0")]
    }), (0, r.jsx)("span", {
      className: l()(s.total, {
        [s.extraLong]: t >= 100
      }),
      children: t.toString().padStart(2, "0")
    })]
  })
}
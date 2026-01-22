/** Chunk was on 97492 **/
/** chunk id: 697415, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk335419 = require("./335419.js");

function o(e) {
  let {
    total: t,
    users: n,
    videoLimit: l
  } = e;
  return (0, r.jsxs)("div", {
    className: s.iE,
    children: [(0, r.jsxs)("span", {
      className: i()(s.VV, {
        [s.Ki]: l,
        [s.$G]: n >= 100
      }),
      children: [l ? (0, r.jsx)(a.npA, {
        size: "md",
        color: "currentColor",
        className: s.LB
      }) : null, n.toString().padStart(2, "0")]
    }), (0, r.jsx)("span", {
      className: i()(s.X5, {
        [s.$G]: t >= 100
      }),
      children: t.toString().padStart(2, "0")
    })]
  })
}
/** Chunk was on 63141 **/
/** chunk id: 990673, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk382790 = require("./382790.jsx"),
  Chunk430036 = require("./430036.jsx"),
  Chunk518084 = require("./518084.jsx"),
  Chunk299889 = require("./299889.js");

function d(e) {
  let {
    dragStart: t,
    dragging: n,
    pinned: r,
    locked: d,
    className: u
  } = e;
  return (0, i.jsxs)(a.ZP, {
    className: o()(c.wrapper, u),
    children: [(0, i.jsx)(l.Z, {
      contained: true,
      dragStart: t,
      locked: d
    }), (0, i.jsx)(s.Z, {
      dragStart: t,
      locked: d,
      pinned: r,
      dragging: n,
      contained: true
    })]
  })
}
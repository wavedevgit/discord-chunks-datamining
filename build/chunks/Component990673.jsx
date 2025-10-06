/** Chunk was on 63141 **/
/** chunk id: 990673, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk382790 = require("./382790.jsx"),
  Chunk430036 = require("./430036.jsx"),
  Chunk518084 = require("./518084.jsx"),
  Chunk328890 = require("./328890.js");

function d(e) {
  let {
    dragStart: t,
    dragging: n,
    pinned: r,
    locked: d,
    className: u
  } = e;
  return (0, i.jsxs)(a.ZP, {
    className: s()(c.wrapper, u),
    children: [(0, i.jsx)(o.Z, {
      contained: true,
      dragStart: t,
      locked: d
    }), (0, i.jsx)(l.Z, {
      dragStart: t,
      locked: d,
      pinned: r,
      dragging: n,
      contained: true
    })]
  })
}
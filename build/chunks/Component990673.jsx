/** Chunk was on 63141 **/
/** chunk id: 990673, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk382790 = require("./382790.jsx"),
  Chunk430036 = require("./430036.jsx"),
  Chunk518084 = require("./518084.jsx"),
  Chunk148078 = require("./148078.js");

function d(e) {
  let {
    dragStart: t,
    dragging: n,
    pinned: r,
    locked: d,
    className: u
  } = e;
  return (0, i.jsxs)(l.ZP, {
    className: a()(c.wrapper, u),
    children: [(0, i.jsx)(s.Z, {
      contained: true,
      dragStart: t,
      locked: d
    }), (0, i.jsx)(o.Z, {
      dragStart: t,
      locked: d,
      pinned: r,
      dragging: n,
      contained: true
    })]
  })
}
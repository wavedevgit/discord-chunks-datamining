/** Chunk was on 84018 **/
/** chunk id: 131575, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk328913 = require("./328913.jsx"),
  Chunk407195 = require("./407195.jsx"),
  Chunk855790 = require("./855790.jsx"),
  Chunk594479 = require("./594479.js");

function d(e) {
  let {
    dragStart: t,
    dragging: n,
    pinned: r,
    locked: d,
    className: u
  } = e;
  return (0, i.jsxs)(a.Ay, {
    className: s()(c.i, u),
    children: [(0, i.jsx)(l.A, {
      contained: true,
      dragStart: t,
      locked: d
    }), (0, i.jsx)(o.A, {
      dragStart: t,
      locked: d,
      pinned: r,
      dragging: n,
      contained: true
    })]
  })
}
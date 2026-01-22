/** Chunk was on web.js **/
/** chunk id: 847494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk435328 = require("./435328.js"),
  Chunk342088 = require("./342088.js"),
  Chunk206314 = require("./206314.js");

function u(e) {
  let {
    description: t,
    className: n,
    guildId: a,
    truncate: u = true
  } = e, d = i.useMemo(() => (0, o.l)(t, true, {
    guildId: a,
    allowLinks: true,
    allowHeading: true,
    allowList: true
  }), [t, a]);
  return (0, r.jsx)("div", {
    className: s()(l.i, n, c.PT, {
      [l.x]: u
    }),
    children: d
  })
}
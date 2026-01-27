/** Chunk was on 48330 **/
/** chunk id: 847494, original params: e,t,n (module,exports,require) **/
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
    guildId: i,
    truncate: u = true
  } = e, d = r.useMemo(() => (0, a.l)(t, true, {
    guildId: i,
    allowLinks: true,
    allowHeading: true,
    allowList: true
  }), [t, i]);
  return (0, l.jsx)("div", {
    className: s()(c.i, n, o.PT, {
      [c.x]: u
    }),
    children: d
  })
}
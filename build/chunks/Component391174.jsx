/** Chunk was on 34082 **/
/** chunk id: 391174, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk725436 = require("./725436.js"),
  Chunk947469 = require("./947469.js"),
  Chunk430864 = require("./430864.js");

function u(e) {
  let {
    description: t,
    className: n,
    guildId: i,
    truncate: u = true
  } = e, d = l.useMemo(() => (0, a.m)(t, true, {
    guildId: i,
    allowLinks: true,
    allowHeading: true,
    allowList: true
  }), [t, i]);
  return (0, r.jsx)("div", {
    className: s()(o.descriptionText, n, c.markup, {
      [o.truncate]: u
    }),
    children: d
  })
}
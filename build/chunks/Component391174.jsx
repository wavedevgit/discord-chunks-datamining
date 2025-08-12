/** Chunk was on web.js **/
/** chunk id: 391174, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk725436 = require("./725436.js"),
  Chunk354321 = require("./354321.js"),
  Chunk692228 = require("./692228.js");

function u(e) {
  let {
    description: t,
    className: n,
    guildId: o,
    truncate: u = true
  } = e, d = i.useMemo(() => (0, s.m)(t, true, {
    guildId: o,
    allowLinks: true,
    allowHeading: true,
    allowList: true
  }), [t, o]);
  return (0, r.jsx)("div", {
    className: a()(l.descriptionText, n, c.markup, {
      [l.truncate]: u
    }),
    children: d
  })
}
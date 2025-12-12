/** Chunk was on web.js **/
/** chunk id: 391174, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk725436 = require("./725436.js"),
  Chunk947469 = require("./947469.js"),
  Chunk430864 = require("./430864.js");

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
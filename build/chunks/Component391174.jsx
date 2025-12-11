/** Chunk was on web.js **/
/** chunk id: 391174, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk725436 = require("./725436.js"),
  Chunk276713 = require("./276713.js"),
  Chunk960324 = require("./960324.js");

function u(e) {
  let {
    description: t,
    className: n,
    guildId: a,
    truncate: u = true
  } = e, d = i.useMemo(() => (0, s.m)(t, true, {
    guildId: a,
    allowLinks: true,
    allowHeading: true,
    allowList: true
  }), [t, a]);
  return (0, r.jsx)("div", {
    className: o()(l.descriptionText, n, c.markup, {
      [l.truncate]: u
    }),
    children: d
  })
}
/** Chunk was on 39048 **/
/** chunk id: 280433, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk306444 = require("./306444.jsx"),
  Chunk846922 = require("./846922.js"),
  Chunk922975 = require("./922975.js"),
  Chunk847419 = require("./847419.jsx"),
  Chunk277321 = require("./277321.jsx"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    "aria-labelledby": t,
    disabled: n = false
  } = e, {
    editStateId: u,
    guildId: g
  } = (0, l.O)(), [m, p] = a.W5(u, g);
  return (0, r.jsx)(i.z6M, {
    onChange: e => p(e),
    options: [{
      name: d.intl.string(d.t["vs2T+B"]),
      value: s.h.SOME_CHANNELS_ACCESS,
      leadingIcon: (0, i.kHD)(c.A)
    }, {
      name: d.intl.string(d.t.l4Tr7X),
      value: s.h.ALL_CHANNELS_ACCESS,
      leadingIcon: (0, i.kHD)(o.A)
    }],
    value: m,
    "aria-labelledby": t,
    disabled: n
  })
}
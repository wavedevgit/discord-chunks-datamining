/** Chunk was on 27978 **/
/** chunk id: 649156, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./35282.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk3570 = require("./3570.js"),
  Chunk685311 = require("./685311.jsx"),
  Chunk186901 = require("./186901.js");
let l = function(e) {
  let {
    match: t,
    location: n
  } = e, l = async (e, t) => {
    await (0, i.s)(a.jE.PICK_GUILD_SETTINGS, {
      section: e.params.section,
      subsection: e.params.subsection,
      search: t.search
    })
  };
  return (0, r.jsx)(s.Z, {
    match: t,
    location: n,
    attemptDeepLink: l
  })
}
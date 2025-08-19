/** Chunk was on 27978 **/
/** chunk id: 649156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk3570 = require("./3570.js"),
  Chunk685311 = require("./685311.jsx"),
  Chunk186901 = require("./186901.js");
let o = function(e) {
  let {
    match: t,
    location: n
  } = e, o = async (e, t) => {
    await (0, i.s)(a.jE.PICK_GUILD_SETTINGS, {
      section: e.params.section,
      subsection: e.params.subsection,
      search: t.search
    })
  };
  return (0, r.jsx)(l.Z, {
    match: t,
    location: n,
    attemptDeepLink: o
  })
}
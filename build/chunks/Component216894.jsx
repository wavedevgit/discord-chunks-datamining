/** Chunk was on 86142 **/
/** chunk id: 216894, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk970672 = require("./970672.js"),
  Chunk953680 = require("./953680.jsx"),
  Chunk613057 = require("./613057.js");
let a = function(e) {
  let {
    match: t,
    location: n
  } = e, a = async e => {
    await (0, i.W)(l.XK.GAME_SHOP, {
      guildId: e.params.guildId,
      pageIndex: e.params.pageIndex,
      skuId: e.params.skuId,
      slug: e.params.slug
    })
  };
  return (0, r.jsx)(s.A, {
    match: t,
    location: n,
    attemptDeepLink: a
  })
}
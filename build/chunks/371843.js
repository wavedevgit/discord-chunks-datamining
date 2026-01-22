/** Chunk was on 64228 **/
/** chunk id: 371843, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk913453 = require("./913453.js"),
  Chunk186272 = require("./186272.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  let {
    mutualGuilds: l
  } = (0, n.A)(e), t = null == l ? true : l.length;
  return [{
    section: r.RP.BOT_INFO,
    text: s.intl.string(s.t.jGoPJT)
  }, {
    section: r.RP.MUTUAL_GUILDS,
    text: (0, i.A)(t)
  }, {
    section: r.RP.BOT_DATA_ACCESS,
    text: s.intl.string(s.t.WstFb0)
  }]
}
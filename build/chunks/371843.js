/** Chunk was on 63974 **/
/** chunk id: 371843, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk913453 = require("./913453.js"),
  Chunk186272 = require("./186272.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    mutualGuilds: t
  } = (0, l.A)(e), n = null == t ? true : t.length;
  return [{
    section: r.RP.BOT_INFO,
    text: s.intl.string(s.t.jGoPJT)
  }, {
    section: r.RP.MUTUAL_GUILDS,
    text: (0, i.A)(n)
  }, {
    section: r.RP.BOT_DATA_ACCESS,
    text: s.intl.string(s.t.WstFb0)
  }]
}
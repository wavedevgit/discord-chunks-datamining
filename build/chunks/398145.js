/** Chunk was on 34712 **/
/** chunk id: 398145, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk806729 = require("./806729.js"),
  Chunk146078 = require("./146078.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    mutualGuilds: n
  } = (0, o.Z)(e), t = null == n ? true : n.length;
  return [{
    section: r.oh.BOT_INFO,
    text: i.intl.string(i.t.jGoPJS)
  }, {
    section: r.oh.MUTUAL_GUILDS,
    text: (0, l.Z)(t)
  }, {
    section: r.oh.BOT_DATA_ACCESS,
    text: i.intl.string(i.t.WstFb2)
  }]
}
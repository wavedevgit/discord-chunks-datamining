/** Chunk was on 31553 **/
/** chunk id: 398145, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk806729 = require("./806729.js"),
  Chunk146078 = require("./146078.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    mutualGuilds: n
  } = (0, l.Z)(e), t = null == n ? true : n.length;
  return [{
    section: r.oh.BOT_INFO,
    text: o.intl.string(o.t.jGoPJS)
  }, {
    section: r.oh.MUTUAL_GUILDS,
    text: (0, i.Z)(t)
  }, {
    section: r.oh.BOT_DATA_ACCESS,
    text: o.intl.string(o.t.WstFb2)
  }]
}
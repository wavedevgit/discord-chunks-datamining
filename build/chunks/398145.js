/** Chunk was on 93979 **/
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
    section: o.oh.BOT_INFO,
    text: r.intl.string(r.t.jGoPJT)
  }, {
    section: o.oh.MUTUAL_GUILDS,
    text: (0, i.Z)(t)
  }, {
    section: o.oh.BOT_DATA_ACCESS,
    text: r.intl.string(r.t.WstFb0)
  }]
}
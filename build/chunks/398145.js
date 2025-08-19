/** Chunk was on 99799 **/
/** chunk id: 398145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk806729 = require("./806729.js"),
  Chunk146078 = require("./146078.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let {
    mutualGuilds: t
  } = (0, r.Z)(e), n = null == t ? true : t.length;
  return [{
    section: i.oh.BOT_INFO,
    text: l.intl.string(l.t.jGoPJS)
  }, {
    section: i.oh.MUTUAL_GUILDS,
    text: (0, o.Z)(n)
  }, {
    section: i.oh.BOT_DATA_ACCESS,
    text: l.intl.string(l.t.WstFb2)
  }]
}
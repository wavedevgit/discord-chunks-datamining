/** Chunk was on 84809 **/
/** chunk id: 312625, original params: e,l,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => o
}), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk492462 = require("./492462.js"),
  Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk956793 = require("./956793.js"),
  Chunk976860 = require("./976860.js"),
  Chunk734057 = require("./734057.js"),
  Chunk650048 = require("./650048.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js");
Chunk311907.Ay.initialize();
let o = e => {
  var l;
  let {
    location: n
  } = e;
  return (0, t.jsx)(i.rd, {
    to: null != (l = function e(l) {
      let n = !(arguments.length > 1) || true === arguments[1] || arguments[1],
        t = s.A.getChannel(l);
      if (null != t) {
        h.Ay.focus();
        let e = t.guild_id,
          l = t.id;
        return t.type === p.rbe.GUILD_VOICE && (null != t.getGuildId() && r.default.selectVoiceChannel(t.id), l = e), null != l && null != e ? p.BVt.CHANNEL(e, l) : null
      }
      if (n) {
        let n = () => {
          s.A.removeChangeListener(n);
          let t = e(l, false);
          null != t && (0, d.pX)(t)
        };
        s.A.addChangeListener(n)
      }
      return null
    }((0, u.parse)(n.search).channelId)) ? l : c.A.fallbackRoute
  })
}
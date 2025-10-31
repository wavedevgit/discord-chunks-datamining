/** Chunk was on 97337 **/
/** chunk id: 484097, original params: e,l,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => p
}), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk593473 = require("./593473.js"),
  Chunk843611 = require("./843611.js"),
  Chunk442837 = require("./442837.js"),
  Chunk287734 = require("./287734.js"),
  Chunk703656 = require("./703656.js"),
  Chunk592125 = require("./592125.js"),
  Chunk896797 = require("./896797.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js");
Chunk442837.ZP.initialize();
let p = e => {
  var l;
  let {
    location: n
  } = e;
  return (0, t.jsx)(i.l_, {
    to: null != (l = function e(l) {
      let n = !(arguments.length > 1) || true === arguments[1] || arguments[1],
        t = c.Z.getChannel(l);
      if (null != t) {
        h.ZP.focus();
        let e = t.guild_id,
          l = t.id;
        return t.type === o.d4z.GUILD_VOICE && (null != t.getGuildId() && d.default.selectVoiceChannel(t.id), l = e), null != l && null != e ? o.Z5c.CHANNEL(e, l) : null
      }
      if (n) {
        let n = () => {
          c.Z.removeChangeListener(n);
          let t = e(l, false);
          null != t && (0, r.uL)(t)
        };
        c.Z.addChangeListener(n)
      }
      return null
    }((0, u.parse)(n.search).channelId)) ? l : s.Z.fallbackRoute
  })
}
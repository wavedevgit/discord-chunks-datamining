/** Chunk was on 30202 **/
/** chunk id: 694569, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk630388 = require("./630388.js"),
  Chunk88658 = require("./88658.js"),
  Chunk695346 = require("./695346.js"),
  Chunk546957 = require("./546957.jsx"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g() {
  let e = Chunk695346.xq.useSetting(),
    t = Chunk647438.useMemo(() => (0, Chunk88658.bL)(module), [module]);
  return (0, Chunk951288.jsxs)(Chunk546957.Z, {
    children: [(0, Chunk951288.jsx)(Chunk838436.U, {
      setting: Chunk726985.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, Chunk951288.jsx)(Chunk51331.Z, {
        title: Chunk388032.intl.string(Chunk388032.t["7x9dyM"]),
        value: exports.all,
        onChange: e => l.xq.updateSetting(e ? m.HGf : m.HGf & ~m.SOq.NO_RELATION)
      })
    }), (0, Chunk951288.jsx)(Chunk838436.U, {
      setting: Chunk726985.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, Chunk951288.jsx)(Chunk51331.Z, {
        title: Chunk388032.intl.string(Chunk388032.t.NfeuZ2),
        value: exports.all || exports.mutualFriends,
        onChange: t => l.xq.updateSetting(t ? s.pj(e, m.SOq.MUTUAL_FRIENDS) : s.M1(e, m.SOq.MUTUAL_FRIENDS, m.SOq.NO_RELATION))
      })
    }), (0, Chunk951288.jsx)(Chunk838436.U, {
      setting: Chunk726985.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, Chunk951288.jsx)(Chunk51331.Z, {
        title: Chunk388032.intl.string(Chunk388032.t.qsMfsL),
        value: exports.all || exports.mutualGuilds,
        onChange: t => l.xq.updateSetting(t ? s.pj(e, m.SOq.MUTUAL_GUILDS) : s.M1(e, m.SOq.MUTUAL_GUILDS, m.SOq.NO_RELATION))
      })
    })]
  })
}
/** Chunk was on web.js **/
/** chunk id: 694569, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
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

function p() {
  let e = Chunk695346.xq.useSetting(),
    t = Chunk647438.useMemo(() => (0, Chunk88658.bL)(module), [module]);
  return (0, Chunk951288.jsxs)(Chunk546957.Z, {
    children: [(0, Chunk951288.jsx)(Chunk838436.U, {
      setting: Chunk726985.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, Chunk951288.jsx)(Chunk51331.Z, {
        title: Chunk388032.intl.string(Chunk388032.t["7x9dyM"]),
        value: exports.all,
        onChange: e => s.xq.updateSetting(e ? f.HGf : f.HGf & ~f.SOq.NO_RELATION)
      })
    }), (0, Chunk951288.jsx)(Chunk838436.U, {
      setting: Chunk726985.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, Chunk951288.jsx)(Chunk51331.Z, {
        title: Chunk388032.intl.string(Chunk388032.t.NfeuZ2),
        value: exports.all || exports.mutualFriends,
        onChange: t => s.xq.updateSetting(t ? a.pj(e, f.SOq.MUTUAL_FRIENDS) : a.M1(e, f.SOq.MUTUAL_FRIENDS, f.SOq.NO_RELATION))
      })
    }), (0, Chunk951288.jsx)(Chunk838436.U, {
      setting: Chunk726985.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, Chunk951288.jsx)(Chunk51331.Z, {
        title: Chunk388032.intl.string(Chunk388032.t.qsMfsL),
        value: exports.all || exports.mutualGuilds,
        onChange: t => s.xq.updateSetting(t ? a.pj(e, f.SOq.MUTUAL_GUILDS) : a.M1(e, f.SOq.MUTUAL_GUILDS, f.SOq.NO_RELATION))
      })
    })]
  })
}
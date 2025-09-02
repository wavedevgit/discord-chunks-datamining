/** Chunk was on web.js **/
/** chunk id: 34046, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk722687 = require("./722687.js"),
  Chunk738486 = require("./738486.jsx"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk630388 = require("./630388.js"),
  Chunk88658 = require("./88658.js"),
  Chunk652262 = require("./652262.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p() {
  let e = (0, Chunk652262.F)(),
    t = Chunk722687.vB.useControlledSetting(null == module ? true : module.id),
    n = Chunk647438.useMemo(() => (0, Chunk88658.bL)(exports), [exports]);
  return (0, Chunk951288.jsxs)(Chunk738486.Z, {
    children: [(0, Chunk951288.jsx)(Chunk838436.U, {
      children: (0, Chunk951288.jsx)(Chunk51331.Z, {
        title: Chunk388032.intl.string(Chunk388032.t["7x9dyM"]),
        value: require.all,
        onChange: t => a.vB.updateControlledSetting(null == e ? true : e.id, t ? f.HGf : f.HGf & ~f.SOq.NO_RELATION)
      })
    }), (0, Chunk951288.jsx)(Chunk838436.U, {
      children: (0, Chunk951288.jsx)(Chunk51331.Z, {
        title: Chunk388032.intl.string(Chunk388032.t.NfeuZ2),
        value: require.all || require.mutualFriends,
        onChange: n => a.vB.updateControlledSetting(null == e ? true : e.id, n ? c.pj(t, f.SOq.MUTUAL_FRIENDS) : c.M1(t, f.SOq.MUTUAL_FRIENDS, f.SOq.NO_RELATION))
      })
    }), (0, Chunk951288.jsx)(Chunk838436.U, {
      children: (0, Chunk951288.jsx)(Chunk51331.Z, {
        title: Chunk388032.intl.string(Chunk388032.t.qsMfsL),
        value: require.all || require.mutualGuilds,
        onChange: n => a.vB.updateControlledSetting(null == e ? true : e.id, n ? c.pj(t, f.SOq.MUTUAL_GUILDS) : c.M1(t, f.SOq.MUTUAL_GUILDS, f.SOq.NO_RELATION))
      })
    })]
  })
}
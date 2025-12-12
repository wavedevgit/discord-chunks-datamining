/** Chunk was on web.js **/
/** chunk id: 34046, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk722687 = require("./722687.js"),
  Chunk738486 = require("./738486.jsx"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk88658 = require("./88658.js"),
  Chunk652262 = require("./652262.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function _() {
  var e;
  let t = null != (e = (0, Chunk652262.M)()) ? module : true,
    n = Chunk722687.vB.useControlledSetting(exports),
    _ = Chunk473749.useMemo(() => (0, Chunk88658.bL)(require), [require]);
  return null == exports ? null : (0, Chunk54381.jsxs)(Chunk738486.Z, {
    children: [(0, Chunk54381.jsx)(Chunk838436.U, {
      children: (0, Chunk54381.jsx)(Chunk51331.ZP, {
        title: Chunk388032.intl.string(Chunk388032.t["7x9dyE"]),
        value: _.all,
        onChange: e => o.vB.updateControlledSetting(t, e ? f.HGf : f.HGf & ~f.SOq.NO_RELATION)
      })
    }), (0, Chunk54381.jsx)(Chunk838436.U, {
      children: (0, Chunk54381.jsx)(Chunk51331.ZP, {
        title: Chunk388032.intl.string(Chunk388032.t.NfeuZ3),
        value: _.all || _.mutualFriends,
        onChange: e => o.vB.updateControlledSetting(t, e ? a.pj(n, f.SOq.MUTUAL_FRIENDS) : a.M1(n, f.SOq.MUTUAL_FRIENDS, f.SOq.NO_RELATION))
      })
    }), (0, Chunk54381.jsx)(Chunk838436.U, {
      children: (0, Chunk54381.jsx)(Chunk51331.ZP, {
        title: Chunk388032.intl.string(Chunk388032.t.qsMfsH),
        value: _.all || _.mutualGuilds,
        onChange: e => o.vB.updateControlledSetting(t, e ? a.pj(n, f.SOq.MUTUAL_GUILDS) : a.M1(n, f.SOq.MUTUAL_GUILDS, f.SOq.NO_RELATION))
      })
    })]
  })
}
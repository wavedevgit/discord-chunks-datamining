/** Chunk was on web.js **/
/** chunk id: 694569, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk915009 = require("./915009.js"),
  Chunk88658 = require("./88658.js"),
  Chunk695346 = require("./695346.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk148806 = require("./148806.js");

function m() {
  let e = Chunk695346.xq.useSetting(),
    t = Chunk473749.useMemo(() => (0, Chunk88658.bL)(module), [module]),
    n = (0, Chunk915009.LN)();
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk838436.U, {
      setting: Chunk726985.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, Chunk54381.jsx)(Chunk51331.ZP, {
        title: Chunk388032.intl.string(Chunk388032.t["7x9dyE"]),
        value: exports.all,
        onChange: e => l.xq.updateSetting(e ? f.HGf : f.HGf & ~f.SOq.NO_RELATION),
        disabled: require,
        tooltipText: require ? Chunk388032.intl.string(Chunk148806.default["6Af/cw"]) : true
      })
    }), (0, Chunk54381.jsx)(Chunk838436.U, {
      setting: Chunk726985.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, Chunk54381.jsx)(Chunk51331.ZP, {
        title: Chunk388032.intl.string(Chunk388032.t.NfeuZ3),
        value: exports.all || exports.mutualFriends,
        onChange: t => l.xq.updateSetting(t ? o.pj(e, f.SOq.MUTUAL_FRIENDS) : o.M1(e, f.SOq.MUTUAL_FRIENDS, f.SOq.NO_RELATION)),
        disabled: require,
        tooltipText: require ? Chunk388032.intl.string(Chunk148806.default["6Af/cw"]) : true
      })
    }), (0, Chunk54381.jsx)(Chunk838436.U, {
      setting: Chunk726985.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, Chunk54381.jsx)(Chunk51331.ZP, {
        title: Chunk388032.intl.string(Chunk388032.t.qsMfsH),
        value: exports.all || exports.mutualGuilds,
        onChange: t => l.xq.updateSetting(t ? o.pj(e, f.SOq.MUTUAL_GUILDS) : o.M1(e, f.SOq.MUTUAL_GUILDS, f.SOq.NO_RELATION)),
        disabled: require,
        tooltipText: require ? Chunk388032.intl.string(Chunk148806.default["6Af/cw"]) : true
      })
    })]
  })
}
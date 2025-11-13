/** Chunk was on web.js **/
/** chunk id: 694569, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk915009 = require("./915009.js"),
  Chunk630388 = require("./630388.js"),
  Chunk88658 = require("./88658.js"),
  Chunk695346 = require("./695346.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk597754 = require("./597754.js");

function h() {
  let e = Chunk695346.xq.useSetting(),
    t = Chunk647438.useMemo(() => (0, Chunk88658.bL)(module), [module]),
    n = (0, Chunk915009.LN)();
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk838436.U, {
      setting: Chunk726985.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, Chunk951288.jsx)(Chunk51331.ZP, {
        title: Chunk388032.intl.string(Chunk388032.t["7x9dyE"]),
        value: exports.all,
        onChange: e => l.xq.updateSetting(e ? f.HGf : f.HGf & ~f.SOq.NO_RELATION),
        disabled: require,
        tooltipText: require ? Chunk388032.intl.string(Chunk597754.default["6Af/cw"]) : true
      })
    }), (0, Chunk951288.jsx)(Chunk838436.U, {
      setting: Chunk726985.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, Chunk951288.jsx)(Chunk51331.ZP, {
        title: Chunk388032.intl.string(Chunk388032.t.NfeuZ3),
        value: exports.all || exports.mutualFriends,
        onChange: t => l.xq.updateSetting(t ? o.pj(e, f.SOq.MUTUAL_FRIENDS) : o.M1(e, f.SOq.MUTUAL_FRIENDS, f.SOq.NO_RELATION)),
        disabled: require,
        tooltipText: require ? Chunk388032.intl.string(Chunk597754.default["6Af/cw"]) : true
      })
    }), (0, Chunk951288.jsx)(Chunk838436.U, {
      setting: Chunk726985.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, Chunk951288.jsx)(Chunk51331.ZP, {
        title: Chunk388032.intl.string(Chunk388032.t.qsMfsH),
        value: exports.all || exports.mutualGuilds,
        onChange: t => l.xq.updateSetting(t ? o.pj(e, f.SOq.MUTUAL_GUILDS) : o.M1(e, f.SOq.MUTUAL_GUILDS, f.SOq.NO_RELATION)),
        disabled: require,
        tooltipText: require ? Chunk388032.intl.string(Chunk597754.default["6Af/cw"]) : true
      })
    })]
  })
}
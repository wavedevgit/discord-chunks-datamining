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
  Chunk517319 = require("./517319.js");

function m() {
  let e = l.xq.useSetting(),
    t = i.useMemo(() => (0, s.bL)(e), [e]),
    n = (0, o.LN)();
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.U, {
      setting: d.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, r.jsx)(u.ZP, {
        title: p.intl.string(p.t["7x9dyE"]),
        value: t.all,
        onChange: e => l.xq.updateSetting(e ? f.HGf : f.HGf & ~f.SOq.NO_RELATION),
        disabled: n,
        tooltipText: n ? p.intl.string(_.default["6Af/cw"]) : true
      })
    }), (0, r.jsx)(c.U, {
      setting: d.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, r.jsx)(u.ZP, {
        title: p.intl.string(p.t.NfeuZ3),
        value: t.all || t.mutualFriends,
        onChange: t => l.xq.updateSetting(t ? a.pj(e, f.SOq.MUTUAL_FRIENDS) : a.M1(e, f.SOq.MUTUAL_FRIENDS, f.SOq.NO_RELATION)),
        disabled: n,
        tooltipText: n ? p.intl.string(_.default["6Af/cw"]) : true
      })
    }), (0, r.jsx)(c.U, {
      setting: d.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, r.jsx)(u.ZP, {
        title: p.intl.string(p.t.qsMfsH),
        value: t.all || t.mutualGuilds,
        onChange: t => l.xq.updateSetting(t ? a.pj(e, f.SOq.MUTUAL_GUILDS) : a.M1(e, f.SOq.MUTUAL_GUILDS, f.SOq.NO_RELATION)),
        disabled: n,
        tooltipText: n ? p.intl.string(_.default["6Af/cw"]) : true
      })
    })]
  })
}
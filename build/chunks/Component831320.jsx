/** Chunk was on web.js **/
/** chunk id: 831320, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk171316 = require("./171316.js"),
  Chunk115063 = require("./115063.js"),
  Chunk253932 = require("./253932.js"),
  Chunk871930 = require("./871930.jsx"),
  Chunk578746 = require("./578746.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk842130 = require("./842130.js");

function h() {
  let e = l.FA.useSetting(),
    t = i.useMemo(() => (0, o.Lx)(e), [e]),
    n = (0, s.uM)();
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.h, {
      setting: d.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, r.jsx)(u.Ay, {
        title: p.intl.string(p.t["7x9dyE"]),
        value: t.all,
        onChange: e => l.FA.updateSetting(e ? f.yKI : f.yKI & ~f.dzt.NO_RELATION),
        disabled: n,
        tooltipText: n ? p.intl.string(_.default["6Af/cw"]) : true
      })
    }), (0, r.jsx)(c.h, {
      setting: d.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, r.jsx)(u.Ay, {
        title: p.intl.string(p.t.NfeuZ3),
        value: t.all || t.mutualFriends,
        onChange: t => l.FA.updateSetting(t ? a.UI(e, f.dzt.MUTUAL_FRIENDS) : a.iE(e, f.dzt.MUTUAL_FRIENDS, f.dzt.NO_RELATION)),
        disabled: n,
        tooltipText: n ? p.intl.string(_.default["6Af/cw"]) : true
      })
    }), (0, r.jsx)(c.h, {
      setting: d.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, r.jsx)(u.Ay, {
        title: p.intl.string(p.t.qsMfsH),
        value: t.all || t.mutualGuilds,
        onChange: t => l.FA.updateSetting(t ? a.UI(e, f.dzt.MUTUAL_GUILDS) : a.iE(e, f.dzt.MUTUAL_GUILDS, f.dzt.NO_RELATION)),
        disabled: n,
        tooltipText: n ? p.intl.string(_.default["6Af/cw"]) : true
      })
    })]
  })
}
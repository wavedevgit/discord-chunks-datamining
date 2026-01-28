/** Chunk was on 5606 **/
/** chunk id: 831320, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g() {
  let e = o.FA.useSetting(),
    t = i.useMemo(() => (0, a.Lx)(e), [e]),
    n = (0, s.uM)();
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.h, {
      setting: u.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, r.jsx)(d.Ay, {
        title: _.intl.string(_.t["7x9dyE"]),
        value: t.all,
        onChange: e => o.FA.updateSetting(e ? p.yKI : p.yKI & ~p.dzt.NO_RELATION),
        disabled: n,
        tooltipText: n ? _.intl.string(m.default["6Af/cw"]) : true
      })
    }), (0, r.jsx)(c.h, {
      setting: u.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, r.jsx)(d.Ay, {
        title: _.intl.string(_.t.NfeuZ3),
        value: t.all || t.mutualFriends,
        onChange: t => o.FA.updateSetting(t ? l.UI(e, p.dzt.MUTUAL_FRIENDS) : l.iE(e, p.dzt.MUTUAL_FRIENDS, p.dzt.NO_RELATION)),
        disabled: n,
        tooltipText: n ? _.intl.string(m.default["6Af/cw"]) : true
      })
    }), (0, r.jsx)(c.h, {
      setting: u.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
      children: (0, r.jsx)(d.Ay, {
        title: _.intl.string(_.t.qsMfsH),
        value: t.all || t.mutualGuilds,
        onChange: t => o.FA.updateSetting(t ? l.UI(e, p.dzt.MUTUAL_GUILDS) : l.iE(e, p.dzt.MUTUAL_GUILDS, p.dzt.NO_RELATION)),
        disabled: n,
        tooltipText: n ? _.intl.string(m.default["6Af/cw"]) : true
      })
    })]
  })
}
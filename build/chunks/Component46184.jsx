/** Chunk was on 2827 **/
/** chunk id: 46184, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk93857 = require("./93857.js"),
  Chunk772927 = require("./772927.jsx"),
  Chunk871930 = require("./871930.jsx"),
  Chunk578746 = require("./578746.jsx"),
  Chunk115063 = require("./115063.js"),
  Chunk500470 = require("./500470.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function m() {
  var e;
  let t = null != (e = (0, u.k)()) ? e : true,
    n = s.up.useControlledSetting(t),
    m = i.useMemo(() => (0, d.Lx)(n), [n]);
  return null == t ? null : (0, r.jsxs)(a.A, {
    children: [(0, r.jsx)(o.h, {
      children: (0, r.jsx)(c.Ay, {
        title: p.intl.string(p.t["7x9dyE"]),
        value: m.all,
        onChange: e => s.up.updateControlledSetting(t, e ? _.yKI : _.yKI & ~_.dzt.NO_RELATION)
      })
    }), (0, r.jsx)(o.h, {
      children: (0, r.jsx)(c.Ay, {
        title: p.intl.string(p.t.NfeuZ3),
        value: m.all || m.mutualFriends,
        onChange: e => s.up.updateControlledSetting(t, e ? l.UI(n, _.dzt.MUTUAL_FRIENDS) : l.iE(n, _.dzt.MUTUAL_FRIENDS, _.dzt.NO_RELATION))
      })
    }), (0, r.jsx)(o.h, {
      children: (0, r.jsx)(c.Ay, {
        title: p.intl.string(p.t.qsMfsH),
        value: m.all || m.mutualGuilds,
        onChange: e => s.up.updateControlledSetting(t, e ? l.UI(n, _.dzt.MUTUAL_GUILDS) : l.iE(n, _.dzt.MUTUAL_GUILDS, _.dzt.NO_RELATION))
      })
    })]
  })
}
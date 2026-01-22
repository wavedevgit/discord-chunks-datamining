/** Chunk was on web.js **/
/** chunk id: 46184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
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

function _() {
  var e;
  let t = null != (e = (0, d.k)()) ? e : true,
    n = s.up.useControlledSetting(t),
    _ = i.useMemo(() => (0, u.Lx)(n), [n]);
  return null == t ? null : (0, r.jsxs)(o.A, {
    children: [(0, r.jsx)(l.h, {
      children: (0, r.jsx)(c.Ay, {
        title: p.intl.string(p.t["7x9dyE"]),
        value: _.all,
        onChange: e => s.up.updateControlledSetting(t, e ? f.yKI : f.yKI & ~f.dzt.NO_RELATION)
      })
    }), (0, r.jsx)(l.h, {
      children: (0, r.jsx)(c.Ay, {
        title: p.intl.string(p.t.NfeuZ3),
        value: _.all || _.mutualFriends,
        onChange: e => s.up.updateControlledSetting(t, e ? a.UI(n, f.dzt.MUTUAL_FRIENDS) : a.iE(n, f.dzt.MUTUAL_FRIENDS, f.dzt.NO_RELATION))
      })
    }), (0, r.jsx)(l.h, {
      children: (0, r.jsx)(c.Ay, {
        title: p.intl.string(p.t.qsMfsH),
        value: _.all || _.mutualGuilds,
        onChange: e => s.up.updateControlledSetting(t, e ? a.UI(n, f.dzt.MUTUAL_GUILDS) : a.iE(n, f.dzt.MUTUAL_GUILDS, f.dzt.NO_RELATION))
      })
    })]
  })
}
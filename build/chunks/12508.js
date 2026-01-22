/** Chunk was on 28979 **/
/** chunk id: 12508, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  n: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk171316 = require("./171316.js"),
  Chunk419954 = require("./419954.js"),
  Chunk115063 = require("./115063.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let d = (0, Chunk419954.zD)(Chunk780964.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
  useTitle: () => A.intl.string(A.t.qsMfsH),
  useValue: () => {
    let t = a.FA.useSetting(),
      e = n.useMemo(() => (0, u.Lx)(t), [t]);
    return e.all || e.mutualGuilds
  },
  setValue: t => {
    let e = a.FA.getSetting();
    a.FA.updateSetting(t ? l.UI(e, T.dzt.MUTUAL_GUILDS) : l.iE(e, T.dzt.MUTUAL_GUILDS, T.dzt.NO_RELATION))
  },
  useDisabled: () => (0, s.uM)()
})
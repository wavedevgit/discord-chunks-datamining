/** Chunk was on 4670 **/
/** chunk id: 556907, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  a: () => c
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
let c = (0, Chunk419954.zD)(Chunk780964.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
  useTitle: () => T.intl.string(T.t.NfeuZ3),
  useValue: () => {
    let e = u.FA.useSetting(),
      t = n.useMemo(() => (0, a.Lx)(e), [e]);
    return t.all || t.mutualFriends
  },
  setValue: e => {
    let t = u.FA.getSetting();
    u.FA.updateSetting(e ? l.UI(t, d.dzt.MUTUAL_FRIENDS) : l.iE(t, d.dzt.MUTUAL_FRIENDS, d.dzt.NO_RELATION))
  },
  useDisabled: () => (0, s.uM)()
})
/** Chunk was on 30485 **/
/** chunk id: 949669, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  o: () => T
});
var Chunk64700 = require("./64700.js"),
  Chunk171316 = require("./171316.js"),
  Chunk419954 = require("./419954.js"),
  Chunk115063 = require("./115063.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.zD)(Chunk780964.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
  useTitle: () => d.intl.string(d.t["7x9dyE"]),
  useValue: () => {
    let t = u.FA.useSetting();
    return n.useMemo(() => (0, r.Lx)(t), [t]).all
  },
  setValue: t => {
    u.FA.updateSetting(t ? o.yKI : o.yKI & ~o.dzt.NO_RELATION)
  },
  useDisabled: () => (0, l.uM)()
})
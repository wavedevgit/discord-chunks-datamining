/** Chunk was on 30485 **/
/** chunk id: 266057, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  S: () => o
});
var Chunk652961 = require("./652961.js"),
  Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk823894 = require("./823894.js"),
  Chunk985018 = require("./985018.jsx");
let o = (0, Chunk419954.Qx)(Chunk780964.X.ANIMATE_STICKERS, {
  useTitle: () => a.intl.string(a.t["6NtAuJ"]),
  useSubtitle: () => {
    var t;
    return null != (t = (0, n.F)("animateStickers")) ? t : a.intl.string(a.t.GRa6U7)
  },
  useOptions: () => [{
    name: a.intl.string(a.t["Xp+X2U"]),
    value: u.BJ.ALWAYS_ANIMATE
  }, {
    name: a.intl.string(a.t.IlLT7e),
    desc: a.intl.string(a.t.bIW9Tl),
    value: u.BJ.ANIMATE_ON_INTERACTION
  }, {
    name: a.intl.string(a.t.IGu8x3),
    value: u.BJ.NEVER_ANIMATE
  }],
  useValue: () => s.S0.useSetting(),
  setValue: t => s.S0.updateSetting(t)
})
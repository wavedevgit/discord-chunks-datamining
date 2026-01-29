/** Chunk was on 4670 **/
/** chunk id: 266057, original params: e,t,i (module,exports,require) **/
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
  useTitle: () => u.intl.string(u.t["6NtAuJ"]),
  useSubtitle: () => {
    var e;
    return null != (e = (0, n.F)("animateStickers")) ? e : u.intl.string(u.t.GRa6U7)
  },
  useOptions: () => [{
    name: u.intl.string(u.t["Xp+X2U"]),
    value: a.BJ.ALWAYS_ANIMATE
  }, {
    name: u.intl.string(u.t.IlLT7e),
    desc: u.intl.string(u.t.bIW9Tl),
    value: a.BJ.ANIMATE_ON_INTERACTION
  }, {
    name: u.intl.string(u.t.IGu8x3),
    value: a.BJ.NEVER_ANIMATE
  }],
  useValue: () => s.S0.useSetting(),
  setValue: e => s.S0.updateSetting(e)
})
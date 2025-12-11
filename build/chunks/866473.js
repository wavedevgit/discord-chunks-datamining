/** Chunk was on 77069 **/
/** chunk id: 866473, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  W: () => o
});
var Chunk440849 = require("./440849.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk611480 = require("./611480.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.J9)(Chunk313789.n.ANIMATE_STICKERS, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["6NtAuJ"]),
  useSubtitle: () => {
    var t;
    return null != (t = (0, Chunk440849.J)("animateStickers")) ? module : Chunk388032.intl.string(Chunk388032.t.GRa6U7)
  },
  useOptions: () => [{
    name: Chunk388032.intl.string(Chunk388032.t["Xp+X2U"]),
    value: Chunk611480.yr.ALWAYS_ANIMATE
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.IlLT7e),
    desc: Chunk388032.intl.string(Chunk388032.t.bIW9Tl),
    value: Chunk611480.yr.ANIMATE_ON_INTERACTION
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.IGu8x3),
    value: Chunk611480.yr.NEVER_ANIMATE
  }],
  useValue: () => Chunk695346.Wp.useSetting(),
  setValue: t => s.Wp.updateSetting(t)
})
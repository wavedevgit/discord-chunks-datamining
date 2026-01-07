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
  useTitle: () => a.intl.string(a.t["6NtAuJ"]),
  useSubtitle: () => {
    var t;
    return null != (t = (0, i.J)("animateStickers")) ? t : a.intl.string(a.t.GRa6U7)
  },
  useOptions: () => [{
    name: a.intl.string(a.t["Xp+X2U"]),
    value: r.yr.ALWAYS_ANIMATE
  }, {
    name: a.intl.string(a.t.IlLT7e),
    desc: a.intl.string(a.t.bIW9Tl),
    value: r.yr.ANIMATE_ON_INTERACTION
  }, {
    name: a.intl.string(a.t.IGu8x3),
    value: r.yr.NEVER_ANIMATE
  }],
  useValue: () => s.Wp.useSetting(),
  setValue: t => s.Wp.updateSetting(t)
})
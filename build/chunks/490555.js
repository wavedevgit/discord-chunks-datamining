/** Chunk was on 77069 **/
/** chunk id: 490555, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  G: () => o
});
var Chunk524437 = require("./524437.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let a = (0, Chunk509613.J9)(Chunk313789.n.APPEARANCE_UI_DENSITY, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["C/5V0A"]),
    useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.QLZhYk),
    useOptions: () => [{
      name: Chunk388032.intl.string(Chunk388032.t["7iegX4"]),
      value: Chunk524437.Pi.COMPACT
    }, {
      name: Chunk388032.intl.string(Chunk388032.t.bBvAEH),
      value: Chunk524437.Pi.DEFAULT
    }, {
      name: Chunk388032.intl.string(Chunk388032.t["4cuYHx"]),
      value: Chunk524437.Pi.COZY
    }],
    useValue: () => Chunk695346.YC.useSetting(),
    setValue: t => {
      t !== i.Pi.UNSET_UI_DENSITY && s.YC.updateSetting(t)
    }
  }),
  o = (0, Chunk509613.k4)(Chunk313789.n.APPEARANCE_UI_DENSITY_CATEGORY, {
    useSubnavLabel: () => Chunk388032.intl.string(Chunk388032.t["C/5V0A"]),
    buildLayout: () => [a]
  })
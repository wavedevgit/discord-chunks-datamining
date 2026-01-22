/** Chunk was on 28979 **/
/** chunk id: 136451, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  b: () => o
});
var Chunk873298 = require("./873298.js"),
  Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let a = (0, Chunk419954.Qx)(Chunk780964.X.APPEARANCE_UI_DENSITY, {
    useTitle: () => u.intl.string(u.t["C/5V0A"]),
    useSubtitle: () => u.intl.string(u.t.QLZhYk),
    useOptions: () => [{
      name: u.intl.string(u.t["7iegX4"]),
      value: n.NS.COMPACT
    }, {
      name: u.intl.string(u.t.bBvAEH),
      value: n.NS.DEFAULT
    }, {
      name: u.intl.string(u.t["4cuYHx"]),
      value: n.NS.COZY
    }],
    useValue: () => s.Xi.useSetting(),
    setValue: t => {
      t !== n.NS.UNSET_UI_DENSITY && s.Xi.updateSetting(t)
    }
  }),
  o = (0, Chunk419954.zZ)(Chunk780964.X.APPEARANCE_UI_DENSITY_CATEGORY, {
    useSubnavLabel: () => u.intl.string(u.t["C/5V0A"]),
    buildLayout: () => [a]
  })
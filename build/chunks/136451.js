/** Chunk was on 4670 **/
/** chunk id: 136451, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  b: () => o
});
var Chunk873298 = require("./873298.js"),
  Chunk419954 = require("./419954.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let u = (0, Chunk419954.Qx)(Chunk780964.X.APPEARANCE_UI_DENSITY, {
    useTitle: () => a.intl.string(a.t["C/5V0A"]),
    useSubtitle: () => a.intl.string(a.t.QLZhYk),
    useOptions: () => [{
      name: a.intl.string(a.t["7iegX4"]),
      value: n.NS.COMPACT
    }, {
      name: a.intl.string(a.t.bBvAEH),
      value: n.NS.DEFAULT
    }, {
      name: a.intl.string(a.t["4cuYHx"]),
      value: n.NS.COZY
    }],
    useValue: () => s.Xi.useSetting(),
    setValue: e => {
      e !== n.NS.UNSET_UI_DENSITY && s.Xi.updateSetting(e)
    }
  }),
  o = (0, Chunk419954.zZ)(Chunk780964.X.APPEARANCE_UI_DENSITY_CATEGORY, {
    useSubnavLabel: () => a.intl.string(a.t["C/5V0A"]),
    buildLayout: () => [u]
  })
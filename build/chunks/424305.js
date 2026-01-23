/** Chunk was on 28979 **/
/** chunk id: 424305, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  R: () => T
});
var Chunk311907 = require("./311907.js"),
  Chunk274372 = require("./274372.js"),
  Chunk399925 = require("./399925.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk696016 = require("./696016.js"),
  Chunk985018 = require("./985018.jsx");
let T = (0, Chunk419954.Hn)(Chunk780964.X.CLIPS_LENGTH, {
  useTitle: () => o.intl.string(o.t.OgfUio),
  useSubtitle: () => o.intl.string(o.t.H7j4tY),
  useValue: () => (0, n.bG)([l.A], () => l.A.getSettings().clipsLength),
  setValue: t => s.h$(t),
  useOptions: () => [{
    id: "30s",
    value: a.LX.SECONDS_30,
    label: o.intl.formatToPlainString(o.t["bTFv/3"], {
      count: 30
    })
  }, {
    id: "1m",
    value: a.LX.MINUTES_1,
    label: o.intl.formatToPlainString(o.t.ICo9Nk, {
      count: 1
    })
  }, {
    id: "2m",
    value: a.LX.MINUTES_2,
    label: o.intl.formatToPlainString(o.t.ICo9Nk, {
      count: 2
    })
  }],
  fieldLayout: "horizontal-responsive"
})
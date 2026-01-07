/** Chunk was on 77069 **/
/** chunk id: 291011, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  i: () => a
});
var Chunk392711 = require("./392711.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let a = (0, Chunk509613.Em)(Chunk313789.n.MOBILE_NOTIFICATION_DELAY, {
  useTitle: () => r.intl.string(r.t["8rHeOr"]),
  useSubtitle: () => r.intl.string(r.t["eJE6+J"]),
  fieldLayout: "horizontal-responsive",
  useValue: Chunk695346.CM.useSetting,
  setValue: Chunk695346.CM.updateSetting,
  useOptions: () => i.range(1, 11).map(t => ({
    id: "".concat(t),
    value: 60 * t,
    label: r.intl.formatToPlainString(r.t.iXLF9W, {
      minutes: t
    })
  }))
})
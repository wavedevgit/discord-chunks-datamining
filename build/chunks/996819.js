/** Chunk was on 76210 **/
/** chunk id: 996819, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk392711 = require("./392711.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk869235 = require("./869235.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.Em)(Chunk869235.t.MOBILE_NOTIFICATION_DELAY, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["8rHeOj"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["eJE6+P"]),
  useOptions: () => Chunk392711.range(1, 11).map(e => ({
    value: 60 * e,
    label: a.intl.formatToPlainString(a.t.iXLF9f, {
      minutes: e
    })
  })),
  useValue: Chunk695346.CM.useSetting,
  setValue: Chunk695346.CM.updateSetting
})
/** Chunk was on 9452 **/
/** chunk id: 291011, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk392711 = require("./392711.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.Em)(Chunk313789.n.MOBILE_NOTIFICATION_DELAY, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["8rHeOr"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["eJE6+J"]),
  useOptions: () => Chunk392711.range(1, 11).map(t => ({
    value: 60 * t,
    label: s.intl.formatToPlainString(s.t.iXLF9W, {
      minutes: t
    })
  })),
  useValue: Chunk695346.CM.useSetting,
  setValue: Chunk695346.CM.updateSetting
})
/** Chunk was on 36878 **/
/** chunk id: 381426, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk392711 = require("./392711.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk388032 = require("./388032.jsx");
let r = (0, Chunk509613.Em)("MobileNotificationDelay", {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["8rHeOj"]),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["eJE6+P"]),
  useOptions: () => Chunk392711.range(1, 11).map(e => ({
    value: 60 * e,
    label: o.intl.formatToPlainString(o.t.iXLF9f, {
      minutes: e
    })
  })),
  useValue: Chunk695346.CM.useSetting,
  setValue: Chunk695346.CM.updateSetting
})
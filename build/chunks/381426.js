/** Chunk was on 36878 **/
/** chunk id: 381426, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk392711 = require("./392711.js"),
  Chunk509613 = require("./509613.js"),
  Chunk695346 = require("./695346.js"),
  Chunk388032 = require("./388032.jsx");
let a = Chunk392711.range(1, 11).map(e => ({
    value: 60 * e,
    label: () => r.intl.formatToPlainString(r.t.iXLF9f, {
      minutes: e
    })
  })),
  s = (0, Chunk509613.Em)("MobileNotificationDelay", {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["8rHeOj"]),
    useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["eJE6+P"]),
    options: a,
    useValue: Chunk695346.CM.useSetting,
    setValue: Chunk695346.CM.updateSetting
  })
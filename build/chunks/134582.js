/** Chunk was on 36878 **/
/** chunk id: 134582, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk509613 = require("./509613.js"),
  Chunk462354 = require("./462354.js"),
  Chunk210176 = require("./210176.js"),
  Chunk695346 = require("./695346.js"),
  Chunk388032 = require("./388032.jsx");
let a = (0, Chunk509613.qs)("VoiceActivityNotifications", {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.wtk08f),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.rngMNz),
  useValue: Chunk695346.d8.useSetting,
  setValue: Chunk210176.I,
  usePredicate: () => (0, Chunk462354.Az)("VoiceActivityNotifications").enabled
})
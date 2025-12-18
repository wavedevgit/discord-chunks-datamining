/** Chunk was on 77069 **/
/** chunk id: 943058, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  K: () => T
});
var Chunk442837 = require("./442837.js"),
  Chunk153867 = require("./153867.js"),
  Chunk509613 = require("./509613.js"),
  Chunk740492 = require("./740492.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.qs)(Chunk313789.n.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["//vhWi"]),
  usePredicate: () => Chunk695346.jU.useSetting(),
  useValue: () => !(0, Chunk442837.e7)([Chunk740492.ZP], () => Chunk740492.ZP.displayCompactAvatars),
  setValue: t => {
    l.ZP.updatedUnsyncedSettings({
      displayCompactAvatars: !t
    })
  }
})
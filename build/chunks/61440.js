/** Chunk was on 77069 **/
/** chunk id: 61440, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  F: () => T
});
var Chunk442837 = require("./442837.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk272157 = require("./272157.js"),
  Chunk829716 = require("./829716.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk486730 = require("./486730.js");
let T = (0, Chunk509613.qs)(Chunk313789.n.DISPLAY_NAME_STYLES, {
  useTitle: () => Chunk388032.intl.string(Chunk486730.default["2gFUEw"]),
  useSubtitle: () => {
    let {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)();
    return Chunk388032.intl.format(Chunk486730.default.L8U56h, {
      onClickOpenModal() {
        (0, Chunk829716.I)({
          analyticsLocations: module
        })
      }
    })
  },
  useValue: () => (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.displayNameStylesEnabled),
  setValue: t => (0, l.X2)(t),
  usePredicate: () => (0, Chunk272157.i)({
    location: "DisplayNameStylesSetting"
  })
})
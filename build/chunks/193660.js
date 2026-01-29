/** Chunk was on 4670 **/
/** chunk id: 193660, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  w: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk259065 = require("./259065.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk927961 = require("./927961.js");
let c = (0, Chunk419954.zD)(Chunk780964.X.DISPLAY_NAME_STYLES, {
  useTitle: () => d.intl.string(T.default["2gFUEw"]),
  useSubtitle: () => {
    let {
      analyticsLocations: e
    } = (0, r.Ay)();
    return d.intl.format(T.default.L8U56h, {
      onClickOpenModal() {
        (0, a.L)({
          analyticsLocations: e
        })
      }
    })
  },
  useValue: () => (0, n.bG)([s.A], () => s.A.displayNameStylesEnabled),
  setValue: e => (0, l.Dm)(e)
})
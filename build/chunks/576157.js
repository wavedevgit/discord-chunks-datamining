/** Chunk was on web.js **/
/** chunk id: 576157, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk704215 = require("./704215.js"),
  Chunk211644 = require("./211644.js"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk921944 = require("./921944.js");

function c() {
  let e = (0, Chunk266454.Nj)(Chunk704215.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE);
  return Chunk473749.useEffect(() => {
    if (!module) return (0, Chunk605236.kk)(Chunk704215.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE), () => {
      (0, Chunk211644.gE)({
        content: Chunk704215.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE
      }, false)
    }
  }, [module]), {
    shouldShowNewBadge: !module,
    markNewBadgeAsDismissed: Chunk473749.useCallback(() => {
      (0, Chunk266454.Q3)(Chunk704215.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE, {
        dismissAction: Chunk921944.L.TAKE_ACTION
      })
    }, [])
  }
}
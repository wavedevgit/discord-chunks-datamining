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
  let e = (0, o.Nj)(i.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE);
  return r.useEffect(() => {
    if (!e) return (0, s.kk)(i.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE), () => {
      (0, a.gE)({
        content: i.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE
      }, false)
    }
  }, [e]), {
    shouldShowNewBadge: !e,
    markNewBadgeAsDismissed: r.useCallback(() => {
      (0, o.Q3)(i.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE, {
        dismissAction: l.L.TAKE_ACTION
      })
    }, [])
  }
}
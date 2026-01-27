/** Chunk was on web.js **/
/** chunk id: 62504, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk554146 = require("./554146.js"),
  Chunk771781 = require("./771781.js"),
  Chunk826673 = require("./826673.js"),
  Chunk367727 = require("./367727.js"),
  Chunk49999 = require("./49999.js");

function c() {
  let e = (0, o.JZ)(i.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE);
  return r.useEffect(() => {
    if (!e) return (0, s.Vh)(i.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE), () => {
      (0, a.pd)({
        content: i.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE
      }, false)
    }
  }, [e]), {
    shouldShowNewBadge: !e,
    markNewBadgeAsDismissed: r.useCallback(() => {
      (0, o.Dr)(i.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE, {
        dismissAction: l.i.TAKE_ACTION
      })
    }, [])
  }
}
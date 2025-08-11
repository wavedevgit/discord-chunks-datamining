/** Chunk was on web.js **/
/** chunk id: 314490, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => u
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk416587 = require("./416587.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js");
let l = 432e5,
  c = e => null == e || new Date(e).getTime() < Date.now() - l,
  u = e => {
    let {
      surface: t,
      skipFetchingShelf: n = true
    } = e, l = (0, i.e7)([s.ZP], () => s.ZP.getState());
    return (0, r.useEffect)(() => {
      c(l.lastCheckedForBadgeableActivities) && !n && (0, a.w1)({
        guildId: null
      })
    }, [l.lastCheckedForBadgeableActivities, n]), (0, r.useMemo)(() => (0, o.O)({
      storeState: l,
      surface: t
    }), [l, t])
  }
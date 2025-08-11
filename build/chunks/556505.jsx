/** Chunk was on web.js **/
/** chunk id: 556505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk261773 = require("./261773.js");

function c(e) {
  let {
    labelType: t,
    collapsed: n = false
  } = e, c = t === a.ww.NEW ? s.intl.string(s.t.y2b7CA) : s.intl.string(s.t["/qdhkp"]), u = t === a.ww.NEW ? l.activityNewBadge : l.activityUpdatedBadge, [d, f] = i.useState(n ? "" : c);
  return (i.useEffect(() => {
    n ? f("") : t === a.ww.NEW ? f(s.intl.string(s.t.y2b7CA)) : t === a.ww.UPDATED && f(s.intl.string(s.t["/qdhkp"]))
  }, [n, t]), t === a.ww.NONE) ? null : <o.IGR className={u} disableColor={true} text={(0, r.jsx)("span", {
      children: d
    })} />
}
/** Chunk was on web.js **/
/** chunk id: 556505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk313931 = require("./313931.js");

function c(e) {
  let {
    labelType: t,
    collapsed: n = false
  } = e, c = t === o.ww.NEW ? s.intl.string(s.t.y2b7CA) : s.intl.string(s.t["/qdhkk"]), u = t === o.ww.NEW ? l.activityNewBadge : l.activityUpdatedBadge, [d, f] = i.useState(n ? "" : c);
  return (i.useEffect(() => {
    n ? f("") : t === o.ww.NEW ? f(s.intl.string(s.t.y2b7CA)) : t === o.ww.UPDATED && f(s.intl.string(s.t["/qdhkk"]))
  }, [n, t]), t === o.ww.NONE) ? null : (0, r.jsx)(a.IGR, {
    className: u,
    disableColor: true,
    text: (0, r.jsx)("span", {
      children: d
    })
  })
}
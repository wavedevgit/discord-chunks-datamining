/** Chunk was on 35755 **/
/** chunk id: 556505, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk542445 = require("./542445.js");

function c(e) {
  let {
    labelType: t,
    collapsed: n = false
  } = e, c = t === a.ww.NEW ? o.intl.string(o.t.y2b7CA) : o.intl.string(o.t["/qdhkp"]), u = t === a.ww.NEW ? s.activityNewBadge : s.activityUpdatedBadge, [d, p] = i.useState(n ? "" : c);
  return (i.useEffect(() => {
    n ? p("") : t === a.ww.NEW ? p(o.intl.string(o.t.y2b7CA)) : t === a.ww.UPDATED && p(o.intl.string(o.t["/qdhkp"]))
  }, [n, t]), t === a.ww.NONE) ? null : (0, l.jsx)(r.IGR, {
    className: u,
    disableColor: true,
    text: (0, l.jsx)("span", {
      children: d
    })
  })
}
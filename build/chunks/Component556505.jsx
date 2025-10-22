/** Chunk was on 35755 **/
/** chunk id: 556505, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk334955 = require("./334955.js");

function c(e) {
  let {
    labelType: t,
    collapsed: n = false
  } = e, c = t === a.ww.NEW ? o.intl.string(o.t.y2b7CA) : o.intl.string(o.t["/qdhkk"]), u = t === a.ww.NEW ? s.activityNewBadge : s.activityUpdatedBadge, [d, p] = l.useState(n ? "" : c);
  return (l.useEffect(() => {
    n ? p("") : t === a.ww.NEW ? p(o.intl.string(o.t.y2b7CA)) : t === a.ww.UPDATED && p(o.intl.string(o.t["/qdhkk"]))
  }, [n, t]), t === a.ww.NONE) ? null : (0, i.jsx)(r.IGR, {
    className: u,
    disableColor: true,
    text: (0, i.jsx)("span", {
      children: d
    })
  })
}
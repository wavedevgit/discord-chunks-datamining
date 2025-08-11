/** Chunk was on 54844 **/
/** chunk id: 15667, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.js"),
  Chunk130883 = require("./130883.js"),
  Chunk646727 = require("./646727.js");
let c = e => {
  let t = (0, l.flatMap)(e.history, e => {
    var t;
    let {
      destination: [n],
      multiSelect: r
    } = e, l = [null, null], i = Object.values(null != (t = null == r ? true : r.state) ? t : {});
    return i.length > 0 && (l[0] = i.join(", ")), "" !== n && (l[1] = n), l
  }).filter(e => null != e);
  return 0 === t.length ? null : <div className={o.container}>{<i.X6q className={o.breadcrumbsHeader} color={"header-secondary"} variant={"heading-sm/semibold"}>{e.isModeratorReport ? a.intl.string(s.default["6mx/DA"]) : a.intl.string(a.t["+3V9Tk"])}</i.X6q>}{t.map((e, t) => <div className={o.breadcrumbContainer}>{<div className={o.breadcrumbDot} />}{<i.Text variant={"text-md/normal"} className={o.breadcrumbText}>{e}</i.Text>}</div>)}</div>
}
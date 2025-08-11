/** Chunk was on 82758 **/
/** chunk id: 401876, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk854698 = require("./854698.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk888890 = require("./888890.js");

function o(e) {
  let {
    startDate: t,
    recurrenceRule: r,
    onRecurrenceChange: o
  } = e, d = l.useMemo(() => (0, i.zi)(t, r), [r, t]), u = (0, i.P8)(t), x = e => e.toString(), j = <div className={a.title}>{c.intl.string(c.t["59TVxM"])}</div>;
  return <s.xJW title={j} required={true}><s.PhF placeholder={"gaming"} options={u} select={o} serialize={x} isSelected={e => null != d && x(e) === x(d)} /></s.xJW>
}
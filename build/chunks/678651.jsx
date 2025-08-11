/** Chunk was on 61526 **/
/** chunk id: 678651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk925329 = require("./925329.js"),
  Chunk706454 = require("./706454.js"),
  Chunk709054 = require("./709054.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk64699 = require("./64699.js");

function p(e) {
  var t, n;
  let {
    clip: p
  } = e, [f] = (0, o.Z)([null != (t = p.applicationId) ? t : ""]), v = (0, l.e7)([u.default], () => u.default.locale), h = r.useMemo(() => new Date(c.default.extractTimestamp(p.id)), [p.id]);
  return <div className={m.root}>{<div className={m.nameSection}>{<s.Z game={f} />}{<i.Text className={m.name} variant={"text-md/medium"} color={"interactive-active"}>{null != (n = null == f ? true : f.name) ? n : p.applicationName}</i.Text>}</div>}{<div className={m.timeContainer}>{<div>{<i.vwX className={m.timeTitle}>{d.intl.string(d.t.g8pDeX)}</i.vwX>}{<i.Text variant={"text-sm/normal"} color={"interactive-active"}>{h.toLocaleDateString(v, {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit"
          })}</i.Text>}</div>}{<div>{<i.vwX className={m.timeTitle}>{d.intl.string(d.t.v6XAgo)}</i.vwX>}{<i.Text variant={"text-sm/normal"} color={"interactive-active"}>{h.toLocaleTimeString(v, {
            hour: "numeric",
            minute: "numeric"
          })}</i.Text>}</div>}</div>}</div>
}
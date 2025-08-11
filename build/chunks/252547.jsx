/** Chunk was on 89311 **/
/** chunk id: 252547, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk383895 = require("./383895.js"),
  Chunk388032 = require("./388032.js"),
  Chunk263930 = require("./263930.js"),
  Chunk949439 = require("./949439.js");

function g(e) {
  let {
    entries: t,
    viewId: r,
    officialGuildId: i,
    onClose: g
  } = e, p = t.length > 7, [f, x] = a.useState(false), j = a.useMemo(() => t.slice(0, p && !f ? 6 : true), [t, p, f]);
  return <div>{<o.X6 className={u.sectionHeader} variant={"text-md/semibold"} color={"header-primary"}>{d.intl.string(d.t.ak8OHh)}</o.X6>}{0 === t.length ? <o.xv variant={"text-xs/semibold"} color={"text-primary"} className={m.emptyState}>{d.intl.string(d.t.R5fYVF)}</o.xv> : <n.Fragment>{<div className={l()(m.friends, {
          [m.fadedEntries]: p && !f
        })}><div className={u.column}>{j.map(e => (0, n.jsx)(c.Z, {
            entry: e,
            viewId: r,
            onClose: g,
            officialGuildId: i
          }, e.id))}</div></div>}{p && !f && <s.P3F className={m.expandEntriesButton} onClick={() => x(true)}>{<o.xv variant={"text-xs/semibold"} color={"interactive-normal"}>{d.intl.string(d.t.yohc6O)}</o.xv>}{<s.CJ0 size={"xs"} />}</s.P3F>}</n.Fragment>}</div>
}
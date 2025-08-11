/** Chunk was on 13616 **/
/** chunk id: 469880, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk932776 = require("./932776.js"),
  Chunk680298 = require("./680298.js"),
  Chunk289465 = require("./289465.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk298040 = require("./298040.js");

function u(e) {
  let {
    applicationIcon: t,
    applicationName: n,
    canNavigate: u,
    guildId: p
  } = e, {
    results: m,
    query: b,
    setQuery: g,
    unfilteredCount: f
  } = (0, o.O)();
  return null != m && f > 0 ? <s.Z bar={(0, i.jsx)(l.E1j, {
      size: "sm",
      query: b,
      onChange: g,
      onClear: () => g("")
    })} inModal={false} title={c.intl.string(c.t["0hKkS0"])}>{m.map((e, o) => (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)(a.Z, {
        applicationIcon: t,
        applicationName: n,
        canNavigate: u,
        command: e,
        guildId: p
      }), o < m.length - 1 ? (0, i.jsx)(l.$i$, {}) : null]
    }, e.id))}</s.Z> : <l.Zbd className={d.emptyCard} editable={true}><l.Text color={"text-muted"} variant={"text-sm/normal"}>{c.intl.string(c.t["x78c+P"])}</l.Text></l.Zbd>
}
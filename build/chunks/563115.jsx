/** Chunk was on 6850 **/
/** chunk id: 563115, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c,
  h: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk345162 = require("./345162.js"),
  Chunk485386 = require("./485386.js"),
  Chunk512508 = require("./512508.jsx");

function s(e, t, n, r) {
  return (0, l.Wu)([i.Z], () => i.Z.getSortedRoles(e).filter(e => !t.has(e.id) && !(n && (0, o.fI)(e)) && (null == r || r(e))).map(e => (0, a.WG)(e).row), [n, e, r, t])
}

function c(e) {
  let {
    guildId: t,
    selectedRoleIds: n,
    onChange: l,
    placeholder: o,
    disableEveryoneRole: i,
    helperText: c,
    className: u,
    selectableRoleFilter: d
  } = e, C = s(t, n, i, d);
  return <a.ZP roleRows={C} guildId={t} selectedRoleIds={n} onChange={(e, t) => l(t)} placeholder={o} helperText={c} className={u} />
}
/** Chunk was on 6850 **/
/** chunk id: 563115, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c,
  h: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk345162 = require("./345162.js"),
  Chunk485386 = require("./485386.js"),
  Chunk654814 = require("./654814.jsx");

function s(e, t, n, r) {
  return (0, l.Wu)([a.Z], () => a.Z.getSortedRoles(e).filter(e => !t.has(e.id) && !(n && (0, i.fI)(e)) && (null == r || r(e))).map(e => (0, o.WG)(e).row), [n, e, r, t])
}

function c(e) {
  let {
    guildId: t,
    selectedRoleIds: n,
    onChange: l,
    placeholder: i,
    disableEveryoneRole: a,
    helperText: c,
    className: d,
    selectableRoleFilter: u
  } = e, C = s(t, n, a, u);
  return (0, r.jsx)(o.ZP, {
    roleRows: C,
    guildId: t,
    selectedRoleIds: n,
    onChange: (e, t) => l(t),
    placeholder: i,
    helperText: c,
    className: d
  })
}
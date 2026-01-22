/** Chunk was on 35894 **/
/** chunk id: 57222, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c,
  H: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk34457 = require("./34457.js"),
  Chunk317525 = require("./317525.js"),
  Chunk64749 = require("./64749.jsx");

function s(e, t, n, r) {
  return (0, l.yK)([o.A], () => o.A.getSortedRoles(e).filter(e => !t.has(e.id) && !(n && (0, i.Oy)(e)) && (null == r || r(e))).map(e => (0, a.th)(e).row), [n, e, r, t])
}

function c(e) {
  let {
    guildId: t,
    selectedRoleIds: n,
    onChange: l,
    placeholder: i,
    disableEveryoneRole: o,
    helperText: c,
    className: d,
    selectableRoleFilter: u
  } = e, C = s(t, n, o, u);
  return (0, r.jsx)(a.Ay, {
    roleRows: C,
    guildId: t,
    selectedRoleIds: n,
    onChange: (e, t) => l(t),
    placeholder: i,
    helperText: c,
    className: d
  })
}
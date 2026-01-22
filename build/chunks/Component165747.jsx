/** Chunk was on 41072 **/
/** chunk id: 165747, original params: t,l,n (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk292024 = require("./292024.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function o(t) {
  let {
    role: l,
    guild: n,
    onSelect: o
  } = t, p = [], c = (0, r.A)(n, l, u.BEX.INTEGRATIONS);
  null != c && p.push(c);
  let h = (0, a.A)({
    id: l.id,
    label: d.intl.string(d.t.sMsaLg)
  });
  return (null != h && p.push(h), 0 === p.length) ? null : (0, i.jsx)(e.W1t, {
    navId: "guild-integrations-permission-role-context",
    "aria-label": d.intl.string(d.t["337Ja9"]),
    onClose: s.Z_,
    onSelect: o,
    children: p
  })
}
/** Chunk was on 14486 **/
/** chunk id: 786746, original params: n,t,i (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk867108 = require("./867108.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function o(n) {
  let {
    role: t,
    guild: i,
    onSelect: o
  } = n, p = [], c = (0, r.Z)(i, t, u.pNK.INTEGRATIONS);
  null != c && p.push(c);
  let h = (0, a.Z)({
    id: t.id,
    label: d.intl.string(d.t.sMsaLi)
  });
  return (null != h && p.push(h), 0 === p.length) ? null : (0, l.jsx)(e.v2r, {
    navId: "guild-integrations-permission-role-context",
    "aria-label": d.intl.string(d.t["337Ja2"]),
    onClose: s.Zy,
    onSelect: o,
    children: p
  })
}
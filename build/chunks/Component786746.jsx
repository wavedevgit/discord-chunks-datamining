/** Chunk was on 14486 **/
/** chunk id: 786746, original params: n,t,l (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk867108 = require("./867108.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function o(n) {
  let {
    role: t,
    guild: l,
    onSelect: o
  } = n, p = [], c = (0, r.Z)(l, t, u.pNK.INTEGRATIONS);
  null != c && p.push(c);
  let h = (0, a.Z)({
    id: t.id,
    label: d.intl.string(d.t.sMsaLg)
  });
  return (null != h && p.push(h), 0 === p.length) ? null : (0, i.jsx)(e.v2r, {
    navId: "guild-integrations-permission-role-context",
    "aria-label": d.intl.string(d.t["337Ja9"]),
    onClose: s.Zy,
    onSelect: o,
    children: p
  })
}
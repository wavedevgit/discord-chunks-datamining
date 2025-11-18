/** Chunk was on 99063 **/
/** chunk id: 741247, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => c,
  e: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk241635 = require("./241635.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e, t) {
  return (0, a.Z)(e, t).length > 0
}

function c(e) {
  let {
    role: t,
    guild: n,
    onSelect: s
  } = e, c = (0, a.Z)(n, t);
  return 0 === c.length ? null : (0, i.jsx)(r.v2r, {
    navId: "guild-settings-role-context",
    "aria-label": o.intl.string(o.t["337Ja9"]),
    onClose: l.Zy,
    onSelect: s,
    children: c
  })
}
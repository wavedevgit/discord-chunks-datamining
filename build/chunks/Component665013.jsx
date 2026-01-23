/** Chunk was on 21968 **/
/** chunk id: 665013, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => c,
  x: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk484740 = require("./484740.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(e, t) {
  return (0, a.A)(e, t).length > 0
}

function c(e) {
  let {
    role: t,
    guild: n,
    onSelect: o
  } = e, c = (0, a.A)(n, t);
  return 0 === c.length ? null : (0, i.jsx)(r.W1t, {
    "data-menu-mixed": true,
    navId: "guild-settings-role-context",
    "aria-label": s.intl.string(s.t["337Ja9"]),
    onClose: l.Z_,
    onSelect: o,
    children: c
  })
}
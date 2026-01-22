/** Chunk was on 68001 **/
/** chunk id: 699896, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk985018 = require("./985018.jsx");

function c(n) {
  let {
    roleId: t,
    onLeaveRole: e,
    onSelect: c
  } = n;
  return (0, i.jsx)(l.W1t, {
    navId: "guild-role-connections-context",
    "aria-label": o.intl.string(o.t.vytvJF),
    onClose: r.Z_,
    onSelect: c,
    children: (0, i.jsx)(l.rXV, {
      children: (0, i.jsx)(l.Drp, {
        id: "guild-role-connections-leave-role",
        label: o.intl.string(o.t.vytvJF),
        action: e,
        color: "danger"
      }, t)
    })
  }, t)
}
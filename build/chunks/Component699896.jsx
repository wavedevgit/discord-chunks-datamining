/** Chunk was on 68001 **/
/** chunk id: 699896, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk985018 = require("./985018.jsx");

function o(n) {
  let {
    roleId: t,
    onLeaveRole: e,
    onSelect: o
  } = n;
  return (0, i.jsx)(r.W1t, {
    "data-menu-migration-ready": true,
    navId: "guild-role-connections-context",
    "aria-label": l.intl.string(l.t.vytvJF),
    onClose: a.Z_,
    onSelect: o,
    children: (0, i.jsx)(r.rXV, {
      children: (0, i.jsx)(r.Drp, {
        id: "guild-role-connections-leave-role",
        label: l.intl.string(l.t.vytvJF),
        action: e,
        color: "danger"
      }, t)
    })
  }, t)
}
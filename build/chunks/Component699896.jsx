/** Chunk was on 68001 **/
/** chunk id: 699896, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk985018 = require("./985018.jsx");

function o(t) {
  let {
    roleId: e,
    onLeaveRole: n,
    onSelect: o
  } = t;
  return (0, i.jsx)(r.W1t, {
    "data-menu-migrated": true,
    navId: "guild-role-connections-context",
    "aria-label": a.intl.string(a.t.vytvJF),
    onClose: l.Z_,
    onSelect: o,
    children: (0, i.jsx)(r.rXV, {
      children: (0, i.jsx)(r.Drp, {
        id: "guild-role-connections-leave-role",
        label: a.intl.string(a.t.vytvJF),
        action: n,
        color: "danger"
      }, e)
    })
  }, e)
}
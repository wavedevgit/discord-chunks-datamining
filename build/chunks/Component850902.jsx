/** Chunk was on 60079 **/
/** chunk id: 850902, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk388032 = require("./388032.jsx");

function c(n) {
  let {
    roleId: t,
    onLeaveRole: e,
    onSelect: c
  } = n;
  return (0, i.jsx)(l.v2r, {
    navId: "guild-role-connections-context",
    "aria-label": r.intl.string(r.t.vytvJF),
    onClose: o.Zy,
    onSelect: c,
    children: (0, i.jsx)(l.kSQ, {
      children: (0, i.jsx)(l.sNh, {
        id: "guild-role-connections-leave-role",
        label: r.intl.string(r.t.vytvJF),
        action: e,
        color: "danger"
      }, t)
    })
  }, t)
}
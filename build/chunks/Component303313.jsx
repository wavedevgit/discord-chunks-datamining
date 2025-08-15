/** Chunk was on 21897 **/
/** chunk id: 303313, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk149765 = require("./149765.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk995648 = require("./995648.jsx"),
  Chunk422559 = require("./422559.js"),
  Chunk388032 = require("./388032.jsx");

function c(t) {
  let {
    defaultMemberPermissions: i,
    onClose: n,
    transitionState: c
  } = t, p = [];
  for (let t of l.VY) s.e$(i, t) && p.push(t);
  return (0, r.jsx)(a.Modal, {
    "aria-label": o.intl.string(o.t.vusPtr),
    transitionState: c,
    title: o.intl.string(o.t["4gMlpa"]),
    onClose: n,
    actions: [{
      variant: "primary",
      text: o.intl.string(o.t.i4jeWV),
      onClick: n
    }],
    children: (0, r.jsx)(e.Z, {
      grantedPermissions: p
    })
  })
}
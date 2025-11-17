/** Chunk was on 21897 **/
/** chunk id: 303313, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk149765 = require("./149765.js"),
  Chunk793030 = require("./793030.js"),
  Chunk995648 = require("./995648.jsx"),
  Chunk422559 = require("./422559.js"),
  Chunk388032 = require("./388032.jsx");

function c(t) {
  let {
    defaultMemberPermissions: i,
    onClose: n,
    transitionState: c
  } = t, p = [];
  for (let t of l.VY) r.e$(i, t) && p.push(t);
  return (0, s.jsx)(a.Modal, {
    "aria-label": o.intl.string(o.t.vusPtq),
    transitionState: c,
    title: o.intl.string(o.t["4gMlpQ"]),
    onClose: n,
    actions: [{
      variant: "primary",
      text: o.intl.string(o.t.i4jeWR),
      onClick: n
    }],
    children: (0, s.jsx)(e.Z, {
      grantedPermissions: p
    })
  })
}
/** Chunk was on 12198 **/
/** chunk id: 521760, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => e
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx");

function e(t) {
  let {
    transitionState: i,
    onClose: n
  } = t;
  return (0, s.jsx)(a.Modal, {
    size: "sm",
    transitionState: i,
    onClose: n,
    title: r.intl.string(r.t["iE/uSw"]),
    subtitle: r.intl.string(r.t.G6SnvT),
    actions: [{
      variant: "primary",
      onClick: () => n(),
      text: r.intl.string(r.t.cpT0Cq)
    }]
  })
}
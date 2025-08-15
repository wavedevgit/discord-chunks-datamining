/** Chunk was on 36427 **/
/** chunk id: 196738, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => e
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk82659 = require("./82659.jsx"),
  Chunk388032 = require("./388032.jsx");

function e(t) {
  let {
    onClose: i,
    transitionState: n
  } = t;
  return (0, s.jsx)(a.Modal, {
    transitionState: n,
    size: "sm",
    title: r.intl.string(r.t.C5biFx),
    subtitle: r.intl.string(r.t["3Dy1Rk"]),
    onClose: i,
    actions: [{
      variant: "primary",
      text: r.intl.string(r.t.BddRzc),
      onClick: i
    }]
  })
}
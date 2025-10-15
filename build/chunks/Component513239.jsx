/** Chunk was on 29396 **/
/** chunk id: 513239, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => e
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx");

function e(t) {
  let {
    onClose: i,
    transitionState: n
  } = t;
  return (0, s.jsx)(r.Modal, {
    transitionState: n,
    size: "sm",
    title: a.intl.string(a.t.wLrh09),
    subtitle: a.intl.string(a.t.DW9yJi),
    actions: [{
      text: a.intl.string(a.t.BddRzc),
      variant: "primary",
      onClick: i
    }],
    onClose: i
  })
}
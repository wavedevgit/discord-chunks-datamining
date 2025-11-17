/** Chunk was on 29396 **/
/** chunk id: 513239, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => e
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    title: a.intl.string(a.t.wLrh03),
    subtitle: a.intl.string(a.t.DW9yJj),
    actions: [{
      text: a.intl.string(a.t.BddRzS),
      variant: "primary",
      onClick: i
    }],
    onClose: i
  })
}
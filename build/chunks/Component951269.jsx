/** Chunk was on 7285 **/
/** chunk id: 951269, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx");

function l(t) {
  let {
    onClose: i,
    transitionState: n,
    kind: l
  } = t;
  return (0, s.jsx)(r.Modal, {
    title: e.intl.string(e.t.r0DLNj),
    subtitle: "user" === l ? e.intl.string(e.t.Fqqbho) : e.intl.string(e.t["6Y0JlJ"]),
    actions: [{
      text: e.intl.string(e.t.BddRzc),
      onClick: i
    }],
    onClose: i,
    transitionState: n
  })
}
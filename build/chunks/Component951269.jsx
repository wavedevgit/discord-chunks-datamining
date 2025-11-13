/** Chunk was on 44815 **/
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
    title: e.intl.string(e.t.r0DLNm),
    subtitle: "user" === l ? e.intl.string(e.t.Fqqbhg) : e.intl.string(e.t["6Y0JlN"]),
    actions: [{
      text: e.intl.string(e.t.BddRzS),
      onClick: i
    }],
    onClose: i,
    transitionState: n
  })
}
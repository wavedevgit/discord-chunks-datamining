/** Chunk was on 11546 **/
/** chunk id: 208731, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk985018 = require("./985018.jsx");

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
/** Chunk was on 54207 **/
/** chunk id: 361698, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => r
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk985018 = require("./985018.jsx");

function r(t) {
  let {
    transitionState: i,
    onClose: n
  } = t;
  return (0, s.jsx)(a.Modal, {
    transitionState: i,
    title: e.intl.string(e.t.elyVbv),
    onClose: n,
    actions: [{
      text: e.intl.string(e.t.BddRzS),
      variant: "primary",
      onClick: n
    }],
    subtitle: e.intl.string(e.t.nIeRep)
  })
}
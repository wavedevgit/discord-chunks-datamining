/** Chunk was on 57968 **/
/** chunk id: 558067, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => e
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk985018 = require("./985018.jsx");

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
/** Chunk was on 91646 **/
/** chunk id: 659309, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => e
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk985018 = require("./985018.jsx");

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
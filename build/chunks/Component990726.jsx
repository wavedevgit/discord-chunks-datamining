/** Chunk was on 3371 **/
/** chunk id: 990726, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => e
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk732955 = require("./732955.js"),
  Chunk172710 = require("./172710.js"),
  Chunk985018 = require("./985018.jsx");

function e(t) {
  let {
    transitionState: i,
    onClose: n
  } = t;
  return (0, r.jsx)(a.aFV, {
    transitionState: i,
    onClose: n,
    size: "sm",
    title: o.intl.formatToMarkdownString(o.t.DQsSGr, {}),
    subtitle: o.intl.string(o.t.xGMwi9),
    actions: [{
      variant: "secondary",
      text: o.intl.string(o.t["ETE/oC"]),
      onClick: n
    }, {
      variant: "primary",
      text: o.intl.string(o.t.n8U5jd),
      onClick: function() {
        (0, s.Pt)(), n()
      }
    }]
  })
}
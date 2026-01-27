/** Chunk was on 70102 **/
/** chunk id: 118101, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk956793 = require("./956793.js"),
  Chunk849736 = require("./849736.js"),
  Chunk985018 = require("./985018.jsx");

function s(t) {
  let {
    channel: e,
    transitionState: n,
    onClose: s
  } = t;

  function u() {
    r.default.disconnect(), s()
  }
  return (0, i.jsx)(l.Modal, {
    transitionState: n,
    title: o.intl.string(o.t.pADdJu),
    subtitle: o.intl.string(o.t.mT7jwN),
    onClose: s,
    actions: [{
      text: o.intl.string(o.t.xTwqz2),
      onClick: u,
      variant: "secondary"
    }, {
      text: o.intl.string(o.t["sBP/1s"]),
      onClick: function() {
        (0, a.OE)(e), u()
      },
      variant: "critical-primary"
    }]
  })
}
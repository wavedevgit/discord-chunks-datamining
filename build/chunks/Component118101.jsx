/** Chunk was on 70102 **/
/** chunk id: 118101, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk956793 = require("./956793.js"),
  Chunk849736 = require("./849736.js"),
  Chunk985018 = require("./985018.jsx");

function l(t) {
  let {
    channel: i,
    transitionState: n,
    onClose: l
  } = t;

  function o() {
    r.default.disconnect(), l()
  }
  return (0, s.jsx)(a.Modal, {
    transitionState: n,
    title: e.intl.string(e.t.pADdJu),
    subtitle: e.intl.string(e.t.mT7jwN),
    onClose: l,
    actions: [{
      text: e.intl.string(e.t.xTwqz2),
      onClick: o,
      variant: "secondary"
    }, {
      text: e.intl.string(e.t["sBP/1s"]),
      onClick: function() {
        (0, c.OE)(i), o()
      },
      variant: "critical-primary"
    }]
  })
}
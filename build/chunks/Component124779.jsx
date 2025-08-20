/** Chunk was on 85885 **/
/** chunk id: 124779, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk82659 = require("./82659.jsx"),
  Chunk287734 = require("./287734.js"),
  Chunk471253 = require("./471253.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  let {
    channel: i,
    transitionState: n,
    onClose: o
  } = t;

  function l() {
    r.default.disconnect(), o()
  }
  return (0, a.jsx)(s.Modal, {
    transitionState: n,
    title: e.intl.string(e.t.pADdJi),
    subtitle: e.intl.string(e.t.mT7jwM),
    onClose: o,
    actions: [{
      text: e.intl.string(e.t.xTwqz8),
      onClick: l,
      variant: "secondary"
    }, {
      text: e.intl.string(e.t["sBP/1t"]),
      onClick: function() {
        (0, c.NZ)(i), l()
      },
      variant: "critical-primary"
    }]
  })
}
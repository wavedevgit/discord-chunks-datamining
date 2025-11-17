/** Chunk was on 85885 **/
/** chunk id: 124779, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
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
  return (0, s.jsx)(a.Modal, {
    transitionState: n,
    title: e.intl.string(e.t.pADdJu),
    subtitle: e.intl.string(e.t.mT7jwN),
    onClose: o,
    actions: [{
      text: e.intl.string(e.t.xTwqz2),
      onClick: l,
      variant: "secondary"
    }, {
      text: e.intl.string(e.t["sBP/1s"]),
      onClick: function() {
        (0, c.NZ)(i), l()
      },
      variant: "critical-primary"
    }]
  })
}
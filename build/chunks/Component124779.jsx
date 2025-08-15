/** Chunk was on 85885 **/
/** chunk id: 124779, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk82659 = require("./82659.jsx"),
  Chunk287734 = require("./287734.js"),
  Chunk471253 = require("./471253.js"),
  Chunk388032 = require("./388032.jsx");

function c(t) {
  let {
    channel: n,
    transitionState: e,
    onClose: c
  } = t;

  function o() {
    l.default.disconnect(), c()
  }
  return (0, i.jsx)(r.Modal, {
    transitionState: e,
    title: u.intl.string(u.t.pADdJi),
    subtitle: u.intl.string(u.t.mT7jwM),
    onClose: c,
    actions: [{
      text: u.intl.string(u.t.xTwqz8),
      onClick: o,
      variant: "secondary"
    }, {
      text: u.intl.string(u.t["sBP/1t"]),
      onClick: function() {
        (0, a.NZ)(n), o()
      },
      variant: "critical-primary"
    }]
  })
}
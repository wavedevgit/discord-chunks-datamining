/** Chunk was on 9665 **/
/** chunk id: 5101, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => u,
  default: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk764295 = require("./764295.js"),
  Chunk388032 = require("./388032.jsx");
let u = "report_to_mod_dont_show_resolve_confirm";

function d(e) {
  let {
    transitionState: t,
    onClose: n,
    handleResolveFlag: d
  } = e, [p, h] = i.useState(false);
  return (0, r.jsx)(l.Modal, {
    transitionState: t,
    onClose: n,
    title: c.intl.string(s.default["8R4eur"]),
    subtitle: c.intl.string(s.default.xgOraW),
    actions: [{
      text: c.intl.string(s.default.ctefOz),
      onClick: () => {
        p && a.K.set(u, true), n(), d()
      }
    }],
    actionBarInput: (0, r.jsx)(o.XZJ, {
      checked: p,
      onChange: e => h(e),
      label: c.intl.string(s.default["3puq5e"])
    })
  })
}
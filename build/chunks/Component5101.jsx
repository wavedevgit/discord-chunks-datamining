/** Chunk was on 52282 **/
/** chunk id: 5101, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  F: () => c,
  default: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk304726 = require("./304726.js"),
  Chunk388032 = require("./388032.jsx");
let c = "report_to_mod_dont_show_resolve_confirm";

function d(t) {
  let {
    transitionState: e,
    onClose: n,
    handleResolveFlag: d
  } = t, [p, f] = a.useState(false);
  return (0, i.jsx)(s.Modal, {
    transitionState: e,
    onClose: n,
    title: u.intl.string(r.default["8R4eur"]),
    subtitle: u.intl.string(r.default.xgOraW),
    actions: [{
      text: u.intl.string(r.default.ctefOz),
      onClick: () => {
        p && l.K.set(c, true), n(), d()
      }
    }],
    actionBarInput: (0, i.jsx)(o.Checkbox, {
      checked: p,
      onChange: t => f(t),
      label: u.intl.string(r.default["3puq5e"]),
      labelType: "secondary"
    })
  })
}
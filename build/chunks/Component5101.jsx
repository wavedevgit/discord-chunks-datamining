/** Chunk was on 88647 **/
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
  Chunk43617 = require("./43617.js"),
  Chunk388032 = require("./388032.jsx");
let u = "report_to_mod_dont_show_resolve_confirm";

function d(e) {
  let {
    transitionState: t,
    onClose: n,
    handleResolveFlag: d
  } = e, [p, f] = i.useState(false);
  return (0, r.jsx)(l.Modal, {
    transitionState: t,
    onClose: n,
    title: c.intl.string(s.default["8R4euh"]),
    subtitle: c.intl.string(s.default.xgOraS),
    actions: [{
      text: c.intl.string(s.default.ctefO2),
      onClick: () => {
        p && a.K.set(u, true), n(), d()
      }
    }],
    actionBarInput: (0, r.jsx)(o.Checkbox, {
      checked: p,
      onChange: e => f(e),
      label: c.intl.string(s.default["3puq5c"]),
      labelType: "secondary"
    })
  })
}
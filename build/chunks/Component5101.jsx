/** Chunk was on 73755 **/
/** chunk id: 5101, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => u,
  default: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk864309 = require("./864309.js"),
  Chunk388032 = require("./388032.jsx");
let u = "report_to_mod_dont_show_resolve_confirm";

function d(e) {
  let {
    transitionState: t,
    onClose: n,
    handleResolveFlag: d
  } = e, [p, h] = r.useState(false);
  return (0, i.jsx)(l.Modal, {
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
    actionBarInput: (0, i.jsx)(o.Checkbox, {
      checked: p,
      onChange: e => h(e),
      label: c.intl.string(s.default["3puq5c"]),
      labelType: "secondary"
    })
  })
}
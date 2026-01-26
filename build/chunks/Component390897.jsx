/** Chunk was on 92682 **/
/** chunk id: 390897, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => d,
  f: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk506774 = require("./506774.js"),
  Chunk397927 = require("./397927.js"),
  Chunk641131 = require("./641131.js"),
  Chunk985018 = require("./985018.jsx");
let u = "report_to_mod_dont_show_resolve_confirm";

function d(t) {
  let {
    transitionState: e,
    onClose: n,
    handleResolveFlag: d
  } = t, [p, h] = i.useState(false);
  return (0, a.jsx)(s.Modal, {
    transitionState: e,
    onClose: n,
    title: c.intl.string(r.default["8R4euh"]),
    subtitle: c.intl.string(r.default.xgOraS),
    actions: [{
      text: c.intl.string(r.default.ctefO2),
      onClick: () => {
        p && l.w.set(u, true), n(), d()
      }
    }],
    actionBarInput: (0, a.jsx)(o.Checkbox, {
      checked: p,
      onChange: t => h(t),
      label: c.intl.string(r.default["3puq5c"]),
      labelType: "secondary"
    })
  })
}
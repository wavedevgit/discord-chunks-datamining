/** Chunk was on 97492 **/
/** chunk id: 390897, original params: e,t,n (module,exports,require) **/
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

function d(e) {
  let {
    transitionState: t,
    onClose: n,
    handleResolveFlag: d
  } = e, [f, p] = l.useState(false);
  return (0, r.jsx)(i.Modal, {
    transitionState: t,
    onClose: n,
    title: c.intl.string(o.default["8R4euh"]),
    subtitle: c.intl.string(o.default.xgOraS),
    actions: [{
      text: c.intl.string(o.default.ctefO2),
      onClick: () => {
        f && a.w.set(u, true), n(), d()
      }
    }],
    actionBarInput: (0, r.jsx)(s.Checkbox, {
      checked: f,
      onChange: e => p(e),
      label: c.intl.string(o.default["3puq5c"]),
      labelType: "secondary"
    })
  })
}
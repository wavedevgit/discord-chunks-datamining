/** Chunk was on 93886 **/
/** chunk id: 897842, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => l,
  default: () => i
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk82659 = require("./82659.jsx");
let l = "UPLOAD_ERROR_MODAL_KEY",
  i = e => {
    let {
      title: t,
      help: a,
      transitionState: l,
      onClose: i
    } = e;
    return (0, n.jsx)(r.Modal, {
      title: t,
      subtitle: a,
      transitionState: l,
      actions: [{
        variant: "critical-secondary",
        text: "Close",
        onClick: i
      }],
      onClose: i
    })
  }
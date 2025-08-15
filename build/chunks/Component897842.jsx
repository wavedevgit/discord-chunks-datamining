/** Chunk was on 93886 **/
/** chunk id: 897842, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => l,
  default: () => i
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
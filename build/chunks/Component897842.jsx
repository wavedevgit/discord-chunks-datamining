/** Chunk was on 91394 **/
/** chunk id: 897842, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => r,
  default: () => i
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js");
let r = "UPLOAD_ERROR_MODAL_KEY",
  i = e => {
    let {
      title: t,
      help: n,
      transitionState: r,
      onClose: i
    } = e;
    return (0, a.jsx)(l.Modal, {
      title: t,
      subtitle: n,
      transitionState: r,
      actions: [{
        variant: "critical-secondary",
        text: "Close",
        onClick: i
      }],
      onClose: i
    })
  }
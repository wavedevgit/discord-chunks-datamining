/** Chunk was on 28532 **/
/** chunk id: 897842, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i,
  default: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js");
let i = "UPLOAD_ERROR_MODAL_KEY",
  l = e => {
    let {
      title: t,
      help: n,
      transitionState: i,
      onClose: l
    } = e;
    return (0, a.jsx)(r.Modal, {
      title: t,
      subtitle: n,
      transitionState: i,
      actions: [{
        variant: "critical-secondary",
        text: "Close",
        onClick: l
      }],
      onClose: l
    })
  }
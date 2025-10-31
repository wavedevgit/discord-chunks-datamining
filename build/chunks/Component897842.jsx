/** Chunk was on 3020 **/
/** chunk id: 897842, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l,
  default: () => r
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js");
let l = "UPLOAD_ERROR_MODAL_KEY",
  r = e => {
    let {
      title: t,
      help: n,
      transitionState: l,
      onClose: r
    } = e;
    return (0, a.jsx)(i.Modal, {
      title: t,
      subtitle: n,
      transitionState: l,
      actions: [{
        variant: "critical-secondary",
        text: "Close",
        onClick: r
      }],
      onClose: r
    })
  }
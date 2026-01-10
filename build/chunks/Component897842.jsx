/** Chunk was on 84249 **/
/** chunk id: 897842, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i,
  default: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
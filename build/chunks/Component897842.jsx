/** Chunk was on 837 **/
/** chunk id: 897842, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l,
  default: () => i
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js");
let l = "UPLOAD_ERROR_MODAL_KEY",
  i = e => {
    let {
      title: t,
      help: n,
      transitionState: l,
      onClose: i
    } = e;
    return (0, a.jsx)(r.Modal, {
      title: t,
      subtitle: n,
      transitionState: l,
      actions: [{
        variant: "critical-secondary",
        text: "Close",
        onClick: i
      }],
      onClose: i
    })
  }
/** Chunk was on 87557 **/
/** chunk id: 343991, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => r,
  default: () => i
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js");
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
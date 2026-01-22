/** Chunk was on 22477 **/
/** chunk id: 343991, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => i,
  default: () => r
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js");
let i = "UPLOAD_ERROR_MODAL_KEY",
  r = e => {
    let {
      title: t,
      help: n,
      transitionState: i,
      onClose: r
    } = e;
    return (0, a.jsx)(l.Modal, {
      title: t,
      subtitle: n,
      transitionState: i,
      actions: [{
        variant: "critical-secondary",
        text: "Close",
        onClick: r
      }],
      onClose: r
    })
  }
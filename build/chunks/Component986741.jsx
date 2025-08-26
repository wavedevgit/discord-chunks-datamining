/** Chunk was on 33811 **/
/** chunk id: 986741, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk277021 = require("./277021.js");
let u = function(t) {
  let {
    onClose: e,
    transitionState: i
  } = t, [u, d] = r.useState(""), [f, h] = r.useState(false), p = r.useCallback(() => {
    console.log("Scan complete")
  }, []), w = async () => {
    h(true), d("");
    try {
      let t = await (0, l.Q)();
      c.Z.showAgeVerification({
        webviewUrl: t.verification_webview_url,
        onComplete: p,
        onClose: e,
        entryPoint: s.cU.DEV_TOOLS_QUICK_ACTIONS
      })
    } catch (t) {
      d(t.message)
    } finally {
      h(false)
    }
  };
  return (0, n.jsx)(a.Modal, {
    transitionState: i,
    onClose: e,
    title: "Age Verification Test Tool",
    actions: [{
      text: "Trigger Age Verification Test",
      onClick: w,
      loading: f
    }],
    children: (0, n.jsx)("div", {
      children: "" !== u && (0, n.jsx)(o.pdY, {
        error: u
      })
    })
  })
}
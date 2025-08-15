/** Chunk was on 33811 **/
/** chunk id: 986741, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => l
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk277021 = require("./277021.js");
let l = function(e) {
  let {
    onClose: t,
    transitionState: i
  } = e, [l, u] = n.useState(""), [d, f] = n.useState(false), h = n.useCallback(() => {
    console.log("Scan complete")
  }, []), p = async () => {
    f(true), u("");
    try {
      let e = await (0, s.Q)();
      c.Z.showAgeVerification({
        webviewUrl: e.verification_webview_url,
        onComplete: h,
        onClose: t
      })
    } catch (e) {
      u(e.message)
    } finally {
      f(false)
    }
  };
  return (0, a.jsx)(r.Modal, {
    transitionState: i,
    onClose: t,
    title: "Age Verification Test Tool",
    actions: [{
      text: "Trigger Age Verification Test",
      onClick: p,
      loading: d
    }],
    children: (0, a.jsx)("div", {
      children: "" !== l && (0, a.jsx)(o.pdY, {
        error: l
      })
    })
  })
}
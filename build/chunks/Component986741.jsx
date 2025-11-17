/** Chunk was on 33811 **/
/** chunk id: 986741, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk277021 = require("./277021.js"),
  Chunk469775 = require("./469775.js");
let d = Object.values(Chunk469775.Rp).filter(e => "number" != typeof e).map(e => ({
  value: u.Rp[e],
  label: u.Rp[u.Rp[e]]
}));
d.push({
  value: true,
  label: "undefined"
});
let p = function(e) {
  let {
    onClose: t,
    transitionState: i
  } = e, [u, p] = n.useState(""), [f, h] = n.useState(false), [S, b] = n.useState(true), v = n.useCallback(() => {
    console.log("Scan complete")
  }, []), w = async () => {
    h(true), p("");
    try {
      let e = await (0, c.Q)(S);
      s.Z.showAgeVerification({
        webviewUrl: e.verification_webview_url,
        onComplete: v,
        onClose: t,
        entryPoint: l.cU.DEV_TOOLS_QUICK_ACTIONS
      })
    } catch (e) {
      p(e.message)
    } finally {
      h(false)
    }
  };
  return (0, a.jsxs)(o.Modal, {
    transitionState: i,
    onClose: t,
    title: "Age Verification Test Tool",
    actions: [{
      text: "Trigger Age Verification Test",
      onClick: w,
      loading: f
    }],
    children: [(0, a.jsx)(r.PhF, {
      select: b,
      isSelected: e => e === S,
      serialize: String,
      options: d
    }), (0, a.jsx)("div", {
      children: "" !== u && (0, a.jsx)(r.pdY, {
        error: u
      })
    })]
  })
}
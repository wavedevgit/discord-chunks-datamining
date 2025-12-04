/** Chunk was on 33811 **/
/** chunk id: 986741, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk277021 = require("./277021.js"),
  Chunk469775 = require("./469775.js");
let p = Object.values(Chunk469775.Rp).filter(e => "number" != typeof e).map(e => ({
  value: d.Rp[e],
  label: d.Rp[d.Rp[e]]
}));
p.push({
  value: true,
  label: "undefined"
});
let f = function(e) {
  let {
    onClose: t,
    transitionState: i
  } = e, [d, f] = n.useState(""), [S, b] = n.useState(false), [h, v] = n.useState(true), w = n.useCallback(() => {
    console.log("Scan complete")
  }, []), _ = async () => {
    b(true), f("");
    try {
      let e = await (0, u.Q)(h);
      l.Z.showAgeVerification({
        webviewUrl: e.verification_webview_url,
        onComplete: w,
        onClose: t,
        entryPoint: c.cU.DEV_TOOLS_QUICK_ACTIONS
      })
    } catch (e) {
      f(e.message)
    } finally {
      b(false)
    }
  };
  return (0, a.jsxs)(o.Modal, {
    transitionState: i,
    onClose: t,
    title: "Age Verification Test Tool",
    actions: [{
      text: "Trigger Age Verification Test",
      onClick: _,
      loading: S
    }],
    children: [(0, a.jsx)(r.B6, {
      select: v,
      isSelected: e => e === h,
      serialize: String,
      options: p
    }), (0, a.jsx)("div", {
      children: "" !== d && (0, a.jsx)(s.pdY, {
        error: d
      })
    })]
  })
}
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
let u = Object.values(Chunk469775.Rp).filter(e => "number" != typeof e).map(e => ({
  id: e,
  value: d.Rp[e],
  label: d.Rp[d.Rp[e]]
}));
u.push({
  id: "undefined",
  value: true,
  label: "undefined"
});
let p = function(e) {
  let {
    onClose: t,
    transitionState: i
  } = e, [d, p] = l.useState(""), [h, f] = l.useState(false), [b, v] = l.useState(true), S = l.useCallback(() => {
    console.log("Scan complete")
  }, []), g = async () => {
    f(true), p("");
    try {
      let e = await (0, c.Q)(b);
      s.Z.showAgeVerification({
        webviewUrl: e.verification_webview_url,
        onComplete: S,
        onClose: t,
        entryPoint: r.cU.DEV_TOOLS_QUICK_ACTIONS
      })
    } catch (e) {
      p(e.message)
    } finally {
      f(false)
    }
  };
  return (0, n.jsxs)(a.Modal, {
    transitionState: i,
    onClose: t,
    title: "Age Verification Test Tool",
    actions: [{
      text: "Trigger Age Verification Test",
      onClick: g,
      loading: h
    }],
    children: [(0, n.jsx)(o.PhF, {
      label: "Method",
      hideLabel: true,
      onSelectionChange: e => v(null != e ? e : true),
      value: b,
      options: u,
      selectionMode: "single",
      fullWidth: true
    }), (0, n.jsx)("div", {
      children: "" !== d && (0, n.jsx)(o.pdY, {
        error: d
      })
    })]
  })
}
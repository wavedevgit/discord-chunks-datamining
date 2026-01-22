/** Chunk was on 25810 **/
/** chunk id: 114857, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk620174 = require("./620174.js"),
  Chunk40449 = require("./40449.js");
let u = Object.values(Chunk40449.VF).filter(e => "number" != typeof e).map(e => ({
  id: e,
  value: d.VF[e],
  label: d.VF[d.VF[e]]
}));
u.push({
  id: "undefined",
  value: true,
  label: "undefined"
});
let h = function(e) {
  let {
    onClose: t,
    transitionState: i
  } = e, [d, h] = a.useState(""), [b, f] = a.useState(false), [p, v] = a.useState(true), S = a.useCallback(() => {
    console.log("Scan complete")
  }, []), V = async () => {
    f(true), h("");
    try {
      let e = await (0, c.V)(p);
      s.A.showAgeVerification({
        webviewUrl: e.verification_webview_url,
        onComplete: S,
        onClose: t,
        entryPoint: r.q1.DEV_TOOLS_QUICK_ACTIONS
      })
    } catch (e) {
      h(e.message)
    } finally {
      f(false)
    }
  };
  return (0, l.jsxs)(o.Modal, {
    transitionState: i,
    onClose: t,
    title: "Age Verification Test Tool",
    actions: [{
      text: "Trigger Age Verification Test",
      onClick: V,
      loading: b
    }],
    children: [(0, l.jsx)(n.l6P, {
      label: "Method",
      hideLabel: true,
      onSelectionChange: e => v(null != e ? e : true),
      value: p,
      options: u,
      selectionMode: "single",
      fullWidth: true
    }), (0, l.jsx)("div", {
      children: "" !== d && (0, l.jsx)(n.dzK, {
        error: d
      })
    })]
  })
}
/** Chunk was on 61323 **/
/** chunk id: 333636, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk238675 = require("./238675.js"),
  Chunk37291 = require("./37291.js");
let o = function(e) {
  let {
    onClose: t,
    transitionState: l
  } = e, [o, u] = i.useState(null), [r, C] = i.useState(null), [T, d] = i.useState(null), [h, f] = i.useState(""), p = i.useCallback(async () => {
    if (o) {
      f("");
      try {
        await (0, c.qy)(o, {
          difficulty: null != r ? r : true,
          should_serve_invisible: null != T ? T : true
        })
      } catch (e) {
        f(e.message)
      }
    }
  }, [o, r, T]);
  return (0, a.jsxs)(n.u_l, {
    title: "Captcha Test Tool",
    actions: [{
      text: "Trigger Captcha",
      onClick: p,
      disabled: !o
    }],
    onClose: t,
    transitionState: l,
    children: [(0, a.jsx)(s.PhF, {
      label: "Captcha Decider Type",
      hideLabel: true,
      value: o,
      options: A.p,
      onSelectionChange: e => {
        e !== c.fw.HCAPTCHA_RQDATA && e !== c.fw.SMITE_RQDATA && d(null), e !== c.fw.HCAPTCHA_RQDATA && C(null), u(e), f("")
      },
      selectionMode: "single",
      fullWidth: true
    }), o === c.fw.HCAPTCHA_RQDATA && (0, a.jsx)(s.PhF, {
      label: "HCaptcha Difficulty",
      hideLabel: true,
      value: r,
      options: A.Z,
      onSelectionChange: e => {
        o === c.fw.HCAPTCHA_RQDATA && C(e)
      },
      selectionMode: "single",
      fullWidth: true
    }), (o === c.fw.HCAPTCHA_RQDATA || o === c.fw.SMITE_RQDATA) && (0, a.jsx)(s.Checkbox, {
      checked: null != T && T,
      onChange: e => d(e),
      label: "Should serve invisible?"
    }), "" !== h && (0, a.jsx)(s.pdY, {
      error: h
    })]
  })
}
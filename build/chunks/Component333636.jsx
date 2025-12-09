/** Chunk was on 61323 **/
/** chunk id: 333636, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk238675 = require("./238675.js"),
  Chunk37291 = require("./37291.js");
let C = function(e) {
  let {
    onClose: t,
    transitionState: a
  } = e, [C, c] = l.useState(null), [T, o] = l.useState(null), [p, d] = l.useState(null), [f, h] = l.useState(""), R = l.useCallback(async () => {
    if (C) {
      h("");
      try {
        await (0, u.qy)(C, {
          difficulty: null != T ? T : true,
          should_serve_invisible: null != p ? p : true
        })
      } catch (e) {
        h(e.message)
      }
    }
  }, [C, T, p]);
  return (0, n.jsxs)(s.u_l, {
    title: "Captcha Test Tool",
    actions: [{
      text: "Trigger Captcha",
      onClick: R,
      disabled: !C
    }],
    onClose: t,
    transitionState: a,
    children: [(0, n.jsx)(i.y6, {
      value: C,
      options: r.p,
      onChange: e => {
        e !== u.fw.HCAPTCHA_RQDATA && e !== u.fw.SMITE_RQDATA && d(null), e !== u.fw.HCAPTCHA_RQDATA && o(null), c(e), h("")
      }
    }), C === u.fw.HCAPTCHA_RQDATA && (0, n.jsx)(i.y6, {
      value: T,
      options: r.Z,
      onChange: e => {
        C === u.fw.HCAPTCHA_RQDATA && o(e)
      }
    }), (C === u.fw.HCAPTCHA_RQDATA || C === u.fw.SMITE_RQDATA) && (0, n.jsx)(A.Checkbox, {
      checked: null != p && p,
      onChange: e => d(e),
      label: "Should serve invisible?"
    }), "" !== f && (0, n.jsx)(A.pdY, {
      error: f
    })]
  })
}
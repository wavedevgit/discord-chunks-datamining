/** Chunk was on 48817 **/
/** chunk id: 424584, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk943357 = require("./943357.js"),
  Chunk72817 = require("./72817.js");
let c = function(e) {
  let {
    onClose: t,
    transitionState: l
  } = e, [c, r] = i.useState(null), [C, u] = i.useState(null), [T, d] = i.useState(null), [h, p] = i.useState(""), R = i.useCallback(async () => {
    if (c) {
      p("");
      try {
        await (0, s.v$)(c, {
          difficulty: null != C ? C : true,
          should_serve_invisible: null != T ? T : true
        })
      } catch (e) {
        p(e.message)
      }
    }
  }, [c, C, T]);
  return (0, a.jsxs)(n.aFV, {
    title: "Captcha Test Tool",
    actions: [{
      text: "Trigger Captcha",
      onClick: R,
      disabled: !c
    }],
    onClose: t,
    transitionState: l,
    children: [(0, a.jsx)(o.l6P, {
      label: "Captcha Decider Type",
      hideLabel: true,
      value: c,
      options: A.m,
      onSelectionChange: e => {
        e !== s.Fo.HCAPTCHA_RQDATA && e !== s.Fo.SMITE_RQDATA && d(null), e !== s.Fo.HCAPTCHA_RQDATA && u(null), r(e), p("")
      },
      selectionMode: "single",
      fullWidth: true
    }), c === s.Fo.HCAPTCHA_RQDATA && (0, a.jsx)(o.l6P, {
      label: "HCaptcha Difficulty",
      hideLabel: true,
      value: C,
      options: A.K,
      onSelectionChange: e => {
        c === s.Fo.HCAPTCHA_RQDATA && u(e)
      },
      selectionMode: "single",
      fullWidth: true
    }), (c === s.Fo.HCAPTCHA_RQDATA || c === s.Fo.SMITE_RQDATA) && (0, a.jsx)(o.Checkbox, {
      checked: null != T && T,
      onChange: e => d(e),
      label: "Should serve invisible?"
    }), "" !== h && (0, a.jsx)(o.dzK, {
      error: h
    })]
  })
}
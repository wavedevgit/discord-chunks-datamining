/** Chunk was on 84864 **/
/** chunk id: 333636, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk238675 = require("./238675.js"),
  Chunk37291 = require("./37291.js"),
  Chunk75485 = require("./75485.js");
let c = function(e) {
  let {
    onClose: t,
    transitionState: a
  } = e, [c, A] = s.useState(null), [u, d] = s.useState(null), [C, T] = s.useState(null), [h, p] = s.useState(""), f = async () => {
    if (c) {
      p("");
      try {
        await (0, i.qy)(c, {
          difficulty: null != u ? u : true,
          should_serve_invisible: null != C ? C : true
        })
      } catch (e) {
        p(e.message)
      }
    }
  };
  return (0, n.jsxs)(l.Y0X, {
    transitionState: a,
    parentComponent: "CaptchaTestModal",
    children: [(0, n.jsxs)(l.xBx, {
      className: o.header,
      children: [(0, n.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: "Captcha Test Tool"
      }), (0, n.jsx)(l.olH, {
        onClick: t
      })]
    }), (0, n.jsxs)(l.hzk, {
      className: o.content,
      children: [(0, n.jsx)(l.q4e, {
        value: c,
        options: r.p,
        onChange: e => {
          e !== i.fw.HCAPTCHA_RQDATA && e !== i.fw.SMITE_RQDATA && T(null), e !== i.fw.HCAPTCHA_RQDATA && d(null), A(e), p("")
        }
      }), c === i.fw.HCAPTCHA_RQDATA && (0, n.jsx)(l.q4e, {
        value: u,
        options: r.Z,
        onChange: e => {
          c === i.fw.HCAPTCHA_RQDATA && d(e)
        }
      }), (c === i.fw.HCAPTCHA_RQDATA || c === i.fw.SMITE_RQDATA) && (0, n.jsx)(l.Checkbox, {
        checked: null != C && C,
        onChange: e => T(e),
        label: "Should serve invisible?"
      })]
    }), (0, n.jsxs)(l.mzw, {
      className: o.footer,
      children: [(0, n.jsx)(l.Button, {
        variant: "primary",
        text: "Trigger Captcha",
        onClick: f,
        disabled: !c
      }), "" !== h && (0, n.jsx)(l.pdY, {
        error: h
      })]
    })]
  })
}
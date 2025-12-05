/** Chunk was on 61323 **/
/** chunk id: 333636, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk238675 = require("./238675.js"),
  Chunk37291 = require("./37291.js"),
  Chunk75485 = require("./75485.js");
let A = function(e) {
  let {
    onClose: t,
    transitionState: a
  } = e, [A, u] = s.useState(null), [d, C] = s.useState(null), [T, h] = s.useState(null), [p, f] = s.useState(""), R = async () => {
    if (A) {
      f("");
      try {
        await (0, r.qy)(A, {
          difficulty: null != d ? d : true,
          should_serve_invisible: null != T ? T : true
        })
      } catch (e) {
        f(e.message)
      }
    }
  };
  return (0, n.jsxs)(i.Y0X, {
    transitionState: a,
    parentComponent: "CaptchaTestModal",
    children: [(0, n.jsxs)(i.xBx, {
      className: c.header,
      children: [(0, n.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: "Captcha Test Tool"
      }), (0, n.jsx)(i.olH, {
        onClick: t
      })]
    }), (0, n.jsxs)(i.hzk, {
      className: c.content,
      children: [(0, n.jsx)(l.y6, {
        value: A,
        options: o.p,
        onChange: e => {
          e !== r.fw.HCAPTCHA_RQDATA && e !== r.fw.SMITE_RQDATA && h(null), e !== r.fw.HCAPTCHA_RQDATA && C(null), u(e), f("")
        }
      }), A === r.fw.HCAPTCHA_RQDATA && (0, n.jsx)(l.y6, {
        value: d,
        options: o.Z,
        onChange: e => {
          A === r.fw.HCAPTCHA_RQDATA && C(e)
        }
      }), (A === r.fw.HCAPTCHA_RQDATA || A === r.fw.SMITE_RQDATA) && (0, n.jsx)(i.Checkbox, {
        checked: null != T && T,
        onChange: e => h(e),
        label: "Should serve invisible?"
      })]
    }), (0, n.jsxs)(i.mzw, {
      className: c.footer,
      children: [(0, n.jsx)(i.Button, {
        variant: "primary",
        text: "Trigger Captcha",
        onClick: R,
        disabled: !A
      }), "" !== p && (0, n.jsx)(i.pdY, {
        error: p
      })]
    })]
  })
}
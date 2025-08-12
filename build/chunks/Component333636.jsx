/** Chunk was on 61323 **/
/** chunk id: 333636, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk238675 = require("./238675.js"),
  Chunk37291 = require("./37291.js"),
  Chunk484610 = require("./484610.js");
let c = function(e) {
  let {
    onClose: t,
    transitionState: a
  } = e, [c, A] = s.useState(null), [d, u] = s.useState(null), [T, C] = s.useState(null), [h, p] = s.useState(""), f = async () => {
    if (c) {
      p("");
      try {
        await (0, r.qy)(c, {
          difficulty: null != d ? d : true,
          should_serve_invisible: null != T ? T : true
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
      children: [(0, n.jsx)(l.X6q, {
        variant: "heading-lg/semibold",
        children: "Captcha Test Tool"
      }), (0, n.jsx)(l.olH, {
        onClick: t
      })]
    }), (0, n.jsxs)(l.hzk, {
      className: o.content,
      children: [(0, n.jsx)(l.q4e, {
        value: c,
        options: i.p,
        onChange: e => {
          e !== r.fw.HCAPTCHA_RQDATA && e !== r.fw.SMITE_RQDATA && C(null), e !== r.fw.HCAPTCHA_RQDATA && u(null), A(e), p("")
        }
      }), c === r.fw.HCAPTCHA_RQDATA && (0, n.jsx)(l.q4e, {
        value: d,
        options: i.Z,
        onChange: e => {
          c === r.fw.HCAPTCHA_RQDATA && u(e)
        }
      }), (c === r.fw.HCAPTCHA_RQDATA || c === r.fw.SMITE_RQDATA) && (0, n.jsx)(l.XZJ, {
        value: null != T && T,
        onChange: (e, t) => C(t),
        children: (0, n.jsx)(l.Text, {
          variant: "text-md/normal",
          children: "Should serve invisible?"
        })
      })]
    }), (0, n.jsxs)(l.mzw, {
      className: o.footer,
      children: [(0, n.jsx)(l.zxk, {
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
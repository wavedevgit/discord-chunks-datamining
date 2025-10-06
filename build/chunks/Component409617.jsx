/** Chunk was on 65652 **/
/** chunk id: 409617, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk236289 = require("./236289.js"),
  Chunk788080 = require("./788080.js"),
  Chunk613734 = require("./613734.js"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk708670 = require("./708670.js"),
  Chunk428687 = require("./428687.js");

function N(e) {
  let {
    className: n,
    isDsaEligible: t = false,
    onClose: s,
    onNext: N,
    onBack: j
  } = e, I = (0, u.U0)(), T = (0, r.e7)([m.Z], () => m.Z.getFreeTextAppealReason()), [E, v] = a.useState(""), [f, k] = a.useState(false);
  a.useEffect(() => {
    v(null != T ? T : ""), k(I === g.bK.SOMETHING_ELSE)
  }, [T, I, t]);
  let S = g.RY.map(e => ({
    value: e,
    name: (0, p.ox)(e)
  }));
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(d.xBx, {
      "data-migration-pending": true,
      direction: x.Z.Direction.VERTICAL,
      className: C.header,
      separator: false,
      children: [(0, i.jsx)(d.X6q, {
        className: C.title,
        variant: "heading-xl/semibold",
        children: _.intl.string(_.t["C5q+pa"])
      }), (0, i.jsx)(d.Text, {
        className: C.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: _.intl.string(_.t.VEcRh4)
      }), null != s && (0, i.jsx)(d.olH, {
        "data-migration-pending": true,
        className: C.closeButton,
        onClick: s
      })]
    }), (0, i.jsxs)(d.hzk, {
      "data-migration-pending": true,
      className: l()(h.modalContent, n),
      paddingFix: false,
      children: [(0, i.jsx)(o.Gu, {
        radioPosition: "right",
        radioItemClassName: C.radioItem,
        size: o.l7.NOT_SET,
        value: I,
        options: S,
        onChange: e => {
          let {
            value: n
          } = e;
          k(n === g.bK.SOMETHING_ELSE), n !== g.bK.SOMETHING_ELSE && (v(""), c.Z.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
            userInput: ""
          })), c.Z.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT",
            signal: n
          })
        }
      }), t && f && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.Kx8, {
          rows: 4,
          maxLength: 1024,
          placeholder: _.intl.string(_.t.bQrZIC),
          value: E,
          onChange: v,
          autoFocus: true
        }), (0, i.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "header-muted",
          children: _.intl.string(_.t.xfNY3N)
        })]
      }), (0, i.jsx)(d.Text, {
        variant: "text-sm/normal",
        className: h.disclaimer,
        children: _.intl.format(_.t["8k9GCQ"], {})
      })]
    }), (0, i.jsx)(d.mzw, {
      "data-migration-pending": true,
      children: (0, i.jsxs)(d.hE2, {
        direction: "horizontal-reverse",
        children: [(0, i.jsx)(d.zxk, {
          variant: "primary",
          text: _.intl.string(_.t.PDTjLC),
          onClick: () => {
            c.Z.dispatch({
              type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
              userInput: E
            }), null == N || N()
          }
        }), (0, i.jsx)(d.zxk, {
          variant: "secondary",
          text: _.intl.string(_.t["13/7kZ"]),
          onClick: () => {
            c.Z.dispatch({
              type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
              userInput: E
            }), null == j || j()
          }
        })]
      })
    })]
  })
}
/** Chunk was on 65652 **/
/** chunk id: 409617, original params: n,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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

function C(n) {
  let {
    className: e,
    isDsaEligible: i = false,
    onClose: s,
    onNext: C,
    onBack: j
  } = n, _ = (0, g.U0)(), E = (0, r.e7)([x.Z], () => x.Z.getFreeTextAppealReason()), [I, v] = a.useState(""), [T, S] = a.useState(false);
  a.useEffect(() => {
    v(null != E ? E : ""), S(_ === p.bK.SOMETHING_ELSE)
  }, [E, _, i]);
  let A = p.RY.map(n => ({
    value: n,
    name: (0, m.ox)(n)
  }));
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(o.xBx, {
      "data-migration-pending": true,
      direction: d.Z.Direction.VERTICAL,
      className: N.header,
      separator: false,
      children: [(0, t.jsx)(o.Heading, {
        className: N.title,
        variant: "heading-xl/semibold",
        children: u.intl.string(u.t["C5q+pW"])
      }), (0, t.jsx)(o.Text, {
        className: N.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: u.intl.string(u.t.VEcRhw)
      }), null != s && (0, t.jsx)(o.olH, {
        "data-migration-pending": true,
        className: N.closeButton,
        onClick: s
      })]
    }), (0, t.jsxs)(o.hzk, {
      "data-migration-pending": true,
      className: l()(h.modalContent, e),
      paddingFix: false,
      children: [(0, t.jsx)(o.FXm, {
        value: _,
        options: A,
        onChange: n => {
          S(n === p.bK.SOMETHING_ELSE), n !== p.bK.SOMETHING_ELSE && (v(""), c.Z.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
            userInput: ""
          })), c.Z.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT",
            signal: n
          })
        }
      }), i && T && (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(o.Kx8, {
          rows: 4,
          maxLength: 1024,
          placeholder: u.intl.string(u.t.bQrZIN),
          value: I,
          onChange: v,
          autoFocus: true
        }), (0, t.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-muted",
          children: u.intl.string(u.t.xfNY3L)
        })]
      }), (0, t.jsx)(o.Text, {
        variant: "text-sm/normal",
        className: h.disclaimer,
        children: u.intl.format(u.t["8k9GCW"], {})
      })]
    }), (0, t.jsx)(o.mzw, {
      "data-migration-pending": true,
      children: (0, t.jsxs)(o.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [(0, t.jsx)(o.Button, {
          variant: "primary",
          text: u.intl.string(u.t.PDTjLN),
          onClick: () => {
            c.Z.dispatch({
              type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
              userInput: I
            }), null == C || C()
          }
        }), (0, t.jsx)(o.Button, {
          variant: "secondary",
          text: u.intl.string(u.t["13/7kX"]),
          onClick: () => {
            c.Z.dispatch({
              type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
              userInput: I
            }), null == j || j()
          }
        })]
      })
    })]
  })
}
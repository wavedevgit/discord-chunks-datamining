/** Chunk was on 65652 **/
/** chunk id: 451426, original params: e,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk103879 = require("./103879.js"),
  Chunk236289 = require("./236289.js"),
  Chunk788080 = require("./788080.js"),
  Chunk613734 = require("./613734.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk545833 = require("./545833.js"),
  Chunk186425 = require("./186425.js");

function N(e) {
  let {
    className: n,
    isDsaEligible: i,
    onClose: N,
    onNext: C,
    onBack: j
  } = e, _ = (0, s.e7)([d.Z], () => d.Z.getAppealClassificationId()), {
    classification: E
  } = (0, m.YG)(null != _ ? _ : g.lds), v = (0, x.c7)(null == E ? true : E.description), I = (0, s.e7)([d.Z], () => d.Z.getIsSubmitting()), T = (0, s.e7)([d.Z], () => d.Z.getAppealSignal()), S = (0, s.e7)([d.Z], () => d.Z.getFreeTextAppealReason()), [k, A] = a.useState(false), [Z, L] = a.useState(""), P = a.useCallback(e => {
    r.Z.dispatch({
      type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
      userInput: e
    })
  }, []), b = a.useCallback(async () => {
    if (null !== _) try {
      L(""), await c.uR(_, T, S), null == C || C()
    } catch (n) {
      var e;
      L((0, x.Zs)(null == (e = n.body) ? true : e.code))
    }
  }, [_, T, S, C]);
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(l.xBx, {
      "data-migration-pending": true,
      direction: o.Z.Direction.VERTICAL,
      className: h.header,
      separator: false,
      children: [(0, t.jsx)(l.X6q, {
        className: h.title,
        variant: "heading-xl/semibold",
        children: p.intl.string(p.t["C5q+pa"])
      }), (0, t.jsx)(l.Text, {
        className: h.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: p.intl.string(p.t["G2g/g4"])
      }), null != N && (0, t.jsx)(l.olH, {
        "data-migration-pending": true,
        className: h.closeButton,
        onClick: N
      })]
    }), (0, t.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: n,
      paddingFix: false,
      children: [(0, t.jsx)("ul", {
        className: u.listContainer,
        children: [(0, x.ox)(T), S].filter(e => e.length > 0).map((e, n) => (0, t.jsx)("li", {
          className: u.listItem,
          children: (0, t.jsx)(l.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: e
          })
        }, n))
      }), i && (0, t.jsx)("div", {
        className: u.anchorContainer,
        children: (0, t.jsx)(l.eee, {
          onClick: () => A(e => !e),
          children: (0, t.jsx)(l.X6q, {
            variant: "heading-md/normal",
            color: "text-link",
            children: S.length > 0 ? p.intl.string(p.t.tnE3bW) : p.intl.string(p.t.uoQFIi)
          })
        })
      }), k && i && (0, t.jsx)("div", {
        className: u.inputContainer,
        children: (0, t.jsx)(l.Kx8, {
          value: S,
          onChange: P
        })
      }), (0, t.jsx)("div", {
        className: h.policyContainer,
        children: (0, t.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: v
        })
      }), (0, t.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: u.footerText,
        children: p.intl.string(p.t.d6qgY2)
      })]
    }), (0, t.jsxs)(l.mzw, {
      "data-migration-pending": true,
      direction: o.Z.Direction.VERTICAL,
      children: ["" !== Z && (0, t.jsx)(l.Text, {
        className: u.errorText,
        variant: "text-lg/normal",
        color: "text-danger",
        children: Z
      }), (0, t.jsx)("div", {
        className: u.buttonContainer,
        children: (0, t.jsxs)(l.hE2, {
          direction: "horizontal-reverse",
          children: [(0, t.jsx)(l.zxk, {
            variant: "secondary",
            text: p.intl.string(p.t["13/7kZ"]),
            onClick: j,
            disabled: I
          }), (0, t.jsx)(l.zxk, {
            variant: "critical-primary",
            text: p.intl.string(p.t.geKm7u),
            onClick: b,
            loading: I
          })]
        })
      })]
    })]
  })
}
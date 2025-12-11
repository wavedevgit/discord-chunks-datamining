/** Chunk was on 65652 **/
/** chunk id: 451426, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk210097 = require("./210097.js"),
  Chunk420418 = require("./420418.js");

function N(n) {
  let {
    className: t,
    isDsaEligible: e,
    onClose: N,
    onNext: C,
    onBack: j
  } = n, _ = (0, s.e7)([d.Z], () => d.Z.getAppealClassificationId()), {
    classification: E
  } = (0, m.YG)(null != _ ? _ : g.lds), I = (0, x.c7)(null == E ? true : E.description), v = (0, s.e7)([d.Z], () => d.Z.getIsSubmitting()), T = (0, s.e7)([d.Z], () => d.Z.getAppealSignal()), S = (0, s.e7)([d.Z], () => d.Z.getFreeTextAppealReason()), [A, k] = a.useState(false), [Z, f] = a.useState(""), L = a.useCallback(n => {
    r.Z.dispatch({
      type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
      userInput: n
    })
  }, []), P = a.useCallback(async () => {
    if (null !== _) try {
      f(""), await c.uR(_, T, S), null == C || C()
    } catch (t) {
      var n;
      f((0, x.Zs)(null == (n = t.body) ? true : n.code))
    }
  }, [_, T, S, C]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(l.xBx, {
      "data-migration-pending": true,
      direction: o.Z.Direction.VERTICAL,
      className: h.header,
      separator: false,
      children: [(0, i.jsx)(l.Heading, {
        className: h.title,
        variant: "heading-xl/semibold",
        children: u.intl.string(u.t["C5q+pW"])
      }), (0, i.jsx)(l.Text, {
        className: h.subtitle,
        color: "text-default",
        variant: "text-md/normal",
        children: u.intl.string(u.t["G2g/g5"])
      }), null != N && (0, i.jsx)(l.olH, {
        "data-migration-pending": true,
        className: h.closeButton,
        onClick: N
      })]
    }), (0, i.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: t,
      paddingFix: false,
      children: [(0, i.jsx)("ul", {
        className: p.listContainer,
        children: [(0, x.ox)(T), S].filter(n => n.length > 0).map((n, t) => (0, i.jsx)("li", {
          className: p.listItem,
          children: (0, i.jsx)(l.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: n
          })
        }, t))
      }), e && (0, i.jsx)("div", {
        className: p.anchorContainer,
        children: (0, i.jsx)(l.Anchor, {
          onClick: () => k(n => !n),
          children: (0, i.jsx)(l.Heading, {
            variant: "heading-md/normal",
            color: "text-link",
            children: S.length > 0 ? u.intl.string(u.t.tnE3bZ) : u.intl.string(u.t.uoQFIp)
          })
        })
      }), A && e && (0, i.jsx)("div", {
        className: p.inputContainer,
        children: (0, i.jsx)(l.Kx8, {
          value: S,
          onChange: L
        })
      }), (0, i.jsx)("div", {
        className: h.policyContainer,
        children: (0, i.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: I
        })
      }), (0, i.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        className: p.footerText,
        children: u.intl.string(u.t["d6qgY/"])
      })]
    }), (0, i.jsxs)(l.mzw, {
      "data-migration-pending": true,
      direction: o.Z.Direction.VERTICAL,
      children: ["" !== Z && (0, i.jsx)(l.Text, {
        className: p.errorText,
        variant: "text-lg/normal",
        color: "text-feedback-critical",
        children: Z
      }), (0, i.jsx)("div", {
        className: p.buttonContainer,
        children: (0, i.jsxs)(l.ButtonGroup, {
          direction: "horizontal-reverse",
          children: [(0, i.jsx)(l.Button, {
            variant: "secondary",
            text: u.intl.string(u.t["13/7kX"]),
            onClick: j,
            disabled: v
          }), (0, i.jsx)(l.Button, {
            variant: "critical-primary",
            text: u.intl.string(u.t.geKm7t),
            onClick: P,
            loading: v
          })]
        })
      })]
    })]
  })
}
/** Chunk was on 65652 **/
/** chunk id: 451426, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(e) {
  let {
    className: n,
    isDsaEligible: t,
    onClose: g,
    onNext: C,
    onBack: N
  } = e, j = (0, s.e7)([d.Z], () => d.Z.getAppealClassificationId()), {
    classification: I
  } = (0, m.YG)(null != j ? j : p.lds), E = (0, x.c7)(null == I ? true : I.description), T = (0, s.e7)([d.Z], () => d.Z.getIsSubmitting()), v = (0, s.e7)([d.Z], () => d.Z.getAppealSignal()), f = (0, s.e7)([d.Z], () => d.Z.getFreeTextAppealReason()), [S, k] = a.useState(false), [A, Z] = a.useState(""), L = a.useCallback(e => {
    r.Z.dispatch({
      type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
      userInput: e
    })
  }, []), b = a.useCallback(async () => {
    if (null !== j) try {
      Z(""), await c.uR(j, v, f), null == C || C()
    } catch (n) {
      var e;
      Z((0, x.Zs)(null == (e = n.body) ? true : e.code))
    }
  }, [j, v, f, C]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(l.xBx, {
      "data-migration-pending": true,
      direction: o.Z.Direction.VERTICAL,
      className: h.header,
      separator: false,
      children: [(0, i.jsx)(l.X6q, {
        className: h.title,
        variant: "heading-xl/semibold",
        children: u.intl.string(u.t["C5q+pa"])
      }), (0, i.jsx)(l.Text, {
        className: h.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: u.intl.string(u.t["G2g/g4"])
      }), null != g && (0, i.jsx)(l.olH, {
        className: h.closeButton,
        onClick: g
      })]
    }), (0, i.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: n,
      paddingFix: false,
      children: [(0, i.jsx)("ul", {
        className: _.listContainer,
        children: [(0, x.ox)(v), f].filter(e => e.length > 0).map((e, n) => (0, i.jsx)("li", {
          className: _.listItem,
          children: (0, i.jsx)(l.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: e
          })
        }, n))
      }), t && (0, i.jsx)("div", {
        className: _.anchorContainer,
        children: (0, i.jsx)(l.eee, {
          onClick: () => k(e => !e),
          children: (0, i.jsx)(l.X6q, {
            variant: "heading-md/normal",
            color: "text-link",
            children: f.length > 0 ? u.intl.string(u.t.tnE3bW) : u.intl.string(u.t.uoQFIi)
          })
        })
      }), S && t && (0, i.jsx)("div", {
        className: _.inputContainer,
        children: (0, i.jsx)(l.Kx8, {
          value: f,
          onChange: L
        })
      }), (0, i.jsx)("div", {
        className: h.policyContainer,
        children: (0, i.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: E
        })
      }), (0, i.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: _.footerText,
        children: u.intl.string(u.t.d6qgY2)
      })]
    }), (0, i.jsxs)(l.mzw, {
      "data-migration-pending": true,
      direction: o.Z.Direction.VERTICAL,
      children: ["" !== A && (0, i.jsx)(l.Text, {
        className: _.errorText,
        variant: "text-lg/normal",
        color: "text-danger",
        children: A
      }), (0, i.jsx)("div", {
        className: _.buttonContainer,
        children: (0, i.jsxs)(l.hE2, {
          direction: "horizontal-reverse",
          children: [(0, i.jsx)(l.zxk, {
            variant: "secondary",
            text: u.intl.string(u.t["13/7kZ"]),
            onClick: N,
            disabled: T
          }), (0, i.jsx)(l.zxk, {
            variant: "critical-primary",
            text: u.intl.string(u.t.geKm7u),
            onClick: b,
            loading: T
          })]
        })
      })]
    })]
  })
}
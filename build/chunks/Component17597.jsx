/** Chunk was on 90360 **/
/** chunk id: 17597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk793030 = require("./793030.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk138201 = require("./138201.jsx"),
  Chunk210825 = require("./210825.js"),
  Chunk788080 = require("./788080.js"),
  Chunk420846 = require("./420846.js"),
  Chunk63063 = require("./63063.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk352138 = require("./352138.js"),
  Chunk629235 = require("./629235.js"),
  Chunk981631 = require("./981631.js"),
  Chunk398158 = require("./398158.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk70402 = require("./70402.js"),
  Chunk736056 = require("./736056.js");
let S = function(e) {
  let {
    transitionState: t,
    entryPoint: n,
    onClose: S,
    onComplete: E,
    dismissable: T,
    classificationId: O
  } = e, [N, P] = r.useState(o.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), I = r.useRef(N), [w, k] = (0, c.US)([N], true, true), R = r.useMemo(() => (0, i.Z)(), []), A = r.useRef(false), D = (0, m.GE)();
  r.useEffect(() => {
    I.current = w
  }, [w]);
  let {
    loading: Z,
    ageVerificationMethods: M
  } = (0, b.Z)({
    onClose: () => {
      null == E || E(), S()
    },
    onMethodClick: () => {
      P(o.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE)
    },
    classificationId: O
  });
  return r.useLayoutEffect(() => () => {
    if (A.current) return;
    let e = I.current;
    null != e && (A.current = true, p.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), r.useEffect(() => {
    (0, f.lA)(R, f.d_.EXPRESSIVE_PRIMARY, n)
  }, [R, n]), (0, a.jsx)(l.ExpressiveModal, {
    transitionState: t,
    onClose: S,
    gradientColor: "blue",
    dismissable: T,
    graphic: {
      type: "image",
      src: C.Z
    },
    title: _.intl.string(_.t.JHNunp),
    subtitle: D ? _.intl.string(j.default["1/6wtb"]) : _.intl.format(j.default.RpMIT0, {
      handleOnHelpUrlHook: () => {
        x.Z.openUrl(h.Z.getArticleURL(v.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, f.x3)(R, f.d_.EXPRESSIVE_PRIMARY, f.sU.LEARN_MORE)
      }
    }),
    actionBarInput: D ? (0, a.jsx)(s.Text, {
      variant: "text-xs/medium",
      children: _.intl.format(j.default.htWh1N, {
        handleOnHelpUrlHook: () => {
          x.Z.openUrl(h.Z.getArticleURL(v.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, f.x3)(R, f.d_.EXPRESSIVE_PRIMARY, f.sU.LEARN_MORE)
        }
      })
    }) : (0, a.jsx)(s.Avr, {
      size: "sm",
      textVariant: "text-sm/medium",
      text: _.intl.string(_.t["2jxGen"]),
      onClick: () => {
        (0, f.x3)(R, f.d_.EXPRESSIVE_PRIMARY, f.sU.LOG_OUT), (0, u.R)("age_verification_get_started_modal")
      }
    }),
    children: (0, a.jsxs)(s.Kqy, {
      direction: "vertical",
      gap: 16,
      children: [(0, a.jsxs)(s.Kqy, {
        fullWidth: false,
        direction: "horizontal",
        gap: 8,
        padding: {
          top: 8,
          bottom: 8,
          left: 12,
          right: 12
        },
        align: "center",
        className: y.dataAssurance,
        children: [(0, a.jsx)(s.d3s, {
          size: "lg",
          color: "currentColor"
        }), (0, a.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-feedback-info",
          children: _.intl.string(j.default.ar3a3t)
        })]
      }), null == M || 0 === M.length ? (0, a.jsxs)(s.Kqy, {
        direction: "vertical",
        align: "center",
        gap: 16,
        children: [(0, a.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: _.intl.string(j.default.cR6339)
        }), (0, a.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: _.intl.string(j.default.hDvmYG),
          onClick: () => {
            (0, g.Jh)()
          }
        })]
      }) : (0, a.jsx)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: M.map(e => {
          let {
            title: t,
            description: n,
            onClick: r
          } = e;
          return (0, a.jsx)(d.JZ, {
            variant: "clickable",
            title: t,
            description: n,
            buttonDisabled: Z,
            onButtonPress: () => r(R)
          }, t)
        })
      })]
    })
  })
}
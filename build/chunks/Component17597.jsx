/** Chunk was on 96604 **/
/** chunk id: 17597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
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
  Chunk800530 = require("./800530.js"),
  Chunk153177 = require("./153177.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk70402 = require("./70402.js"),
  Chunk736056 = require("./736056.js");
let E = function(e) {
  let {
    transitionState: t,
    entryPoint: n,
    onClose: E,
    onComplete: O,
    dismissable: T,
    classificationId: N
  } = e, [P, I] = r.useState(o.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), w = r.useRef(P), [k, R] = (0, c.US)([P], true, true), A = r.useMemo(() => (0, l.Z)(), []), D = r.useRef(false), Z = (0, m.GE)();
  r.useEffect(() => {
    w.current = k
  }, [k]);
  let {
    loading: M,
    ageVerificationMethods: L
  } = (0, b.Z)({
    onClose: () => {
      null == O || O(), E()
    },
    onMethodClick: () => {
      I(o.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE)
    },
    classificationId: N
  });
  return r.useLayoutEffect(() => () => {
    if (D.current) return;
    let e = w.current;
    null != e && (D.current = true, p.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), r.useEffect(() => {
    (0, f.lA)(A, f.d_.EXPRESSIVE_PRIMARY, n)
  }, [A, n]), (0, a.jsx)(i.ExpressiveModal, {
    transitionState: t,
    onClose: E,
    gradientColor: "blue",
    dismissable: T,
    graphic: {
      type: "image",
      src: S.Z
    },
    title: y.intl.string(y.t.JHNunj),
    subtitle: Z ? y.intl.string(_.default["1/6wta"]) : y.intl.format(_.default.RpMIT0, {
      handleOnHelpUrlHook: () => {
        x.Z.openUrl(h.Z.getArticleURL(v.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, f.x3)(A, f.d_.EXPRESSIVE_PRIMARY, f.sU.LEARN_MORE)
      }
    }),
    actionBarInput: Z ? (0, a.jsx)(s.Text, {
      variant: "text-xs/medium",
      children: y.intl.format(_.default.htWh1G, {
        handleOnHelpUrlHook: () => {
          x.Z.openUrl(j.sQ.LEARN_MORE_UU_APPEAL_LINK), (0, f.x3)(A, f.d_.EXPRESSIVE_PRIMARY, f.sU.LEARN_MORE)
        }
      })
    }) : (0, a.jsx)(s.Avr, {
      size: "sm",
      textVariant: "text-sm/medium",
      text: y.intl.string(y.t["2jxGer"]),
      onClick: () => {
        (0, f.x3)(A, f.d_.EXPRESSIVE_PRIMARY, f.sU.LOG_OUT), (0, u.R)("age_verification_get_started_modal")
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
        className: C.dataAssurance,
        children: [(0, a.jsx)(s.d3s, {
          size: "lg",
          color: "currentColor"
        }), (0, a.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-feedback-info",
          children: y.intl.string(_.default.ar3a3q)
        })]
      }), null == L || 0 === L.length ? (0, a.jsxs)(s.Kqy, {
        direction: "vertical",
        align: "center",
        gap: 16,
        children: [(0, a.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: y.intl.string(_.default.cR6336)
        }), (0, a.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: y.intl.string(_.default.hDvmYP),
          onClick: () => {
            (0, g.Jh)()
          }
        })]
      }) : (0, a.jsx)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: L.map(e => {
          let {
            title: t,
            description: n,
            onClick: r
          } = e;
          return (0, a.jsx)(d.JZ, {
            variant: "clickable",
            title: t,
            description: n,
            buttonDisabled: M,
            onButtonPress: () => r(A)
          }, t)
        })
      })]
    })
  })
}
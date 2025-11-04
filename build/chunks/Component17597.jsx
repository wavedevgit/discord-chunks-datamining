/** Chunk was on 50614 **/
/** chunk id: 17597, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => C
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

function O(t) {
  let {
    modalSessionId: e,
    entryPoint: n
  } = t;
  return (0, E.GE)() ? (0, i.jsx)(s.Text, {
    variant: "text-xs/medium",
    children: I.intl.format(p.default.htWh1G, {
      handleOnHelpUrlHook: () => {
        R.Z.openUrl(m.sQ.LEARN_MORE_UU_APPEAL_LINK), (0, A.x3)(e, A.d_.EXPRESSIVE_PRIMARY, A.sU.LEARN_MORE)
      }
    })
  }) : n === A.cU.SAFETY_FLOWS ? (0, i.jsx)(s.Avr, {
    size: "sm",
    textVariant: "text-sm/medium",
    text: I.intl.string(I.t["2jxGer"]),
    onClick: () => {
      (0, A.x3)(e, A.d_.EXPRESSIVE_PRIMARY, A.sU.LOG_OUT), (0, d.R)("age_verification_get_started_modal")
    }
  }) : null
}
let C = function(t) {
  let {
    transitionState: e,
    entryPoint: n,
    onClose: d,
    onComplete: m,
    dismissable: C,
    classificationId: v
  } = t, [M, U] = l.useState(o.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), P = l.useRef(M), [L, V] = (0, c.US)([M], true, true), b = l.useMemo(() => (0, r.Z)(), []), j = l.useRef(false), Z = (0, E.GE)();
  l.useEffect(() => {
    P.current = L
  }, [L]);
  let {
    loading: D,
    ageVerificationMethods: G
  } = (0, x.Z)({
    onClose: () => {
      null == m || m(), d()
    },
    onMethodClick: () => {
      U(o.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE)
    },
    classificationId: v
  });
  return l.useLayoutEffect(() => () => {
    if (j.current) return;
    let t = P.current;
    null != t && (j.current = true, _.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: t
    }))
  }, []), l.useEffect(() => {
    (0, A.lA)(b, A.d_.EXPRESSIVE_PRIMARY, n)
  }, [b, n]), (0, i.jsx)(a.ExpressiveModal, {
    transitionState: e,
    onClose: d,
    gradientColor: "blue",
    dismissable: C,
    graphic: {
      type: "image",
      src: T.Z
    },
    title: I.intl.string(I.t.JHNunj),
    subtitle: Z ? I.intl.string(p.default["1/6wta"]) : I.intl.format(p.default.RpMIT0, {
      handleOnHelpUrlHook: () => {
        R.Z.openUrl(f.Z.getArticleURL(S.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, A.x3)(b, A.d_.EXPRESSIVE_PRIMARY, A.sU.LEARN_MORE)
      }
    }),
    actionBarInput: (0, i.jsx)(O, {
      modalSessionId: b,
      entryPoint: n
    }),
    children: (0, i.jsxs)(s.Kqy, {
      direction: "vertical",
      gap: 16,
      children: [(0, i.jsxs)(s.Kqy, {
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
        className: h.dataAssurance,
        children: [(0, i.jsx)(s.d3s, {
          size: "lg",
          color: "currentColor"
        }), (0, i.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-feedback-info",
          children: I.intl.string(p.default.ar3a3q)
        })]
      }), null == G || 0 === G.length ? (0, i.jsxs)(s.Kqy, {
        direction: "vertical",
        align: "center",
        gap: 16,
        children: [(0, i.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: I.intl.string(p.default.cR6336)
        }), (0, i.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: I.intl.string(p.default.hDvmYP),
          onClick: () => {
            (0, g.Jh)()
          }
        })]
      }) : (0, i.jsx)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: G.map(t => {
          let {
            title: e,
            description: n,
            onClick: l
          } = t;
          return (0, i.jsx)(u.JZ, {
            variant: "clickable",
            title: e,
            description: n,
            buttonDisabled: D,
            onButtonPress: () => l(b)
          }, e)
        })
      })]
    })
  })
}
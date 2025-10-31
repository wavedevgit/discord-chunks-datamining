/** Chunk was on 50614 **/
/** chunk id: 17597, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => O
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
let O = function(t) {
  let {
    transitionState: e,
    entryPoint: n,
    onClose: O,
    onComplete: v,
    dismissable: C,
    classificationId: M
  } = t, [U, P] = l.useState(o.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), V = l.useRef(U), [b, L] = (0, c.US)([U], true, true), j = l.useMemo(() => (0, r.Z)(), []), Z = l.useRef(false), D = (0, E.GE)();
  l.useEffect(() => {
    V.current = b
  }, [b]);
  let {
    loading: N,
    ageVerificationMethods: k
  } = (0, x.Z)({
    onClose: () => {
      null == v || v(), O()
    },
    onMethodClick: () => {
      P(o.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE)
    },
    classificationId: M
  });
  return l.useLayoutEffect(() => () => {
    if (Z.current) return;
    let t = V.current;
    null != t && (Z.current = true, _.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: t
    }))
  }, []), l.useEffect(() => {
    (0, A.lA)(j, A.d_.EXPRESSIVE_PRIMARY, n)
  }, [j, n]), (0, i.jsx)(a.ExpressiveModal, {
    transitionState: e,
    onClose: O,
    gradientColor: "blue",
    dismissable: C,
    graphic: {
      type: "image",
      src: T.Z
    },
    title: S.intl.string(S.t.JHNunj),
    subtitle: D ? S.intl.string(m.default["1/6wta"]) : S.intl.format(m.default.RpMIT0, {
      handleOnHelpUrlHook: () => {
        R.Z.openUrl(f.Z.getArticleURL(p.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, A.x3)(j, A.d_.EXPRESSIVE_PRIMARY, A.sU.LEARN_MORE)
      }
    }),
    actionBarInput: D ? (0, i.jsx)(s.Text, {
      variant: "text-xs/medium",
      children: S.intl.format(m.default.htWh1G, {
        handleOnHelpUrlHook: () => {
          R.Z.openUrl(h.sQ.LEARN_MORE_UU_APPEAL_LINK), (0, A.x3)(j, A.d_.EXPRESSIVE_PRIMARY, A.sU.LEARN_MORE)
        }
      })
    }) : (0, i.jsx)(s.Avr, {
      size: "sm",
      textVariant: "text-sm/medium",
      text: S.intl.string(S.t["2jxGer"]),
      onClick: () => {
        (0, A.x3)(j, A.d_.EXPRESSIVE_PRIMARY, A.sU.LOG_OUT), (0, u.R)("age_verification_get_started_modal")
      }
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
        className: I.dataAssurance,
        children: [(0, i.jsx)(s.d3s, {
          size: "lg",
          color: "currentColor"
        }), (0, i.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-feedback-info",
          children: S.intl.string(m.default.ar3a3q)
        })]
      }), null == k || 0 === k.length ? (0, i.jsxs)(s.Kqy, {
        direction: "vertical",
        align: "center",
        gap: 16,
        children: [(0, i.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: S.intl.string(m.default.cR6336)
        }), (0, i.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: S.intl.string(m.default.hDvmYP),
          onClick: () => {
            (0, g.Jh)()
          }
        })]
      }) : (0, i.jsx)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: k.map(t => {
          let {
            title: e,
            description: n,
            onClick: l
          } = t;
          return (0, i.jsx)(d.JZ, {
            variant: "clickable",
            title: e,
            description: n,
            buttonDisabled: N,
            onButtonPress: () => l(j)
          }, e)
        })
      })]
    })
  })
}
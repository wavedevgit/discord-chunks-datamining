/** Chunk was on 50614 **/
/** chunk id: 17597, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk81643 = require("./81643.js"),
  Chunk629235 = require("./629235.js"),
  Chunk981631 = require("./981631.js"),
  Chunk800530 = require("./800530.js"),
  Chunk144287 = require("./144287.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk39151 = require("./39151.js"),
  Chunk765896 = require("./765896.js");

function v(t) {
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
    classificationId: M
  } = t, [P, U] = l.useState(o.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), b = l.useRef(P), [L, V] = (0, c.US)([P], true, true), j = l.useMemo(() => (0, r.Z)(), []), Z = l.useRef(false), D = (0, E.GE)();
  l.useEffect(() => {
    b.current = L
  }, [L]);
  let {
    loading: G,
    ageVerificationMethods: y
  } = (0, S.Z)({
    onClose: () => {
      null == m || m(), d()
    },
    onMethodClick: () => {
      U(o.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE)
    },
    classificationId: M
  });
  return l.useLayoutEffect(() => () => {
    if (Z.current) return;
    let t = b.current;
    null != t && (Z.current = true, _.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: t
    }))
  }, []), l.useEffect(() => {
    (0, A.lA)(j, A.d_.EXPRESSIVE_PRIMARY, n)
  }, [j, n]), (0, i.jsx)(a.ExpressiveModal, {
    transitionState: e,
    onClose: d,
    gradientColor: "blue",
    dismissable: C,
    graphic: {
      type: "image",
      src: O.Z
    },
    title: (0, g.B7)(n),
    subtitle: (0, g.s2)(n, () => {
      R.Z.openUrl(f.Z.getArticleURL(h.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, A.x3)(j, A.d_.EXPRESSIVE_PRIMARY, A.sU.LEARN_MORE)
    }, D),
    actionBarInput: (0, i.jsx)(v, {
      modalSessionId: j,
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
        className: T.dataAssurance,
        children: [(0, i.jsx)(s.d3s, {
          size: "lg",
          color: "currentColor"
        }), (0, i.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-feedback-info",
          children: I.intl.string(p.default.ar3a3q)
        })]
      }), null == y || 0 === y.length ? (0, i.jsxs)(s.Kqy, {
        direction: "vertical",
        align: "center",
        gap: 16,
        children: [(0, i.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-subtle",
          children: I.intl.string(p.default.cR6336)
        }), (0, i.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: I.intl.string(p.default.hDvmYP),
          onClick: () => {
            (0, x.Jh)()
          }
        })]
      }) : (0, i.jsx)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: y.map(t => {
          let {
            title: e,
            description: n,
            onClick: l
          } = t;
          return (0, i.jsx)(u.JZ, {
            variant: "clickable",
            title: e,
            description: n,
            buttonDisabled: G,
            onButtonPress: () => l(j)
          }, e)
        })
      })]
    })
  })
}
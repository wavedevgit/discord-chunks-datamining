/** Chunk was on 88499 **/
/** chunk id: 17597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
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
  Chunk629235 = require("./629235.js"),
  Chunk981631 = require("./981631.js"),
  Chunk800530 = require("./800530.js"),
  Chunk563390 = require("./563390.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk70402 = require("./70402.js"),
  Chunk736056 = require("./736056.js");

function E(e) {
  let {
    modalSessionId: t,
    entryPoint: n
  } = e;
  return (0, m.GE)() ? (0, a.jsx)(o.Text, {
    variant: "text-xs/medium",
    children: y.intl.format(_.default.htWh1G, {
      handleOnHelpUrlHook: () => {
        x.Z.openUrl(j.sQ.LEARN_MORE_UU_APPEAL_LINK), (0, f.x3)(t, f.d_.EXPRESSIVE_PRIMARY, f.sU.LEARN_MORE)
      }
    })
  }) : n === f.cU.SAFETY_FLOWS ? (0, a.jsx)(o.Avr, {
    size: "sm",
    textVariant: "text-sm/medium",
    text: y.intl.string(y.t["2jxGer"]),
    onClick: () => {
      (0, f.x3)(t, f.d_.EXPRESSIVE_PRIMARY, f.sU.LOG_OUT), (0, u.R)("age_verification_get_started_modal")
    }
  }) : null
}
let O = function(e) {
  let {
    transitionState: t,
    entryPoint: n,
    onClose: u,
    onComplete: j,
    dismissable: O,
    classificationId: T
  } = e, [N, P] = r.useState(s.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), w = r.useRef(N), [I, k] = (0, c.US)([N], true, true), R = r.useMemo(() => (0, i.Z)(), []), A = r.useRef(false), D = (0, m.GE)();
  r.useEffect(() => {
    w.current = I
  }, [I]);
  let {
    loading: Z,
    ageVerificationMethods: L
  } = (0, b.Z)({
    onClose: () => {
      null == j || j(), u()
    },
    onMethodClick: () => {
      P(s.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE)
    },
    classificationId: T
  });
  return r.useLayoutEffect(() => () => {
    if (A.current) return;
    let e = w.current;
    null != e && (A.current = true, p.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), r.useEffect(() => {
    (0, f.lA)(R, f.d_.EXPRESSIVE_PRIMARY, n)
  }, [R, n]), (0, a.jsx)(l.ExpressiveModal, {
    transitionState: t,
    onClose: u,
    gradientColor: "blue",
    dismissable: O,
    graphic: {
      type: "image",
      src: S.Z
    },
    title: y.intl.string(y.t.JHNunj),
    subtitle: D ? y.intl.string(_.default["1/6wta"]) : y.intl.format(_.default.RpMIT0, {
      handleOnHelpUrlHook: () => {
        x.Z.openUrl(h.Z.getArticleURL(v.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, f.x3)(R, f.d_.EXPRESSIVE_PRIMARY, f.sU.LEARN_MORE)
      }
    }),
    actionBarInput: (0, a.jsx)(E, {
      modalSessionId: R,
      entryPoint: n
    }),
    children: (0, a.jsxs)(o.Kqy, {
      direction: "vertical",
      gap: 16,
      children: [(0, a.jsxs)(o.Kqy, {
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
        children: [(0, a.jsx)(o.d3s, {
          size: "lg",
          color: "currentColor"
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-feedback-info",
          children: y.intl.string(_.default.ar3a3q)
        })]
      }), null == L || 0 === L.length ? (0, a.jsxs)(o.Kqy, {
        direction: "vertical",
        align: "center",
        gap: 16,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-subtle",
          children: y.intl.string(_.default.cR6336)
        }), (0, a.jsx)(o.Button, {
          variant: "primary",
          size: "sm",
          text: y.intl.string(_.default.hDvmYP),
          onClick: () => {
            (0, g.Jh)()
          }
        })]
      }) : (0, a.jsx)(o.Kqy, {
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
            buttonDisabled: Z,
            onButtonPress: () => r(R)
          }, t)
        })
      })]
    })
  })
}
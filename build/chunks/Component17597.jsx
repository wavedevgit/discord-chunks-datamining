/** Chunk was on 22981 **/
/** chunk id: 17597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
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
  Chunk420846 = require("./420846.js"),
  Chunk63063 = require("./63063.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk352138 = require("./352138.js"),
  Chunk629235 = require("./629235.js"),
  Chunk981631 = require("./981631.js"),
  Chunk847678 = require("./847678.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk70402 = require("./70402.js"),
  Chunk736056 = require("./736056.js");
let C = function(e) {
  let {
    transitionState: t,
    entryPoint: n,
    onClose: C,
    onComplete: S,
    dismissable: E
  } = e, [T, O] = r.useState(o.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), N = r.useRef(T), [P, I] = (0, c.US)([T], true, true), w = r.useMemo(() => (0, i.Z)(), []), R = r.useRef(false);
  r.useEffect(() => {
    N.current = P
  }, [P]);
  let {
    loading: k,
    ageVerificationMethods: A
  } = (0, g.Z)(() => {
    null == S || S(), C()
  }, () => {
    O(o.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE)
  });
  return r.useLayoutEffect(() => () => {
    if (R.current) return;
    let e = N.current;
    null != e && (R.current = true, m.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), r.useEffect(() => {
    (0, x.lA)(w, x.d_.EXPRESSIVE_PRIMARY, n)
  }, [w, n]), (0, a.jsx)(l.ExpressiveModal, {
    transitionState: t,
    onClose: C,
    gradientColor: "blue",
    dismissable: E,
    graphic: {
      type: "image",
      src: y.Z
    },
    title: j.intl.string(j.t.JHNunj),
    subtitle: j.intl.format(v.default.RpMIT0, {
      handleOnHelpUrlHook: () => {
        h.Z.openUrl(p.Z.getArticleURL(b.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, x.x3)(w, x.d_.EXPRESSIVE_PRIMARY, x.sU.LEARN_MORE)
      }
    }),
    actionBarInput: (0, a.jsx)(s.Avr, {
      size: "sm",
      textVariant: "text-sm/medium",
      text: j.intl.string(j.t["2jxGer"]),
      onClick: () => {
        (0, x.x3)(w, x.d_.EXPRESSIVE_PRIMARY, x.sU.LOG_OUT), (0, u.R)("age_verification_get_started_modal")
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
        className: _.dataAssurance,
        children: [(0, a.jsx)(s.d3s, {
          size: "lg",
          color: "currentColor"
        }), (0, a.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-feedback-info",
          children: j.intl.string(v.default.ar3a3q)
        })]
      }), null == A || 0 === A.length ? (0, a.jsxs)(s.Kqy, {
        direction: "vertical",
        align: "center",
        gap: 16,
        children: [(0, a.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: j.intl.string(v.default.cR6336)
        }), (0, a.jsx)(s.Button, {
          variant: "primary",
          size: "sm",
          text: j.intl.string(v.default.hDvmYP),
          onClick: () => {
            (0, f.Jh)()
          }
        })]
      }) : (0, a.jsx)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        children: A.map(e => {
          let {
            title: t,
            description: n,
            onClick: r
          } = e;
          return (0, a.jsx)(d.JZ, {
            variant: "clickable",
            title: t,
            description: n,
            buttonDisabled: k,
            onButtonPress: () => r(w)
          }, t)
        })
      })]
    })
  })
}
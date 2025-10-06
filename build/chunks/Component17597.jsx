/** Chunk was on 5938 **/
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
  Chunk131022 = require("./131022.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk450192 = require("./450192.js"),
  Chunk736056 = require("./736056.js");
let C = function(e) {
  let {
    transitionState: t,
    entryPoint: n,
    onClose: C,
    onComplete: E,
    dismissable: S
  } = e, [N, T] = r.useState(s.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), O = r.useRef(N), [P, k] = (0, c.US)([N], true, true), I = r.useMemo(() => (0, i.Z)(), []), w = r.useRef(false);
  r.useEffect(() => {
    O.current = P
  }, [P]);
  let {
    loading: R,
    ageVerificationMethods: A
  } = (0, b.Z)(() => {
    null == E || E(), C()
  }, () => {
    T(s.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE)
  });
  return r.useLayoutEffect(() => () => {
    if (w.current) return;
    let e = O.current;
    null != e && (w.current = true, m.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), r.useEffect(() => {
    (0, x.lA)(I, x.d_.EXPRESSIVE_PRIMARY, n)
  }, [I, n]), (0, a.jsx)(l.ExpressiveModal, {
    transitionState: t,
    onClose: C,
    gradientColor: "blue",
    dismissable: S,
    graphic: {
      type: "image",
      src: y.Z
    },
    title: j.intl.string(j.t.JHNunp),
    subtitle: j.intl.format(v.default.RpMIT0, {
      handleOnHelpUrlHook: () => {
        h.Z.openUrl(p.Z.getArticleURL(g.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, x.x3)(I, x.d_.EXPRESSIVE_PRIMARY, x.sU.LEARN_MORE)
      }
    }),
    actionBarInput: (0, a.jsx)(o.Avr, {
      size: "sm",
      textVariant: "text-sm/medium",
      text: j.intl.string(j.t["2jxGen"]),
      onClick: () => {
        (0, x.x3)(I, x.d_.EXPRESSIVE_PRIMARY, x.sU.LOG_OUT), (0, u.R)("age_verification_get_started_modal")
      }
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
        className: _.dataAssurance,
        children: [(0, a.jsx)(o.d3s, {
          size: "lg",
          color: "currentColor"
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-feedback-info",
          children: j.intl.string(v.default.ar3a3t)
        })]
      }), null == A || 0 === A.length ? (0, a.jsxs)(o.Kqy, {
        direction: "vertical",
        align: "center",
        gap: 16,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: j.intl.string(v.default.cR6339)
        }), (0, a.jsx)(o.zxk, {
          variant: "primary",
          size: "sm",
          text: j.intl.string(v.default.hDvmYG),
          onClick: () => {
            (0, f.J)()
          }
        })]
      }) : (0, a.jsx)(o.Kqy, {
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
            buttonDisabled: R,
            onButtonPress: () => r(I)
          }, t)
        })
      })]
    })
  })
}
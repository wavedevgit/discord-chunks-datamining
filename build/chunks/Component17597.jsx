/** Chunk was on 72853 **/
/** chunk id: 17597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk704215 = require("./704215.js"),
  Chunk667202 = require("./667202.jsx"),
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
  Chunk398158 = require("./398158.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk70402 = require("./70402.js"),
  Chunk765896 = require("./765896.js");
let _ = function(e) {
  let {
    transitionState: t,
    entryPoint: n,
    onClose: _,
    onComplete: O,
    dismissable: A
  } = e, [S, I] = i.useState(a.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), R = i.useRef(S), [w, P] = (0, s.US)([S], true, true), C = i.useMemo(() => (0, l.Z)(), []), N = i.useRef(false);
  i.useEffect(() => {
    R.current = w
  }, [w]);
  let {
    loading: k,
    ageVerificationMethods: T
  } = (0, g.Z)(() => {
    null == O || O(), _()
  }, () => {
    I(a.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE)
  });
  return i.useLayoutEffect(() => () => {
    if (N.current) return;
    let e = R.current;
    null != e && (N.current = true, f.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), i.useEffect(() => {
    (0, m.lA)(C, m.d_.EXPRESSIVE_PRIMARY, n)
  }, [C, n]), (0, r.jsx)(o.I, {
    transitionState: t,
    onClose: _,
    gradientColor: "blue",
    dismissable: A,
    graphic: {
      type: "image",
      src: j.Z
    },
    title: x.intl.string(x.t.JHNunp),
    subtitle: x.intl.format(E.default.RpMIT0, {
      handleOnHelpUrlHook: () => {
        h.Z.openUrl(p.Z.getArticleURL(b.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, m.x3)(C, m.d_.EXPRESSIVE_PRIMARY, m.sU.LEARN_MORE)
      }
    }),
    actionBarInput: (0, r.jsx)(c.Avr, {
      size: "sm",
      textVariant: "text-sm/medium",
      text: x.intl.string(x.t["2jxGen"]),
      onClick: () => {
        (0, m.x3)(C, m.d_.EXPRESSIVE_PRIMARY, m.sU.LOG_OUT), (0, d.R)("age_verification_get_started_modal")
      }
    }),
    children: (0, r.jsxs)(c.Kqy, {
      direction: "vertical",
      gap: 16,
      children: [(0, r.jsxs)(c.Kqy, {
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
        className: v.dataAssurance,
        children: [(0, r.jsx)(c.d3s, {
          size: "lg",
          color: "currentColor"
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "text-feedback-info",
          children: x.intl.string(E.default.ar3a3t)
        })]
      }), null == T || 0 === T.length ? (0, r.jsxs)(c.Kqy, {
        direction: "vertical",
        align: "center",
        gap: 16,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: x.intl.string(E.default.cR6339)
        }), (0, r.jsx)(c.zxk, {
          variant: "primary",
          size: "sm",
          text: x.intl.string(E.default.hDvmYG),
          onClick: () => {
            (0, y.J)()
          }
        })]
      }) : (0, r.jsx)(c.Kqy, {
        direction: "vertical",
        gap: 8,
        children: T.map(e => {
          let {
            title: t,
            description: n,
            onClick: i
          } = e;
          return (0, r.jsx)(u.JZ, {
            variant: "clickable",
            title: t,
            description: n,
            buttonDisabled: k,
            onButtonPress: () => i(C)
          }, t)
        })
      })]
    })
  })
}
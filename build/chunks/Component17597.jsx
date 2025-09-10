/** Chunk was on 50614 **/
/** chunk id: 17597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk704215 = require("./704215.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk138201 = require("./138201.jsx"),
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
let O = function(e) {
  let {
    transitionState: t,
    entryPoint: n,
    onClose: O
  } = e, [R, y] = i.useState(o.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), I = i.useRef(R), [A, S] = (0, d.US)([R], true, true), T = i.useMemo(() => (0, l.Z)(), []), C = i.useRef(false);
  i.useEffect(() => {
    I.current = A
  }, [A]);
  let {
    loading: N,
    ageVerificationMethods: k
  } = (0, h.Z)(O, () => {
    y(o.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE)
  });
  return i.useLayoutEffect(() => () => {
    if (C.current) return;
    let e = I.current;
    null != e && (C.current = true, x.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), i.useEffect(() => {
    (0, _.lA)(T, _.d_.EXPRESSIVE_PRIMARY, n)
  }, [T, n]), (0, r.jsx)(a.I, {
    transitionState: t,
    onClose: O,
    graphic: {
      type: "image",
      src: v.Z
    },
    title: j.intl.string(j.t.JHNunp),
    subtitle: j.intl.format(g.default.RpMIT0, {
      handleOnHelpUrlHook: () => {
        m.Z.openUrl(f.Z.getArticleURL(E.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, _.x3)(T, _.d_.EXPRESSIVE_PRIMARY, _.sU.LEARN_MORE)
      }
    }),
    actionBarInput: (0, r.jsx)(c.Avr, {
      textVariant: "text-xs/medium",
      color: "text-tertiary",
      text: j.intl.string(j.t["2jxGen"]),
      onClick: () => {
        (0, _.x3)(T, _.d_.EXPRESSIVE_PRIMARY, _.sU.LOG_OUT), s.Z.logout("age_verification_get_started_modal")
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
          top: 12,
          bottom: 12,
          left: 8,
          right: 8
        },
        align: "center",
        className: p.dataAssurance,
        children: [(0, r.jsx)(c.d3s, {
          size: "md",
          color: "currentColor"
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-feedback-info",
          children: j.intl.string(g.default.ar3a3t)
        })]
      }), null == k || 0 === k.length ? (0, r.jsxs)(c.Kqy, {
        direction: "vertical",
        align: "center",
        gap: 16,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-secondary",
          children: j.intl.string(g.default.cR6339)
        }), (0, r.jsx)(c.zxk, {
          variant: "primary",
          size: "sm",
          text: j.intl.string(g.default.hDvmYG),
          onClick: () => {
            (0, b.J)()
          }
        })]
      }) : k.map(e => {
        let {
          title: t,
          description: n,
          onClick: i
        } = e;
        return (0, r.jsx)(u.JZ, {
          variant: "clickable",
          title: t,
          description: n,
          buttonDisabled: N,
          onButtonPress: () => i(T)
        }, t)
      })]
    })
  })
}
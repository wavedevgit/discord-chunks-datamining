/** Chunk was on 22477 **/
/** chunk id: 767379, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk158954 = require("./158954.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk632738 = require("./632738.jsx"),
  Chunk627575 = require("./627575.js"),
  Chunk393033 = require("./393033.js"),
  Chunk105428 = require("./105428.js"),
  Chunk975571 = require("./975571.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk295972 = require("./295972.js"),
  Chunk36149 = require("./36149.js"),
  Chunk807734 = require("./807734.js"),
  Chunk652215 = require("./652215.js"),
  Chunk239093 = require("./239093.js"),
  Chunk536242 = require("./536242.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk62959 = require("./62959.js"),
  Chunk700129 = require("./700129.js");

function O(e) {
  let {
    modalSessionId: t,
    entryPoint: n
  } = e;
  return (0, m.W$)() ? (0, a.jsx)(o.Text, {
    variant: "text-xs/medium",
    children: A.intl.format(_.default.htWh1G, {
      handleOnHelpUrlHook: () => {
        f.A.openUrl(y.d$.LEARN_MORE_UU_APPEAL_LINK), (0, x.St)(t, x.WU.EXPRESSIVE_PRIMARY, x._7.LEARN_MORE)
      }
    })
  }) : n === x.q1.SAFETY_FLOWS ? (0, a.jsx)(o.QWc, {
    size: "sm",
    textVariant: "text-sm/medium",
    text: A.intl.string(A.t["2jxGer"]),
    onClick: () => {
      (0, x.St)(t, x.WU.EXPRESSIVE_PRIMARY, x._7.LOG_OUT), (0, u.k)("age_verification_get_started_modal")
    }
  }) : null
}
let E = function(e) {
  let {
    transitionState: t,
    entryPoint: n,
    onClose: u,
    onComplete: y,
    dismissable: E,
    classificationId: N
  } = e, [T, I] = l.useState(s.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), k = l.useRef(T), [w, P] = (0, c.kn)([T], true, true), R = l.useMemo(() => (0, i.A)(), []), D = l.useRef(false), M = (0, m.W$)();
  l.useEffect(() => {
    k.current = w
  }, [w]);
  let {
    loading: L,
    ageVerificationMethods: U
  } = (0, v.A)({
    onClose: () => {
      null == y || y(), u()
    },
    onMethodClick: () => {
      I(s.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE)
    },
    classificationId: N
  });
  return l.useLayoutEffect(() => () => {
    if (D.current) return;
    let e = k.current;
    null != e && (D.current = true, p.A.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), l.useEffect(() => {
    (0, x.Bs)(R, x.WU.EXPRESSIVE_PRIMARY, n)
  }, [R, n]), (0, a.jsx)(r.ExpressiveModal, {
    transitionState: t,
    onClose: u,
    gradientColor: "blue",
    dismissable: E,
    graphic: {
      type: "image",
      src: S.A
    },
    title: (0, g.ST)(n),
    subtitle: (0, g.mK)(n, () => {
      f.A.openUrl(h.A.getArticleURL(j.MVz.TIGGER_PAWTECT_LEARN_MORE)), (0, x.St)(R, x.WU.EXPRESSIVE_PRIMARY, x._7.LEARN_MORE)
    }, M),
    actionBarInput: (0, a.jsx)(O, {
      modalSessionId: R,
      entryPoint: n
    }),
    children: (0, a.jsxs)(o.BJc, {
      direction: "vertical",
      gap: 16,
      children: [(0, a.jsxs)(o.BJc, {
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
        className: C.W,
        children: [(0, a.jsx)(o.mir, {
          size: "lg",
          color: "currentColor"
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-feedback-info",
          children: A.intl.string(_.default.ar3a3q)
        })]
      }), null == U || 0 === U.length ? (0, a.jsxs)(o.BJc, {
        direction: "vertical",
        align: "center",
        gap: 16,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-subtle",
          children: A.intl.string(_.default.cR6336)
        }), (0, a.jsx)(o.Button, {
          variant: "primary",
          size: "sm",
          text: A.intl.string(_.default.hDvmYP),
          onClick: () => {
            (0, b.DJ)()
          }
        })]
      }) : (0, a.jsx)(o.BJc, {
        direction: "vertical",
        gap: 8,
        children: U.map(e => {
          let {
            title: t,
            description: n,
            onClick: l
          } = e;
          return (0, a.jsx)(d.PQ, {
            variant: "clickable",
            title: t,
            description: n,
            buttonDisabled: L,
            onButtonPress: () => l(R)
          }, t)
        })
      })]
    })
  })
}
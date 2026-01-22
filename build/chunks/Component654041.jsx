/** Chunk was on 42978 **/
/** chunk id: 654041, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk158954 = require("./158954.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk95035 = require("./95035.jsx"),
  Chunk632738 = require("./632738.jsx"),
  Chunk105428 = require("./105428.js"),
  Chunk975571 = require("./975571.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk36149 = require("./36149.js"),
  Chunk737567 = require("./737567.js"),
  Chunk40449 = require("./40449.js"),
  Chunk652215 = require("./652215.js"),
  Chunk239093 = require("./239093.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk891921 = require("./891921.js");
let C = function(e) {
  let {
    transitionState: t,
    entryPoint: n,
    onClose: C
  } = e, [S, k] = s.useState(o.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), U = s.useRef(S), [g, h] = (0, c.kn)([S], true, true), {
    loading: L,
    initiateAgeVerification: O
  } = (0, f.nn)({
    onComplete: C,
    entryPoint: n
  }), P = s.useMemo(() => (0, a.A)(), []), b = (0, m.I)("age_verification_get_started_modal"), N = s.useRef(false);
  return s.useEffect(() => {
    U.current = g
  }, [g]), s.useLayoutEffect(() => () => {
    if (N.current) return;
    let e = U.current;
    null != e && (N.current = true, _.A.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), s.useEffect(() => {
    (0, R.Bs)(P, R.WU.PRIMARY, n)
  }, [P, n]), (0, i.jsxs)(r.Modal, {
    transitionState: t,
    onClose: C,
    title: (0, f.ST)(n),
    subtitle: (0, f.mK)(n),
    actions: [{
      text: T.intl.string(T.t.SJMnkX),
      loading: L,
      icon: l.I9m,
      iconPosition: "end",
      onClick: async () => {
        (0, R.St)(P, R.WU.PRIMARY, R._7.GET_STARTED), k(o.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE), await O()
      }
    }],
    actionBarInput: (0, i.jsxs)(d.A, {
      onClick: () => {
        E.A.openUrl(A.A.getArticleURL(p.MVz.TIGGER_PAWTECT_LEARN_MORE)), (0, R.St)(P, R.WU.PRIMARY, R._7.LEARN_MORE)
      },
      className: x.A,
      children: [T.intl.string(T.t["aA6q/z"]), (0, i.jsx)(l.I9m, {
        size: "xs",
        color: "currentColor"
      })]
    }),
    children: [(0, I.f6)(P).map((e, t) => {
      let {
        title: n,
        description: s
      } = e;
      return (0, i.jsx)(u.PQ, {
        title: n,
        description: s,
        listType: "numbered",
        index: t
      }, t)
    }), !b && (0, i.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: x.B,
      children: T.intl.format(T.t.pJAxgQ, {
        handleOnRequestHook: () => {
          E.A.openUrl(M.d$.APPEALS_LINK), (0, R.St)(P, R.WU.PRIMARY, R._7.MANUAL_REVIEW_REQUEST)
        }
      })
    })]
  })
}
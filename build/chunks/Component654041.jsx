/** Chunk was on 42978 **/
/** chunk id: 654041, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
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
let x = function(e) {
  let {
    transitionState: t,
    entryPoint: n,
    onClose: x
  } = e, [S, k] = s.useState(o.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), U = s.useRef(S), [g, h] = (0, c.kn)([S], true, true), {
    loading: L,
    initiateAgeVerification: b
  } = (0, f.nn)({
    onComplete: x,
    entryPoint: n
  }), O = s.useMemo(() => (0, r.A)(), []), P = (0, m.I)("age_verification_get_started_modal"), N = s.useRef(false);
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
    (0, R.Bs)(O, R.WU.PRIMARY, n)
  }, [O, n]), (0, i.jsxs)(a.Modal, {
    transitionState: t,
    onClose: x,
    title: (0, f.ST)(n),
    subtitle: (0, f.mK)(n),
    actions: [{
      text: C.intl.string(C.t.SJMnkX),
      loading: L,
      icon: l.I9m,
      iconPosition: "end",
      onClick: async () => {
        (0, R.St)(O, R.WU.PRIMARY, R._7.GET_STARTED), k(o.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE), await b()
      }
    }],
    actionBarInput: (0, i.jsxs)(u.A, {
      onClick: () => {
        E.A.openUrl(A.A.getArticleURL(p.MVz.TIGGER_PAWTECT_LEARN_MORE)), (0, R.St)(O, R.WU.PRIMARY, R._7.LEARN_MORE)
      },
      className: T.A,
      children: [C.intl.string(C.t["aA6q/z"]), (0, i.jsx)(l.I9m, {
        size: "xs",
        color: "currentColor"
      })]
    }),
    children: [(0, I.f6)(O).map((e, t) => {
      let {
        title: n,
        description: s
      } = e;
      return (0, i.jsx)(d.PQ, {
        title: n,
        description: s,
        listType: "numbered",
        index: t
      }, t)
    }), !P && (0, i.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: T.B,
      children: C.intl.format(C.t.pJAxgQ, {
        handleOnRequestHook: () => {
          E.A.openUrl(M.d$.APPEALS_LINK), (0, R.St)(O, R.WU.PRIMARY, R._7.MANUAL_REVIEW_REQUEST)
        }
      })
    })]
  })
}
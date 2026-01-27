/** Chunk was on 42978 **/
/** chunk id: 654041, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => j
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
let j = function(e) {
  let {
    transitionState: t,
    entryPoint: r,
    onClose: j
  } = e, [P, h] = o.useState(c.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), C = o.useRef(P), [I, S] = (0, a.kn)([P], true, true), {
    loading: v,
    initiateAgeVerification: x
  } = (0, y.nn)({
    onComplete: j,
    entryPoint: r
  }), k = o.useMemo(() => (0, i.A)(), []), w = (0, A.I)("age_verification_get_started_modal"), M = o.useRef(false);
  return o.useEffect(() => {
    C.current = I
  }, [I]), o.useLayoutEffect(() => () => {
    if (M.current) return;
    let e = C.current;
    null != e && (M.current = true, p.A.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), o.useEffect(() => {
    (0, O.Bs)(k, O.WU.PRIMARY, r)
  }, [k, r]), (0, n.jsxs)(l.Modal, {
    transitionState: t,
    onClose: j,
    title: (0, y.ST)(r),
    subtitle: (0, y.mK)(r),
    actions: [{
      text: R.intl.string(R.t.SJMnkX),
      loading: v,
      icon: s.I9m,
      iconPosition: "end",
      onClick: async () => {
        (0, O.St)(k, O.WU.PRIMARY, O._7.GET_STARTED), h(c.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE), await x()
      }
    }],
    actionBarInput: (0, n.jsxs)(u.A, {
      onClick: () => {
        b.A.openUrl(d.A.getArticleURL(m.MVz.TIGGER_PAWTECT_LEARN_MORE)), (0, O.St)(k, O.WU.PRIMARY, O._7.LEARN_MORE)
      },
      className: g.A,
      children: [R.intl.string(R.t["aA6q/z"]), (0, n.jsx)(s.I9m, {
        size: "xs",
        color: "currentColor"
      })]
    }),
    children: [(0, E.f6)(k).map((e, t) => {
      let {
        title: r,
        description: o
      } = e;
      return (0, n.jsx)(f.PQ, {
        title: r,
        description: o,
        listType: "numbered",
        index: t
      }, t)
    }), !w && (0, n.jsx)(s.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: g.B,
      children: R.intl.format(R.t.pJAxgQ, {
        handleOnRequestHook: () => {
          b.A.openUrl(_.d$.APPEALS_LINK), (0, O.St)(k, O.WU.PRIMARY, O._7.MANUAL_REVIEW_REQUEST)
        }
      })
    })]
  })
}
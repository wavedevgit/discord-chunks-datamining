/** Chunk was on 80144 **/
/** chunk id: 634997, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk793030 = require("./793030.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk690221 = require("./690221.jsx"),
  Chunk138201 = require("./138201.jsx"),
  Chunk420846 = require("./420846.js"),
  Chunk63063 = require("./63063.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk257639 = require("./257639.js"),
  Chunk469775 = require("./469775.js"),
  Chunk981631 = require("./981631.js"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk320463 = require("./320463.js");
let m = function(e) {
  let {
    transitionState: t,
    entryPoint: n,
    onClose: m
  } = e, [U, L] = r.useState(a.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), g = r.useRef(U), [h, N] = (0, d.US)([U], true, true), {
    loading: b,
    initiateAgeVerification: k
  } = (0, f.WD)({
    onComplete: m,
    entryPoint: n
  }), O = r.useMemo(() => (0, s.Z)(), []), S = (0, p.W)("age_verification_get_started_modal"), G = r.useRef(false);
  return r.useEffect(() => {
    g.current = h
  }, [h]), r.useLayoutEffect(() => () => {
    if (G.current) return;
    let e = g.current;
    null != e && (G.current = true, _.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), r.useEffect(() => {
    (0, A.lA)(O, A.d_.PRIMARY, n)
  }, [O, n]), (0, i.jsxs)(o.Modal, {
    transitionState: t,
    onClose: m,
    title: (0, f.B7)(n),
    subtitle: (0, f.s2)(n, () => {
      E.Z.openUrl(R.Z.getArticleURL(C.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, A.x3)(O, A.d_.PRIMARY, A.sU.LEARN_MORE)
    }),
    actions: [{
      text: T.intl.string(T.t.SJMnkX),
      loading: b,
      icon: l.Gr1,
      iconPosition: "end",
      onClick: async () => {
        (0, A.x3)(O, A.d_.PRIMARY, A.sU.GET_STARTED), L(a.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE), await k()
      }
    }],
    actionBarInput: (0, i.jsxs)(u.Z, {
      onClick: () => {
        E.Z.openUrl(R.Z.getArticleURL(C.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, A.x3)(O, A.d_.PRIMARY, A.sU.LEARN_MORE)
      },
      className: I.learnMoreButton,
      children: [T.intl.string(T.t["aA6q/z"]), (0, i.jsx)(l.Gr1, {
        size: "xs",
        color: "currentColor"
      })]
    }),
    children: [(0, x.uH)(O).map((e, t) => {
      let {
        title: n,
        description: r
      } = e;
      return (0, i.jsx)(c.JZ, {
        title: n,
        description: r,
        listType: "numbered",
        index: t
      }, t)
    }), !S && (0, i.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: I.requestContainer,
      children: T.intl.format(T.t.pJAxgQ, {
        handleOnRequestHook: () => {
          E.Z.openUrl(M.sQ.APPEALS_LINK), (0, A.x3)(O, A.d_.PRIMARY, A.sU.MANUAL_REVIEW_REQUEST)
        }
      })
    })]
  })
}
/** Chunk was on 80144 **/
/** chunk id: 634997, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
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
  Chunk678189 = require("./678189.js");
let T = function(e) {
  let {
    transitionState: t,
    entryPoint: n,
    onClose: T
  } = e, [g, h] = r.useState(a.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), U = r.useRef(g), [k, L] = (0, u.US)([g], true, true), {
    loading: S,
    initiateAgeVerification: N
  } = (0, f.WD)({
    onComplete: T,
    entryPoint: n
  }), b = r.useMemo(() => (0, s.Z)(), []), G = (0, p.W)("age_verification_get_started_modal"), O = r.useRef(false);
  return r.useEffect(() => {
    U.current = k
  }, [k]), r.useLayoutEffect(() => () => {
    if (O.current) return;
    let e = U.current;
    null != e && (O.current = true, _.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), r.useEffect(() => {
    (0, A.lA)(b, A.d_.PRIMARY, n)
  }, [b, n]), (0, i.jsxs)(o.Modal, {
    transitionState: t,
    onClose: T,
    title: I.intl.string(I.t.JHNunj),
    subtitle: I.intl.string(I.t["+BLIGh"]),
    actions: [{
      text: I.intl.string(I.t.SJMnkX),
      loading: S,
      icon: l.Gr1,
      iconPosition: "end",
      onClick: async () => {
        (0, A.x3)(b, A.d_.PRIMARY, A.sU.GET_STARTED), h(a.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE), await N()
      }
    }],
    actionBarInput: (0, i.jsxs)(c.Z, {
      onClick: () => {
        R.Z.openUrl(E.Z.getArticleURL(C.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, A.x3)(b, A.d_.PRIMARY, A.sU.LEARN_MORE)
      },
      className: M.learnMoreButton,
      children: [I.intl.string(I.t["aA6q/z"]), (0, i.jsx)(l.Gr1, {
        size: "xs",
        color: "currentColor"
      })]
    }),
    children: [(0, x.uH)(b).map((e, t) => {
      let {
        title: n,
        description: r
      } = e;
      return (0, i.jsx)(d.JZ, {
        title: n,
        description: r,
        listType: "numbered",
        index: t
      }, t)
    }), !G && (0, i.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: M.requestContainer,
      children: I.intl.format(I.t.pJAxgQ, {
        handleOnRequestHook: () => {
          R.Z.openUrl(m.sQ.APPEALS_LINK), (0, A.x3)(b, A.d_.PRIMARY, A.sU.MANUAL_REVIEW_REQUEST)
        }
      })
    })]
  })
}
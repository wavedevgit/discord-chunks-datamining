/** Chunk was on 80144 **/
/** chunk id: 634997, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  } = e, [m, U] = i.useState(a.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), h = i.useRef(m), [L, S] = (0, u.US)([m], true, true), {
    loading: N,
    initiateAgeVerification: b
  } = (0, p.WD)({
    onComplete: T,
    entryPoint: n
  }), g = i.useMemo(() => (0, s.Z)(), []), k = i.useRef(false);
  return i.useEffect(() => {
    h.current = L
  }, [L]), i.useLayoutEffect(() => () => {
    if (k.current) return;
    let e = h.current;
    null != e && (k.current = true, d.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), i.useEffect(() => {
    (0, A.lA)(g, A.d_.PRIMARY, n)
  }, [g, n]), (0, r.jsxs)(o.Modal, {
    transitionState: t,
    onClose: T,
    title: I.intl.string(I.t.JHNunj),
    subtitle: I.intl.string(I.t["+BLIGh"]),
    actions: [{
      text: I.intl.string(I.t.SJMnkX),
      loading: N,
      icon: l.Gr1,
      iconPosition: "end",
      onClick: async () => {
        (0, A.x3)(g, A.d_.PRIMARY, A.sU.GET_STARTED), U(a.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE), await b()
      }
    }],
    actionBarInput: (0, r.jsxs)(c.Z, {
      onClick: () => {
        R.Z.openUrl(E.Z.getArticleURL(f.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, A.x3)(g, A.d_.PRIMARY, A.sU.LEARN_MORE)
      },
      className: M.learnMoreButton,
      children: [I.intl.string(I.t["aA6q/z"]), (0, r.jsx)(l.Gr1, {
        size: "xs",
        color: "currentColor"
      })]
    }),
    children: [(0, x.uH)(g).map((e, t) => {
      let {
        title: n,
        description: i
      } = e;
      return (0, r.jsx)(_.JZ, {
        title: n,
        description: i,
        listType: "numbered",
        index: t
      }, t)
    }), (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: M.requestContainer,
      children: I.intl.format(I.t.pJAxgQ, {
        handleOnRequestHook: () => {
          R.Z.openUrl(C.sQ.APPEALS_LINK), (0, A.x3)(g, A.d_.PRIMARY, A.sU.MANUAL_REVIEW_REQUEST)
        }
      })
    })]
  })
}
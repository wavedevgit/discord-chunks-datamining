/** Chunk was on 80144 **/
/** chunk id: 634997, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
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
let I = function(e) {
  let {
    transitionState: t,
    entryPoint: n,
    onClose: I
  } = e, [U, m] = i.useState(a.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), L = i.useRef(U), [S, h] = (0, u.US)([U], true, true), {
    loading: G,
    initiateAgeVerification: N
  } = (0, p.WD)({
    onComplete: I
  }), O = i.useMemo(() => (0, s.Z)(), []), b = i.useRef(false);
  return i.useEffect(() => {
    L.current = S
  }, [S]), i.useLayoutEffect(() => () => {
    if (b.current) return;
    let e = L.current;
    null != e && (b.current = true, E.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), i.useEffect(() => {
    (0, d.lA)(O, d.d_.PRIMARY, n)
  }, [O, n]), (0, r.jsxs)(o.Modal, {
    transitionState: t,
    onClose: I,
    title: M.intl.string(M.t.JHNunj),
    subtitle: M.intl.string(M.t["+BLIGh"]),
    actions: [{
      text: M.intl.string(M.t.SJMnkX),
      loading: G,
      icon: l.Gr1,
      iconPosition: "end",
      onClick: async () => {
        (0, d.x3)(O, d.d_.PRIMARY, d.sU.GET_STARTED), m(a.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE), await N(d.cU.GET_STARTED_MODAL)
      }
    }],
    actionBarInput: (0, r.jsxs)(c.Z, {
      onClick: () => {
        R.Z.openUrl(A.Z.getArticleURL(T.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, d.x3)(O, d.d_.PRIMARY, d.sU.LEARN_MORE)
      },
      className: C.learnMoreButton,
      children: [M.intl.string(M.t["aA6q/z"]), (0, r.jsx)(l.Gr1, {
        size: "xs",
        color: "currentColor"
      })]
    }),
    children: [(0, x.uH)(O).map((e, t) => {
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
      className: C.requestContainer,
      children: M.intl.format(M.t.pJAxgQ, {
        handleOnRequestHook: () => {
          R.Z.openUrl(f.sQ.APPEALS_LINK), (0, d.x3)(O, d.d_.PRIMARY, d.sU.MANUAL_REVIEW_REQUEST)
        }
      })
    })]
  })
}
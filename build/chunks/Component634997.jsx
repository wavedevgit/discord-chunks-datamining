/** Chunk was on 80144 **/
/** chunk id: 634997, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => E
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
let E = function(e) {
  let {
    transitionState: n,
    entryPoint: t,
    onClose: E
  } = e, [R, g] = i.useState(a.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), A = i.useRef(R), [O, C] = (0, s.US)([R], true, true), {
    loading: T,
    initiateAgeVerification: I
  } = (0, _.WD)(E), N = i.useMemo(() => (0, o.Z)(), []), k = i.useRef(false);
  return i.useEffect(() => {
    A.current = O
  }, [O]), i.useLayoutEffect(() => () => {
    if (k.current) return;
    let e = A.current;
    null != e && (k.current = true, x.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), i.useEffect(() => {
    (0, f.lA)(N, f.d_.PRIMARY, t)
  }, [N, t]), (0, r.jsxs)(l.Modal, {
    transitionState: n,
    onClose: E,
    title: v.intl.string(v.t.JHNunp),
    subtitle: v.intl.string(v.t["+BLIGh"]),
    actions: [{
      text: v.intl.string(v.t.SJMnkZ),
      loading: T,
      icon: c.Gr1,
      iconPosition: "end",
      onClick: async () => {
        (0, f.x3)(N, f.d_.PRIMARY, f.sU.GET_STARTED), g(a.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE), await I(f.cU.GET_STARTED_MODAL)
      }
    }],
    actionBarInput: (0, r.jsxs)(d.Z, {
      onClick: () => {
        m.Z.openUrl(b.Z.getArticleURL(j.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, f.x3)(N, f.d_.PRIMARY, f.sU.LEARN_MORE)
      },
      className: y.learnMoreButton,
      children: [v.intl.string(v.t["aA6q//"]), (0, r.jsx)(c.Gr1, {
        size: "xs",
        color: "currentColor"
      })]
    }),
    children: [(0, h.uH)(N).map((e, n) => {
      let {
        title: t,
        description: i
      } = e;
      return (0, r.jsx)(u.JZ, {
        title: t,
        description: i,
        listType: "numbered",
        index: n
      }, n)
    }), (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: y.requestContainer,
      children: v.intl.format(v.t.pJAxgY, {
        handleOnRequestHook: () => {
          m.Z.openUrl(p.sQ.APPEALS_LINK), (0, f.x3)(N, f.d_.PRIMARY, f.sU.MANUAL_REVIEW_REQUEST)
        }
      })
    })]
  })
}
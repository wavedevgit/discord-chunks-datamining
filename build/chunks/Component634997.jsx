/** Chunk was on 80144 **/
/** chunk id: 634997, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => R
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk704215 = require("./704215.js"),
  Chunk82659 = require("./82659.jsx"),
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
  Chunk889469 = require("./889469.js");
let R = function(e) {
  let {
    transitionState: n,
    entryPoint: t,
    onClose: R
  } = e, [y, A] = o.useState(l.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), C = o.useRef(y), [O, g] = (0, s.US)([y], true, true), {
    loading: T,
    initiateAgeVerification: I
  } = (0, _.WD)(R), N = o.useMemo(() => (0, i.Z)(), []), k = o.useRef(false);
  return o.useEffect(() => {
    C.current = O
  }, [O]), o.useLayoutEffect(() => () => {
    if (k.current) return;
    let e = C.current;
    null != e && (k.current = true, x.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), o.useEffect(() => {
    (0, f.lA)(N, f.d_.PRIMARY, t)
  }, [N, t]), (0, r.jsxs)(a.Modal, {
    transitionState: n,
    onClose: R,
    title: v.intl.string(v.t.JHNunp),
    subtitle: v.intl.string(v.t["+BLIGh"]),
    actions: [{
      text: v.intl.string(v.t.SJMnkZ),
      loading: T,
      icon: c.Gr1,
      iconPosition: "end",
      onClick: async () => {
        (0, f.x3)(N, f.d_.PRIMARY, f.sU.GET_STARTED), A(l.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE), await I(f.cU.GET_STARTED_MODAL)
      }
    }],
    actionBarInput: (0, r.jsxs)(u.Z, {
      onClick: () => {
        b.Z.openUrl(m.Z.getArticleURL(j.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, f.x3)(N, f.d_.PRIMARY, f.sU.LEARN_MORE)
      },
      className: E.learnMoreButton,
      children: [v.intl.string(v.t["aA6q//"]), (0, r.jsx)(c.Gr1, {
        size: "xs",
        color: "currentColor"
      })]
    }),
    children: [(0, h.uH)(N).map((e, n) => {
      let {
        title: t,
        description: o
      } = e;
      return (0, r.jsx)(d.JZ, {
        title: t,
        description: o,
        listType: "numbered",
        index: n
      }, n)
    }), (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: E.requestContainer,
      children: v.intl.format(v.t.pJAxgY, {
        handleOnRequestHook: () => {
          b.Z.openUrl(p.sQ.APPEALS_LINK), (0, f.x3)(N, f.d_.PRIMARY, f.sU.MANUAL_REVIEW_REQUEST)
        }
      })
    })]
  })
}
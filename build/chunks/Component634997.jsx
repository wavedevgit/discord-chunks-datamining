/** Chunk was on 80144 **/
/** chunk id: 634997, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => L
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk678189 = require("./678189.js");
let L = function(e) {
  let {
    transitionState: t,
    entryPoint: n,
    onClose: L
  } = e, [T, b] = i.useState(s.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), C = i.useRef(T), [P, R] = (0, a.US)([T], true, true), {
    loading: x,
    initiateAgeVerification: h
  } = (0, O.WD)(L), M = i.useMemo(() => (0, o.Z)(), []), y = i.useRef(false);
  return i.useEffect(() => {
    C.current = P
  }, [P]), i.useLayoutEffect(() => () => {
    if (y.current) return;
    let e = C.current;
    null != e && (y.current = true, E.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), i.useEffect(() => {
    (0, I.lA)(M, I.d_.PRIMARY, n)
  }, [M, n]), (0, r.jsxs)(l.Modal, {
    transitionState: t,
    onClose: L,
    title: f.intl.string(f.t.JHNunp),
    subtitle: f.intl.string(f.t["+BLIGh"]),
    actions: [{
      text: f.intl.string(f.t.SJMnkZ),
      loading: x,
      icon: c.Gr1,
      iconPosition: "end",
      onClick: async () => {
        (0, I.x3)(M, I.d_.PRIMARY, I.sU.GET_STARTED), b(s.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE), await h()
      }
    }],
    actionBarInput: (0, r.jsxs)(u.Z, {
      onClick: () => {
        p.Z.openUrl(d.Z.getArticleURL(m.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, I.x3)(M, I.d_.PRIMARY, I.sU.LEARN_MORE)
      },
      className: A.learnMoreButton,
      children: [f.intl.string(f.t["aA6q//"]), (0, r.jsx)(c.Gr1, {
        size: "xs",
        color: "currentColor"
      })]
    }),
    children: [(0, S.uH)(M).map((e, t) => {
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
    }), (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: A.requestContainer,
      children: f.intl.format(f.t.pJAxgY, {
        handleOnRequestHook: () => {
          p.Z.openUrl(N.sQ.APPEALS_LINK), (0, I.x3)(M, I.d_.PRIMARY, I.sU.MANUAL_REVIEW_REQUEST)
        }
      })
    })]
  })
}
/** Chunk was on 80144 **/
/** chunk id: 634997, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => C
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
  Chunk678189 = require("./678189.js");
let C = function(e) {
  let {
    transitionState: n,
    entryPoint: t,
    onClose: C
  } = e, [T, v] = o.useState(a.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), j = o.useRef(T), [I, M] = (0, c.US)([T], true, true), {
    loading: N,
    initiateAgeVerification: g
  } = (0, R.WD)(C), G = o.useMemo(() => (0, i.Z)(), []), U = o.useRef(false);
  return o.useEffect(() => {
    j.current = I
  }, [I]), o.useLayoutEffect(() => () => {
    if (U.current) return;
    let e = j.current;
    null != e && (U.current = true, x.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), o.useEffect(() => {
    (0, f.lA)(G, f.d_.PRIMARY, t)
  }, [G, t]), (0, r.jsxs)(s.Modal, {
    transitionState: n,
    onClose: C,
    title: b.intl.string(b.t.JHNunp),
    subtitle: b.intl.string(b.t["+BLIGh"]),
    actions: [{
      text: b.intl.string(b.t.SJMnkZ),
      loading: N,
      icon: l.Gr1,
      iconPosition: "end",
      onClick: async () => {
        (0, f.x3)(G, f.d_.PRIMARY, f.sU.GET_STARTED), v(a.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE), await g(f.cU.GET_STARTED_MODAL)
      }
    }],
    actionBarInput: (0, r.jsxs)(d.Z, {
      onClick: () => {
        m.Z.openUrl(_.Z.getArticleURL(h.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, f.x3)(G, f.d_.PRIMARY, f.sU.LEARN_MORE)
      },
      className: p.learnMoreButton,
      children: [b.intl.string(b.t["aA6q//"]), (0, r.jsx)(l.Gr1, {
        size: "xs",
        color: "currentColor"
      })]
    }),
    children: [(0, E.uH)(G).map((e, n) => {
      let {
        title: t,
        description: o
      } = e;
      return (0, r.jsx)(u.JZ, {
        title: t,
        description: o,
        listType: "numbered",
        index: n
      }, n)
    }), (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      className: p.requestContainer,
      children: b.intl.format(b.t.pJAxgY, {
        handleOnRequestHook: () => {
          m.Z.openUrl(A.sQ.APPEALS_LINK), (0, f.x3)(G, f.d_.PRIMARY, f.sU.MANUAL_REVIEW_REQUEST)
        }
      })
    })]
  })
}
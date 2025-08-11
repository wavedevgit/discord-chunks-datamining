/** Chunk was on 80144 **/
/** chunk id: 634997, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk772848 = require("./772848.js"),
  Chunk704215 = require("./704215.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk690221 = require("./690221.js"),
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
  Chunk631843 = require("./631843.js");
let h = function(e) {
  let {
    transitionState: t,
    entryPoint: r,
    onClose: h
  } = e, [j, A] = o.useState(l.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED), m = o.useRef(j), [x, C] = (0, u.US)([j], true, true), {
    loading: v,
    initiateAgeVerification: S
  } = (0, y.WD)(h), k = o.useMemo(() => (0, i.Z)(), []), I = o.useRef(false);
  return o.useEffect(() => {
    m.current = x
  }, [x]), o.useLayoutEffect(() => () => {
    if (I.current) return;
    let e = m.current;
    null != e && (I.current = true, p.Z.maybeOpenAgeVerificationUserFeedback({
      location: "age_verification_get_started_modal",
      visibleContent: e
    }))
  }, []), o.useEffect(() => {
    (0, d.lA)(k, d.d_.PRIMARY, r)
  }, [k, r]), <c.Modal transitionState={t} onClose={h} title={g.intl.string(g.t.JHNunp)} subtitle={g.intl.string(g.t["+BLIGh"])} actions={[{
      text: g.intl.string(g.t.SJMnkZ),
      loading: v,
      icon: s.Gr1,
      iconPosition: "end",
      onClick: async () => {
        (0, d.x3)(k, d.d_.PRIMARY, d.sU.GET_STARTED), A(l.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE), await S()
      }
    }]} actionBarInput={(0, n.jsxs)(a.Z, {
      onClick: () => {
        O.Z.openUrl(b.Z.getArticleURL(_.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, d.x3)(k, d.d_.PRIMARY, d.sU.LEARN_MORE)
      },
      className: P.learnMoreButton,
      children: [g.intl.string(g.t["aA6q//"]), (0, n.jsx)(s.Gr1, {
        size: "xs",
        color: "currentColor"
      })]
    })}>{(0, E.uH)(k).map((e, t) => {
      let {
        title: r,
        description: o
      } = e;
      return <f.JZ title={r} description={o} listType={"numbered"} index={t} />
    })}{<s.Text variant={"text-xs/medium"} color={"text-muted"} className={P.requestContainer}>{g.intl.format(g.t.pJAxgY, {
        handleOnRequestHook: () => {
          O.Z.openUrl(R.sQ.APPEALS_LINK), (0, d.x3)(k, d.d_.PRIMARY, d.sU.MANUAL_REVIEW_REQUEST)
        }
      })}</s.Text>}</c.Modal>
}
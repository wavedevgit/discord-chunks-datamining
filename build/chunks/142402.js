/** Chunk was on 23657 **/
n.d(t, {
  default: () => p
});
var a = n(200651),
  r = n(192379),
  l = n(481060),
  i = n(891802),
  s = n(332664),
  o = n(538211),
  c = n(698066),
  u = n(142497),
  d = n(626135),
  m = n(981631),
  b = n(531578),
  _ = n(70722),
  f = n(190378),
  x = n(388032);
let h = [_.kr.OTHER];

function p(e) {
  let {
    isStreamer: t,
    stream: p,
    streamApplication: N,
    onClose: g,
    transitionState: j,
    analyticsData: O
  } = e;
  r.useEffect(() => {
    d.default.track(m.rMx.OPEN_MODAL, {
      type: "Stream Problem Report",
      other_user_id: p.ownerId,
      application_id: null != N ? N.id : null,
      application_name: null != N ? N.name : null,
      game_id: null != N ? N.id : null,
      source: "Stream End"
    })
  }, [p.ownerId, N]);
  let {
    showRefreshedSurvey: v
  } = (0, i.X)({
    location: "StreamFeedback"
  }), k = v ? x.NW.string(x.t.OR6KNz) : x.NW.string(x.t["5smP3d"]), R = v ? void 0 : x.NW.string(x.t["0uxA2d"]), E = v ? void 0 : x.NW.string(x.t.CqjnLC), y = v ? [b.aZ.BAD, b.aZ.GOOD] : void 0, S = v ? {
    [b.aZ.BAD]: x.NW.string(x.t.ISINlJ),
    [b.aZ.GOOD]: x.NW.string(x.t.IySkjY)
  } : void 0;
  return (0, a.jsx)(s.Z, {
    modalType: "stream",
    header: k,
    body: t ? R : E,
    ratingOptions: y,
    ratingTextLabels: S,
    problemTitle: x.NW.string(x.t["6Y1t5O"]),
    problems: (0, o.Z)(t, !0),
    freeformNeededProblems: h,
    onSubmit: function(e) {
      let {
        rating: t,
        problem: r,
        dontShowAgain: i,
        feedback: s
      } = e;
      i && (0, u.Kw)(f.v.REPORT_PROBLEM_POST_STREAM), null != t && ((0, c.Z)({
        problem: r,
        stream: p,
        feedback: s,
        streamApplication: N,
        analyticsData: O,
        location: "Stream End",
        rating: t
      }), null != r && (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("14466").then(n.bind(n, 729328));
        return t => (0, a.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), a.forEach(function(t) {
              var a;
              a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = a
            })
          }
          return e
        }({
          body: x.NW.string(x.t.mMTVnp)
        }, t))
      }))
    },
    onClose: g,
    transitionState: j,
    otherKey: _.kr.OTHER
  })
}
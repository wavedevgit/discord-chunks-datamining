/** Chunk was on 63834 **/
/** chunk id: 110927, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211266 = require("./211266.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk332664 = require("./332664.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk867003 = require("./867003.js"),
  Chunk987562 = require("./987562.js"),
  Chunk981631 = require("./981631.js"),
  Chunk565287 = require("./565287.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    onClose: t,
    transitionState: p,
    dismissibleContent: m
  } = e;
  (0, c.US)([m]);
  let g = (0, a.Z)((0, _.ny)(m)),
    O = o.useMemo(() => g.map(e => e.value), [g]);
  o.useEffect(() => {
    s.default.track(b.rMx.OPEN_MODAL, {
      type: "Age Verification User Feedback"
    })
  }, []);
  let E = o.useCallback(e => {
    var t;
    let {
      rating: o,
      problem: a,
      feedback: c
    } = e, l = null == o, s = (0, u.nH)(m);
    (0, u.I)(o, "" !== c ? c : null, null != (t = null == a ? true : a.value) ? t : null, l, s), l || (0, i.ZDy)(async () => {
      let {
        default: e
      } = await r.e("14466").then(r.bind(r, 729328));
      return t => (0, n.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({
        body: f.intl.string(d.default["4djgOz"])
      }, t))
    })
  }, [m]);
  return (0, n.jsx)(l.Z, {
    modalType: "age_verification",
    header: f.intl.string(d.default.RqoA4u),
    body: f.intl.string(d.default.RPb8Zm),
    problemTitle: f.intl.string(d.default.KZw6kp),
    problems: g,
    freeformNeededProblems: O,
    onSubmit: E,
    onClose: t,
    transitionState: p,
    otherKey: _.wO.SOMETHING_ELSE,
    hideHelpDeskLink: true,
    hideDontShowAgainCheckbox: true,
    freeformDescription: e => null == e ? null : e.value === _.wO.SOMETHING_ELSE ? f.intl.string(d.default["Q5cQ4+"]) : f.intl.string(d.default.zApKaW)
  })
}
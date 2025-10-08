/** Chunk was on 63834 **/
/** chunk id: 110927, original params: e,t,o (module,exports,require) **/
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
    dismissibleContent: f
  } = e;
  (0, i.US)([f]);
  let h = (0, c.Z)((0, b.ny)(f)),
    g = r.useMemo(() => h.map(e => e.value), [h]);
  r.useEffect(() => {
    _.default.track(s.rMx.OPEN_MODAL, {
      type: "Age Verification User Feedback"
    })
  }, []);
  let j = r.useCallback(e => {
    var t;
    let {
      rating: r,
      problem: c,
      feedback: i
    } = e, l = null == r, _ = (0, u.nH)(f);
    (0, u.I)(r, "" !== i ? i : null, null != (t = null == c ? true : c.value) ? t : null, l, _), l || (0, a.ZDy)(async () => {
      let {
        default: e
      } = await o.e("14466").then(o.bind(o, 729328));
      return t => (0, n.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(o);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = o[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({
        body: m.intl.string(d.default["4djgOz"])
      }, t))
    })
  }, [f]);
  return (0, n.jsx)(l.Z, {
    modalType: "age_verification",
    header: m.intl.string(d.default.RqoA4u),
    body: m.intl.string(d.default.RPb8Zm),
    problemTitle: m.intl.string(d.default.KZw6kp),
    problems: h,
    freeformNeededProblems: g,
    onSubmit: j,
    onClose: t,
    transitionState: p,
    otherKey: b.wO.SOMETHING_ELSE,
    hideHelpDeskLink: true,
    hideDontShowAgainCheckbox: true,
    freeformDescription: e => null == e ? null : e.value === b.wO.SOMETHING_ELSE ? m.intl.string(d.default["Q5cQ4+"]) : m.intl.string(d.default.zApKaW)
  })
}
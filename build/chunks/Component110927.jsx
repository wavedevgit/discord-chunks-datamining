/** Chunk was on 63834 **/
/** chunk id: 110927, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211266 = require("./211266.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk332664 = require("./332664.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk867003 = require("./867003.js"),
  Chunk987562 = require("./987562.js"),
  Chunk981631 = require("./981631.js"),
  Chunk992172 = require("./992172.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    onClose: t,
    transitionState: f,
    dismissibleContent: p
  } = e;
  (0, i.US)([p]);
  let h = (0, c.Z)((0, u.ny)(p)),
    g = a.useMemo(() => h.map(e => e.value), [h]);
  a.useEffect(() => {
    _.default.track(s.rMx.OPEN_MODAL, {
      type: "Age Verification User Feedback"
    })
  }, []);
  let j = a.useCallback(e => {
    var t;
    let {
      rating: a,
      problem: c,
      feedback: i
    } = e, l = null == a, _ = (0, b.nH)(p);
    (0, b.I)(a, "" !== i ? i : null, null != (t = null == c ? true : c.value) ? t : null, l, _), l || (0, r.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14466").then(n.bind(n, 729328));
      return t => (0, o.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), o.forEach(function(t) {
            var o;
            o = n[t], t in e ? Object.defineProperty(e, t, {
              value: o,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = o
          })
        }
        return e
      }({
        body: m.intl.string(d.default["4djgO/"])
      }, t))
    })
  }, [p]);
  return (0, o.jsx)(l.Z, {
    modalType: "age_verification",
    header: m.intl.string(d.default.RqoA4v),
    body: m.intl.string(d.default.RPb8Zk),
    problemTitle: m.intl.string(d.default.KZw6kn),
    problems: h,
    freeformNeededProblems: g,
    onSubmit: j,
    onClose: t,
    transitionState: f,
    otherKey: u.wO.SOMETHING_ELSE,
    hideHelpDeskLink: true,
    hideDontShowAgainCheckbox: true,
    freeformDescription: e => null == e ? null : e.value === u.wO.SOMETHING_ELSE ? m.intl.string(d.default.Q5cQ46) : m.intl.string(d.default.zApKaR)
  })
}
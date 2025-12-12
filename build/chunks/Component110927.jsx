/** Chunk was on 39533 **/
/** chunk id: 110927, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => _
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
  Chunk765606 = require("./765606.js"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
  let {
    onClose: t,
    transitionState: _,
    dismissibleContent: p
  } = e;
  (0, r.US)([p]);
  let h = (0, d.Z)((0, u.ny)(p)),
    g = n.useMemo(() => h.map(e => e.value), [h]);
  n.useEffect(() => {
    l.default.track(s.rMx.OPEN_MODAL, {
      type: "Age Verification User Feedback"
    })
  }, []);
  let j = n.useCallback(e => {
    var t;
    let {
      rating: n,
      problem: d,
      feedback: r
    } = e, i = null == n, l = (0, b.nH)(p);
    (0, b.I)(n, "" !== r ? r : null, null != (t = null == d ? true : d.value) ? t : null, i, l), i || (0, o.ZDy)(async () => {
      let {
        default: e
      } = await a.e("14466").then(a.bind(a, 729328));
      return t => (0, c.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            c = Object.keys(a);
          "function" == typeof Object.getOwnPropertySymbols && (c = c.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable
          }))), c.forEach(function(t) {
            var c;
            c = a[t], t in e ? Object.defineProperty(e, t, {
              value: c,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = c
          })
        }
        return e
      }({
        body: m.intl.string(f.default["4djgO/"])
      }, t))
    })
  }, [p]);
  return (0, c.jsx)(i.Z, {
    modalType: "age_verification",
    header: m.intl.string(f.default.RqoA4v),
    body: m.intl.string(f.default.RPb8Zk),
    problemTitle: m.intl.string(f.default.KZw6kn),
    problems: h,
    freeformNeededProblems: g,
    onSubmit: j,
    onClose: t,
    transitionState: _,
    otherKey: u.wO.SOMETHING_ELSE,
    hideHelpDeskLink: true,
    hideDontShowAgainCheckbox: true,
    freeformDescription: e => null == e ? null : e.value === u.wO.SOMETHING_ELSE ? m.intl.string(f.default.Q5cQ46) : m.intl.string(f.default.zApKaR)
  })
}
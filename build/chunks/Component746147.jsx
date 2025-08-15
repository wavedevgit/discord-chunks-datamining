/** Chunk was on 19611 **/
/** chunk id: 746147, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211266 = require("./211266.js"),
  Chunk332664 = require("./332664.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk867003 = require("./867003.js"),
  Chunk987562 = require("./987562.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    onClose: t,
    transitionState: d
  } = e, p = (0, c.Z)(u.Me), f = o.useMemo(() => p.map(e => e.value), [p]);
  o.useEffect(() => {
    l.default.track(_.rMx.OPEN_MODAL, {
      type: "Ignore User Feedback"
    })
  }, []);
  let m = o.useCallback(e => {
    var t;
    let {
      rating: o,
      problem: c,
      feedback: a
    } = e, l = null == o;
    (0, s.wT)(o, a, null != (t = null == c ? true : c.value) ? t : null, l), l || (0, i.ZDy)(async () => {
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
        body: b.intl.string(b.t["d9+vQ0"])
      }, t))
    })
  }, []);
  return (0, n.jsx)(a.Z, {
    modalType: "ignore_user",
    header: b.intl.string(b.t.Ib6biY),
    body: b.intl.string(b.t["uW0/nZ"]),
    problemTitle: b.intl.string(b.t.avs5Vl),
    problems: p,
    freeformNeededProblems: f,
    onSubmit: m,
    onClose: t,
    transitionState: d,
    otherKey: u.XL.SOMETHING_ELSE,
    hideHelpDeskLink: true,
    hideDontShowAgainCheckbox: true,
    freeformDescription: e => null == e ? null : e.value === u.XL.SOMETHING_ELSE ? b.intl.string(b.t.h95hcn) : b.intl.string(b.t.wRGel5)
  })
}
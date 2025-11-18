/** Chunk was on 39304 **/
/** chunk id: 746147, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = e, m = (0, a.Z)(b.Me), p = r.useMemo(() => m.map(e => e.value), [m]);
  r.useEffect(() => {
    l.default.track(s.rMx.OPEN_MODAL, {
      type: "Ignore User Feedback"
    })
  }, []);
  let f = r.useCallback(e => {
    var t;
    let {
      rating: r,
      problem: a,
      feedback: i
    } = e, l = null == r;
    (0, _.wT)(r, i, null != (t = null == a ? true : a.value) ? t : null, l), l || (0, c.ZDy)(async () => {
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
        body: u.intl.string(u.t["d9+vQ8"])
      }, t))
    })
  }, []);
  return (0, n.jsx)(i.Z, {
    modalType: "ignore_user",
    header: u.intl.string(u.t.Ib6bic),
    body: u.intl.string(u.t["uW0/nV"]),
    problemTitle: u.intl.string(u.t.avs5Vg),
    problems: m,
    freeformNeededProblems: p,
    onSubmit: f,
    onClose: t,
    transitionState: d,
    otherKey: b.XL.SOMETHING_ELSE,
    hideHelpDeskLink: true,
    hideDontShowAgainCheckbox: true,
    freeformDescription: e => null == e ? null : e.value === b.XL.SOMETHING_ELSE ? u.intl.string(u.t.h95hcn) : u.intl.string(u.t.wRGel3)
  })
}
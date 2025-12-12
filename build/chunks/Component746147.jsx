/** Chunk was on 19611 **/
/** chunk id: 746147, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
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

function m(e) {
  let {
    onClose: t,
    transitionState: m
  } = e, d = (0, a.Z)(b.Me), p = r.useMemo(() => d.map(e => e.value), [d]);
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
        body: u.intl.string(u.t["d9+vQ8"])
      }, t))
    })
  }, []);
  return (0, o.jsx)(i.Z, {
    modalType: "ignore_user",
    header: u.intl.string(u.t.Ib6bic),
    body: u.intl.string(u.t["uW0/nV"]),
    problemTitle: u.intl.string(u.t.avs5Vg),
    problems: d,
    freeformNeededProblems: p,
    onSubmit: f,
    onClose: t,
    transitionState: m,
    otherKey: b.XL.SOMETHING_ELSE,
    hideHelpDeskLink: true,
    hideDontShowAgainCheckbox: true,
    freeformDescription: e => null == e ? null : e.value === b.XL.SOMETHING_ELSE ? u.intl.string(u.t.h95hcn) : u.intl.string(u.t.wRGel3)
  })
}
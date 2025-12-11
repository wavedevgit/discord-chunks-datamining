/** Chunk was on 17880 **/
/** chunk id: 746147, original params: e,t,a (module,exports,require) **/
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
  } = e, _ = (0, r.Z)(b.Me), p = n.useMemo(() => _.map(e => e.value), [_]);
  n.useEffect(() => {
    i.default.track(s.rMx.OPEN_MODAL, {
      type: "Ignore User Feedback"
    })
  }, []);
  let f = n.useCallback(e => {
    var t;
    let {
      rating: n,
      problem: r,
      feedback: d
    } = e, i = null == n;
    (0, l.wT)(n, d, null != (t = null == r ? true : r.value) ? t : null, i), i || (0, o.ZDy)(async () => {
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
        body: u.intl.string(u.t["d9+vQ8"])
      }, t))
    })
  }, []);
  return (0, c.jsx)(d.Z, {
    modalType: "ignore_user",
    header: u.intl.string(u.t.Ib6bic),
    body: u.intl.string(u.t["uW0/nV"]),
    problemTitle: u.intl.string(u.t.avs5Vg),
    problems: _,
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
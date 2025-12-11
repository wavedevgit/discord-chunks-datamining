/** Chunk was on 11228 **/
/** chunk id: 180970, original params: e,t,a (module,exports,require) **/
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
let _ = [Chunk987562.F5.SOMETHING_ELSE];

function m(e) {
  let {
    onClose: t,
    transitionState: m
  } = e, p = (0, d.Z)(l.CE);
  o.useEffect(() => {
    i.default.track(s.rMx.OPEN_MODAL, {
      type: "Block User Feedback"
    })
  }, []);
  let f = o.useCallback(e => {
    var t;
    let {
      rating: o,
      problem: d,
      feedback: r
    } = e, i = null == o;
    (0, b.tp)(o, r, null != (t = null == d ? true : d.value) ? t : null, i), i || (0, n.ZDy)(async () => {
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
  return (0, c.jsx)(r.Z, {
    modalType: "block_user",
    header: u.intl.string(u.t["+2qQAX"]),
    body: u.intl.string(u.t["+0RsvT"]),
    problemTitle: u.intl.string(u.t.TXomWW),
    problems: p,
    freeformNeededProblems: _,
    onSubmit: f,
    onClose: t,
    transitionState: m,
    otherKey: l.F5.SOMETHING_ELSE,
    hideHelpDeskLink: true,
    hideDontShowAgainCheckbox: true
  })
}
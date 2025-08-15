/** Chunk was on 66672 **/
/** chunk id: 180970, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211266 = require("./211266.js"),
  Chunk332664 = require("./332664.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk867003 = require("./867003.js"),
  Chunk987562 = require("./987562.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let d = [Chunk987562.F5.SOMETHING_ELSE];

function p(e) {
  let {
    onClose: t,
    transitionState: p
  } = e, f = (0, c.Z)(_.CE);
  o.useEffect(() => {
    l.default.track(u.rMx.OPEN_MODAL, {
      type: "Block User Feedback"
    })
  }, []);
  let m = o.useCallback(e => {
    var t;
    let {
      rating: o,
      problem: c,
      feedback: a
    } = e, l = null == o;
    (0, s.tp)(o, a, null != (t = null == c ? true : c.value) ? t : null, l), l || (0, i.ZDy)(async () => {
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
    modalType: "block_user",
    header: b.intl.string(b.t["+2qQAQ"]),
    body: b.intl.string(b.t["+0Rsvb"]),
    problemTitle: b.intl.string(b.t.TXomWV),
    problems: f,
    freeformNeededProblems: d,
    onSubmit: m,
    onClose: t,
    transitionState: p,
    otherKey: _.F5.SOMETHING_ELSE,
    hideHelpDeskLink: true,
    hideDontShowAgainCheckbox: true
  })
}
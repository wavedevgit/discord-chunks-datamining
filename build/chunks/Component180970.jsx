/** Chunk was on 51670 **/
/** chunk id: 180970, original params: e,t,o (module,exports,require) **/
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
let d = [Chunk987562.F5.SOMETHING_ELSE];

function m(e) {
  let {
    onClose: t,
    transitionState: m
  } = e, p = (0, a.Z)(b.CE);
  c.useEffect(() => {
    i.default.track(s.rMx.OPEN_MODAL, {
      type: "Block User Feedback"
    })
  }, []);
  let f = c.useCallback(e => {
    var t;
    let {
      rating: c,
      problem: a,
      feedback: _
    } = e, i = null == c;
    (0, l.tp)(c, _, null != (t = null == a ? true : a.value) ? t : null, i), i || (0, r.ZDy)(async () => {
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
  return (0, n.jsx)(_.Z, {
    modalType: "block_user",
    header: u.intl.string(u.t["+2qQAX"]),
    body: u.intl.string(u.t["+0RsvT"]),
    problemTitle: u.intl.string(u.t.TXomWW),
    problems: p,
    freeformNeededProblems: d,
    onSubmit: f,
    onClose: t,
    transitionState: m,
    otherKey: b.F5.SOMETHING_ELSE,
    hideHelpDeskLink: true,
    hideDontShowAgainCheckbox: true
  })
}
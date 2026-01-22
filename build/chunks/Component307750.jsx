/** Chunk was on 38008 **/
/** chunk id: 307750, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk444927 = require("./444927.js"),
  Chunk612479 = require("./612479.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk34550 = require("./34550.js"),
  Chunk14594 = require("./14594.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let u = [Chunk14594.tF.SOMETHING_ELSE];

function p(e) {
  let {
    onClose: a,
    transitionState: p
  } = e, _ = (0, f.A)(o.A4);
  r.useEffect(() => {
    n.default.track(i.HAw.OPEN_MODAL, {
      type: "Block User Feedback"
    })
  }, []);
  let O = r.useCallback(e => {
    var a;
    let {
      rating: r,
      problem: f,
      feedback: b
    } = e, n = null == r;
    (0, l.$b)(r, b, null != (a = null == f ? true : f.value) ? a : null, n), n || (0, c.mMO)(async () => {
      let {
        default: e
      } = await t.e("37836").then(t.bind(t, 845671));
      return a => (0, d.jsx)(e, function(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {},
            d = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (d = d.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), d.forEach(function(a) {
            var d;
            d = t[a], a in e ? Object.defineProperty(e, a, {
              value: d,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[a] = d
          })
        }
        return e
      }({
        body: s.intl.string(s.t["d9+vQ8"])
      }, a))
    })
  }, []);
  return (0, d.jsx)(b.A, {
    modalType: "block_user",
    header: s.intl.string(s.t["+2qQAX"]),
    body: s.intl.string(s.t["+0RsvT"]),
    problemTitle: s.intl.string(s.t.TXomWW),
    problems: _,
    freeformNeededProblems: u,
    onSubmit: O,
    onClose: a,
    transitionState: p,
    otherKey: o.tF.SOMETHING_ELSE,
    hideHelpDeskLink: true,
    hideDontShowAgainCheckbox: true
  })
}
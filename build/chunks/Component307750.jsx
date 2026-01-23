/** Chunk was on 38008 **/
/** chunk id: 307750, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  default: () => m
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
let d = [Chunk14594.tF.SOMETHING_ELSE];

function m(e) {
  let {
    onClose: t,
    transitionState: m
  } = e, p = (0, n.A)(b.A4);
  r.useEffect(() => {
    i.default.track(s.HAw.OPEN_MODAL, {
      type: "Block User Feedback"
    })
  }, []);
  let f = r.useCallback(e => {
    var t;
    let {
      rating: r,
      problem: n,
      feedback: a
    } = e, i = null == r;
    (0, l.$b)(r, a, null != (t = null == n ? true : n.value) ? t : null, i), i || (0, _.mMO)(async () => {
      let {
        default: e
      } = await o.e("37836").then(o.bind(o, 845671));
      return t => (0, c.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {},
            c = Object.keys(o);
          "function" == typeof Object.getOwnPropertySymbols && (c = c.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable
          }))), c.forEach(function(t) {
            var c;
            c = o[t], t in e ? Object.defineProperty(e, t, {
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
  return (0, c.jsx)(a.A, {
    modalType: "block_user",
    header: u.intl.string(u.t["+2qQAX"]),
    body: u.intl.string(u.t["+0RsvT"]),
    problemTitle: u.intl.string(u.t.TXomWW),
    problems: p,
    freeformNeededProblems: d,
    onSubmit: f,
    onClose: t,
    transitionState: m,
    otherKey: b.tF.SOMETHING_ELSE,
    hideHelpDeskLink: true,
    hideDontShowAgainCheckbox: true
  })
}
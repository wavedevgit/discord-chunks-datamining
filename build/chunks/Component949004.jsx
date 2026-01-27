/** Chunk was on 13146 **/
/** chunk id: 949004, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk444927 = require("./444927.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk612479 = require("./612479.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk34550 = require("./34550.js"),
  Chunk14594 = require("./14594.js"),
  Chunk652215 = require("./652215.js"),
  Chunk294589 = require("./294589.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  let {
    onClose: t,
    transitionState: g,
    dismissibleContent: p
  } = e;
  (0, l.kn)([p]);
  let m = (0, a.A)((0, _.ay)(p)),
    O = o.useMemo(() => m.map(e => e.value), [m]);
  o.useEffect(() => {
    u.default.track(b.HAw.OPEN_MODAL, {
      type: "Age Verification User Feedback"
    })
  }, []);
  let E = o.useCallback(e => {
    var t;
    let {
      rating: o,
      problem: a,
      feedback: l
    } = e, c = null == o, u = (0, s.JO)(p);
    (0, s.dN)(o, "" !== l ? l : null, null != (t = null == a ? true : a.value) ? t : null, c, u), c || (0, i.mMO)(async () => {
      let {
        default: e
      } = await r.e("37836").then(r.bind(r, 845671));
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
        body: f.intl.string(d.default["4djgO/"])
      }, t))
    })
  }, [p]);
  return (0, n.jsx)(c.A, {
    modalType: "age_verification",
    header: f.intl.string(d.default.RqoA4v),
    body: f.intl.string(d.default.RPb8Zk),
    problemTitle: f.intl.string(d.default.KZw6kn),
    problems: m,
    freeformNeededProblems: O,
    onSubmit: E,
    onClose: t,
    transitionState: g,
    otherKey: _.VY.SOMETHING_ELSE,
    hideHelpDeskLink: true,
    hideDontShowAgainCheckbox: true,
    freeformDescription: e => null == e ? null : e.value === _.VY.SOMETHING_ELSE ? f.intl.string(d.default.Q5cQ46) : f.intl.string(d.default.zApKaR)
  })
}
/** Chunk was on 13146 **/
/** chunk id: 949004, original params: e,a,t (module,exports,require) **/
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
    onClose: a,
    transitionState: g,
    dismissibleContent: O
  } = e;
  (0, l.kn)([O]);
  let _ = (0, r.A)((0, o.ay)(O)),
    k = f.useMemo(() => _.map(e => e.value), [_]);
  f.useEffect(() => {
    b.default.track(u.HAw.OPEN_MODAL, {
      type: "Age Verification User Feedback"
    })
  }, []);
  let m = f.useCallback(e => {
    var a;
    let {
      rating: f,
      problem: r,
      feedback: l
    } = e, c = null == f, b = (0, i.JO)(O);
    (0, i.dN)(f, "" !== l ? l : null, null != (a = null == r ? true : r.value) ? a : null, c, b), c || (0, n.mMO)(async () => {
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
        body: p.intl.string(s.default["4djgO/"])
      }, a))
    })
  }, [O]);
  return (0, d.jsx)(c.A, {
    modalType: "age_verification",
    header: p.intl.string(s.default.RqoA4v),
    body: p.intl.string(s.default.RPb8Zk),
    problemTitle: p.intl.string(s.default.KZw6kn),
    problems: _,
    freeformNeededProblems: k,
    onSubmit: m,
    onClose: a,
    transitionState: g,
    otherKey: o.VY.SOMETHING_ELSE,
    hideHelpDeskLink: true,
    hideDontShowAgainCheckbox: true,
    freeformDescription: e => null == e ? null : e.value === o.VY.SOMETHING_ELSE ? p.intl.string(s.default.Q5cQ46) : p.intl.string(s.default.zApKaR)
  })
}
/** Chunk was on 13146 **/
/** chunk id: 949004, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
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

function m(e) {
  let {
    onClose: t,
    transitionState: m,
    dismissibleContent: p
  } = e;
  (0, l.kn)([p]);
  let g = (0, a.A)((0, u.ay)(p)),
    h = r.useMemo(() => g.map(e => e.value), [g]);
  r.useEffect(() => {
    _.default.track(s.HAw.OPEN_MODAL, {
      type: "Age Verification User Feedback"
    })
  }, []);
  let j = r.useCallback(e => {
    var t;
    let {
      rating: r,
      problem: a,
      feedback: l
    } = e, i = null == r, _ = (0, b.JO)(p);
    (0, b.dN)(r, "" !== l ? l : null, null != (t = null == a ? true : a.value) ? t : null, i, _), i || (0, c.mMO)(async () => {
      let {
        default: e
      } = await n.e("37836").then(n.bind(n, 845671));
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
        body: f.intl.string(d.default["4djgO/"])
      }, t))
    })
  }, [p]);
  return (0, o.jsx)(i.A, {
    modalType: "age_verification",
    header: f.intl.string(d.default.RqoA4v),
    body: f.intl.string(d.default.RPb8Zk),
    problemTitle: f.intl.string(d.default.KZw6kn),
    problems: g,
    freeformNeededProblems: h,
    onSubmit: j,
    onClose: t,
    transitionState: m,
    otherKey: u.VY.SOMETHING_ELSE,
    hideHelpDeskLink: true,
    hideDontShowAgainCheckbox: true,
    freeformDescription: e => null == e ? null : e.value === u.VY.SOMETHING_ELSE ? f.intl.string(d.default.Q5cQ46) : f.intl.string(d.default.zApKaR)
  })
}
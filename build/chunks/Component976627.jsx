/** Chunk was on 40433 **/
/** chunk id: 976627, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  default: () => s
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

function s(e) {
  let {
    onClose: a,
    transitionState: s
  } = e, p = (0, f.A)(o.jZ), g = r.useMemo(() => p.map(e => e.value), [p]);
  r.useEffect(() => {
    b.default.track(i.HAw.OPEN_MODAL, {
      type: "Ignore User Feedback"
    })
  }, []);
  let h = r.useCallback(e => {
    var a;
    let {
      rating: r,
      problem: f,
      feedback: c
    } = e, b = null == r;
    (0, l.mf)(r, c, null != (a = null == f ? true : f.value) ? a : null, b), b || (0, d.mMO)(async () => {
      let {
        default: e
      } = await t.e("37836").then(t.bind(t, 845671));
      return a => (0, n.jsx)(e, function(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {},
            n = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), n.forEach(function(a) {
            var n;
            n = t[a], a in e ? Object.defineProperty(e, a, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[a] = n
          })
        }
        return e
      }({
        body: u.intl.string(u.t["d9+vQ8"])
      }, a))
    })
  }, []);
  return (0, n.jsx)(c.A, {
    modalType: "ignore_user",
    header: u.intl.string(u.t.Ib6bic),
    body: u.intl.string(u.t["uW0/nV"]),
    problemTitle: u.intl.string(u.t.avs5Vg),
    problems: p,
    freeformNeededProblems: g,
    onSubmit: h,
    onClose: a,
    transitionState: s,
    otherKey: o.w$.SOMETHING_ELSE,
    hideHelpDeskLink: true,
    hideDontShowAgainCheckbox: true,
    freeformDescription: e => null == e ? null : e.value === o.w$.SOMETHING_ELSE ? u.intl.string(u.t.h95hcn) : u.intl.string(u.t.wRGel3)
  })
}
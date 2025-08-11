/** Chunk was on 66317 **/
/** chunk id: 23547, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Mm: () => h,
  jj: () => b,
  wH: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk751648 = require("./751648.js"),
  Chunk479766 = require("./479766.js");

function c(e) {
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
}
let s = "balance-widget-menu-coachmark-modal",
  d = () => (0, Chunk481060.nfh)(s),
  b = () => (0, Chunk481060.Mr3)(s),
  f = {
    modalKey: s,
    onCloseCallback: Chunk751648.j2,
    onCloseRequest: async () => {
      await (0, Chunk751648.j2)()
    }
  };

function h(e) {
  let t = (0, l.cj)([u.Z], () => u.Z.earnedOrbsCoachmark),
    {
      shouldOpen: o
    } = t;
  return (0, a.useEffect)(() => {
    let t = d();
    if (o && !t) {
      var a;
      (a = c({}, e)).isCoachmarkEnabled && (0, i.ZDy)(async () => {
        let {
          WrappedBalanceWidgetEarnedOrbsCoachmarkModal: e
        } = await r.e("82081").then(r.bind(r, 720463));
        return t => (0, n.jsx)(e, c({}, a, t))
      }, f)
    } else !o && t && b()
  }, [o, e]), c({}, t)
}
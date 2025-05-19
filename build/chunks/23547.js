/** Chunk was on 20565 **/
n.d(t, {
  Mm: () => m,
  jj: () => f,
  wH: () => u
});
var r = n(255367),
  o = n(73800),
  a = n(442837),
  c = n(481060),
  s = n(751648),
  l = n(479766);

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}
let d = "balance-widget-menu-coachmark-modal",
  u = () => (0, c.nfh)(d),
  f = () => (0, c.Mr3)(d),
  b = {
    modalKey: d,
    onCloseCallback: s.j2,
    onCloseRequest: async () => {
      await (0, s.j2)()
    }
  };

function m(e) {
  let t = (0, a.cj)([l.Z], () => l.Z.earnedOrbsCoachmark),
    {
      shouldOpen: s
    } = t;
  return (0, o.useEffect)(() => {
    let t = u();
    if (s && !t) {
      var o;
      (o = i({}, e)).isCoachmarkEnabled && (0, c.ZDy)(async () => {
        let {
          BalanceWidgetEarnedOrbsCoachmarkModal: e
        } = await n.e("82081").then(n.bind(n, 720463));
        return t => (0, r.jsx)(e, i({}, o, t))
      }, b)
    } else !s && t && f()
  }, [s, e]), i({}, t)
}
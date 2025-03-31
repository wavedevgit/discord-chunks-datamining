/** Chunk was on 20565 **/
n.d(t, {
  Mm: () => b,
  jj: () => f,
  wH: () => d
});
var r = n(200651),
  a = n(192379),
  o = n(442837),
  c = n(481060),
  l = n(751648),
  i = n(479766);

function s(e) {
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
let u = "balance-widget-menu-coachmark-modal",
  d = () => (0, c.nfh)(u),
  f = () => (0, c.Mr3)(u),
  m = {
    modalKey: u,
    onCloseCallback: l.j2,
    onCloseRequest: async () => {
      await (0, l.j2)()
    }
  };

function b(e) {
  let t = (0, o.cj)([i.Z], () => i.Z.earnedOrbsCoachmark),
    {
      shouldOpen: l
    } = t;
  return (0, a.useEffect)(() => {
    var t;
    let a = d();
    l && !a ? !(t = s({}, e)).isCoachmarkEnabled || (0, c.ZDy)(async () => {
      let {
        BalanceWidgetEarnedOrbsCoachmarkModal: e
      } = await n.e("82081").then(n.bind(n, 720463));
      return n => (0, r.jsx)(e, s({}, t, n))
    }, m) : !l && a && f()
  }, [l, e]), s({}, t)
}
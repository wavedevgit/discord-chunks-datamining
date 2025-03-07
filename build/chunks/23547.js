/** Chunk was on 20565 **/
r.d(t, {
  Mm: () => b,
  jj: () => f,
  wH: () => d
});
var n = r(200651),
  a = r(192379),
  o = r(442837),
  c = r(481060),
  l = r(751648),
  i = r(479766);

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
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
      shouldOpen: l,
      earnedOrbsQuantity: u
    } = t;
  return (0, a.useEffect)(() => {
    let t = d();
    if (l && !t) {
      var a, o, i;
      !(i = (a = s({}, e), o = o = {
        earnedOrbsQuantity: u
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e))
      }), a)).isCoachmarkEnabled || (0, c.ZDy)(async () => {
        let {
          BalanceWidgetEarnedOrbsCoachmarkModal: e
        } = await r.e("82081").then(r.bind(r, 720463));
        return t => (0, n.jsx)(e, s({}, i, t))
      }, m)
    } else !l && t && f()
  }, [l, u, e]), s({}, t)
}
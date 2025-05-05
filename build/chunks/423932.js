/** Chunk was on 89650 **/
n.d(e, {
  Z: () => s
});
var i = n(255367);
n(73800);
var r = n(481060);

function s(t) {
  (0, r.ZDy)(async () => {
    let {
      default: t
    } = await n.e("76815").then(n.bind(n, 336977));
    return e => (0, i.jsx)(t, function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), i.forEach(function(e) {
          var i;
          i = n[e], e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = i
        })
      }
      return t
    }({}, e))
  }, {
    onCloseCallback: t,
    backdropStyle: r.fCB.BLUR
  })
}
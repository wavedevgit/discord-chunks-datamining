/** Chunk was on 1272 (d3552a4012cf86c5.js) **/
n.d(t, {
  v: () => l
});
var r = n(200651);
n(192379);
var i = n(481060);

function l(e) {
  (0, i.ZDy)(async () => {
    let {
      default: t
    } = await n.e("8102").then(n.bind(n, 674189));
    return n => (0, r.jsx)(t, function(e) {
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
    }({}, n, e))
  }, {
    modalKey: "Guild Settings Picker Modal"
  })
}
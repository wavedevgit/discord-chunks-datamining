/** Chunk was on 11814 (5d38d8f10d63a4b1.js) **/
n.d(t, {
  Z: () => a
});
var r = n(200651);
n(192379);
var i = n(481060);

function a(e, t) {
  (0, i.ZDy)(async () => {
    let {
      default: i
    } = await n.e("6310").then(n.bind(n, 706923));
    return n => (0, r.jsx)(i, function(e) {
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
    }({
      channelId: e,
      messageId: t
    }, n))
  })
}
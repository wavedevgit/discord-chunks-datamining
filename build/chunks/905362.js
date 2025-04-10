/** Chunk was on 95140 **/
n.d(t, {
  C: () => o
});
var r = n(200651);
n(192379);
var i = n(481060),
  l = n(693546);

function o(e, t) {
  (0, i.ZDy)(async () => {
    let {
      default: i
    } = await Promise.all([n.e("82158"), n.e("67071")]).then(n.bind(n, 717057));
    return n => {
      var o, c;
      return (0, r.jsx)(i, (o = function(e) {
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
      }({}, n), c = c = {
        onAccept: () => {
          null != t && l.Z.ackUserGuildJoinRequest(e, t), n.onClose()
        },
        guildId: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(c)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e))
      }), o))
    }
  })
}
/** Chunk was on 95140 **/
n.d(t, {
  C: () => o
});
var i = n(200651);
n(192379);
var l = n(481060),
  r = n(693546);

function o(e, t) {
  (0, l.ZDy)(async () => {
    let {
      default: l
    } = await Promise.all([n.e("82158"), n.e("67071")]).then(n.bind(n, 717057));
    return n => {
      var o, a;
      return (0, i.jsx)(l, (o = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = i
          })
        }
        return e
      }({}, n), a = a = {
        onAccept: () => {
          null != t && r.Z.ackUserGuildJoinRequest(e, t), n.onClose()
        },
        guildId: e
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e))
      }), o))
    }
  })
}
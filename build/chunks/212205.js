/** Chunk was on 56826 (5f4aed8419549c4b.js) **/
n.d(t, {
  Z: () => u
});
var r = n(200651);
n(192379);
var i = n(442837),
  l = n(481060),
  a = n(914010),
  o = n(362658),
  s = n(981631),
  c = n(388032);

function u(e) {
  let t = (0, i.e7)([a.Z], () => a.Z.getGuildId()),
    u = e.type === s.d4z.GUILD_CATEGORY,
    {
      isFavoritesPerk: d
    } = (0, o.z)("useChannelFavoriteSetNickname");
  return __OVERLAY__ || t !== s.I_8 ? null : (0, r.jsx)(l.sNh, {
    id: "set-channel-nickname",
    label: d && u ? c.NW.string(c.t.xXYKiI) : c.NW.string(c.t.dilOFx),
    action: function() {
      (0, l.ZDy)(async () => {
        let {
          default: t
        } = await n.e("46161").then(n.bind(n, 238716));
        return n => {
          var i, l;
          return (0, r.jsx)(t, (i = function(e) {
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
          }({}, n), l = l = {
            channelId: e.id,
            heading: d && u ? c.NW.string(c.t.xXYKiI) : c.NW.string(c.t.dilOFx),
            formTitle: d && u ? c.NW.string(c.t.OCAkGB) : c.NW.string(c.t["621LJC"]),
            allowReset: !(d && u)
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      })
    }
  })
}
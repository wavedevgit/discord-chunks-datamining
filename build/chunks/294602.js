/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  B: () => a
});
var r = n(399606),
  i = n(581883),
  o = n(247206);
let a = () => {
  let e = (0, r.cj)([i.Z], () => {
    var e, t;
    return null !== (t = null === (e = i.Z.settings.textAndImages) || void 0 === e ? void 0 : e.explicitContentSettings) && void 0 !== t ? t : (0, o.l4)()
  });
  return {
    explicitContentGuilds: (0, o.tG)({
      setting: null == e ? void 0 : e.explicitContentGuilds
    }),
    explicitContentNonFriendDm: (0, o.tG)({
      setting: null == e ? void 0 : e.explicitContentNonFriendDm,
      isDm: !0
    }),
    explicitContentFriendDm: (0, o.tG)({
      setting: null == e ? void 0 : e.explicitContentFriendDm,
      isDm: !0,
      isFriend: !0
    })
  }
}
/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => p
});
var r = n(570140),
  i = n(232567),
  o = n(220082),
  a = n(275759),
  s = n(365943),
  l = n(592125),
  c = n(271383),
  u = n(621853),
  d = n(120569);
let f = 6e4;
async function p(e, t) {
  var n, p, _, h;
  let {
    type: m,
    withMutualGuilds: g = !1,
    withMutualFriendsCount: E = !1,
    withMutualFriends: v = !1,
    friendToken: b,
    preloadUserBanner: y = !0,
    dispatchWait: O = !1,
    guildId: S,
    channelId: I,
    joinRequestId: T,
    abortSignal: N
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if ("" === e || u.Z.isFetchingProfile(e, S)) return;
  let A = u.Z.getUserProfile(e),
    C = Date.now() - (null !== (h = null == A ? void 0 : A.lastFetched) && void 0 !== h ? h : 0) >= f;
  if (((null == A ? void 0 : null === (n = A.fetchError) || void 0 === n ? void 0 : n.status) === 404 || (null == A ? void 0 : null === (p = A.fetchError) || void 0 === p ? void 0 : p.status) === 429) && !C) return;
  let R = u.Z.getGuildMemberProfile(e, S),
    P = u.Z.getMutualGuilds(e),
    D = u.Z.getMutualFriends(e),
    w = u.Z.getMutualFriendsCount(e);
  g = g || null != S;
  let L = null == D && v,
    x = null == w && E,
    M = null != S && null == R;
  if (!(null == P && g) && !L && !x && !M && !C) return;
  (0, s.z)(), null != t && (0, o.vM)(t);
  let j = {
      type: m,
      withMutualGuilds: g,
      withMutualFriends: v,
      withMutualFriendsCount: E,
      friendToken: b,
      guildId: S,
      joinRequestId: T,
      abortSignal: N,
      connectionsRoleId: null == S ? void 0 : null === (_ = (0, a.Ur)({
        guildMember: c.ZP.getMember(S, e),
        channel: l.Z.getChannel(I)
      })) || void 0 === _ ? void 0 : _.id
    },
    k = y ? d.Z : void 0;
  if (O) return r.Z.wait(() => (0, i.In)(e, j, k));
  await (0, i.In)(e, j, k)
}
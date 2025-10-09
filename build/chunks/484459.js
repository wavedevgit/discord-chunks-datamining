/** Chunk was on web.js **/
/** chunk id: 484459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk570140 = require("./570140.js"),
  Chunk232567 = require("./232567.js"),
  Chunk220082 = require("./220082.js"),
  Chunk335131 = require("./335131.js"),
  Chunk873626 = require("./873626.js"),
  Chunk275759 = require("./275759.js"),
  Chunk365943 = require("./365943.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk621853 = require("./621853.js"),
  Chunk120569 = require("./120569.js");
let p = 6e4;

function h(e, t) {
  var n, h, m, g;
  let {
    type: E,
    withMutualGuilds: b = false,
    withMutualFriendsCount: y = false,
    withMutualFriends: O = false,
    dispatchWait: v = false,
    waitForRefetch: I = true,
    guildId: T,
    channelId: S,
    joinRequestId: A,
    abortSignal: C
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  if ("" === e || f.Z.isFetchingProfile(e, T)) return Promise.resolve();
  let N = f.Z.getUserProfile(e),
    R = Date.now() - (null != (g = null == N ? true : N.fetchEndedAt) ? g : 0) >= p;
  if (((null == N || null == (n = N.fetchError) ? true : n.status) === 404 || (null == N || null == (h = N.fetchError) ? true : h.status) === 429) && !R) return Promise.resolve();
  let P = f.Z.getGuildMemberProfile(e, T),
    w = f.Z.getMutualGuilds(e),
    D = f.Z.getMutualFriends(e),
    L = f.Z.getMutualFriendsCount(e),
    x = null == D && O,
    M = null == L && y,
    k = null == w && b || x || M,
    j = null == T ? null == N : null == P,
    U = !j && (R || k);
  if (!j && !U) return Promise.resolve();
  let G = null != T ? null == P ? true : P.profileEffect : null == N ? true : N.profileEffect;
  null != G && ((0, s.c)("maybeFetchUserProfile") ? (0, o.lW)(G.skuId) : (0, c.t)()), null != t && (0, a.vM)(t);
  let B = {
    type: E,
    withMutualGuilds: b,
    withMutualFriends: O,
    withMutualFriendsCount: y,
    guildId: T,
    joinRequestId: A,
    abortSignal: C,
    connectionsRoleId: null == T || null == (m = (0, l.Ur)({
      guildMember: d.ZP.getMember(T, e),
      channel: u.Z.getChannel(S)
    })) ? true : m.id
  };
  if (v) return r.Z.wait(() => (0, i.In)(e, B, _.Z)), Promise.resolve();
  let Z = (0, i.In)(e, B, _.Z);
  return U && !I ? Promise.resolve() : Z
}
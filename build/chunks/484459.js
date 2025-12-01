/** Chunk was on web.js **/
/** chunk id: 484459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
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
let _ = 6e4;

function m(e, t) {
  var n, m, h, g;
  let {
    type: E,
    withMutualGuilds: b = false,
    withMutualFriendsCount: y = false,
    withMutualFriends: O = false,
    dispatchWait: v = false,
    waitForRefetch: S = true,
    guildId: I,
    channelId: T,
    joinRequestId: A,
    abortSignal: C
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  if ("" === e || f.Z.isFetchingProfile(e, I)) return Promise.resolve();
  let N = f.Z.getUserProfile(e),
    P = Date.now() - (null != (g = null == N ? true : N.fetchEndedAt) ? g : 0) >= _;
  if (((null == N || null == (n = N.fetchError) ? true : n.status) === 404 || (null == N || null == (m = N.fetchError) ? true : m.status) === 429) && !P) return Promise.resolve();
  let R = f.Z.getGuildMemberProfile(e, I),
    w = f.Z.getMutualGuilds(e),
    D = f.Z.getMutualFriends(e),
    x = f.Z.getMutualFriendsCount(e),
    L = null == D && O,
    j = null == x && y,
    M = null == w && b || L || j,
    k = null == I ? null == N : null == R,
    U = !k && (P || M);
  if (!k && !U) return Promise.resolve();
  let G = null != I ? null == R ? true : R.profileEffect : null == N ? true : N.profileEffect;
  null != G && ((0, s.c)("maybeFetchUserProfile") ? (0, o.lW)(G.skuId) : (0, c.t)()), null != t && (0, a.vM)(t);
  let Z = {
    type: E,
    withMutualGuilds: b,
    withMutualFriends: O,
    withMutualFriendsCount: y,
    guildId: I,
    joinRequestId: A,
    abortSignal: C,
    connectionsRoleId: null == I || null == (h = (0, l.Ur)({
      guildMember: d.ZP.getMember(I, e),
      channel: u.Z.getChannel(T)
    })) ? true : h.id
  };
  if (v) return r.Z.wait(() => (0, i.In)(e, Z, p.Z)), Promise.resolve();
  let B = (0, i.In)(e, Z, p.Z);
  return U && !S ? Promise.resolve() : B
}
/** Chunk was on web.js **/
/** chunk id: 484459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk570140 = require("./570140.js"),
  Chunk232567 = require("./232567.js"),
  Chunk220082 = require("./220082.js"),
  Chunk335131 = require("./335131.js"),
  Chunk275759 = require("./275759.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk621853 = require("./621853.js"),
  Chunk120569 = require("./120569.js");
let f = 6e4;

function p(e, t) {
  var n, p, _, m;
  let {
    type: h,
    withMutualGuilds: g = false,
    withMutualFriendsCount: E = false,
    withMutualFriends: b = false,
    dispatchWait: y = false,
    waitForRefetch: O = true,
    guildId: v,
    channelId: S,
    joinRequestId: I,
    abortSignal: T
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  if ("" === e || u.Z.isFetchingProfile(e, v)) return Promise.resolve();
  let C = u.Z.getUserProfile(e),
    A = Date.now() - (null != (m = null == C ? true : C.fetchEndedAt) ? m : 0) >= f;
  if (((null == C || null == (n = C.fetchError) ? true : n.status) === 404 || (null == C || null == (p = C.fetchError) ? true : p.status) === 429) && !A) return Promise.resolve();
  let N = u.Z.getGuildMemberProfile(e, v),
    P = u.Z.getMutualGuilds(e),
    R = u.Z.getMutualFriends(e),
    w = u.Z.getMutualFriendsCount(e),
    D = null == R && b,
    x = null == w && E,
    L = null == P && g || D || x,
    j = null == v ? null == C : null == N,
    M = !j && (A || L);
  if (!j && !M) return Promise.resolve();
  let k = null != v ? null == N ? true : N.profileEffect : null == C ? true : C.profileEffect;
  null != k && (0, o.lW)(k.skuId), null != t && (0, a.vM)(t);
  let U = {
    type: h,
    withMutualGuilds: g,
    withMutualFriends: b,
    withMutualFriendsCount: E,
    guildId: v,
    joinRequestId: I,
    abortSignal: T,
    connectionsRoleId: null == v || null == (_ = (0, s.Ur)({
      guildMember: c.ZP.getMember(v, e),
      channel: l.Z.getChannel(S)
    })) ? true : _.id
  };
  if (y) return r.Z.wait(() => (0, i.In)(e, U, d.Z)), Promise.resolve();
  let G = (0, i.In)(e, U, d.Z);
  return M && !O ? Promise.resolve() : G
}
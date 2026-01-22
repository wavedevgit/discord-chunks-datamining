/** Chunk was on web.js **/
/** chunk id: 576622, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk73153 = require("./73153.js"),
  Chunk803306 = require("./803306.js"),
  Chunk654107 = require("./654107.js"),
  Chunk979286 = require("./979286.js"),
  Chunk370480 = require("./370480.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk622543 = require("./622543.js"),
  Chunk663311 = require("./663311.js");
let f = 6e4;

function p(e, t) {
  var n, p, _, h;
  let {
    type: m,
    withMutualGuilds: g = false,
    withMutualFriendsCount: E = false,
    withMutualFriends: b = false,
    dispatchWait: y = false,
    waitForRefetch: O = true,
    guildId: A,
    channelId: v,
    joinRequestId: S,
    abortSignal: I
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  if ("" === e || u.A.isFetchingProfile(e, A)) return Promise.resolve();
  let T = u.A.getUserProfile(e),
    C = Date.now() - (null != (n = null == T ? true : T.fetchEndedAt) ? n : 0) >= f;
  if (((null == T || null == (p = T.fetchError) ? true : p.status) === 404 || (null == T || null == (_ = T.fetchError) ? true : _.status) === 429) && !C) return Promise.resolve();
  let N = u.A.getGuildMemberProfile(e, A),
    R = u.A.getMutualGuilds(e),
    w = u.A.getMutualFriends(e),
    P = u.A.getMutualFriendsCount(e),
    D = null == w && b,
    x = null == P && E,
    L = null == R && g || D || x,
    j = null == A ? null == T : null == N,
    M = !j && (C || L);
  if (!j && !M) return Promise.resolve();
  let k = null != A ? null == N ? true : N.profileEffect : null == T ? true : T.profileEffect;
  null != k && (0, s.RE)(k.skuId), null != t && (0, a.l0)(t);
  let U = {
    type: m,
    withMutualGuilds: g,
    withMutualFriends: b,
    withMutualFriendsCount: E,
    guildId: A,
    joinRequestId: S,
    abortSignal: I,
    connectionsRoleId: null == A || null == (h = (0, o._g)({
      guildMember: c.Ay.getMember(A, e),
      channel: l.A.getChannel(v)
    })) ? true : h.id
  };
  if (y) return r.h.wait(() => (0, i.eO)(e, U, d.A)), Promise.resolve();
  let G = (0, i.eO)(e, U, d.A);
  return M && !O ? Promise.resolve() : G
}
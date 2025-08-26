/** Chunk was on web.js **/
/** chunk id: 484459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk570140 = require("./570140.js"),
  Chunk232567 = require("./232567.js"),
  Chunk220082 = require("./220082.js"),
  Chunk275759 = require("./275759.js"),
  Chunk365943 = require("./365943.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk621853 = require("./621853.js"),
  Chunk120569 = require("./120569.js");
let f = 6e4;

function _(e, t) {
  var n, _, p, h;
  let {
    type: m,
    withMutualGuilds: g = false,
    withMutualFriendsCount: E = false,
    withMutualFriends: b = false,
    dispatchWait: y = false,
    waitForRefetch: O = true,
    guildId: v,
    channelId: I,
    joinRequestId: T,
    abortSignal: S
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  if ("" === e || u.Z.isFetchingProfile(e, v)) return Promise.resolve();
  let A = u.Z.getUserProfile(e),
    C = Date.now() - (null != (h = null == A ? true : A.fetchEndedAt) ? h : 0) >= f;
  if (((null == A || null == (n = A.fetchError) ? true : n.status) === 404 || (null == A || null == (_ = A.fetchError) ? true : _.status) === 429) && !C) return Promise.resolve();
  let N = u.Z.getGuildMemberProfile(e, v),
    R = u.Z.getMutualGuilds(e),
    P = u.Z.getMutualFriends(e),
    w = u.Z.getMutualFriendsCount(e),
    D = null == P && b,
    x = null == w && E,
    L = null == R && g || D || x,
    j = null == v ? null == A : null == N,
    M = !j && (C || L);
  if (!j && !M) return Promise.resolve();
  (0, s.t)(), null != t && (0, o.vM)(t);
  let k = {
    type: m,
    withMutualGuilds: g,
    withMutualFriends: b,
    withMutualFriendsCount: E,
    guildId: v,
    joinRequestId: T,
    abortSignal: S,
    connectionsRoleId: null == v || null == (p = (0, a.Ur)({
      guildMember: c.ZP.getMember(v, e),
      channel: l.Z.getChannel(I)
    })) ? true : p.id
  };
  if (y) return r.Z.wait(() => (0, i.In)(e, k, d.Z)), Promise.resolve();
  let U = (0, i.In)(e, k, d.Z);
  return M && !O ? Promise.resolve() : U
}
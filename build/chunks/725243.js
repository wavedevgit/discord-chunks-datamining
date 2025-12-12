/** Chunk was on web.js **/
/** chunk id: 725243, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk752048 = require("./752048.js"),
  Chunk837411 = require("./837411.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk69143 = require("./69143.js");

function f(e) {
  let {
    location: t
  } = e, {
    affineGiftingEnabled: n,
    affinityThreshold: i
  } = d.Z.useConfig({
    location: t
  }), f = (0, a.Wu)([c.Z], () => c.Z.getFriendIDs()), p = (0, a.Wu)([s.Z], () => s.Z.getUserAffinities().filter(e => {
    let {
      isFriend: t,
      communicationProbability: n,
      vcProbability: r,
      otherUserId: o
    } = e, a = !t && (n >= i || r >= i), s = (0, l.n)(o);
    return a && s
  }).map(e => {
    let {
      otherUserId: t
    } = e;
    return t
  })), _ = r.useMemo(() => o().uniq([...f, ...n ? p : []]), [f, n, p]);
  return (0, a.Wu)([u.default], () => _.reduce((e, t) => {
    let n = u.default.getUser(t);
    return null == n || n.bot || e.push(n), e
  }, []), [_])
}
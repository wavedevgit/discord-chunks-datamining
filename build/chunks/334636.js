/** Chunk was on web.js **/
/** chunk id: 334636, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk752048 = require("./752048.js"),
  Chunk837411 = require("./837411.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk69143 = require("./69143.js");

function f(e) {
  let {
    location: t = "Collectibles Gift Recipient Picker",
    additionalRecipientIds: n
  } = e, {
    affineGiftingEnabled: i,
    affinityThreshold: f
  } = d.Z.useConfig({
    location: t
  }), _ = (0, o.Wu)([c.Z], () => c.Z.getFriendIDs()), p = (0, o.Wu)([s.Z], () => s.Z.getUserAffinities().filter(e => {
    let {
      isFriend: t,
      communicationProbability: n,
      vcProbability: r,
      otherUserId: i
    } = e, a = !t && (n >= f || r >= f), o = (0, l.n)(i);
    return a && o
  }).map(e => {
    let {
      otherUserId: t
    } = e;
    return t
  })), h = r.useMemo(() => a().uniq([...null != n ? n : [], ..._, ...i ? p : []]), [n, _, i, p]);
  return (0, o.Wu)([u.default], () => h.reduce((e, t) => {
    let n = u.default.getUser(t);
    return null == n || n.bot || e.push(n), e
  }, []), [h])
}
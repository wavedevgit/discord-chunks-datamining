/** Chunk was on 33397 **/
/** chunk id: 210975, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  m$: () => f,
  wV: () => c,
  zU: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk569545 = require("./569545.js"),
  Chunk314897 = require("./314897.js"),
  Chunk19780 = require("./19780.js"),
  Chunk98369 = require("./98369.js"),
  Chunk277642 = require("./277642.js"),
  Chunk441894 = require("./441894.js");

function c(e) {
  let {
    userId: t,
    channelId: r
  } = e, l = (0, o.J)({
    channelId: r
  });
  return (0, n.e7)([a.Z, i.default, u.Z], () => null != t && l && u.Z.isUserConnected(t) && i.default.getId() !== t && a.Z.isUserVerified(t), [l, t])
}

function d(e) {
  let {
    streamKey: t,
    channelId: r
  } = e, u = (0, o.J)({
    channelId: r
  }), c = (0, s.t)(t);
  return (0, n.e7)([a.Z, i.default], () => {
    if (!u || c || null == t) returnfalse;
    let e = i.default.getId(),
      {
        ownerId: r
      } = (0, l.my)(t);
    return r !== e && a.Z.isStreamVerified(t)
  }, [c, u, t])
}

function f(e) {
  let {
    channelId: t
  } = e, r = (0, o.J)({
    channelId: t
  }), l = (0, s.r)();
  return (0, n.e7)([a.Z], () => !!r && !l && a.Z.isCallVerified(), [l, r])
}
/** Chunk was on 33397 **/
/** chunk id: 210975, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  m$: () => d,
  wV: () => o,
  zU: () => f
});
var Chunk442837 = require("./442837.js"),
  Chunk569545 = require("./569545.js"),
  Chunk314897 = require("./314897.js"),
  Chunk19780 = require("./19780.js"),
  Chunk98369 = require("./98369.js"),
  Chunk277642 = require("./277642.js"),
  Chunk441894 = require("./441894.js");

function o(e) {
  let {
    userId: t,
    channelId: r
  } = e, l = (0, c.J)({
    channelId: r
  });
  return (0, n.e7)([a.Z, u.default, i.Z], () => null != t && l && i.Z.isUserConnected(t) && u.default.getId() !== t && a.Z.isUserVerified(t), [l, t])
}

function f(e) {
  let {
    streamKey: t,
    channelId: r
  } = e, i = (0, c.J)({
    channelId: r
  }), o = (0, s.t)(t);
  return (0, n.e7)([a.Z, u.default], () => {
    if (!i || o || null == t) returnfalse;
    let e = u.default.getId(),
      {
        ownerId: r
      } = (0, l.my)(t);
    return r !== e && a.Z.isStreamVerified(t)
  }, [o, i, t])
}

function d(e) {
  let {
    channelId: t
  } = e, r = (0, c.J)({
    channelId: t
  }), l = (0, s.r)();
  return (0, n.e7)([a.Z], () => !!r && !l && a.Z.isCallVerified(), [l, r])
}
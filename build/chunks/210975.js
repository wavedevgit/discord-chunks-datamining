/** Chunk was on 84983 **/
/** chunk id: 210975, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  m$: () => p,
  wV: () => d,
  zU: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk569545 = require("./569545.js"),
  Chunk314897 = require("./314897.js"),
  Chunk19780 = require("./19780.js"),
  Chunk98369 = require("./98369.js"),
  Chunk277642 = require("./277642.js"),
  Chunk441894 = require("./441894.js");

function d(e) {
  let {
    userId: t,
    channelId: l
  } = e, i = (0, c.J)({
    channelId: l
  });
  return (0, n.e7)([r.Z, a.default, s.Z], () => null != t && i && s.Z.isUserConnected(t) && a.default.getId() !== t && r.Z.isUserVerified(t), [i, t])
}

function u(e) {
  let {
    streamKey: t,
    channelId: l
  } = e, s = (0, c.J)({
    channelId: l
  }), d = (0, o.t)(t);
  return (0, n.e7)([r.Z, a.default], () => {
    if (!s || d || null == t) returnfalse;
    let e = a.default.getId(),
      {
        ownerId: l
      } = (0, i.my)(t);
    return l !== e && r.Z.isStreamVerified(t)
  }, [d, s, t])
}

function p(e) {
  let {
    channelId: t
  } = e, l = (0, c.J)({
    channelId: t
  }), i = (0, o.r)();
  return (0, n.e7)([r.Z], () => !!l && !i && r.Z.isCallVerified(), [i, l])
}
/** Chunk was on 69634 **/
/** chunk id: 210975, original params: e,t,n (module,exports,require) **/
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
    channelId: n
  } = e, l = (0, s.J)({
    channelId: n
  });
  return (0, r.e7)([o.Z, i.default, a.Z], () => null != t && l && a.Z.isUserConnected(t) && i.default.getId() !== t && o.Z.isUserVerified(t), [l, t])
}

function d(e) {
  let {
    streamKey: t,
    channelId: n
  } = e, a = (0, s.J)({
    channelId: n
  }), c = (0, u.t)(t);
  return (0, r.e7)([o.Z, i.default], () => {
    if (!a || c || null == t) returnfalse;
    let e = i.default.getId(),
      {
        ownerId: n
      } = (0, l.my)(t);
    return n !== e && o.Z.isStreamVerified(t)
  }, [c, a, t])
}

function f(e) {
  let {
    channelId: t
  } = e, n = (0, s.J)({
    channelId: t
  }), l = (0, u.r)();
  return (0, r.e7)([o.Z], () => !!n && !l && o.Z.isCallVerified(), [l, n])
}
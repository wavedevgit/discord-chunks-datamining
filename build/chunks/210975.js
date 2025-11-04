/** Chunk was on 56710 **/
/** chunk id: 210975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m$: () => p,
  wV: () => u,
  zU: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk569545 = require("./569545.js"),
  Chunk314897 = require("./314897.js"),
  Chunk19780 = require("./19780.js"),
  Chunk98369 = require("./98369.js"),
  Chunk277642 = require("./277642.js"),
  Chunk441894 = require("./441894.js");

function u(e) {
  let {
    userId: t,
    channelId: n
  } = e, i = (0, c.J)({
    channelId: n
  });
  return (0, r.e7)([a.Z, l.default, o.Z], () => null != t && i && o.Z.isUserConnected(t) && l.default.getId() !== t && a.Z.isUserVerified(t), [i, t])
}

function d(e) {
  let {
    streamKey: t,
    channelId: n
  } = e, o = (0, c.J)({
    channelId: n
  }), u = (0, s.t)(t);
  return (0, r.e7)([a.Z, l.default], () => {
    if (!o || u || null == t) returnfalse;
    let e = l.default.getId(),
      {
        ownerId: n
      } = (0, i.my)(t);
    return n !== e && a.Z.isStreamVerified(t)
  }, [u, o, t])
}

function p(e) {
  let {
    channelId: t
  } = e, n = (0, c.J)({
    channelId: t
  }), i = (0, s.r)();
  return (0, r.e7)([a.Z], () => !!n && !i && a.Z.isCallVerified(), [i, n])
}
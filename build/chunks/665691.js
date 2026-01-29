/** Chunk was on 16674 **/
/** chunk id: 665691, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  DY: () => f,
  UF: () => o,
  bG: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk652896 = require("./652896.js"),
  Chunk961350 = require("./961350.js"),
  Chunk383501 = require("./383501.js"),
  Chunk707890 = require("./707890.js"),
  Chunk83942 = require("./83942.js"),
  Chunk259374 = require("./259374.js");

function o(e) {
  let {
    userId: t,
    channelId: r
  } = e, l = (0, c.k)({
    channelId: r
  });
  return (0, n.bG)([s.A, u.default, i.A], () => null != t && l && i.A.isUserConnected(t) && u.default.getId() !== t && s.A.isUserVerified(t), [l, t])
}

function f(e) {
  let {
    streamKey: t,
    channelId: r
  } = e, i = (0, c.k)({
    channelId: r
  }), o = (0, a.w)(t);
  return (0, n.bG)([s.A, u.default], () => {
    if (!i || o || null == t) returnfalse;
    let e = u.default.getId(),
      {
        ownerId: r
      } = (0, l.Iy)(t);
    return r !== e && s.A.isStreamVerified(t)
  }, [o, i, t])
}

function d(e) {
  let {
    channelId: t
  } = e, r = (0, c.k)({
    channelId: t
  }), l = (0, a.c)();
  return (0, n.bG)([s.A], () => !!r && !l && s.A.isCallVerified(), [l, r])
}
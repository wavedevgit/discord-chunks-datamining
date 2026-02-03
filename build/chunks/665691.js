/** Chunk was on 44669 **/
/** chunk id: 665691, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  DY: () => d,
  UF: () => u,
  bG: () => p
});
var Chunk311907 = require("./311907.js"),
  Chunk652896 = require("./652896.js"),
  Chunk961350 = require("./961350.js"),
  Chunk383501 = require("./383501.js"),
  Chunk707890 = require("./707890.js"),
  Chunk83942 = require("./83942.js"),
  Chunk259374 = require("./259374.js");

function u(e) {
  let {
    userId: t,
    channelId: n
  } = e, l = (0, c.k)({
    channelId: n
  });
  return (0, r.bG)([a.A, i.default, s.A], () => null != t && l && s.A.isUserConnected(t) && i.default.getId() !== t && a.A.isUserVerified(t), [l, t])
}

function d(e) {
  let {
    streamKey: t,
    channelId: n
  } = e, s = (0, c.k)({
    channelId: n
  }), u = (0, o.w)(t);
  return (0, r.bG)([a.A, i.default], () => {
    if (!s || u || null == t) returnfalse;
    let e = i.default.getId(),
      {
        ownerId: n
      } = (0, l.Iy)(t);
    return n !== e && a.A.isStreamVerified(t)
  }, [u, s, t])
}

function p(e) {
  let {
    channelId: t
  } = e, n = (0, c.k)({
    channelId: t
  }), l = (0, o.c)();
  return (0, r.bG)([a.A], () => !!n && !l && a.A.isCallVerified(), [l, n])
}
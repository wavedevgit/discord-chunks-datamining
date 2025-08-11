/** Chunk was on web.js **/
/** chunk id: 210975, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m$: () => f,
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
  return (0, r.e7)([s.Z, o.default, a.Z], () => null != t && i && a.Z.isUserConnected(t) && o.default.getId() !== t && s.Z.isUserVerified(t), [i, t])
}

function d(e) {
  let {
    streamKey: t,
    channelId: n
  } = e, a = (0, c.J)({
    channelId: n
  }), u = (0, l.t)(t);
  return (0, r.e7)([s.Z, o.default], () => {
    if (!a || u || null == t) returnfalse;
    let e = o.default.getId(),
      {
        ownerId: n
      } = (0, i.my)(t);
    return n !== e && s.Z.isStreamVerified(t)
  }, [u, a, t])
}

function f(e) {
  let {
    channelId: t
  } = e, n = (0, c.J)({
    channelId: t
  }), i = (0, l.r)();
  return (0, r.e7)([s.Z], () => !!n && !i && s.Z.isCallVerified(), [i, n])
}
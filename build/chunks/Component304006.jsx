/** Chunk was on 66692 **/
/** chunk id: 304006, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk652896 = require("./652896.js"),
  Chunk144485 = require("./144485.jsx"),
  Chunk83942 = require("./83942.js"),
  Chunk259374 = require("./259374.js"),
  Chunk616356 = require("./616356.js"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
  let {
    stream: t,
    channelId: n
  } = e, b = (0, u.k)({
    channelId: n
  }), f = (0, i.bG)([d.A], () => null != d.A.getActiveStreamForApplicationStream(t)), g = (0, o._z)(t), A = (0, s.w)(g), h = l.useCallback(() => {
    c.A.openSecureFramesStreamVerification(g, n)
  }, [n, g]);
  return b && f && !A ? (0, r.jsx)(a.Drp, {
    id: "secure-frames-stream-verification",
    label: p.intl.string(p.t.tjbJbf),
    action: h
  }) : null
}
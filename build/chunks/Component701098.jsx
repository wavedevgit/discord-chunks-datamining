/** Chunk was on 22183 **/
/** chunk id: 701098, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk569545 = require("./569545.js"),
  Chunk352954 = require("./352954.jsx"),
  Chunk277642 = require("./277642.js"),
  Chunk441894 = require("./441894.js"),
  Chunk199902 = require("./199902.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    stream: t,
    channelId: n
  } = e, g = (0, u.J)({
    channelId: n
  }), b = (0, i.e7)([d.Z], () => null != d.Z.getActiveStreamForApplicationStream(t)), p = (0, a.V9)(t), h = (0, s.t)(p), j = l.useCallback(() => {
    c.Z.openSecureFramesStreamVerification(p, n)
  }, [n, p]);
  return g && b && !h ? (0, r.jsx)(o.sNh, {
    id: "secure-frames-stream-verification",
    label: f.intl.string(f.t.tjbJbW),
    action: j
  }) : null
}
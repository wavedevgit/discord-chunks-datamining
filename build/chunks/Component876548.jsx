/** Chunk was on 94709 **/
/** chunk id: 876548, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk829750 = require("./829750.js"),
  Chunk280102 = require("./280102.jsx");

function o(e) {
  let {
    channel: t,
    video: n,
    userCount: o
  } = e, {
    limit: a
  } = (0, i.Z)(t), s = false, c = false;
  return t.userLimit > 0 && (s = t.userLimit), n && a > 0 && (c = s < 0 || a < s, s = s > 0 ? Math.min(s, a) : a), (0, r.jsx)(l.Z, {
    users: o,
    total: s,
    videoLimit: c
  })
}
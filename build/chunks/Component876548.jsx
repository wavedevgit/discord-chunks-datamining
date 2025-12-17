/** Chunk was on 67000 **/
/** chunk id: 876548, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk829750 = require("./829750.js"),
  Chunk280102 = require("./280102.jsx");

function a(e) {
  let {
    channel: t,
    video: n,
    userCount: a
  } = e, {
    limit: o
  } = (0, i.Z)(t), s = false, c = false;
  return t.userLimit > 0 && (s = t.userLimit), n && o > 0 && (c = s < 0 || o < s, s = s > 0 ? Math.min(s, o) : o), (0, r.jsx)(l.Z, {
    users: a,
    total: s,
    videoLimit: c
  })
}